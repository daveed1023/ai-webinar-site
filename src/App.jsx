import { ThemeProvider } from '@contexts/ThemeContext'
import { SmoothScrollProvider } from '@contexts/SmoothScrollContext'
import { Navbar } from '@components/layout/Navbar'
import { Footer } from '@components/layout/Footer'
import { Hero } from '@components/sections/Hero/Hero'
import { Services } from '@components/sections/Services/Services'
import { Contact } from '@components/sections/Contact/Contact'

function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}

export default App
