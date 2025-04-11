export interface Business {
  id: string;
  BusinessName: string;
  BusinessEmail: string;
  BusinessPhone: string;
  BusinessCategory: string;
  accountNumber: number;
  address: {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
  };
  contact: {
    name: string;
    phone: string;
    email: string;
  };
  password: string;
  status: { default: "pending"; deleted: boolean; verified: boolean };
}

export const mockBusiness: Business[] = [
    
];
