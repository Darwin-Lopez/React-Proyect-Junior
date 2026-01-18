import { useEffect, useState } from 'react';
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';

function Header() {

    const currentThemeMode = localStorage.getItem("theme-data") === "true";
    const [isTheme, setTheme] = useState(currentThemeMode);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isTheme)
    }, [isTheme])

    const changeThemeMode = (e) => {
        setTheme(prev => {
            localStorage.setItem("theme-data", !prev)
            return !prev;
        })
    }

    return (
        <header>
            <div className="container mx-auto p-5 md:py-10 md:px-0">
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div>
                        <h1 className="font-semibold text-2xl dark:text-white">Social Media Dashboard</h1>
                        <p className="text-Gray-650 font-semibold text-base dark:text-Gray-400">Total Followers: 23,004</p>
                        <hr className="border-Gray-650 my-5 md:hidden" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between gap-3'>
                            <div>
                                <span className="text-start font-bold text-Gray-650 text-base dark:text-white">Dark Mode</span>
                            </div>
                            <div>
                                <Toggle checked={!isTheme} onChange={changeThemeMode} size='lg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header