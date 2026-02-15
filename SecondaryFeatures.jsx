import { useId } from 'react'
import { usePWAInstall } from 'react-use-pwa-install'
import { Container } from '@/components/Container'

const data = [
  
  {
    title: 'Archeived Notes',
    subtitle: 'All Semester Notes',
    button: 'Visit',
    href: 'https://drive.google.com/drive/folders/1iaeHWb13fPGlFEUuwdPIEoxpfdyRrF8e',
  },
  {
    title: 'Admin',
    subtitle: 'For any queries contat me',
    button: 'Visit',
    href: 'https://www.linkedin.com/in/mohammed-asrar-u-b5498128a/',
  }
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-5 pt-10 dark:bg-cost5 sm:py-8"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-5xl lg:px-8">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-center text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
                Some Important Links:
              </h2>
            </div>
            <ul
              role="list"
              className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-10 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
            >
              {data.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-gray-200 p-5 shadow-lg hover:shadow dark:border-slate-900 dark:shadow-num_d"
                >
                  <h3 className="text-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-700 dark:text-slate-50">
                    {item.subtitle}
                  </p>
                  {/* <p className="mt-1 text-center text-xs text-gray-700 dark:text-slate-50">
                    {item.description}
                  </p> */}
                  <div className="flex justify-center">
                    <a
                      className="mt-2 rounded-md border-2 border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 shadow-lg shadow-blue-900/10 hover:border-transparent hover:bg-blue-500 hover:text-white dark:border-blue-300 dark:text-blue-400 hover:dark:text-white"
                      href={item.href}
                      target="_blank"
                    >
                      {item.button}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            

            
          </Container>
        </div>
      </div>
    </section>
  )
}
