// Servicio para integración con Firestore
// Este archivo se puede conectar con la configuración de Firebase del proyecto principal

export interface LeadData {
  nombre: string;
  email: string;
  colegio: string;
  rol: string;
  telefono?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  source: string;
  createdAt: string;
}

export class FirestoreService {
  private static instance: FirestoreService;
  
  static getInstance(): FirestoreService {
    if (!FirestoreService.instance) {
      FirestoreService.instance = new FirestoreService();
    }
    return FirestoreService.instance;
  }

  async saveLead(leadData: LeadData): Promise<boolean> {
    try {
      // Aquí se integraría con la configuración de Firebase del proyecto principal
      // Por ahora simulamos el guardado
      console.log('Saving lead to Firestore:', leadData);
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // En producción, aquí iría:
      // const docRef = await addDoc(collection(db, "marketing_leads"), leadData);
      // return docRef.id ? true : false;
      
      return true;
    } catch (error) {
      console.error('Error saving lead:', error);
      return false;
    }
  }

  async getLeads(): Promise<LeadData[]> {
    try {
      // Simular obtención de leads
      console.log('Fetching leads from Firestore');
      
      // En producción, aquí iría:
      // const querySnapshot = await getDocs(collection(db, "marketing_leads"));
      // return querySnapshot.docs.map(doc => doc.data() as LeadData);
      
      return [];
    } catch (error) {
      console.error('Error fetching leads:', error);
      return [];
    }
  }
}

export const firestoreService = FirestoreService.getInstance();
