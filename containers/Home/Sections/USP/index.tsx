const usps = [
  {
    title: 'Solution',
    description: 'Development work can sometimes feel like a mystery, so I work closely with your product and design teams to help them explore solutions and define a product roadmap that meets your goals',
    background: 'bg-givry',
  },
  {
    title: 'Technology',
    description: 'Building an app that is both stable and scalable is not easy but I have been fortunate to have worked with some of the latest Javascript technologies on a variety of problems. I adapt my approach to meet the specific needs of your team and product',
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
      <div className="container mx-auto flex md:py-6 sm:py-16 md:flex-column flex-row flex-wrap md:flex-nowrap items-start columns-3 gap-10">
        {usps.map((usp) => (
          <div key={usp.title} className={`w-full ${usp.background}`}>
            <h3>{usp.title}</h3>
            <p>{usp.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  </div>
  
);
