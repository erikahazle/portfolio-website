export const UdeavourSection = () => (
  <div className="relative z-10 bg-amber-50 mb-8">
    <div className='absolute top-0 right-0 w-full md:w-1/2 h-full bg-blossom -z-10' />
    <div className='max-w-screen-lg mx-auto py-16'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-8 flex-col md:flex-row items-center "> 
          <div className="z-10 m-auto flex justify-center">
            <img
              className="object-cover object-center max-h-96 p-8 pb-16 md:pb-4 mr-6"
              alt="FlexiFITT app screenshots"
              src="/images/udeavour.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 pl-16 px-5 pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 pb-8 text-gray-900 font-montserrat font-bold">
              Udeavour
            </h1> 
            <p className="mb-8 leading-relaxed font-montserrat">
              Udeavour GCSE Chemistry app was a collaboration between myself and another developer, Linas. It was created as an exam revision aid with hundreds of flashcards to help students remember key facts in an easy and fun way. We made it available on iOS (swift) and Android (react native).
            </p>
            <p className="mb-8 leading-relaxed font-montserrat">
              For this project, I had to stretch my design and marketing muscles again as well as contribute to be codebase.
            </p>
            <p className="mb-8 leading-relaxed font-montserrat font-bold">
              Technologies used:
            </p>
            <p className="mb-8 leading-relaxed font-montserrat">
              Swift, React Native, XCode, Webflow
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);
