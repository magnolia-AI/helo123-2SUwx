'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typingRef.current) {
      const typed = new Typed(typingRef.current, {
        strings: ['Software Developer', 'UI/UX Designer', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      })

      return () => typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/magnolia-storage-dev-test-123/videos/UgrkQZH0bq/video.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <Image 
          src="https://storage.googleapis.com/magnolia-storage-dev-test-123/images/8JIGth3aUL/image.jpg" 
          alt="Professional Photo" 
          width={200} 
          height={200} 
          className="rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m [Your Name]</h1>
        <p className="text-2xl mb-8">
          <span ref={typingRef} className="text-primary"></span>
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#portfolio">View Work</a>
          </Button>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="mx-auto h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

