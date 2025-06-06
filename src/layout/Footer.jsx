import ItemSocial from "../components/ui/PageComps/footer/ItemSocial";
import ItemEnlace from "../components/ui/PageComps/footer/ItemEnlace";

function Footer() {
  const currentPage = window.location.pathname;

  // Enlaces de las páginas (de momento no se usan)
  const enlaces_paginas = [
    { to: currentPage, text: "FAQ" },
    { to: currentPage, text: "Aviso legal" },
    { to: currentPage, text: "Protección de datos" },
    { to: currentPage, text: "About us" },
    { to: currentPage, text: "Contacto" },
    { to: currentPage, text: "Trabajo" },
  ];
  const enlaces_sociales = [
    { to: "https://www.facebook.com/urbanwearxjorge", img: "facebook.svg" },
    { to: "https://www.instagram.com/urbanwearxjorge", img: "instagram.svg" },
    { to: "https://www.tiktok.com/urbanwearxjorge", img: "tiktok.svg" },
    { to: "https://www.youtube.com/urbanwearxjorge", img: "youtube.svg" },
  ];
  return (
    <footer className="flex justify-center items-center bg-[#f5f5f5] py-20 mt-32 ">
      {/* Contenedor ambos navs */}
      <div className="flex flex-col gap-y-16 justify-center items-center w-[75%]">
        {/* Enlaces páginas */}
        <nav
          className="flex flex-col lg:flex-row justify-center gap-y-4 lg:justify-evenly items-center lg:[&>a]:border-r-2 
        lg:[&>a]:border-gray-300 lg:[&>a:last-child]:border-r-0"
        >
          {enlaces_paginas.map((enlace, index) => (
            <ItemEnlace key={index} to={enlace.to}>
              {enlace.text}
            </ItemEnlace>
          ))}
        </nav>
        {/* Enlaces socials */}
        <nav className="flex justify-center items-center gap-x-6">
          {enlaces_sociales.map((enlace, index) => (
            <ItemSocial
              key={index}
              img_src={`/img/socials/${enlace.img}`}
              enlace={enlace.to}
            />
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
