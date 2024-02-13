import Logo from './assets/trickie.png'

const Nav = () => { 

  
  return (
    <>
      <a id="nav"></a>
      <header className="bg-slate-100 z-50 flex top-0 sticky justify-between justify-items-center items-center m-0">
        <div className="flex justify-start justify-items-center items-center">
          <a href="index.html">
            <img
              src={Logo}
              className="w-28 h-16 m-5"
              alt="Logotipo"
            ></img>
          </a>
          <h1 className="text-3xl font-poppins ">Trickie Media</h1>
        </div>
        <div className="hidden md:block">
          <ul className=" mx-5 flex gap-8 justify-items-center">
            <li>
              <a href="#quem_somos" className="hover:text-slate-800 text-xl">
                <p>Quem somos</p>
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-slate-800 text-xl">
                <p>Serviços</p>
              </a>
            </li>
            <li>
              <a href="#contactos" className="hover:text-slate-800 text-xl">
                Contactos
              </a>
            </li>
          </ul>
        </div>
        <button
          id="hamburger-button"
          className="text-3xl focus:outile-none md:hidden p-5 cursor-pointer"
        >
          &#9776;
        </button>
      </header>
    </>
  );
};

export default Nav;
