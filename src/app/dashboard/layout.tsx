import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../lib/authOptions";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    redirect("/login");
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
