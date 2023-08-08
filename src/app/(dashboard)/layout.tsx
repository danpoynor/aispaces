import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full relative">
      <div className="hidden h-full w-64 md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-[80]">
        <Sidebar />
      </div>
      <main className="md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
