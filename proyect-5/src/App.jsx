import Header from "./components/Header"
import Footer from "./components/Footer"
import imgMovile from "./assets/image-intro-mobile.jpg"
import imgDestop from "./assets/image-intro-desktop.jpg"
import imgIntroLeft from "./assets/bg-pattern-intro-left-mobile.svg"
import imgIntroRight from "./assets/bg-pattern-intro-right-mobile.svg"
import imgIntroDesktop from "./assets/bg-pattern-intro-right-desktop.svg"
import imgSnappy from "./assets/icon-snappy-process.svg"
import imgAffordable from "./assets/icon-affordable-prices.svg"
import imgPeople from "./assets/icon-people-first.svg"
import imgWork from "./assets/bg-pattern-how-we-work-mobile.svg"
import imgIntoLedtDesktop from "./assets/bg-pattern-intro-left-desktop.svg"

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <img decoding="async" loading="eager" src={imgMovile} alt="" className="block lg:hidden w-full h-full object-cover object-center lg:absolute lg:w-[500px] z-10 top-0 right-0" />
          <img decoding="async" loading="eager" src={imgDestop} alt="" className="hidden lg:block lg:absolute z-20 top-44 right-36" />
        </section>
        <section>
          <div className="w-full bg-Blue-950 px-5 py-20 lg:py-36 text-center relative">
            <img decoding="async" loading="lazy" className="absolute left-0 top-0 block lg:hidden" src={imgIntroLeft} alt="" />
            <img decoding="async" loading="lazy" className="absolute left-0 -bottom-[52%] hidden lg:block z-50" src={imgIntoLedtDesktop} alt="" />
            <div className="container mx-auto">
              <div className="w-full md:w-[650px]  lg:text-start">
                <hr className="border border-Blue-500 w-52 mx-auto md:mr-auto md:ml-0 mb-10 hidden lg:block" />
                <h1 className="text-white text-5xl lg:text-7xl lg:text-start text-balance text-center font-serifDisplay">Humanizing your insurance.</h1>
                <p className="text-white lg:text-start text-center font-karla font-light text-lg py-7">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                <a href="#" className="text-white w-max mx-auto md:mr-auto md:ml-0 px-7 text-center hover:bg-white hover:text-Blue-950 py-2 font-karla text-lg uppercase font-normal border-2 border-white block">View Plans</a>
              </div>
            </div>
            <img decoding="async" loading="lazy" src={imgIntroDesktop} alt="" className="hidden lg:block absolute -top-20 right-0 z-30" />
            <img decoding="async" loading="lazy" className="absolute top-1/2 right-0 z-20 block lg:hidden" src={imgIntroRight} alt="" />
          </div>
        </section>
        <section>
          <div className="container mx-auto lg:mt-44">
            <div className="w-full py-32">
              <hr className="border border-Blue-950/50 w-52 mx-auto md:mr-auto md:ml-0 mb-10" />
              <h2 className="text-center md:text-start text-4xl lg:text-5xl text-Gray-950 font-bold font-serifDisplay tracking-wide mb-16">We’re different</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
                <div>
                  <img decoding="async" loading="lazy" className="size-20 object-cover object-center mx-auto mb-10" src={imgSnappy} alt="" />
                  <h3 className="text-center text-2xl font-medium font-serifDisplay mb-5">Snappy Process</h3>
                  <p className="text-center font-karla text-Gray-700 text-balance text-base">Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                </div>
                <div>
                  <img decoding="async" loading="lazy" className="size-20 object-cover object-center mx-auto mb-10" src={imgAffordable} alt="" />
                  <h3 className="text-center text-2xl font-medium font-serifDisplay mb-5">Affordable Prices</h3>
                  <p className="text-center font-karla text-Gray-700 text-balance text-base">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                </div>
                <div>
                  <img decoding="async" loading="lazy" className="size-20 object-cover object-center mx-auto mb-10" src={imgPeople} alt="" />
                  <h3 className="text-center text-2xl font-medium font-serifDisplay mb-5">People First</h3>
                  <p className="text-center font-karla text-Gray-700 text-balance text-base">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-5">
            <div className="w-full bg-Blue-950 py-16 px-5 lg:px-28 text-center relative overflow-hidden">
              <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-10">
                <div>
                  <h2 className="text-5xl text-white font-serifDisplay font-medium text-center lg:text-start">Find out more about how we work</h2>
                </div>
                <div className="lg:w-full lg:text-end">
                  <a href="#" className="text-white w-max mx-auto px-7 text-center py-3 hover:bg-white hover:text-Blue-950 relative z-40 transition-all font-karla text-lg uppercase font-normal border-2 border-white">How we work</a>
                </div>
              </div>
              <img decoding="async" loading="lazy" src={imgWork} alt="" className="block md:hidden absolute top-0 right-0" />
              <img decoding="async" loading="lazy" src={imgIntroDesktop} alt="" className="hidden md:block absolute -top-1/2 right-0" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
