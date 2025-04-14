interface Verifier {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  partner: string;
  location: string;
  status: "Active" | "Awaiting approval" | "Deactivated";
}

export const initialVerifiers: Verifier[] = [
  {
    id: 1,
    firstName: "Temitope",
    lastName: "Adejumoke",
    phoneNumber: "+2348000000001",
    partner: "The Place",
    location: "Festac",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Ibrahim",
    lastName: "Adamu",
    phoneNumber: "+2348000000002",
    partner: "Domino's",
    location: "Ikeja",
    status: "Awaiting approval",
  },
  {
    id: 3,
    firstName: "Chioma",
    lastName: "Okafor",
    phoneNumber: "+2348000000003",
    partner: "KFC",
    location: "Lekki",
    status: "Active",
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Iroanya",
    phoneNumber: "+2348000000004",
    partner: "Chicken Republic",
    location: "Surulere",
    status: "Deactivated",
  },
  {
    id: 5,
    firstName: "Aisha",
    lastName: "Bello",
    phoneNumber: "+2348000000005",
    partner: "The Place",
    location: "Festac",
    status: "Active",
  },
  {
    id: 6,
    firstName: "Femi",
    lastName: "Ajayi",
    phoneNumber: "+2348000000006",
    partner: "Domino's",
    location: "Yaba",
    status: "Deactivated",
  },
  {
    id: 7,
    firstName: "Ngozi",
    lastName: "Umeh",
    phoneNumber: "+2348000000007",
    partner: "KFC",
    location: "Victoria Island",
    status: "Awaiting approval",
  },
  {
    id: 8,
    firstName: "Uche",
    lastName: "Eze",
    phoneNumber: "+2348000000008",
    partner: "Chicken Republic",
    location: "Ikoyi",
    status: "Active",
  },
  {
    id: 9,
    firstName: "Samuel",
    lastName: "Olaniyan",
    phoneNumber: "+2348000000009",
    partner: "Domino's",
    location: "Mushin",
    status: "Deactivated",
  },
  {
    id: 10,
    firstName: "Blessing",
    lastName: "Ishaya",
    phoneNumber: "+2348000000010",
    partner: "The Place",
    location: "Ojota",
    status: "Awaiting approval",
  },
  {
    id: 11,
    firstName: "Tosin",
    lastName: "Kolade",
    phoneNumber: "+2348000000011",
    partner: "KFC",
    location: "Ajah",
    status: "Active",
  },
  {
    id: 12,
    firstName: "Zainab",
    lastName: "Danladi",
    phoneNumber: "+2348000000012",
    partner: "Chicken Republic",
    location: "Maryland",
    status: "Active",
  },
];
