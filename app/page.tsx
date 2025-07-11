import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <p className="text-center text-muted-foreground">Contact form with validation, social links, and map coming soon.</p>
        </div>
      </section>
    </>
  )
}

