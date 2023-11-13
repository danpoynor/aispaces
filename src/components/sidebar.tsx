"use client"

import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { usePathname } from "next/navigation"
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon
} from "lucide-react"

import { cn } from "@/lib/utils"
import { FreeCounter } from "@/components/free-counter"
import { use } from "react"

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
})

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  }
]

interface SidebarProps {
  apiLimitCount: number
}

export default function Sidebar({ apiLimitCount = 0 }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="relative overflow-hidden space-y-4 py-4 flex flex-col h-full bg-[#051937] text-white">
      <div className="absolute -left-40 -top-64 transform-gpu blur-3xl rotate-[17deg]" aria-hidden="true">
        <div className="aspect-[1097/845] w-[28.5625rem] bg-gradient-to-r from-[#ff4694] to-[#363cf8] opacity-[0.3]"></div>
      </div>
      <div className="absolute -right-96 top-[18rem] transform-gpu blur-3xl rotate-45" aria-hidden="true">
        <div className="aspect-[1097/845] w-[28.5625rem] bg-gradient-to-r from-[#004d7a] to-[#776fff] opacity-[0.6]"></div>
      </div>
      <div className="absolute -left-72 top-[42rem] transform-gpu blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[28.5625rem] bg-gradient-to-r from-[#00297a] to-[#ff1979] opacity-[0.25]"></div>
      </div>
      <div className="relative px-3 py-6 flex-1">
        <Link href="/dashboard" className="flex items-center justify-start w-full pl-4 mb-10">
          <div className="w-8 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 240" style={{ marginTop: "-0.25rem" }}>
              <path fill="#fff" d="M173.2 2c-23.6 0-44 13.1-54.6 32.4h26.2c26-24.9 69.6-6.4 69.7 29.8-1.3 48.5-68 56.8-81.2 10.2h-21.4c6.1 41.7 54.9 65.2 91.2 44.5C258.7 88.7 237.6 2.1 173.2 2zm-33.7 208-1.2-2h-23.1c.5 1 1.7 3 2.3 3.9 1.9 3.3.3 6.1-3.5 6.1H33c-3.9 0-5.4-2.7-3.5-6.1l1.1-1.9 8-13.8 30.8-53.3.6-1.1c1.9-3.3 5.1-3.3 7 0L92.2 168h23.1l-26.7-46.3c-8.1-14.6-22.5-13.7-30 0l-30.6 53-1.5 2.7-20 34.6c-8.2 14.3-1.5 26 15 26h104.3c17.7.2 23.2-13.9 13.7-28z"/>
              <path fill="#fff" d="M173 136.5h-1V168c0 5.4-4.6 10-10 10H68.4c-2.4 0-4.6-.9-6.4-2.4l-10 17.5c4.7 3.1 10.4 4.9 16.4 4.9H162c16.5 0 30-13.5 30-30v-34c-6.1 1.6-12.4 2.5-19 2.5zM58.4 106.6V74.4c0-5.4 4.6-10 10-10H162c5.4 0 10 4.6 10 10v21c7.4.3 14.5-2.1 20-6.3V74.4c0-16.5-13.5-30-30-30H68.4c-16.5 0-30 13.5-30 30v62.2c4.7-7.3 12.9-25.1 20-30z"/>
            </svg>
          </div>
          <h1 className={cn("text-[1.33rem] font-bold", montserrat.className)}>AiSpaces.com</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-md hover:bg-white/10 transition-colors duration-300 ease-in-out",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-6 h-6 mr-4 transform-gpu group-hover:rotate-[-19deg] group-hover:scale-125 duration-300 ease-in-out", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} />
    </div>
  )
}
