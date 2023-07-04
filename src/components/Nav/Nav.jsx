import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {

    const [navState, setNavState] = React.useState(false);
    const navStateHandler = () => {
        setNavState(!navState)
    }

    React.useEffect(()=>{
      const bodoy = document.querySelector('.body');

      const menuOpen = document.querySelector('.menu-open')
      const menuClose = document.querySelector('.menu-close')
      menuOpen.addEventListener('click', function(){
        bodoy.classList.add('overHidden')
      })
      menuClose.addEventListener('click', function(){
        bodoy.classList.remove('overHidden')
      })
    }, [])

  return (
    <header className="fixed w-screen">
      <div className="nav-logo text-black absolute left-6 top-10 sm:left-20 py-2 text-3xl font-bold cursor-pointer">
        Osthavent.
      </div>
      <div className="menu-open text-black absolute right-6 top-10 sm:right-20 py-2 text-2xl font-semibold cursor-pointer before:w-0 before:duration-200 before:ease-out before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-slate-950 before:origin-left hover:before:w-full" onClick={navStateHandler}>menu</div>
      <div className={`nav-container fixed w-[101vw] h-screen bg-slate-400 text-black duration-500 ease-in-out ${ navState ? 'nav-active' : '' }`}>
        <div className="menu-close absolute right-6 top-10 sm:right-20 py-2 text-2xl font-semibold cursor-pointer before:w-0 before:duration-200 before:ease-out before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-slate-950 before:origin-left hover:before:w-full" onClick={navStateHandler}>close</div>
        <div className="socials absolute bottom-0 right-0 text-xl font-semibold text-end sm:text-start mr-10 sm:ml-[8vw] my-20 flex flex-col items-end sm:items-start sm:left-0 sm:flex-row">
          <div className="my-1 sm:mr-5 before:w-0 before:duration-200 before:ease-out before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-slate-950 before:origin-left hover:before:w-full pb-1 relative"><a href="">Instagram</a></div>
          <div className="my-1 sm:mr-5 before:w-0 before:duration-200 before:ease-out before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-slate-950 before:origin-left hover:before:w-full pb-1 relative"><a href="">Twitter</a></div>
        </div>

        <div className={`menu pt-60 pb-20 sm:pt-24 text-7xl md:text-9xl`}>

          <div className="menu__item relative flex items-center justify-end md:justify-start">
            <Link to='/' className={`menu__item-link relative`}>
              <div className="nav-name mx-0 relative delay-[0.15s]">Home</div>
            </Link>
            <img
              className="menu__item-img h-24 sm:h-40 right-[8%] sm:left-[8%]"
              src="https://source.unsplash.com/720x480?macbook"
              alt="https://source.unsplash.com/720x480?macbook"
            />
            <div className="marquee text-slate-700">
              <div className="marquee__inner">
                <span>Home - Home - Home - Home - Home - Home - Home</span>
              </div>
            </div>
          </div>

          <div className="menu__item relative flex items-center justify-end md:justify-start">
            <Link to='/about' className={`menu__item-link relative`}>
              <div className="nav-name mx-0 relative delay-[0.2s]">About</div>
            </Link>
            <img
              className="menu__item-img h-24 sm:h-40 right-[8%] sm:left-[8%]"
              src="https://source.unsplash.com/720x480?macbook"
              alt="https://source.unsplash.com/720x480?macbook"
            />
            <div className="marquee text-slate-700">
              <div className="marquee__inner">
                <span>About - About - About - About - About - About - About</span>
              </div>
            </div>
          </div>

          <div className="menu__item relative flex items-center justify-end md:justify-start">
            <Link to='/projects' className={`menu__item-link relative`}>
              <div className="nav-name mx-0 relative delay-[0.25s]">Projects</div>
            </Link>
            <img
              className="menu__item-img h-24 sm:h-40 right-[8%] sm:left-[8%]"
              src="https://source.unsplash.com/720x480?macbook"
              alt="https://source.unsplash.com/720x480?macbook"
            />
            <div className="marquee text-slate-700">
              <div className="marquee__inner">
                <span>Projects - Projects - Projects - Projects - Projects - Projects - Projects</span>
              </div>
            </div>
          </div>

          <div className="menu__item relative flex items-center justify-end md:justify-start">
            <Link to='/contact' className={`menu__item-link relative`}>
              <div className="nav-name mx-0 relative delay-[0.3s]">Contact</div>
            </Link>
            <img
              className="menu__item-img h-24 sm:h-40 right-[8%] sm:left-[8%]"
              src="https://source.unsplash.com/720x480?macbook"
              alt="https://source.unsplash.com/720x480?macbook"
            />
            <div className="marquee text-slate-700">
              <div className="marquee__inner">
                <span>Contact - Contact - Contact - Contact - Contact - Contact - Contact</span>
              </div>
            </div>
          </div>




          
        </div>
      </div>
    </header>
  );
};

export default Nav;
