export const DescriptionSection = () => (
  <div className="relative z-10 bg-amber-50 ">
    <div className='max-w-screen-lg mx-auto py-16'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-8 md:flex-row flex-col items-center"> 
          <div className="z-10 m-auto flex justify-center">
            <img className="object-cover object-center max-h-96 m-8 mb-16" alt="hero" src="/images/erika-standing-coffee.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 pl-16 px-5 pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 pb-8 text-gray-900 font-montserrat font-bold">
              Portfolio
            </h1> 
            <p className="mb-8 leading-relaxed font-montserrat">
              I wouldn’t be a developer if I didn’t enjoy coding not just
              during my work day but also in my spare time.
              I love working with people passionate about what they do.
              Below, you will find my collaborations and personal projects.
            </p>
            <p className="mb-8 leading-relaxed font-montserrat">
              For my full professional work experience, please check out my <a className="underline" href="https://www.linkedin.com/in/erikajonikaite/">
              LinkedIn profile
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
)
