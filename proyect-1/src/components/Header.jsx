import imgLogo from "../assets/logo.svg"
export default function Header() {
  return (
    <>
      <header>
        <div className="container mx-auto w-full flex items-center justify-between py-8 px-5">
          <div>
            <img decoding="async" loading="eager" draggable="false" src={imgLogo} alt="" width="80px" className="object-cover object-center" />
          </div>
          <div>
            <ul className="flex gap-4 md:gap-8 lg:gap-10">
              <li><a href="#" className="font-Raleway text-sm capitalize md:text-base font-light text-neutral-300 hover:underline hover:text-white transition">Features</a></li>
              <li><a href="#" className="font-Raleway text-sm capitalize md:text-base font-light text-neutral-300 hover:underline hover:text-white transition">Team</a></li>
              <li><a href="#" className="font-Raleway text-sm capitalize md:text-base font-light text-neutral-300 hover:underline hover:text-white transition">Sign In</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
