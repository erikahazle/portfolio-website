export const HeroSection = () => (
  <div className='max-w-screen-lg mx-auto pt-16'>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex md:py-24 sm:py-16 px-4 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10 md:pr-8">
          <img className="object-cover object-center" alt="hero" src="/images/hero.png" />
        </div>

        <div className="lg:flex-grow md:w-1/2 px-5 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-montserrat font-bold">
            Turn your tech idea
            <br className="hidden lg:inline-block  font-bold" /> into a product people love
          </h1>
          <p className="mb-8 leading-relaxed font-montserrat">
            Technology should work for you. I’m here to help you build your mobile or web app,
            so you can focus on what really matters, growing your business.
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
              href="mailto:hello@erikahazlewood.com"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
