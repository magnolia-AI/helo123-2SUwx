'use server'

import { revalidatePath } from 'next/cache'

// Simulated email send - replace with real integration
export async function sendContactForm(prevState: { message: string }, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { message: 'All fields are required' }
  }

  // Simulate sending email
  console.log('Contact form submitted:', { name, email, message })

  revalidatePath('/')
  return { message: 'Message sent successfully!' }
}

