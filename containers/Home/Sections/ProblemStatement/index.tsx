export const ProblemStatementSection = () => (
  <div className="bg-coral">
    <div className='max-w-screen-lg mx-auto py-16 '>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex py-8 md:flex-row flex-col items-center"> 
        <div className="lg:flex-grow md:w-1/2 px-5 pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 pb-8   text-gray-900 font-montserrat font-bold">
            Technology should work for you
          </h1>
          <p className="mb-8 leading-relaxed font-montserrat">
            Let’s be honest - creating a successful tech product that people love is hard. You have to juggle ever-changing stakeholder expectations, user needs with sometimes strict deadlines and tight budgets on top of it all.
          </p>
          <p className="mb-8 leading-relaxed font-montserrat">
            What tech solution will work for your product shouldn’t be yet another thing for you to worry about.
          </p>
          <p className="mb-8 leading-relaxed font-montserrat">
            I’m here to help you navigate through the murky waters of technology, so you can focus on realising your idea.
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

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10 md:pr-8">
          <img className="object-cover object-center" alt="hero" src="/images/office-scene.png" />
        </div>
      </div>
    </section>
  </div>
  </div>
  
);
