'use client'

import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

// Placeholder data
const bio = "I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in React, Next.js, and TypeScript, creating intuitive and performant user experiences."
const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS']
const headshotUrl = 'https://storage.googleapis.com/magnolia-storage-dev-test-123/images/8JIGth3aUL/image.jpg'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={childVariants} className="md:w-1/3">
            <Image
              src={headshotUrl}
              alt="Professional headshot"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </motion.div>
          <motion.div variants={childVariants} className="md:w-2/3">
            <p className="text-lg mb-6">{bio}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

