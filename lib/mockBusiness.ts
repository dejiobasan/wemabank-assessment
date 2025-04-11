export interface Business {
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
  status: string;
}

export const mockBusiness: Array<{
    id: number;
    email: string;
    password: string;
    businessName: string;
    status: string;
}> = [];
