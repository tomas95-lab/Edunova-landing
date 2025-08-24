export interface LeadFormPayload {
  nombre: string;
  email: string;
  colegio: string;
  rol: string;
  telefono?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

export async function sendLeadToGoogleSheet(payload: LeadFormPayload): Promise<boolean> {
  const endpoint: string | undefined = import.meta.env.VITE_GSHEET_WEBAPP_URL as string | undefined;
  if (!endpoint) {
    return false;
  }

  // Si es un endpoint de Apps Script, usar directamente el envío por formulario oculto
  if (/script\.google(usercontent)?\.com|script\.google\.com/.test(endpoint)) {
    try {
      return await submitViaHiddenForm(endpoint, payload);
    } catch (error) {
      console.error('Error sending lead to Google Sheets (iframe strategy):', error);
      return false;
    }
  }

  // Intentar enviar como JSON; si el endpoint espera form-encoded, haremos fallback a FormData
  try {
    const jsonResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (jsonResponse.ok) return true;
  } catch (error) {
    // Continuar al fallback
    console.warn('JSON post to Google Sheets failed, trying FormData');
  }

  try {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (typeof value === 'string') formData.append(key, value);
    });
    const formResponse = await fetch(endpoint, {
      method: 'POST',
      body: formData
    });
    return formResponse.ok;
  } catch (error) {
    console.warn('FormData post to Google Sheets failed, trying hidden form submit to bypass CORS');
  }

  // Último recurso: enviar mediante un formulario oculto apuntando a un iframe (bypass CORS como en tu ejemplo)
  try {
    return await submitViaHiddenForm(endpoint, payload);
  } catch (error) {
    console.error('Error sending lead to Google Sheets:', error);
    return false;
  }
}

function submitViaHiddenForm(endpoint: string, payload: LeadFormPayload): Promise<boolean> {
  return new Promise((resolve) => {
    const iframeName = `hidden_iframe_${Date.now()}`;

    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.action = endpoint;
    form.method = 'POST';
    form.target = iframeName;
    form.style.display = 'none';

    const entries: Array<[string, string]> = [];
    // Original keys
    Object.entries(payload).forEach(([key, value]) => {
      entries.push([key, String(value ?? '')]);
    });
    // Aliases to maximize compatibility with existing Apps Script handlers
    const aliases: Record<string, string[]> = {
      nombre: ['name'],
      mensaje: ['message'],
      colegio: ['school'],
      rol: ['role'],
      telefono: ['phone'],
      tamaño: ['tamano', 'size'],
      utm_source: ['utm_source'],
      utm_medium: ['utm_medium'],
      utm_campaign: ['utm_campaign'],
      utm_content: ['utm_content'],
      createdAt: ['createdAt']
    };
    Object.entries(payload).forEach(([key, value]) => {
      const aliasList = aliases[key as keyof typeof aliases] || [];
      aliasList.forEach((alias) => entries.push([alias, String(value ?? '')]));
    });

    entries.forEach(([name, val]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = val;
      form.appendChild(input);
    });

    document.body.appendChild(form);

    const cleanup = () => {
      try { document.body.removeChild(form); } catch {}
      try { document.body.removeChild(iframe); } catch {}
    };

    // Resolver cuando el iframe carga (Apps Script responde con una redirección/HTML)
    iframe.addEventListener('load', () => {
      cleanup();
      resolve(true);
    });

    // Timeout de seguridad para resolver aunque el evento 'load' no dispare
    setTimeout(() => {
      cleanup();
      resolve(true);
    }, 4000);

    form.submit();
  });
}


