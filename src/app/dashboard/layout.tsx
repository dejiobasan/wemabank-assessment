import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardLayout() {
  const session = await getServerSession(authOptions);
  console.log("session:", session);
  if (!session || !session.user?.email) {
    redirect("/login");
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
    </div>
  );
}
