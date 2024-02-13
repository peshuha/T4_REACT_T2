import styles from "./Slider.module.css"
import {createContext, useEffect, useState} from "react";
import Slide from "../Slide/Slide.jsx";
import Dot from "../Dot/Dot.jsx";

import img1 from "../../assets/slider/1.jfif"
import img2 from "../../assets/slider/2.jpg"
import img3 from "../../assets/slider/3.jpg"

export const SliderContext = createContext(null)

export default function Slider() {

    const slides = [
        {src: img1, alt: "alt1"}
        , {src: img2, alt: "alt2"}
        , {src: img3, alt: "alt3"}
    ]

    const [slide, setSlide] = useState(0)
    const [direct, setDirect] = useState(1)
    useEffect(() => {
        const interval = setInterval(()=>{
            if(slide === 1 || slide === slides.length){
                setDirect(-direct);
            }
            setSlide((slide + direct)  % slides.length)
        }, 2000)
        return ()=>{
            clearInterval(interval);
        }
    }, [slide, direct, slides]);
    return <>
        <SliderContext.Provider
            value = {{
                slide
                , setSlide
            }}
        >
            <div className={styles.container}>
                {
                    slides.map((islide, idx)=> {
                        if(slide === idx){
                            return <Slide key={`${idx}-slide`} src={islide.src} alt={islide.alt}></Slide>
                        }
                    })
                }
            </div>
            {
                slides.map((islide, idx)=> {
                    return <Dot key={`${idx}-dot`} isActive={slide === idx} onClick={()=>{
                        console.log(slide)
                        setSlide(idx)
                    }}></Dot>
                })
            }

        </SliderContext.Provider>
    </>
}