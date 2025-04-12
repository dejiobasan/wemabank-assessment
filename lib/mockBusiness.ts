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
}> = [
  {
    id: 1,
    email: "info@freshfarmfoods.com",
    password: "farm1234",
    businessName: "Fresh Farm Foods",
    businessPhone: "08012345678",
    businessCategory: "Agriculture",
    accountNumber: 1234567890,
    houseNumber: "12A",
    street: "Green Valley Road",
    city: "Ibadan",
    state: "Oyo",
    contactName: "Ada Nwosu",
    contactPhone: "08098765432",
    contactEmail: "ada@freshfarmfoods.com",
  },
  {
    id: 2,
    email: "contact@techflow.com",
    password: "tech2024",
    businessName: "TechFlow Ltd.",
    businessPhone: "08011223344",
    businessCategory: "IT Services",
    accountNumber: 9876543210,
    houseNumber: "22B",
    street: "Silicon Avenue",
    city: "Lagos",
    state: "Lagos",
    contactName: "Kunle Adebayo",
    contactPhone: "07033221144",
    contactEmail: "kunle@techflow.com",
  },
  {
    id: 3,
    email: "orders@glamzone.ng",
    password: "glamgirlz",
    businessName: "GlamZone",
    businessPhone: "08133445566",
    businessCategory: "Beauty & Cosmetics",
    accountNumber: 8765432109,
    houseNumber: "9C",
    street: "Fashion Street",
    city: "Abuja",
    state: "FCT",
    contactName: "Halima Bello",
    contactPhone: "08122113344",
    contactEmail: "halima@glamzone.ng",
  },
  {
    id: 4,
    email: "info@buildright.com",
    password: "buildit",
    businessName: "BuildRight Construction",
    businessPhone: "09077665544",
    businessCategory: "Construction",
    accountNumber: 1029384756,
    houseNumber: "17",
    street: "Cement Way",
    city: "Benin",
    state: "Edo",
    contactName: "Emeka Uche",
    contactPhone: "07044556677",
    contactEmail: "emeka@buildright.com",
  },
  {
    id: 5,
    email: "sales@kitchencorner.ng",
    password: "cooklove",
    businessName: "Kitchen Corner",
    businessPhone: "07099887766",
    businessCategory: "Retail",
    accountNumber: 5544332211,
    houseNumber: "8",
    street: "Market Lane",
    city: "Kano",
    state: "Kano",
    contactName: "Musa Ibrahim",
    contactPhone: "08066778899",
    contactEmail: "musa@kitchencorner.ng",
  },
  {
    id: 6,
    email: "hello@cleanrsolutions.com",
    password: "cleanmeup",
    businessName: "CleanR Solutions",
    businessPhone: "08055553333",
    businessCategory: "Cleaning Services",
    accountNumber: 7788990011,
    houseNumber: "5B",
    street: "Palm Close",
    city: "Port Harcourt",
    state: "Rivers",
    contactName: "Chinyere Okonkwo",
    contactPhone: "08133445599",
    contactEmail: "chinyere@cleanrsolutions.com",
  },
  {
    id: 7,
    email: "info@medlinkcare.com",
    password: "medsecure",
    businessName: "MedLink Care",
    businessPhone: "08177889900",
    businessCategory: "Healthcare",
    accountNumber: 6655443322,
    houseNumber: "11D",
    street: "Wellness Avenue",
    city: "Enugu",
    state: "Enugu",
    contactName: "Dr. Ifeanyi Obi",
    contactPhone: "08023334455",
    contactEmail: "ifeanyi@medlinkcare.com",
  },
  {
    id: 8,
    email: "admin@swiftcourier.com",
    password: "fasttrack",
    businessName: "Swift Courier",
    businessPhone: "09011224488",
    businessCategory: "Logistics",
    accountNumber: 3344556677,
    houseNumber: "3",
    street: "Express Way",
    city: "Abeokuta",
    state: "Ogun",
    contactName: "Tolu Adesanya",
    contactPhone: "08099887744",
    contactEmail: "tolu@swiftcourier.com",
  },
  {
    id: 9,
    email: "support@eduwave.org",
    password: "learn2day",
    businessName: "EduWave Initiative",
    businessPhone: "07044557799",
    businessCategory: "Education",
    accountNumber: 8899001122,
    houseNumber: "42",
    street: "Knowledge Drive",
    city: "Uyo",
    state: "Akwa Ibom",
    contactName: "Nsikak Bassey",
    contactPhone: "08177665533",
    contactEmail: "nsikak@eduwave.org",
  },
  {
    id: 10,
    email: "info@greentouch.com",
    password: "greenlife",
    businessName: "GreenTouch Interiors",
    businessPhone: "08111223344",
    businessCategory: "Interior Design",
    accountNumber: 9988776655,
    houseNumber: "6",
    street: "Bamboo Grove",
    city: "Jos",
    state: "Plateau",
    contactName: "Grace Anjorin",
    contactPhone: "08055667788",
    contactEmail: "grace@greentouch.com",
  },
  {
    id: 11,
    email: "connect@eventzoneng.com",
    password: "partytime",
    businessName: "EventZone NG",
    businessPhone: "09077668899",
    businessCategory: "Event Planning",
    accountNumber: 1122334455,
    houseNumber: "14A",
    street: "Celebration Street",
    city: "Osogbo",
    state: "Osun",
    contactName: "Funmi Adegoke",
    contactPhone: "08123456789",
    contactEmail: "funmi@eventzoneng.com",
  },
];
