import { BsFillSunFill } from 'react-icons/bs'; 
import { BsMoonStars } from 'react-icons/bs'; 
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Social from "../layout/Social"
import Website from "../layout/Website"
import About from "../layout/About"
import Experience from "../layout/Experience"
import Projects from "../layout/Projects"
import Contact from "../layout/Contact"
import Intro from "../layout/Intro"

const Layout = () => {

  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);
  const sectionExp = useRef(null);
  const sectionPro = useRef(null);
  const sectionCon = useRef(null);
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleDarkMode = () => {
      setTheme("dark");
    };
  
    const handleLightMode = () => {
      setTheme("light");
    };

    const scrollToAbout = () => {
      const sectionOffsetTop = sectionRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollToPosition = sectionOffsetTop - windowHeight / 6;
  
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    };

    const scrollToExperience = () => {
      const sectionOffsetTop = sectionExp.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollToPosition = sectionOffsetTop - windowHeight / 6;
  
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    };

    const scrollToProjects = () => {
      const sectionOffsetTop = sectionPro.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollToPosition = sectionOffsetTop - windowHeight / 6;
  
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    };

    const scrollToContacts = () => {
      const sectionOffsetTop = sectionCon.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollToPosition = sectionOffsetTop - windowHeight / 100;
  
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    };

  return (
    <div className='bg-stone-200 dark:bg-gradient-to-b from-stone-800 dark:to-cyan-950 dark:text-white pt-10 sm:p-10 lg:p-20 lg:pb-5 lg:pt-10'>
    
      <div className='grid grid-cols-3 divide-x lg:grid-cols-2'>
        <div className='flex col-span-1 h-100 items-center border-none ml-5 sm4:ml-0'>
            <p className='position: sm4:fixed border-4 border-green-900 p-3 text-4xl rounded-lg font-semibold text-green-900 dark:border-green-500 dark:text-green-500'><a href='/'>M</a></p>
        </div>

        <ul className='border-none flex col-span-2 lg:col-span-1 lg:justify-evenly justify-end font-light dark:text-slate-300 h-100 items-center tracking-wide'>
            <li onClick={scrollToAbout} className='hidden lg:flex items-end hover:text-green-900 dark:hover:text-green-500 cursor-pointer'><span className='text-sm text-green-900 dark:text-green-400'>01.</span> About</li>
            <li onClick={scrollToExperience} className='hidden lg:flex items-end hover:text-green-900 dark:hover:text-green-500 cursor-pointer'><span className='text-sm text-green-900 dark:text-green-400'>02.</span> Experience</li>
            <li onClick={scrollToProjects} className='hidden lg:flex items-end hover:text-green-900 dark:hover:text-green-500 cursor-pointer'><span className='text-sm text-green-900 dark:text-green-400'>03.</span> Projects</li>
            <li onClick={scrollToContacts} className='hidden lg:flex items-end hover:text-green-900 dark:hover:text-green-500 cursor-pointer'><span className='text-sm text-green-900 dark:text-green-400'>04.</span> Contact</li>
            <li className='hidden sm:flex mr-2'>
                <button onClick={handleLightMode}><BsFillSunFill /></button>
                <button onClick={handleDarkMode} className='ml-2'><BsMoonStars /></button>
                <a href='https://drive.google.com/file/d/1U6Bbwkg_YEnuYdd1ioOTdsqOSgyg922O/view?usp=sharing' target='blank' className='border dark:border-slate-300 border-black p-3 pt-2 pb-2 ml-3 rounded-md hover:text-green-900 dark:hover:text-green-500 hover:border-green-900 dark:hover:border-green-500'>Resume</a>
            </li>
            <li className='lg:hidden'>
                <div className="relative">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-5 lg1:mr-0"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        )}
                    </button>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-md shadow-black dark:shadow-none bg-white ring-1 ring-black ring-opacity-5 dark:bg-slate-500 dark:text-white">
                        <div
                            className="py-1 dark:slate-300"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <div className='px-4 py-2 sm:hidden flex'>
                                <button onClick={handleLightMode}><BsFillSunFill /></button>
                                <button onClick={handleDarkMode} className='ml-2'><BsMoonStars /></button>
                            </div>
                            <div>
                                <button className='sm:hidden flex mt-2 border dark:border-slate-300 border-black p-3 pt-2 pb-2 ml-3 rounded-md hover:text-green-900 dark:hover:text-green-500 hover:border-green-900 dark:hover:border-green-500'>Resume</button>
                            </div>
                            <a
                                className="cursor-pointer block dark:text-white px-4 py-2 text-sm text-gray-700 mt-5"
                                role="menuitem"
                                onClick={scrollToAbout}
                                >
                                <span className='text-xs'>01.</span> About
                            </a>
                            <a
                                className="cursor-pointer block dark:text-white px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                onClick={scrollToExperience}
                                >
                                <span className='text-xs'>02.</span> Experience
                            </a>
                            <a
                                className="cursor-pointer block dark:text-white px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                onClick={scrollToProjects}
                                >
                                <span className='text-xs'>03.</span> Projects
                            </a>
                            <a
                                className="cursor-pointer block dark:text-white px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                onClick={scrollToContacts}
                                >
                                <span className='text-xs'>04.</span> Contact
                            </a>
                        </div>
                        </div>
                    )}
                </div>
            </li>
        </ul>
      </div>

      <div className="grid grid-cols-10 divide-x">
        <div className="col-span-1 border-none"><Social/></div>
        <div className="col-span-8 border-none">
            <Intro/>
            <button onClick={scrollToContacts} className="border mb-15 mt-5 border-green-800 p-10 pt-4 pb-4 text-green-800 hover:border-green-600 hover:text-green-600 dark:border-green-400 dark:text-green-400 dark:hover:border-green-200 dark:hover:text-green-200">Drop me a message! </button>
            <section ref={sectionRef}>
                <About/>
            </section>
            <section ref={sectionExp}>
                <Experience/>
            </section>

            <section ref={sectionPro}>
                <Projects/>
            </section>

            <section ref={sectionCon}>
                <Contact/>
            </section>
        </div>
        <div className="col-span-1 border-none"><Website/></div>  
      </div>

    </div>
  )
}

export default Layout