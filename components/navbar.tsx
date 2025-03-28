"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Education", href: "/education" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                  <span className="text-green-600">Gyan</span>Hub
                </Link>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-1 font-bold text-xl">
            <span className="text-green-600">Gyan</span>Hub
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

