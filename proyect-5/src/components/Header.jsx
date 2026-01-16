import imgLogo from "../assets/logo.svg"
import imgMobilePatter from "../assets/bg-pattern-mobile-nav.svg"
import imgHamburger from "../assets/icon-hamburger.svg"
import imgClose from "../assets/icon-close.svg"
import { useState } from "react"

export default function Header() {

    const [isShow, setShow] = useState(false)

    const showNavigation = () => { setShow(!isShow) }

    return (
        <header>
            <div className="w-full mx-auto">
                <div className="container mx-auto w-full py-7 px-7 md:px-0 flex items-center justify-between bg-white relative z-50">
                    <div>
                        <img decoding="async" loading="eager" draggable="false" src={imgLogo} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="block md:hidden">
                        <button onClick={showNavigation} type="button" className="block">
                            <img decoding="async" loading="eager" draggable="false" src={isShow ? imgClose : imgHamburger} alt="" className="w-full h-full object-cover " />
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-10">
                            <li><a href="#" className="text-black/50 hover:text-black text-center py-2 font-karla text-base uppercase font-medium hover:border-white hover:cursor-pointer">How we Work</a></li>
                            <li><a href="#" className="text-black/50 hover:text-black text-center py-2 font-karla text-base uppercase font-medium hover:border-white hover:cursor-pointer">Blog</a></li>
                            <li><a href="#" className="text-black/50 hover:text-black text-center py-2 font-karla text-base uppercase font-medium hover:border-white hover:cursor-pointer">Account</a></li>
                            <li><a href="#" className="text-dark text-center py-2 px-5 font-karla text-base border-2 border-Blue-950 hover:bg-Blue-950 hover:text-white transition-all uppercase font-medium hover:cursor-pointer">View Plans</a></li>
                        </ul>
                    </div>
                </div>
                {
                    isShow && <div className="bg-Gray-950 absolute w-full z-50 right-0">
                        <div className="w-full h-[560px] relative">
                            <div className="flex flex-col p-5 gap-5 pt-10">
                                <a href="#" className="text-white block text-center py-2 font-karla text-xl uppercase font-medium relative z-50 border-2 border-Gray-950 hover:border-white">How we Work</a>
                                <a href="#" className="text-white block text-center py-2 font-karla text-xl uppercase font-medium relative z-50 border-2 border-Gray-950 hover:border-white">Blog</a>
                                <a href="#" className="text-white block text-center py-2 font-karla text-xl uppercase font-medium relative z-50 border-2 border-Gray-950 hover:border-white">Account</a>
                                <a href="#" className="text-white block text-center py-2 font-karla text-xl uppercase font-medium relative z-50 hover:bg-white hover:text-Gray-950 border-2 border-white">View Plans</a>
                            </div>
                            <img decoding="async" className="w-full absolute right-0 bottom-0" loading="lazy" src={imgMobilePatter} alt="" />
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}
