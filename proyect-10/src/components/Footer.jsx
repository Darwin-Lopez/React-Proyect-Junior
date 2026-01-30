import logoFooter from "../assets/logo.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"

function Footer() {
    return (
        <footer>
            <div className="w-full bg-black py-16 px-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full text-center">
                        <img src={logoFooter} className="mx-auto md:ml-0 md:mr-auto" alt="" />
                        <ul className="flex flex-col md:flex-row gap-5 justify-center md:justify-start py-10 md:py-5">
                            <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">About</a></li>
                            <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Careers</a></li>
                            <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Events</a></li>
                            <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Products</a></li>
                            <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-row justify-center md:justify-end items-center gap-5">
                            <li><a href=""><img decoding="async" loading="lazy" className="size-7 object-contain object-center" src={facebook} alt="" /></a></li>
                            <li><a href=""><img decoding="async" loading="lazy" className="size-7 object-contain object-center" src={twitter} alt="" /></a></li>
                            <li><a href=""><img decoding="async" loading="lazy" className="size-7 object-contain object-center" src={pinterest} alt="" /></a></li>
                            <li><a href=""><img decoding="async" loading="lazy" className="size-7 object-contain object-center" src={instagram} alt="" /></a></li>
                        </ul>
                        <p className="text-Grey-200 text-center md:text-end pt-5 font-Josefin font-normal text-base">© 2021 Loopstudios. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer