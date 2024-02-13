const Contacts = () => {
  return (
    <footer id="contactos" className=" m-auto text-center items-center">
      <p className=" m-6 text-5xl">Contactos</p>

      <div className="flex flex-col md:flex-row justify-center mb-10 text-wrap">
        <div className="flex flex-col">
          <a href="tel:965354682" className="text-xl mx-5">
            351+ 965354682
          </a>
          <a
            href="mailto:geral.trickiemedia@gmail.com"
            className=" text-xl mx-5 mt-4"
          >
            geral.trickiemedia@gmail.com
          </a>
        </div>

        <div className="flex flex-row justify-center text-wrap">
          <a href="">
          <button className="text-4xl m-5" title="Instagram" >
            <i className="fa-brands fa-instagram"></i>
          </button>
          </a>
          <a href="">
          <button className="text-4xl m-5" title="Linkedin">
            <i className="fa-brands fa-linkedin"></i>
          </button>
          </a>
          <a href="">
          <button className="text-4xl m-5" title="Vimeo">
            <i className="fa-brands fa-vimeo"></i>
          </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
