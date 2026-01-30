import imgHeroMovile from "./assets/mobile/image-hero.jpg"
import imgHeroDesktop from "./assets/desktop/image-hero.jpg"
import interactive from "./assets/mobile/image-interactive.jpg"
import interactiveDesktop from "./assets/desktop/image-interactive.jpg"
import deepHearth from "./assets/mobile/image-deep-earth.jpg"
import nightArcade from "./assets/mobile/image-night-arcade.jpg"
import soccerTeam from "./assets/mobile/image-soccer-team.jpg"
import grid from "./assets/mobile/image-grid.jpg"
import fromAbove from "./assets/mobile/image-from-above.jpg"
import pocketBorealis from "./assets/mobile/image-pocket-borealis.jpg"
import curiosity from "./assets/mobile/image-curiosity.jpg"
import fisheye from "./assets/mobile/image-fisheye.jpg"
import deepHearthDesktop from "./assets/desktop/image-deep-earth.jpg"
import nightArcadeDesktop from "./assets/desktop/image-night-arcade.jpg"
import soccerTeamDesktop from "./assets/desktop/image-soccer-team.jpg"
import gridDesktop from "./assets/desktop/image-grid.jpg"
import fromAboveDesktop from "./assets/desktop/image-from-above.jpg"
import pocketBorealisDesktop from "./assets/desktop/image-pocket-borealis.jpg"
import curiosityDesktop from "./assets/desktop/image-curiosity.jpg"
import fisheyeDesktop from "./assets/desktop/image-fisheye.jpg"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="w-full relative">
            <img src={imgHeroMovile} className="w-full block md:hidden object-cover" alt="" />
            <img src={imgHeroDesktop} alt="" className="w-full hidden md:block object-cover" />
            <div className="absolute top-1/2 left-1/2 md:left-[12em] md:-translate-x-0 -translate-x-1/2 -translate-y-1/2">
              <div className="border-2 border-white p-5 w-full md:w-max">
                <h1 className="text-white text-5xl font-Josefin font-extralight uppercase block md:hidden">Immersive experiences that deliver</h1>
                <h1 className="text-white text-7xl font-Josefin font-extralight uppercase hidden md:block">Immersive <span className="inline-block md:block">experiences</span> <span className="inline-block md:block">that deliver</span></h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-5 md:px-0">
            <div className="flex flex-col md:flex-row py-32 relative">
              <div className="w-full">
                <img decoding="async" src={interactive} alt="" className="w-full object-cover object-center block md:hidden" />
                <img decoding="async" src={interactiveDesktop} alt="" className="hidden md:block w-[700px] object-cover object-center" />
              </div>
              <div className="max-w-xl bg-white md:absolute md:top-1/2 md:right-32 md:w-full py-10 md:px-10">
                <h2 className="text-3xl md:text-5xl md:text-start font-Josefin uppercase font-light text-center mb-5">The leader in interactive VR</h2>
                <p className="font-Alata font-light text-neutral-500 text-center md:text-start text-base">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-5 md:px-0">
            <div className="w-full flex flex-col md:flex-row items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-Josefin uppercase font-light text-center">Our creations</h2>
              </div>
              <div className="hidden md:block">
                <a href="" className="border-2 border-black font-Alata tracking-widest text-base w-max inline-block mx-auto uppercase text-black py-2 px-10 hover:bg-black hover:text-white transition-colors">See All</a>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:mb-36">
              <div className="relative group">
                <img src={deepHearth} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={deepHearthDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 text-white font-extralight font-Josefin text-2xl z-20 group-hover:opacity-100 group-hover:text-black">Deep <span className="block">Earth</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
              <div className="relative group">
                <img src={nightArcade} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={nightArcadeDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 group-hover:opacity-100 group-hover:text-black text-white font-light font-Josefin text-2xl z-20">Night <span className="block">arcade</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
              <div className="relative group">
                <img src={soccerTeam} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={soccerTeamDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 group-hover:opacity-100 group-hover:text-black z-20 text-white font-light font-Josefin text-2xl">Soccer <span className="block">team VR</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
              <div className="relative group">
                <img src={grid} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={gridDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 group-hover:opacity-100 group-hover:text-black z-20 text-white font-light font-Josefin text-2xl">The <span className="block">grid</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
              <div className="relative group">
                <img src={fromAbove} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={fromAboveDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 group-hover:opacity-100 group-hover:text-black z-20 text-white font-light font-Josefin text-2xl">From up <span className="block">above VR</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
              <div className="relative group">
                <img src={pocketBorealis} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={pocketBorealisDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 group-hover:opacity-100 group-hover:text-black z-20 text-white font-light font-Josefin text-2xl">Pocket <span className="block">borealis</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
              <div className="relative group">
                <img src={curiosity} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={curiosityDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 group-hover:opacity-100 group-hover:text-black z-20 text-white font-light font-Josefin text-2xl">The <span className="block">curiosity</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
              <div className="relative group">
                <img src={fisheye} alt="" className="w-full h-full object-cover block md:hidden" />
                <img src={fisheyeDesktop} alt="" className="w-full h-full object-cover hidden md:block group-hover:opacity-30 transition-opacity" />
                <h3 className="uppercase absolute bottom-5 left-5 group-hover:opacity-100 group-hover:text-black z-20 text-white font-light font-Josefin text-2xl">Make it <span className="block">fisheye</span></h3>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              </div>
            </div>
            <div className="w-full text-center pt-5 pb-32 block md:hidden">
              <a href="" className="border-2 border-black font-Alata tracking-widest text-base w-max inline-block mx-auto uppercase text-black py-2 px-10 hover:bg-black hover:text-white transition-colors">See All</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )

}

export default App
