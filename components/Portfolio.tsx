'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

// Placeholder project data
const projects = [
  {
    title: 'Project One',
    description: 'A modern web app built with Next.js and TypeScript.',
    image: 'https://source.unsplash.com/random/800x600/?tech',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Project Two',
    description: 'Mobile-responsive dashboard with real-time data.',
    image: 'https://source.unsplash.com/random/800x600/?dashboard',
    tech: ['React', 'Chart.js', 'Firebase'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Project Three',
    description: 'E-commerce platform with payment integration.',
    image: 'https://source.unsplash.com/random/800x600/?ecommerce',
    tech: ['Next.js', 'Stripe', 'Prisma'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="rounded-md object-cover w-full h-48"
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

