import Kodego from "../components/Kodego"
import Concentrix from "../components/Concentrix"
import Sitel from "../components/Sitel"
import { useState } from "react"

const Experience = () => {
  const [currentPage, setCurrentPage] = useState('kodego');

  function handleChangePage(page){
    setCurrentPage(page)
};

  return (
    <div className="lg1:p-40 lg1:pb-0 lg1:pt-5 pt-5 col-span-2 tracking-wider font-light text-slate-800 dark:text-slate-100">
      <h1 className='text-4xl '><span className="text-green-900 dark:text-green-400 text-2xl">02.</span> Experiences...</h1>
      <p className="mt-7">
        Though I currently don't have web developer-related work experience, 
        I've listed several relevant jobs and training that I think will help build my career as a web developer. 
        Not just in technical, but also in work values. 
      </p>
      <div className="mt-10 block sm3:flex">
        <div className="border-l border-green-900 dark:border-green-400 w-40 h-40">
          <button onClick={() => handleChangePage('kodego')} className="text-start w-40 p-5 pt-4 pb-4 hover:bg-slate-300 focus:border-l focus:bg-slate-300 focus:border-green-900 focus:text-green-900 hover:text-green-900">KodeGo</button>
          <button onClick={() => handleChangePage('concentrix')} className="text-start w-40 p-4 pt-4 pb-3 hover:bg-slate-300 focus:border-l focus:bg-slate-300 focus:border-green-900 focus:text-green-900 hover:text-green-900">Concentrix</button>
          <button onClick={() => handleChangePage('sitel')} className="text-start w-40 p-5 pt-4 pb-4 hover:bg-slate-300 focus:border-l focus:bg-slate-300 focus:border-green-900 focus:text-green-900 hover:text-green-900">Sitel</button>
        </div>
        <div className="pt-5">
            {currentPage === 'kodego' ? <Kodego/> : null}
            {currentPage === 'concentrix' ? <Concentrix/> : null}
            {currentPage === 'sitel' ? <Sitel/> : null}
        </div>
      </div>

    </div>
  )
}

export default Experience