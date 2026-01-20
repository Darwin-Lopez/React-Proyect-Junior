import bgMovile from "./assets/bg-mobile.png"
import bgDesktop from "./assets/bg-desktop.png"
import logo from "./assets/logo.svg"
import document from "./assets/icon-document.svg"
import folder from "./assets/icon-folder.svg"
import upload from "./assets/icon-upload.svg"

function App() {
  return (
    <>
      <section>
        <div className={`w-full min-h-screen bg-[url(./assets/bg-mobile.png)] md:bg-[url(./assets/bg-desktop.png)] bg-right-bottom bg-Blue-950 bg-no-repeat bg-cover md:bg-contain flex items-center justify-center relative`}>
          <div className="w-full max-w-[400px] md:max-w-full md:w-[900px] flex flex-col md:flex-row items-center md:items-end gap-5 relative">
            <div className="w-full md:w-max px-5 md:px-0">
              <div className="w-full md:w-max bg-Blue-850 rounded-b-lg rounded-s-lg rounded-tr-[5rem] p-10 md:pr-28">
                <img decoding="async" loading="eager" className="mb-10" src={logo} alt="" />
                <div className="flex items-center gap-5">
                  <div className="bg-Blue-950 p-3 rounded-lg">
                    <img decoding="async" loading="eager" draggable="false" className="size-5 object-contain object-center" src={document} alt="" />
                  </div>
                  <div className="bg-Blue-950 p-3 rounded-lg">
                    <img decoding="async" loading="eager" draggable="false" className="size-5 object-contain object-center" src={folder} alt="" />
                  </div>
                  <div className="bg-Blue-950 p-3 rounded-lg">
                    <img decoding="async" loading="eager" draggable="false" className="size-5 object-contain object-center" src={upload} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-5 md:px-0 relative">
              <div className="w-full bg-Blue-850 rounded-lg px-10 pt-10 pb-14 md:pt-7 md:pb-7">
                <p className="text-white font-thin text-center md:text-start">You’ve used <span className="font-bold text-white">815 GB</span> of your storage</p>
                <div className="mt-5 mb-2 w-full h-6 p-1 bg-Blue-950/70 rounded-full flex items-center justify-start">
                  <div className="w-[80%] h-4 rounded-full bg-gradient-to-r from-Gradient-from to-Gradient-to flex items-center justify-end p-1">
                    <div className="size-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-white font-semibold text-sm">0 GB</span>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">1000 GB</span>
                  </div>
                </div>
                <div className="absolute -bottom-1/4 right-1/4 md:-top-1/3 md:right-12">
                  <div className="relative flex items-center gap-3 justify-center bg-white py-5 px-7 rounded-xl shadow-xl md:rounded-br-none">
                    <p className="text-Blue-950 text-5xl font-bold">185</p>
                    <span className="text-sm font-semibold text-GrayishBlue uppercase">GB LEFT</span>

                    <div className="hidden md:block absolute right-0 top-full bg-white size-6 
                    arrow z-20">
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
