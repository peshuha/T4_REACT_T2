import styles from "./DlgPeople.module.css";

export default function DlgPeople({person, onClick}) {
    const {name, height, mass, gender} = person
    return <>
         <div className={styles.dialog}>
            <div className={styles.header}>
                Информация об индивиде
                <div className={styles.close} onClick={onClick}></div>
            </div>
            <div className={styles.form}>
                <div className={styles.name}>
                    <label htmlFor="">Имя: </label>
                    <input type="text"
                           value={name}
                    ></input>
                </div>
                <div className={styles.height}>
                    <label htmlFor="">Рост:</label>
                    <input type="text"
                           value={height}
                    ></input>
                </div>
                <div className={styles.mass}>
                    <label htmlFor="">Рост:</label>
                    <input type="text"
                           value={mass}
                    ></input>
                </div>
                <div className={styles.gender}>
                    <label htmlFor="">Пол:</label>
                    <input type="text"
                           value={gender}
                    ></input>
                </div>
            </div>
        </div>
    </> 
}