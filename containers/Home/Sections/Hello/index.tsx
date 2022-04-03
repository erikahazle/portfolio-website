import { SocialMediaLinks } from "../../../../components/SocialMediaLinks";

export const HelloSection = () => (
  <div className="relative z-10 bg-amber-50 ">
    <div className='absolute top-0 right-0 w-3/4 h-full invisible md:visible bg-givry -z-10' />
    <div className='max-w-screen-lg mx-auto py-16'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-8 md:flex-row flex-col items-center"> 
          <div className="z-10 m-auto flex justify-center">
            <img className="object-cover object-center max-h-96 m-8 mb-16" alt="hero" src="/images/hello.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 pl-16 px-5 pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 pb-8 text-gray-900 font-montserrat font-bold">
              Hi, I’m Erika. Nice to meet you!
            </h1> 
            <p className="mb-8 leading-relaxed font-montserrat">
              I am a full stack JavaScript developer with a passion for creating user-centric tech products. For more than six years, I have helped companies both big and small to bring new products and features into the hands of their users.
            </p>

            <div>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
