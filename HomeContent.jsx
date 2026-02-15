import { useEffect, useState } from 'react'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../lib/firebase'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { CallToAction } from '../components/CallToAction'
import { Schedule_New } from '../components/Schedule_New'
import { SecondaryFeatures } from '../components/SecondaryFeatures'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

export default function HomePage() {
  const [user, setUser] = useState(null)
  const [showButton, setShowButton] = useState(false)

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Dark Mode
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Google login
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (err) {
      console.error(err)
    }
  }

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth)
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  // If user is not logged in, show login button
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-indigo-50 dark:bg-gray-900">
        <button
          onClick={loginWithGoogle}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login with Google
        </button>
      </div>
    )
  }

  // User is logged in → show main page
  return (
    <>
      <Head>
        <title>NoteHub - An Open-Source Notes Sharing Platform</title>
      </Head>
      <div className="flex h-screen flex-col bg-indigo-50 dark:bg-gray-900 dark:text-gray-100">
        {/* Logout button */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <Header />
        <main>
          <Hero />
          <CallToAction />
          <Schedule_New />
          <SecondaryFeatures />
        </main>
        <Footer />

        {showButton && (
          <button onClick={scrollToTop} className="back-to-top shadow-lg">
            <ArrowCircleUpIcon
              sx={{
                fontSize: '40px',
                width: 40,
                height: 40,
                padding: 0.7,
                borderRadius: 2,
                background: 'linear-gradient(45deg, #002a8f, #00b5f5)',
              }}
            />
          </button>
        )}
      </div>
    </>
  )
}
