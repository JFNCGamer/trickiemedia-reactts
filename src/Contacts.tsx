const Contacts = () => {
  return (
    <footer id="contactos" className=" m-auto ">
      <p className=" m-6 text-5xl font-poppins text-center">Contactos</p>

      <div className="flex flex-col sm:flex-row justify-evenly mb-15 text-wrap">
        <div className="flex flex-col mb-2">
          <div className="flex justify-center sm:justify-normal">
            <h2 className="text-2xl font-poppins mr-2">Telefone:</h2>
            <a href="tel:965354682" className="text-xl hover:text-slate-700 transition-colors">+351 965354682</a>
          </div>
          <div className="flex justify-center sm:justify-normal">
            <h2 className="text-2xl font-poppins mr-2">Email:</h2>
            <a href="mailto:geral.trickiemedia@gmail.com" className="text-xl hover:text-slate-700 transition-colors font-sans">geral.trickiemedia@gmail.com</a>
          </div>
        </div>
        <div className="flex flex-row justify-center text-wrap">
          <a href="">
            <button className="text-4xl m-5" title="Instagram">
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
