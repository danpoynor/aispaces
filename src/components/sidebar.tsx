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
      <div class="absolute -left-40 -top-64 transform-gpu blur-3xl rotate-[17deg]" aria-hidden="true">
        <div class="aspect-[1097/845] w-[28.5625rem] bg-gradient-to-r from-[#ff4694] to-[#363cf8] opacity-[0.3]"></div>
      </div>
      <div class="absolute -right-96 top-[18rem] transform-gpu blur-3xl rotate-45" aria-hidden="true">
        <div class="aspect-[1097/845] w-[28.5625rem] bg-gradient-to-r from-[#004d7a] to-[#776fff] opacity-[0.6]"></div>
      </div>
      <div class="absolute -left-72 top-[42rem] transform-gpu blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[28.5625rem] bg-gradient-to-r from-[#00297a] to-[#ff1979] opacity-[0.25]"></div>
      </div>
      <div className="relative px-3 py-6 flex-1">
        <Link href="/dashboard" className="flex items-center justify-start w-full pl-4 mb-10">
          <div className="w-8 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242 220">
              <path fill="#fff" d="M75.5 33.2c-15.4 0-28 12.6-28 28v44.5l4.4-7.7c3.1-5.4 7.1-9.4 11.6-11.6V61.2c0-6.5 5.5-12 12-12h41.8c1.1-5.6 2.9-10.9 5.4-16H75.5zm121.6 28c0-15.4-12.6-28-28-28h-4.4c-6.3 3.7-11.3 9.3-14.1 16h18.5c6.5 0 12 5.5 12 12v93.6c0 6.5-5.5 12-12 12H75.5c-6.5 0-12-5.5-12-12V142l-13.7 23.8c4.4 10.2 14.7 17 25.7 17h93.6c15.4 0 28-12.6 28-28V61.2z" />
              <path fill="#fff" d="M238.5 62c0-9.5-2.4-19-6.9-27.3-5.8-10.7-14.6-19.1-25.5-24.3-7.8-3.7-16.1-5.6-24.8-5.6s-17.1 1.9-24.8 5.6c-2.2 1-4.3 2.2-6.3 3.6l-1.8 1.2c-1.2.8-2.4 1.7-3.5 2.6-1.4 1.2-2.8 2.4-4.1 3.7-1.2 1.2-2.4 2.5-3.5 3.8-.2.2-.4.5-.6.7l-1.8 2.4-.2.3c-.6.9-1.3 1.8-1.8 2.7l-.2.4c-.1.2-.2.3-.3.5-.5.8-1 1.6-1.4 2.5-3 5.2-5 10.9-6 16.8l-.6 3.9c-.3 2.2-.4 4.4-.4 6.6 0 28.5 21 52.7 49.1 56.7v-16.2c-4-.8-7.9-2.2-11.5-4.2-2.9-1.6-5.6-3.5-8.1-5.7-8.6-7.8-13.5-19-13.5-30.5 0-2.4.2-4.8.6-7.2.2-1.4.6-2.8 1-4.2 2.1-7.4 6.2-14 11.9-19.2.7-.6 1.5-1.3 2.2-1.9l.2-.2c.2-.2.4-.3.6-.5 1.6-1.2 3.3-2.3 5-3.2.1-.1.3-.1.4-.2l.2-.1c1.6-.8 3.2-1.5 4.9-2.2 1.3-.5 2.6-.9 3.9-1.2 3.4-.9 6.8-1.3 10.3-1.3 11 0 21.4 4.3 29.2 12.1 4.7 4.7 8.3 10.6 10.2 16.9 1.2 4 1.9 8.1 1.9 12.3 0 3.5-.4 6.9-1.3 10.3-1 3.9-2.6 7.6-4.7 11.1-2.1 3.4-4.6 6.5-7.6 9.2-1.2 1.1-2.6 2.2-3.9 3.2v18.4c20.5-9.5 33.5-29.8 33.5-52.3zM135.6 212.4c.5-.3 1-.7 1.5-1.1.4-.4.9-.8 1.2-1.3.9-1.1 1.6-2.4 2-3.8.3-1.2.5-2.4.5-3.7-.1-3.2-1.2-6.7-3.2-10.3l-.8-1.5h-18.5c0 .1.1.1.1.2.8 1.7.9 3.3.4 4.8-.2.5-.5 1-.8 1.4-.7.8-1.6 1.4-2.7 1.8-.5.2-1.1.3-1.7.3H30.9c-.9-.1-1.7-.3-2.4-.6-.2-.1-.5-.2-.7-.4-.5-.3-.9-.7-1.2-1.1-.3-.4-.6-.9-.8-1.4-.2-.5-.3-1-.3-1.6v-.8c0-.5.2-1.1.3-1.6.1-.3.2-.5.3-.8.1-.3.3-.5.4-.8L67 120c.4-.7.9-1.4 1.6-2 .5-.4.9-.7 1.4-1 2.7-1.4 5.7-.2 7.6 2.9l22.4 38.7h18.5L85.4 102c-3.6-6.3-8.3-9.7-13.3-9.7-.7 0-1.5.1-2.2.2-1.2.2-2.3.7-3.4 1.3-2.9 1.6-5.4 4.4-7.6 8.1L6.7 192.3c-2.1 3.6-3.2 7.1-3.3 10.3 0 1.3.1 2.5.5 3.7.4 1.4 1.1 2.7 2 3.8.4.4.8.9 1.2 1.3.5.4 1 .8 1.5 1.1.5.4 1.1.7 1.7 1 1 .4 2 .8 3.1 1.1 2 .5 4.1.8 6.5.8h104.3c2.4 0 4.5-.3 6.5-.8 1.1-.3 2.1-.6 3.1-1.1.7-.4 1.3-.7 1.8-1.1z" />
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
