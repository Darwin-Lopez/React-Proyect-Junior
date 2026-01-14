import imgLogo from "../assets/logo.svg"
import imgHamburger from "../assets/icon-hamburger.svg"
import imgClose from "../assets/icon-close.svg"
import { useState } from "react"
export default function Header() {

    const [isClick, setIsclick] = useState(false)

    const showNavigation = () => {
        setIsclick(!isClick)
    }

    return (
        <header>
            <div className="container mx-auto flex items-center justify-between p-10 md:py-10 md:px-0 relative">
                <div>
                    <img decoding="async" loading="eager" draggable="false" src={imgLogo} alt="" />
                </div>
                <div className="hidden md:block">
                    <div className="flex flex-row items-center rounded-xl mx-10 py-5 gap-10">
                        <a href="" className="block py-2 text-center font-Barlow hover:underline text-xl font-semibold text-Blue-950">Product</a>
                        <a href="" className="block py-2 text-center font-Barlow hover:underline text-xl font-semibold text-Blue-950">Features</a>
                        <a href="" className="block py-2 text-center font-Barlow hover:underline text-xl font-semibold text-Blue-950">Pricing</a>
                        <hr className="my-3 md:size-2 bg-slate-700/50 rounded-full" />
                        <a href="" className="block pt-2 text-center font-Barlow hover:underline text-xl text-Blue-950/50 font-semibold">Login</a>
                    </div>
                </div>
                <div className="block md:hidden">
                    <button type="button" className="select-none" onClick={showNavigation}>
                        <img src={imgHamburger} alt="" />
                    </button>
                </div>
                {
                    isClick && <div className="absolute top-full left-0 w-full z-20">
                    <div className="flex flex-col bg-white border border-neutral-200 shadow-lg rounded-xl mx-10 py-5">
                        <a href="" className="block py-2 text-center font-Barlow text-xl font-semibold text-Blue-950">Product</a>
                        <a href="" className="block py-2 text-center font-Barlow text-xl font-semibold text-Blue-950">Features</a>
                        <a href="" className="block py-2 text-center font-Barlow text-xl font-semibold text-Blue-950">Pricing</a>
                        <hr className="my-3" />
                        <a href="" className="block pt-2 text-center font-Barlow text-xl text-Blue-950/50 font-semibold">Login</a>
                    </div>
                </div>
                }
                
            </div>
        </header>
    )
}
