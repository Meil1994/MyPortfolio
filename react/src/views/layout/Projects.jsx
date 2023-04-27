import tbc from '../../assets/images/tbc.png'
import mp2 from '../../assets/images/mp2.png'
import { AiOutlineGithub } from 'react-icons/ai'; 
import { VscGoToFile } from 'react-icons/vsc'; 

const Projects = () => {
  return (
    <div className='mt-28 mb-20 col-span-2 tracking-wider font-light text-slate-900 dark:text-slate-300'>
      <h1 className='text-4xl '><span className="text-green-900 dark:text-green-400 text-2xl">03.</span> Projects...</h1>
      <p className='pt-7'>
      During our time in KodeGo, we completed 3 major projects in which we used different technologies. 
      Listed below are the projects that I've finished myself or took part in to finish.
      </p>

      <div className='lg1:p-10'>
          <div className='mt-10 sm3:grid sm3:grid-cols-2 divide-x'>
            <a href='https://meil1994.github.io/home/1-home/' target='blank' className='hover:z-40 border-none'>
              <img src={tbc} className='h-40 sm3:h-60 lg1:h-70 rounded-lg shadow-lg shadow-black border border-black hover:opacity-100 opacity-80'/>
            </a>
            <div className='text-start sm3:text-end mt-5 w-100 border-none z-30'>
              <p className='text-green-900 dark:text-green-300'>Major Project 1</p>
              <p className='text-2xl font-bold'>The Browns Casita</p>
              <div className='rounded-lg hover:shadow-md hover:shadow-indigo-800 border border-blue-900 p-4 sm3:-ml-20 mt-5 bg-blue-950 text-slate-400'>
                <p>
                  A static website built for a local business located in Davao del Norte. 
                  It is a simple 3 pages site that was created using <a href='https://en.wikipedia.org/wiki/HTML' target='blank' className='text-green-300'>HTML</a>, <a href='https://en.wikipedia.org/wiki/JavaScript' target='blank' className='text-green-300'>Javascript</a>, <a href='https://en.wikipedia.org/wiki/CSS' target='blank' className='text-green-300'>CSS</a>, and <a href='https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)' target='blank' className='text-green-300'>Bootstrap</a>.   
                </p>
                <div className='flex mt-5 justify-end text-2xl'>
                  <a href='https://github.com/Meil1994/home' target='blank'><AiOutlineGithub className='hover:text-green-300'/></a>
                  <a href='https://meil1994.github.io/home/1-home/' target='blank'><VscGoToFile className='ml-5 hover:text-green-300'/></a>
              </div>
              </div>
            </div>
          </div>
          <hr className='mt-20'/>

          <div className='mt-20 sm3:grid sm3:grid-cols-2 divide-x'>
            <div className='text-start w-100 border-none z-30'>
              <p className='text-green-900 dark:text-green-300'>Major Project 2</p>
              <p className='text-2xl font-bold'>Pitch Bit and Buy</p>
              <div className='rounded-lg hover:shadow-md hover:shadow-indigo-800 border border-blue-900 p-3 sm3:-mr-10 mt-2 bg-blue-950 text-slate-400'>
                <p>
                A dynamic website created using <a href='https://en.wikipedia.org/wiki/React_(software)' target='blank' className='text-green-300'>React</a>, <a href='https://en.wikipedia.org/wiki/JavaScript' target='blank' className='text-green-300'>Javascript</a>, and <a href='https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)' target='blank' className='text-green-300'>Bootstrap</a>. 
                The idea is to create an eCommerce platform that can also process bidding. 
                Although it is dynamic, the data is only saved in the JSON file using fetch API. 
                </p>
                <div className='flex mt-5 justify-start text-2xl'>
                  <a href='https://github.com/Meil1994/MP2' target='blank'><AiOutlineGithub className='hover:text-green-900 dark:hover:text-green-300'/></a>
                </div>
              </div>
            </div>
            <a className='hover:z-40 border-none'>
              <img src={mp2} className='mt-5 h-40 sm3:h-60 lg1:h-70 rounded-lg shadow-lg shadow-black border border-black opacity-80 hover:opacity-100'/>
            </a>
          </div>
          <hr className='mt-20'/>

          <div className='mt-20 sm3:grid sm3:grid-cols-2 divide-x'>
            <a href='https://meil1994.github.io/home/1-home/' target='blank' className='hover:z-40 border-none'>
              <img src={tbc} className='h-40 sm3:h-60 lg1:h-70 rounded-lg shadow-lg shadow-black border border-black hover:opacity-100 opacity-80'/>
            </a>
            <div className='mt-5 text-start sm3:text-end w-100 border-none z-30'>
              <p className='text-green-900 dark:text-green-300'>Major Project 3</p>
              <p className='text-2xl font-bold'>The Browns Casita part 2</p>
              <div className='rounded-lg hover:shadow-md hover:shadow-indigo-800 border border-blue-900 p-3 sm3:-ml-20 mt-5 bg-blue-950 text-slate-400'>
                <p>
                  This is the 2nd version of my first project and was used as the capstone project. 
                  This time, it is already dynamic. It was created using 
                  <a href='https://en.wikipedia.org/wiki/Laravel' target='blank' className='text-green-300'> Laravel</a>,  
                  <a href='https://en.wikipedia.org/wiki/Tailwind_CSS' target='blank' className='text-green-300'> Tailwind CSS</a>,  
                  <a href='https://en.wikipedia.org/wiki/PHP' target='blank' className='text-green-300'> PHP</a>, 
                  <a href='https://en.wikipedia.org/wiki/JavaScript' target='blank' className='text-green-300'> Javascript</a>,
                  <a href='https://en.wikipedia.org/wiki/JQuery' target='blank' className='text-green-300'> JQuery</a>, and 
                  <a href='https://en.wikipedia.org/wiki/MySQL' target='blank' className='text-green-300'> MySQL.</a>
                </p>
                <div className='flex mt-5 justify-end text-2xl'>
                  <a href='https://github.com/Meil1994/TBC_MP3' target='blank'><AiOutlineGithub className='hover:text-green-900 dark:hover:text-green-300'/></a>
                  <a href='' target='blank'><VscGoToFile className='ml-5 hover:text-green-900 dark:hover:text-green-300'/></a>
              </div>
                
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Projects