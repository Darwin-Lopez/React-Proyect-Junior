import Header from "./components/Header"
import imgIconUp from "./assets/icon-up.svg"
import imgFacebook from "./assets/icon-facebook.svg"
import imgTwitter from "./assets/icon-twitter.svg"
import imgInstagram from "./assets/icon-instagram.svg"
import imgYoutube from "./assets/icon-youtube.svg"
import imgDown from "./assets/icon-down.svg"

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container mx-auto p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="border-t-4 border-Blue-500 dark:bg-Navy-950 hover:cursor-pointer hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 py-10 bg-Navy-50 shadow flex flex-col rounded-lg justify-center text-center gap-6">
              <div className="w-full text-center flex justify-center gap-2 ">
                <div>
                  <img draggable="false" className="size-5 object-cover object-center" decoding="async" loading="eager" src={imgFacebook} alt="" />
                </div>
                <div>
                  <span className="font-semibold block dark:text-Gray-400 tracking-wide">@nathanf</span>
                </div>
              </div>
              <div>
                <p className="text-center font-bold block text-6xl dark:text-white">1987</p>
                <span className="text-center text-Gray-650 text-sm font-extralight uppercase tracking-widest dark:text-Gray-400">Followers</span>
              </div>
              <div>
                <div className="w-full flex justify-center items-center gap-2">
                  <div>
                    <img draggable="false" className="size-2 object-cover object-center" src={imgIconUp} alt="" />
                  </div>
                  <div>
                    <span className="font-semibold text-Green-500 text-base">12 Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-4 border-Blue-500 dark:bg-Navy-950 hover:cursor-pointer hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 py-10 bg-Navy-50 shadow flex flex-col rounded-lg justify-center text-center gap-6">
              <div className="w-full text-center flex justify-center gap-2">
                <div>
                  <img draggable="false" className="size-5 object-cover object-center" decoding="async" loading="eager" src={imgTwitter} alt="" />
                </div>
                <div>
                  <span className="font-semibold block dark:text-Gray-400 tracking-wide">@nathanf</span>
                </div>
              </div>
              <div>
                <p className="text-center font-bold block text-6xl dark:text-white">1044</p>
                <span className="text-center text-Gray-650 text-sm font-extralight uppercase tracking-widest dark:text-Gray-400">Followers</span>
              </div>
              <div>
                <div className="w-full flex justify-center items-center gap-2">
                  <div>
                    <img draggable="false" className="size-2 object-cover object-center" src={imgIconUp} alt="" />
                  </div>
                  <div>
                    <span className="font-semibold text-Green-500 text-base">99 Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 bg-Navy-50 dark:bg-Navy-950 shadow hover:cursor-pointer hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 flex flex-col rounded-lg justify-center text-center gap-6 relative overflow-hidden">
              <div className="absolute -top-0 right-0 w-full h-1 z-50 rounded-lg bg-gradient-to-r from-Gradient-Instagram-to to-Gradient-Instagram-via via-Gradient-Instagram-from"></div>
              <div className="w-full text-center flex justify-center gap-2">
                <div>
                  <img draggable="false" className="size-5 object-cover object-center" decoding="async" loading="eager" src={imgInstagram} alt="" />
                </div>
                <div>
                  <span className="font-semibold block dark:text-Gray-400 tracking-wide">@realnathanf</span>
                </div>
              </div>
              <div>
                <p className="text-center font-bold block text-6xl dark:text-white">11K</p>
                <span className="text-center text-Gray-650 text-sm font-extralight uppercase tracking-widest dark:text-Gray-400">Followers</span>
              </div>
              <div>
                <div className="w-full flex justify-center items-center gap-2">
                  <div>
                    <img draggable="false" className="size-2 object-cover object-center" src={imgIconUp} alt="" />
                  </div>
                  <div>
                    <span className="font-semibold text-Green-500 text-base">1099 Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-4 border-Red-700 dark:bg-Navy-950 py-10 hover:cursor-pointer hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 bg-Navy-50 shadow flex flex-col rounded-lg justify-center text-center gap-6">
              <div className="w-full text-center flex justify-center gap-2">
                <div>
                  <img draggable="false" className="size-5 object-cover object-center" decoding="async" loading="eager" src={imgYoutube} alt="" />
                </div>
                <div>
                  <span className="font-semibold block dark:text-Gray-400 tracking-wide">@nathanf</span>
                </div>
              </div>
              <div>
                <p className="text-center font-bold block text-6xl dark:text-white">8239</p>
                <span className="text-center text-Gray-650 text-sm font-extralight uppercase tracking-widest dark:text-Gray-400">Followers</span>
              </div>
              <div>
                <div className="w-full flex justify-center items-center gap-2">
                  <div>
                    <img draggable="false" className="size-2 object-cover object-center" src={imgDown} alt="" />
                  </div>
                  <div>
                    <span className="font-semibold text-Red-500 text-base">144 Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto p-5 md:px-0">
            <h2 className="text-Gray-650 font-bold text-2xl mb-10 md:mtz-5 dark:text-white">Overview - Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Page Views</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6" src={imgFacebook} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">87</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgIconUp} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Green-500 text-base">3 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Likes</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6 object-contain" src={imgFacebook} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">52</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgDown} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Red-700 text-base">2 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Likes</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6 object-contain" src={imgInstagram} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">5462</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgIconUp} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Green-500 text-base">2257 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Profile Views</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6 object-contain" src={imgInstagram} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">52K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgIconUp} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Green-500 text-base">1375 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Retweets</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6 object-contain" src={imgTwitter} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">117</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgIconUp} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Green-500 text-base">303 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Likes</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6 object-contain" src={imgTwitter} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">507</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgIconUp} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Green-500 text-base">553 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Likes</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6 object-contain" src={imgYoutube} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">107</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgDown} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Red-500 text-base">19 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-Navy-50 hover:cursor-pointer dark:bg-Navy-950 rounded-lg shadow p-7 flex flex-col hover:bg-Gray-400/50 hover:dark:bg-Navy-950/70 gap-7">
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col items-start justify-between gap-5">
                    <span className="text-Gray-650 text-base font-bold block dark:text-Gray-400">Total Views</span>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-5">
                    <img draggable="false" decoding="async" loading="lazy" className="size-6 object-contain" src={imgYoutube} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-bold dark:text-white">1407</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <img draggable="false" className="size-2 object-contain object-center" src={imgDown} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold text-Red-500 text-base">12 %</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;