import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { Input } from '@components/ui/Input'
import { Textarea } from '@components/ui/Textarea'
import { Button } from '@components/ui/Button'
import { Card } from '@components/ui/Card'
import { GradientText } from '@components/ui/GradientText'
import { fadeInUp, staggerContainer, staggerItem } from '@lib/animations'
import siteConfig from '@assets/data/site-config.json'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's <GradientText as="span">Connect</GradientText>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with AI? Get in touch and let's discuss
              how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div variants={staggerItem}>
              <Card glass={false} hover={false} className="h-full">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a
                        href={`mailto:${siteConfig.site.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {siteConfig.site.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <a
                        href={`tel:${siteConfig.site.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {siteConfig.site.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Prefer to book a call? Use our{' '}
                    <a
                      href={siteConfig.calendly.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Calendly link
                    </a>{' '}
                    to schedule a consultation.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={staggerItem}>
              <Card glass={false} hover={false} className="h-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                    />
                  </div>

                  {status.message && (
                    <div
                      className={`p-4 rounded-lg text-sm ${
                        status.type === 'success'
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                          : status.type === 'error'
                          ? 'bg-destructive/10 text-destructive border border-destructive/20'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status.type === 'loading'}
                  >
                    {status.type === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
