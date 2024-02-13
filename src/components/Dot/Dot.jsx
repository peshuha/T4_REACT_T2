import styles from "./Dot.module.css"

// eslint-disable-next-line react/prop-types
export default function Dot({isActive, onClick}) {
    return <div className={`${styles.dot} ${isActive && styles.active}`} onClick={()=>onClick()}></div>
}