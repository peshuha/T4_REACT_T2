import styles from "./Slide.module.css"
import {useContext} from "react";
import {SliderContext} from "../Slider/Slider.jsx";

export default function Slide({src, alt}){
    const {slide, setSlide} = useContext(SliderContext)
    return <img src={src} alt={alt} className={styles.img}/>
}