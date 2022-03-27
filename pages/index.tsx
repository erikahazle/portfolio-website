import type { NextPage } from 'next'
import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className='bg-amber-50 relative'>
        <div className='max-w-screen-lg mx-auto md:py-8 sm:py-4 absolute top-0 left-0 right-0 z-30'>
          <NavBar />
        </div>
        <div className='absolute lg:max-w-3/4 md:w-1/2 w-5/6 h-full invisible md:visible bg-coral' />
        <div className='max-w-screen-lg mx-auto pt-16'>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex md:py-24 sm:py-16 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10 md:pr-8">
                <img className="object-cover object-center" alt="hero" src="/images/hero.png" />
              </div>

              <div className="lg:flex-grow md:w-1/2 px-5 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-montserrat font-bold">Turn your tech idea
                  <br className="hidden lg:inline-block  font-bold" /> into a product people love
                </h1>
                <p className="mb-8 leading-relaxed font-montserrat">
                  Technology should work for you. I’m here to build your mobile or web app,
                  so you can focus on what really matters - growing your business.
                </p>
                <div className="flex justify-center">
                  <a
                    className="
                      inline-flex 
                    text-white
                    bg-tapestry-100
                      border-0
                      py-2 px-8
                      focus:outline-none
                    hover:bg-tapestry-50
                      text-sm font-bold uppercase font-montserrat
                    "
                    href="mailto:hello@jonika.io"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
