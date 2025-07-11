import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
          <p className="text-center text-muted-foreground">Grid of projects with hover effects, filtering, and modals coming soon.</p>
        </div>
      </section>
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <p className="text-center text-muted-foreground">Personal story, skills visualization, timeline, and resume download coming soon.</p>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <p className="text-center text-muted-foreground">Contact form with validation, social links, and map coming soon.</p>
        </div>
      </section>
    </>
  )
}

