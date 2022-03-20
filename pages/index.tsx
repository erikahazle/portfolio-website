import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-amber-50 relative'>
      <div className='absolute lg:max-w-1/2 md:w-1/2 w-5/6 h-full visible md:invisible bg-emerald-100' />
      <div className='max-w-screen-lg mx-auto'>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10">
              <img className="object-cover object-center" alt="hero" src="/images/hero.png" />
            </div>

            <div className="lg:flex-grow md:w-1/2 px-5 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Turn your tech idea
                <br className="hidden lg:inline-block" />into a product people love
              </h1>
              <p className="mb-8 leading-relaxed">
                Technology should work for you. I’m here to build your mobile or web app,
                so you can focus on what really matters - growing your business.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>


  )
}

export default Home
