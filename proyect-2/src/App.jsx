import imgLogo from "./assets/logo.svg"
import imgHeader from "./assets/bg-header-mobile.png"
import imgHeaderDesktop from "./assets/bg-header-desktop.png"
import imgComputer from "./assets/image-computer.png"
import imgDevices from "./assets/image-devices.png"
import imgBlacklist from "./assets/icon-blacklist.svg"
import imgText from "./assets/icon-text.svg"
import imgPreview from "./assets/icon-preview.svg"
import imgGoogle from "./assets/logo-google.png"
import imgIbm from "./assets/logo-ibm.png"
import imgMicrosoft from "./assets/logo-microsoft.png"
import imgHp from "./assets/logo-hp.png"
import imgGraphics from "./assets/logo-vector-graphics.png"

import Footer from "./components/Footer"
function App() {

  return (
    <>
      <main className="w-full min-h-screen relative flex flex-col gap-28 lg:py-20">
        <section>
          <img decoding="async" draggable="false" src={imgHeader} alt="" className="block -z-10 md:hidden w-full absolute top-0 right-0z" loading="eager" />
          <img decoding="async" draggable="false" src={imgHeaderDesktop} alt="" className="hidden -z-10 md:block w-full absolute top-0 right-0z" loading="eager" />
        </section>
        <section>
          <div className="px-5">
            <div className="w-full">
              <img decoding="async" draggable="false" src={imgLogo} alt="" className="size-28 mx-auto mb-10" loading="eager" />
            </div>
            <h1 className="text-center text-3xl md:text-4xl font-semibold text-Gray-700 text-balance mb-5">A history of everunthing you copy</h1>
            <p className="text-center text-Gray-500 mb-10">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
              <a href="#" className="py-3 transition-all md:px-10 w-full md:w-max shadow shadow-gray-400 bg-Green-500 hover:bg-Green-500/70 inline-block text-center text-white text-lg rounded-full">Download for iOs</a>
              <a href="#" className="py-3 transition-all md:px-10 w-full md:w-max shadow shadow-gray-400 bg-Blue-100 hover:bg-Blue-100/70 inline-block text-center text-white text-lg rounded-full">Download for Mac</a>
            </div>
          </div>
        </section>
        <section>
          <div className="px-5">
            <div className="container md:w-[700px] mx-auto">
              <h2 className="text-2xl md:text-3xl px-10 text-center text-Gray-700 font-semibold">Keep track of your snippets</h2>
              <p className="text-Gray-500 text-center mt-5 text-lg">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-10 lg:gap-20 justify-start">
              <div>
                <img decoding="async" draggable="false" loading="lazy" className="px-5 w-full h-full object-cover object-center my-12" src={imgComputer} alt="" />
              </div>
              <div>
                <div className="max-w-[500px] flex flex-col gap-14">
                  <div>
                    <h2 className="text-2xl px-10 md:px-0 text-center md:text-start mb-3 text-Gray-700 font-semibold">Quick Search</h2>
                    <p className="text-Gray-500  text-center md:text-start text-lg text-balance">Easily search your snippets by content, category, web address, application, and more.</p>
                  </div>
                  <div>
                    <h2 className="text-2xl px-10 md:px-0 text-center md:text-start mb-3 text-Gray-700 font-semibold">iCloud Sync</h2>
                    <p className="text-Gray-500  text-center md:text-start text-lg text-balance">Instantly saves and syncs snippets across all your devices.</p>
                  </div>
                  <div>
                    <h2 className="text-2xl px-10 md:px-0 text-center md:text-start mb-3 text-Gray-700 font-semibold">Complete History</h2>
                    <p className="text-Gray-500  text-center md:text-start text-lg text-balance">Retrieve any snippets from the first moment you started using the app.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full px-5 text-center">
            <div className="w-full md:w-[700px] mx-auto">
              <h2 className="text-2xl md:text-3xl px-10 text-center mb-3 text-Gray-700 font-semibold">Access Clipboard Anywhere</h2>
            <p className="text-Gray-500 text-center text-lg">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
            </div>
            <img decoding="async" draggable="false" loading="lazy" className="px-5 py-12 mx-auto" src={imgDevices} alt="" />
            <h2 className="text-2xl md:text-3xl px-10 text-center mb-3 text-Gray-700 font-semibold">Supercharge your workflow</h2>
            <p className="text-Gray-500 text-center text-lg">We’ve got the tools to boost your productivity.</p>
            <div className="container mx-auto">
              <div className="w-full flex flex-col md:flex-row items-start justify-center gap-14 my-14">
                <div className="grow md:w-[400px]">
                  <img decoding="async" draggable="false" loading="lazy" className="mx-auto size-10 object-contain mb-8" src={imgBlacklist} alt="" />
                  <h2 className="text-2xl px-10 text-center mb-3 text-Gray-700 font-semibold">Create blacklists</h2>
                  <p className="text-Gray-500 text-center text-lg">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </div>
                <div className="grow md:w-[400px]">
                  <img decoding="async" draggable="false" loading="lazy" className="mx-auto size-10 object-contain mb-8" src={imgText} alt="" />
                  <h2 className="text-2xl px-10 text-center mb-3 text-Gray-700 font-semibold">Plain text snippets</h2>
                  <p className="text-Gray-500 text-center text-lg">Remove unwanted formatting from copied text for a consistent look.</p>
                </div>
                <div className="grow md:w-[400px]">
                  <img decoding="async" draggable="false" loading="lazy" className="mx-auto size-10 object-contain mb-8" src={imgPreview} alt="" />
                  <h2 className="text-2xl px-10 text-center mb-3 text-Gray-700 font-semibold">Sneak preview</h2>
                  <p className="text-Gray-500 text-center text-lg">Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full mx-auto">
            <div className="flex flex-col items-center md:flex-row justify-center gap-14 md:gap-16 lg:gap-24">
              <div>
                <img decoding="async" draggable="false" loading="lazy" className="mx-auto object-cover" width="140px" height="auto" src={imgGoogle} alt="" />
              </div>
              <div>
                <img decoding="async" draggable="false" loading="lazy" className="mx-auto object-cover" width="140px" height="auto" src={imgIbm} alt="" />
              </div>
              <div>
                <img decoding="async" draggable="false" loading="lazy" className="mx-auto object-cover" width="140px" height="auto" src={imgMicrosoft} alt="" />
              </div>
              <div>
                <img decoding="async" draggable="false" loading="lazy" className="mx-auto object-cover" width="140px" height="auto" src={imgHp} alt="" />
              </div>
              <div>
                <img decoding="async" draggable="false" loading="lazy" className="mx-auto object-cover" width="140px" height="auto" src={imgGraphics} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-5">
            <div className="w-full md:w-[700px] mx-auto">
              <h2 className="text-2xl md:text-3xl px-10 text-center mb-3 text-Gray-700 font-semibold">Clipboard for iOS and Mac OS</h2>
            <p className="text-Gray-500 text-center text-lg mb-10">Available for free on theflex flex-col md:flex-row items-center md:gap-10 lg:gap-20 justify-start App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
            </div>
            <div className="w-full flex items-center flex-col md:flex-row gap-5 justify-center">
              <a href="#" className="py-3 md:px-10 w-full transition-all md:w-max shadow shadow-gray-400 bg-Green-500 hover:bg-Green-500/70 inline-block text-center text-white text-lg rounded-full">Download for iOs</a>
              <a href="#" className="py-3 md:px-10 w-full transition-all md:w-max shadow shadow-gray-400 bg-Blue-100 hover:bg-Blue-100/70 inline-block text-center text-white text-lg rounded-full">Download for Mac</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )

}

export default App
