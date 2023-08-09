"use client"

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount?: number;
}

export default function MobileSidebar({
  apiLimitCount
}: MobileSidebarProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Avoid hydration error by setting isMounted to true after the first render
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Sheet>
      <SheetTrigger>
      <Button variant={"ghost"} size={"icon"} className="md:hidden">
        <Menu />
      </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  )
}
