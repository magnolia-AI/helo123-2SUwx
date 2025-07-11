'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

