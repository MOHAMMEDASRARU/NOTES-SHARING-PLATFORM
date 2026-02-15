import { useRef } from 'react'
import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import { SpaceButton } from '@/components/SpaceButton'
import { usePWAInstall } from 'react-use-pwa-install'
import React from 'react'

export function Hero() {
  const install = usePWAInstall()
  const fileInputRef = useRef(null)

  // Trigger file input
  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  // Upload file to Next.js API route
  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    if (res.ok) alert('File uploaded successfully!')
    else alert('Upload failed: ' + data.error)
  }

  return (
    <>
      <section className="relative bg-indigo-50 py-7 pb-10 dark:bg-gray-900 sm:py-10">
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="noterep_text_gradient font-display text-5xl font-bold tracking-tighter text-transparent drop-shadow-xl dark:drop-shadow-light sm:text-7xl">
              NoteHub
            </h1>
            <div className="mt-6 space-y-6 font-sans text-2xl tracking-tight text-blue-900 dark:text-[#fefefe]">
              <p className="text-lg">
              An open-source notes sharing platform within the VIT University
              </p>
              <p className="text-base font-medium">
                Contribute to this project: Add Notes{' '}
                <button
                  className="text-base underline"
                  onClick={handleUploadClick}
                >
                  Here
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <br />
                You can also upload your notes to the 'Upload Here' folder
                within the respective course folders.
              </p>
             

              <div className="z-10 flex flex-col items-center justify-center align-middle">
                <div className="flex w-full justify-center pt-6">
                  <div className="flex w-full max-w-3xl flex-col items-center gap-6">
                    <div className="flex w-full justify-center">
                      <SpaceButton
                        href="/chat"
                        className="ml-4 w-full md:w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <ButtonLink href="/ci7" className="md:auto w-full rounded-lg py-2">
                CSE (MIC I st year)
              </ButtonLink>
              <ButtonLink href="/ci6" className="md:auto w-full rounded-lg py-2">
                CSE (MID I st year)
              </ButtonLink>
              <ButtonLink href="/ci5" className="md:auto w-full rounded-lg py-2">
                CSE (MIC II nd Year)
              </ButtonLink>
              <ButtonLink href="/ci4" className="md:auto w-full rounded-lg py-2">
                CSE (MID II nd year)
              </ButtonLink>
              <ButtonLink href="/ci3" className="md:auto w-full rounded-lg py-2">
                CSE (MIC and MID III rd year)
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
