import imgPattherBg from "./assets/pattern-bg.svg"
import imgTanya from "./assets/image-tanya.jpg"
import imgNext from "./assets/icon-next.svg"
import imgPrev from "./assets/icon-prev.svg"
import imgJohn from "./assets/image-john.jpg"
import imgQuotes from "./assets/pattern-quotes.svg"
import { useState } from "react"

function App() {

  const slides = [
    {
      id: 1,
      image: imgTanya,
      description: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
      name: "Tanya Sinclair",
      role: "UX Engineer",
    },
    {
      id: 2,
      image: imgJohn,
      description: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      name: "John Tarkpor",
      role: "Junior Front-end Developer",
    },
  ];


  const [isPrevFirst, setPrevFirst] = useState(1);

  const TotalSliders = slides.length;

  const nexPreview = () => {
    setPrevFirst(prev => prev === TotalSliders ? 1 : prev + 1)
  }

  const PrevPreview = () => {
    setPrevFirst(prev => prev === 1 ? TotalSliders : prev - 1)
  }

  return (
    <>
      <main>
        <section>
          <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full md:w-[700px] lg:w-[950px] mx-auto p-5">
              {
                slides.map((slide, index) => {
                  return (
                    <div className={isPrevFirst === (index + 1) ? "block" : "hidden"} key={slide.id}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0" >
                        <div className="w-full relative lg:order-2">
                          <img draggable="false" src={imgPattherBg} className="w-full h-full lg:h-[500px] object-contain mr-auto ml-0 object-center lg:absolute lg:top-[-250px] -left-[25%]" alt="" />
                          <img draggable="false" src={slide.image} alt="" className="shadow-2xl size-[265px] md:size-96 lg:size-[350px] rounded-lg object-cover absolute top-1/2 left-1/2 lg:left-1/4 z-10 -translate-x-1/2 -translate-y-1/2" />
                          <div className="absolute top-[90%] lg:top-[170px] left-1/2 lg:left-[5%] -translate-x-1/2 z-20 -translate-y-1/2">
                            <div className="flex gap-3 lg:gap-2 py-3 px-3 bg-white rounded-full shadow-xl">
                              <div>
                                <button onClick={PrevPreview} type="button" className="block px-2 select-none" >
                                  <img draggable="false" decoding="async" className="size-3 md:size-4 object-contain" loading="eager" src={imgPrev} alt="" />
                                </button>
                              </div>
                              <div>
                                <button onClick={nexPreview} type="button" className="block px-2 select-none" >
                                  <img draggable="false" decoding="async" className="size-3 md:size-4 object-contain" loading="eager" src={imgNext} alt="" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center lg:order-1 relative py-10 z-20">
                          <img draggable="false" decoding="async" loading="eager" src={imgQuotes} alt="" className="absolute top-0 left-1/3 lg:left-[7%]" />
                          <p className="text-lg text-center font-light text-Blue-950 md:text-start md:text-2xl">{slide.description}</p>
                          <div className="mt-5 flex flex-col justify-center items-center md:justify-start md:flex-row gap-2">
                            <p className="font-bold text-base text-Blue-950">{slide.name}</p>
                            <p className="text-Gray-400 text-base">{slide.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </main>
    </>

  )

}


export default App
