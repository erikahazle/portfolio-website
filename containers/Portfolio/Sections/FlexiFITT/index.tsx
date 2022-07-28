export const FlexiFITTSection = () => (
  <div className="relative z-10 bg-amber-50 ">
    <div className='absolute top-0 left-0 w-1/2 h-full invisible md:visible bg-givry -z-10' />
    <div className='max-w-screen-lg mx-auto py-16'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-8 md:flex-row flex-col items-center"> 
          <div className="lg:flex-grow md:w-1/2 pl-16 px-5 pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 pb-8 text-gray-900 font-montserrat font-bold">
              FlexiFITT -
              <br/>
              Splits Challenge
            </h1> 
            <p className="mb-8 leading-relaxed font-montserrat">
              FlexiFITT was a collaboration between myself and the
              fantastic AK Fit Club. We wanted to create an app that helped
              our users reach their goal of doing splits in a safe and progressive
              manner and, so, FlexiFITT was born.
            </p>
            <p className="mb-8 leading-relaxed font-montserrat">
              This was an exciting project for me as I got to wear many hats -
              from organising photoshoots to creating marketing material for
              the Apple app store, from product UX and UI design to writing all the code for the app.
            </p>
            <p className="mb-8 leading-relaxed font-montserrat font-bold">
              Technologies used:
            </p>
            <p className="mb-8 leading-relaxed font-montserrat">
              React Native, XCode
            </p>
          </div>

          <div className="z-10 m-auto flex justify-center">
            <img
              className="object-cover object-center max-h-96 m-8 mb-16"
              alt="FlexiFITT app screenshots"
              src="/images/flexifitt.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);
