import Header from "./components/Header"
import imgDevices from "./assets/illustration-devices.svg"
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto flex flex-col lg:flex-row-reverse justify-center items-center overflow-hidden">
          <div className="grow md:w-[500px] w-full pl-5 md:pl-0">
            <img decoding="async" loading="eager" draggable="false" className="max-w-[30.5rem] md:max-w-7xl mx-auto object-cover object-center" src={imgDevices} alt="" />
            <div className="bg-Blue-100 w-full h-[40vh] absolute top-0 -right-1/2 rounded-bl-3xl -z-10"></div>
          </div>
          <div className="grow md:w-[500px] px-8 md:px-0 container mx-auto py-20">
            <div className="flex items-center gap-5">
              <div>
                <span className="bg-Blue-950 text-white py-1 px-3 rounded-full font-Barlow">New</span>
              </div>
              <div>
                <p className="text-Blue-950 text-Condense font-thin font-Barlow tracking-widest text-lg">Monograph Dashboard</p>
              </div>
            </div>
            <h1 className="font-Barlow text-4xl md:text-5xl lg:text-7xl text-balance my-5 uppercase text-Blue-950 font-bold">Powerful insights into your team</h1>
            <p className="block font-Barlow font-thin text-2xl mb-5 md:mb-10">Project planning and time tracking for agile teams</p>
            <div className="flex items-center gap-5">
              <div>
                <a href="" className="bg-Red-400 hover:bg-Red-400/50 text-white font-barlow font-semibold py-2 px-5 block w-max rounded-lg">Schedule a demo</a>
              </div>
              <div>
                <p className="text-Blue-950 text-Condense font-thin font-Barlow tracking-widest text-sm md:text-xl">to see a live preview</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
