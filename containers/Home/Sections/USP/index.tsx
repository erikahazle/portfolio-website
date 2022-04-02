const usps = [
  {
    title: 'Solution',
    description: 'Development work can sometimes feel like a mystery, so I work closely with your product and design teams to help them explore solutions and define a product roadmap that meets your goals',
    background: 'bg-givry',
  },
  {
    title: 'Technology',
    description: 'Building an app that is both stable and scalable is not easy but I have been fortunate to have worked with some of the latest web and mobile technologies on a variety of problems. I adapt my approach to meet your specific needs',
    background: 'bg-blossom',
  },
  {
    title: 'Experience',
    description: 'I have helped define and develop applications and features for global corporates as well as early-stage startusp and industries ranging from social media management to sports TV to consumer analytics.',
    background: 'bg-amber-400',
  },
]

export const USPSection = () => (
  <div className="bg-amber-200 relative">
    <section className='max-w-screen-lg mx-auto py-8'>
      <div className="container mx-auto flex md:py-8 sm:py-16 px-4 flex-col lg:flex-row flex-wrap md:flex-nowrap items-start columns-3 gap-10">
        {usps.map((usp) => (
          <div key={usp.title} className={`h-auto lg:h-96 w-full ${usp.background} py-16 px-8`}>
            <div className="relative z-10 ">
              <div className="absolute top-4 h-4 w-40 bg-amber-50 -z-10" />
              <h3 className="text-2xl mb-8 text-gray-900 font-montserrat font-bold">
                {usp.title}
              </h3>
            </div>
            <p className="leading-relaxed font-montserrat">{usp.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  </div>
  
);
