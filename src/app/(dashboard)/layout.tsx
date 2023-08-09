import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { SIDEBAR_WIDTH } from "@/constants"

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const apiLimitCount = await getApiLimitCount()

  return (
    <div className="w-full h-full relative">
      <div className={`
        hidden
        h-full
        w-${SIDEBAR_WIDTH}
        md:flex
        md:w-${SIDEBAR_WIDTH}
        md:flex-col
        md:fixed
        md:inset-y-0
        z-[80]
      `}>
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className={`
        md:pl-${SIDEBAR_WIDTH}
      `}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}
