const processSteps = [
  {
    title: 'Let’s chat',
    description: 'It all starts with a small first step - getting in touch. I would love to hear about your idea or project! Let me know if you are looking to hire or collaborate on it.',
  },
  {
    title: 'Prep and planning',
    description: 'Every product has its own needs. I will work with you to understand your idea, unique requirements and expectations before we agree on a plan of action',
  },
  {
    title: 'Let’s get it done',
    description: 'I will work alongside you, your existing team or bring together a group of trusted freelancers to realise your idea on budget and on time',
  },
]

export const ProcessSection = () => (
  <div className="bg-amber-50">
    <section>
      <div className="container py-28 px-4 mx-auto flex flex-col items-center">
        <h1 className="title-font sm:text-5xl text-3xl mb-12 pb-12 text-gray-900 font-montserrat font-bold text-center">
          How the magic happens:
        </h1>

        <div className="flex flex-col flex-start">
          {processSteps.map((step, index) => (
            <div key={step.title} className="max-w-lg flex flex-row items-center pb-12">
              <div className="relative z-10">
                <div className="bg-blossom h-14 md:h-24 w-14 md:w-24 mr-4 md:mr-12 flex-grow rounded-full flex justify-center items-center">
                  <span className="md:text-5xl text-3xl text-gray-900 font-montserrat font-bold">
                    {index + 1}.
                  </span>
                </div>
                {index !== processSteps.length - 1 && (
                  <div className="absolute invisible md:visible top-24 bottom-0 left-12 h-full w-0.5 bg-blossom"></div>
                )} 
              </div>

              <div className="max-w-max">
                <h3 className="mb-4 title-font font-montserrat font-bold">{step.title}</h3>
                <p className="max-w-max">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
