import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
import imgBg from "./assets/bg-top.svg"
import { useState } from 'react';
function App() {

  const [isValue, setIsValue] = useState(true)

  const getPrice = (price) => {
    const priceTotal = Math.floor(price)
    const totalPrice = priceTotal * 10 + 9.99
    return isValue ? price : totalPrice;
  }

  return (
    <>
      <main>
        <section>
          <div className="w-full min-h-screen flex flex-col items-center justify-center relative py-16 md:py-0">
            <img decoding='async' loading='eager' src={imgBg} alt="" className='-z-10 absolute top-0 -right-1/2 md:right-0 ' />
            <div className='w-full text-center mx-auto mb-10'>
              <h1 className='text-center text-3xl text-Gray-650 font-bold mb-10'>Our Pricing</h1>
              <div className='w-full flex items-center justify-center gap-5'>
                <div>
                  <p className='text-Gray-650 font-semibold'>Annueally</p>
                </div>
                <div>
                  <Toggle size='lg' checked={isValue} onChange={() => setIsValue(prev => !prev)} />
                </div>
                <div>
                  <p className='text-Gray-650 font-semibold'>Monthly</p>
                </div>
              </div>
            </div>
            <div className='container grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center lg:grid-cols-3 px-5 gap-16'>
              <div className='w-full overflow-hidden bg-white shadow-2xl shadow-[#a2a6f1] p-5 py-10 rounded-xl'>
                <p className='font-bold text-center text-Gray-650 mb-5 text-base'>Basic</p>
                <div className='flex items-center justify-center gap-3'>
                  <div>
                    <span className='text-4xl font-bold'>$</span>
                  </div>
                  <div>
                    <span className='text-7xl font-bold'>{getPrice(19.99)}</span>
                  </div>
                </div>
                <div className='w-full my-10'>
                  <hr className='border border-neutral-200' />
                  <span className='py-5 text-base font-semibold text-center block text-Gray-650'>1 TB Storage</span>
                  <hr className='border border-neutral-200' />
                  <span className='py-5 text-base font-semibold text-center block text-Gray-650'>5 Users Allowed</span>
                  <hr className='border border-neutral-200' />
                  <span className='py-5 text-base font-semibold text-center block text-Gray-650'>Send up to 3 GB</span>
                  <hr className='border border-neutral-200' />
                </div>
                <div className='w-full '>
                  <a href="" className='uppercase text-white bg-gradient-to-r from-Gradient-start to-Gradient-end inline-block py-3 w-full hover:from-white hover:outline border-Gradient-end hover:text-Gradient-end text-center text-base font-semibold tracking-wide rounded-lg'>
                    Learn More
                  </a>
                </div>
              </div>
              <div className='w-full overflow-hidden bg-gradient-to-r from-Gradient-start to-Gradient-end rounded-xl shadow-2xl shadow-[#a2a6f1] p-5 py-16'>
                <p className='font-bold text-center text-white mb-5 text-base'>Professional</p>
                <div className='flex items-center justify-center gap-3'>
                  <div>
                    <span className='text-4xl font-bold text-white'>$</span>
                  </div>
                  <div>
                    <span className='text-7xl font-bold text-white'>{getPrice(24.99)}</span>
                  </div>
                </div>
                <div className='w-full my-10'>
                  <hr />
                  <span className='py-5 text-base font-semibold text-center block text-white'>1 GB Storage</span>
                  <hr />
                  <span className='py-5 text-base font-semibold text-center block text-white'>5 Users Allowed</span>
                  <hr />
                  <span className='py-5 text-base font-semibold text-center block text-white'>Send up to 10 GB</span>
                  <hr />
                </div>
                <div className='w-full '>
                  <a href="" className='uppercase text-Gradient-end bg-white hover:outline hover:bg-transparent hover:border-white hover:text-white inline-block py-3 w-full text-center text-base font-semibold tracking-wide rounded-lg'>
                    Learn More
                  </a>
                </div>
              </div>
              <div className='w-full overflow-hidden bg-white shadow-2xl shadow-[#a2a6f1] p-5 py-10 rounded-xl'>
                <p className='font-bold text-center text-Gray-650 mb-5 text-base'>Master</p>
                <div className='flex items-center justify-center gap-3'>
                  <div>
                    <span className='text-4xl font-bold'>$</span>
                  </div>
                  <div>
                    <span className='text-7xl font-bold'>{getPrice(39.99)}</span>
                  </div>
                </div>
                <div className='w-full my-10'>
                  <hr className='border border-neutral-200' />
                  <span className='py-5 text-base font-semibold text-center block text-Gray-650'>2 TB Storage</span>
                  <hr className='border border-neutral-200' />
                  <span className='py-5 text-base font-semibold text-center block text-Gray-650'>10 Users Allowed</span>
                  <hr className='border border-neutral-200' />
                  <span className='py-5 text-base font-semibold text-center block text-Gray-650'>Send up to 20 GB</span>
                  <hr className='border border-neutral-200' />
                </div>
                <div className='w-full '>
                  <a href="" className='uppercase text-white bg-gradient-to-r from-Gradient-start to-Gradient-end inline-block py-3 w-full hover:from-white hover:outline border-Gradient-end hover:text-Gradient-end text-center text-base font-semibold tracking-wide rounded-lg'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
