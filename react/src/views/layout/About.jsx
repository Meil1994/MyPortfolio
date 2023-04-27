import logo from '../../../src/assets/images/logo1.jpeg'

const About = () => {
  return (
    <div className='block sm1:grid sm1:grid-cols-3 pb-40 mt-44'>
        <div className='col-span-2 tracking-wider font-light text-slate-800 dark:text-slate-300'>
            <h1 className='text-4xl '><span className="text-green-900 dark:text-green-400 text-2xl">01.</span> About me...</h1>
            <p className='pt-7'>
                Hello! I am <span className='dark:text-white underline underline-offset-4'>Meilchu T. Cabaluna</span> from Davao City. 
                I enjoy doing things that are challenging yet fun like developing a website. 
                Contrary to what you may think of me, in personality and appearance. 
                I also enjoy reading manga and watching anime as a hobby.
            </p>
            <p className='pt-7'>
                I started to have an interest in learning to code about a year ago. 
                One day, I saw this learning website that my daughter was using. 
                It is simple yet a very fun one. Then a question suddenly popped into my mind. 
                How did they do it? Will I be able to do it? How will I do it? 
                That's when I started studying, and eventually enrolled and finished boot camp at <a href='https://www.facebook.com/KodegoPH' target='blank' className='text-indigo-900 dark:text-indigo-300'>KodeGo</a>. 
            </p>
            <p className='pt-7'>
                Here are the technologies that I've been working with recently:
            </p>
            <ul className='block sm2:flex mt-2'>
                <div className='mt-4 sm2:mr-40'>
                    <li className='mb-2'>• HTML</li>
                    <li className='mb-2'>• CSS</li>
                    <li className='mb-2'>• PHP</li>
                    <li>• React</li>
                </div>
                <div className='mt-4'>
                    <li className='mb-2'>• Node.js</li>
                    <li className='mb-2'>• Bootstrap</li>
                    <li className='mb-2'>• MySQL</li>
                    <li>• Tailwind</li>
                </div>
            </ul>
        </div>
        <div className='col-span-1 p-2'>
            <img src={logo} className='dark:opacity-80 dark:hover:opacity-100 border border-black rounded-md w-60 sm1:mt-20 lg1:mt-10 mt-4 shadow-lg shadow-black'/>
        </div>

    </div>
  )
}

export default About