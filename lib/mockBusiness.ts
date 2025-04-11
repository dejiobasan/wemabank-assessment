export interface Business {
  BusinessName: string;
  BusinessEmail: string;
  BusinessPhone: string;
  BusinessCategory: string;
  accountNumber: number;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  password: string;
  status: string;
}

export const mockBusiness: Array<{
  id: number;
  email: string;
  password: string;
  businessName: string;
  businessPhone: string;
  businessCategory: string;
  accountNumber: number;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  status: string;
}> = [];
