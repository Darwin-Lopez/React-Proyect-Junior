import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import Header from "./components/Header"
import Footer from "./components/Footer"
import imgIntro from "./assets/illustration-intro.png"
import imgProductive from "./assets/illustration-stay-productive.png"
import imgAcces from "./assets/icon-access-anywhere.svg"
import imgSecurity from "./assets/icon-security.svg"
import imgCollaboration from "./assets/icon-collaboration.svg"
import imgFile from "./assets/icon-any-file.svg"
import imgArrow from "./assets/icon-arrow.svg"
import imgQuotes from "./assets/bg-quotes.png"
import imgProfile1 from "./assets/profile-1.jpg"
import imgProfile2 from "./assets/profile-2.jpg"
import imgProfile3 from "./assets/profile-3.jpg"

function App() {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    toast.success("Your email was successfully registered");
    reset();
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <main className="w-full md:max-w-[1440px] mx-auto">
        <section>
          <div className="w-full md:w-[700px] mx-auto text-center p-10">
            <img decoding="async" loading="eager" src={imgIntro} alt="" className="w-full text-center" />
          </div>
          <div className="w-full md:w-[500px] mx-auto px-5 text-center">
            <h2 className="text-center font-Raleway text-white text-2xl font-semibold">All your files in one secure location, accessible anywhere.</h2>
            <p className="text-center text-neutral-300 text-base font-Raleway my-5">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <a href="#" className="py-3 px-24 bg-Cyan-500 hover:bg-Teal-200 transition text-white bg-gradient-to-l text-nowrap inline-block rounded-full font-semibold font-Raleway text-sm">Get Started</a>
          </div>
        </section>
        <section>
          <div className="w-full md:w-[700px] mx-auto grid grid-cols-1 md:grid-cols-2 px-5 py-24 gap-24">
            <div className="w-full">
              <img decoding="async" loading="lazy" className="size-14 mx-auto object-contain object-center mb-8" src={imgAcces} alt="" />
              <h2 className="text-white text-center mb-3 text-lg md:text-xl font-Raleway font-semibold">Access your files, anywhere</h2>
              <p className="text-neutral-300 text-center text-sm md:text-base text-balance font-Raleway">The ability to use a smartphone, tablet, or computer to access your account means your
                files follow you everywhere.</p>
            </div>
            <div className="w-full">
              <img decoding="async" loading="lazy" className="size-14 mx-auto object-contain object-center mb-8" src={imgSecurity} alt="" />
              <h2 className="text-white text-center mb-3 text-lg md:text-xl font-Raleway font-semibold">Security you can trust</h2>
              <p className="text-neutral-300 text-center text-sm md:text-base text-balance font-Raleway">2-factor authentication and user-controlled encryption are just a couple of the security
                features we allow to help secure your files.</p>
            </div>
            <div className="w-full">
              <img decoding="async" loading="lazy" className="size-14 mx-auto object-contain object-center mb-8" src={imgCollaboration} alt="" />
              <h2 className="text-white text-center mb-3 text-lg md:text-xl font-Raleway font-semibold">Real-time collaboration</h2>
              <p className="text-neutral-300 text-center text-sm md:text-base text-balance font-Raleway">Securely share files and folders with friends, family and colleagues for live collaboration.
                No email attachments required.</p>
            </div>
            <div className="w-full">
              <img decoding="async" loading="lazy" className="size-14 mx-auto object-contain object-center mb-8" src={imgFile} alt="" />
              <h2 className="text-white text-center mb-3 text-lg md:text-xl font-Raleway font-semibold">Store any type of file</h2>
              <p className="text-neutral-300 text-center text-sm md:text-base text-balance font-Raleway">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                file types to be securely stored and shared.</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto w-full flex items-center flex-col md:flex-row">
            <div className="grow md:w-[350px] px-10 py-5">
              <img decoding="async" loading="lazy" className="w-full h-full object-cover object-center" src={imgProductive} alt="" />
            </div>
            <div className="grow md:w-[350px] p-5">
              <h3 className="text-lg md:text-xl font-Sans text-white">Stay productive, wherever you are</h3>
              <p className="text-neutral-300 my-5 font-Raleway text-sm md:text-base ">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
              <p className="text-neutral-300 font-Raleway text-sm md:text-base mb-5">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              <a href="#" className="group w-max flex items-center gap-2 font-Raleway text-sm md:text-base transition-all text-Teal-200 hover:text-white hover:border-white border-b-2 border-Teal-200/50 pb-1">See how Fylo works
                <img decoding="async" loading="lazy" src={imgArrow} className="filter group-hover:grayscale size-5 object-cover object-center" alt="" /> </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-24 px-12 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center relative gap-5">
              <img decoding="async" loading="lazy" src={imgQuotes} alt="" className="absolute -top-6 left-0 size-8 object-contain object-center -z-10" />
              <div className="w-full bg-Navy-800 p-5 rounded-md">
                <p className="text-neutral-300 text-xs md:text-base mb-5 font-Raleway">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="flex items-center gap-3">
                  <div>
                    <img decoding="async" loading="lazy" className="size-8 rounded-full object-cover object-center" src={imgProfile1} alt="" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm md:text-base tracking-wide font-semibold font-Sans mb-1">Satish Patel</h4>
                    <p className="text-neutral-300 font-light text-xs md:text-sm">Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-Navy-800 p-5 rounded-md">
                <p className="text-neutral-300 text-xs md:text-base mb-5 font-Raleway">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="flex items-center gap-3">
                  <div>
                    <img decoding="async" loading="lazy" className="size-8 rounded-full object-cover object-center" src={imgProfile2} alt="" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm md:text-base tracking-wide font-semibold font-Sans mb-1">Bruce Mckenzie</h4>
                    <p className="text-neutral-300 font-light text-xs md:text-sm">Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-Navy-800 p-5 rounded-md">
                <p className="text-neutral-300 text-xs md:text-base mb-5 font-Raleway">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="flex items-center gap-3">
                  <div>
                    <img decoding="async" loading="lazy" className="size-8 rounded-full object-cover object-center" src={imgProfile3} alt="" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm md:text-base tracking-wide font-semibold font-Sans mb-1">Iva Boyd</h4>
                    <p className="text-neutral-300 font-light text-xs md:text-sm">Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-5">
            <div className=" w-full mx-auto lg:w-[1024px] bg-Navy-850 transform translate-y-32 rounded-lg p-8">
              <h4 className="text-white text-lg font-Raleway font-semibold tracking-wide text-center mb-3">Get early access today</h4>
              <p className="text-neutral-300 text-center mb-5">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col md:flex-row items-start gap-5">
                  <div className="w-full">
                    <input required type="text" {...register("email", {
                      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    })} name="email" className="w-full py-5 px-5 text-sm bg-white rounded-full font-Sans" placeholder="email@example.com" />
                    {errors.email?.type === "pattern" && <p className="text-sm font-Sans text-Red-500 mt-3 px-5">Please enter a valid email address</p>}
                  </div>
                  <div className="w-full md:w-max">
                    <button type="submit" className="py-4 px-10 w-full bg-Cyan-500 hover:bg-Teal-200 transition text-white bg-gradient-to-l text-nowrap inline-block rounded-full font-semibold font-Raleway text-base capitalize">Get Started For Free</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
