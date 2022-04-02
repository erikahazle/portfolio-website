export const Footer = () => (
  <footer
    className="
      w-full
      text-lg text-gray-700
      bg-amber-400
    "
  >
    <div className="
      max-w-screen-lg
      mx-auto
      flex flex-wrap
      items-end
      justify-between
      px-4
      py-12
    ">
      <div className="flex flex-col">
        <a href="#" className="mb-4">
          <span className="title-font md:text-3xl sm:text-2xl mb-4 text-gray-900 font-montserrat font-bold uppercase tracking-widest">
            Jonika
          </span>
        </a>

        <div>
          <span className="leading-relaxed mb-4 text-gray-900 font-montserrat tracking-widest">
            hello@jonika.io
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <span className="leading-relaxed mb-4 text-gray-900 font-montserrat tracking-widest">
            © 2022 Erika Jonikaite
          </span>
        </div>
      </div>
    </div>
  </footer>
);
