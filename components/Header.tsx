'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">My Portfolio</Link>
        <div className="flex items-center space-x-6">
          <Link href="#hero" className="hover:text-primary">Home</Link>
          <Link href="#projects" className="hover:text-primary">Projects</Link>
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
