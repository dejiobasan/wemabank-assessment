import { NextResponse } from "next/server";
import { Business } from "../../../../lib/mockBusiness";
import { mockBusiness } from "../../../../lib/mockBusiness";

export async function POST(req: Request) {
  const data: Business = await req.json();

  const userExists = mockBusiness.find((u) => u.email === data.BusinessEmail);
  if (userExists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  mockBusiness.push({
    id: mockBusiness.length + 1,
    email: data.BusinessEmail,
    password: data.password,
    businessName: data.BusinessName,
    businessPhone: data.BusinessPhone,
    businessCategory: data.BusinessCategory,
    accountNumber: data.accountNumber,
    houseNumber: data.houseNumber,
    street: data.street,
    city: data.city,
    state: data.state,
    contactName: data.contactName,
    contactPhone: data.contactPhone,
    contactEmail: data.contactEmail,
  });

  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 200 }
  );
}
