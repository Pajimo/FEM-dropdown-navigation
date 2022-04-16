import Footer from "./footer"
import Header from "./header"
import hero_desktop from '../assets/images/image-hero-desktop.png'
import hero_mobile from '../assets/images/image-hero-mobile.png'
import audiophile from '../assets/images/client-audiophile.svg'
import databiz from '../assets/images/client-databiz.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'

import { useEffect, useState } from "react"

const Main = () => {

    const [windowDimension, setWindowDimension] = useState()

    const detectSize = () => {
        setWindowDimension(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])


    return(
        <>
            <div className="">
                <div className="">
                    <div>
                        <Header />
                    </div>
                    <div className="md:flex md:flex-row md:px-32 py-7 md:py-16 h-full">
                        <div className="md:basis-1/2 md:flex md:justify-end">
                            <img src={windowDimension > 830 ? hero_desktop : hero_mobile} alt='hero desktop' className="md:h-5/6"/>
                        </div>
                        <div className="md:basis-1/2 md:pt-20 pt-10 order-first x-5">
                            
                            {windowDimension > 700 ? <span className="text-7xl font-bold mt-10">Make<br></br> remote work</span> : <span className="text-4xl font-bold flex justify-center">Make remote work</span>}
                            <div className="md:w-3/4 font-semibold md:mt-14 mt-5 text-xl text-center text-slate-500 md:text-left">
                                <p>
                                    Get your team in sync, no matter your location. Streamline processes, 
                                    create team rituals, and watch productivity soar.
                                </p>
                            </div>
                            <div className="md:mt-14 mt-7 flex md:justify-start justify-center md:">
                                <button className="px-8 py-3 bg-black text-white rounded-2xl text-2xl font-bold hover:text-black hover:bg-white hover:border-black border-2">Learn more</button>
                            </div>
                            <div className="flex px-2 md:mt-32 py-8 items-center justify-between md:w-3/4">
                                <img src={databiz} alt=''/>
                                <img src={audiophile} alt=''/>
                                <img src={meet} alt=''/>
                                <img src={maker} alt=''/>
                            </div>

                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Main