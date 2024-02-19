import React from 'react';
import bg1 from '../assets/bg1.jpg';
import './home.css'
const Home = () => {

      return (
        <div className='bg-violet-950'>
          <div className=" w-full  sm:px-6 sm:py-32 lg:px-8 h-dvh shadow-4xl">
            <div className="relative isolate overflow-hidden bg-gray-900  px-6 pt-16 \\\ sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2" maskImage="radial-gradient(closest-side,white,transparent)" style={{ left: '50%', transform: 'translate(-50%, -50%)' }} aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="gradient">
                    <stop stopColor="#7775D6" />
                    <stop offset="1" stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left flex-column justify-content-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mx-50">Boost your productivity.<br />Start using our app today.</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
//        </div>
      );
    };
    
   
export default Home;
