import {useEffect, useState} from "react";
import styles from "./DlgPeople.module.css";
import {CSWAPI} from "../../classes/swapi.js";

export default function DlgPeople({people, onClose}) {

    const [peopleInfo, setPeopleInfo] = useState(undefined)

    // Получаем по url
    useEffect(() => {
            fetch(CSWAPI.Url(people))
                .then((r) => r.json())
                .then((data) => {
                    console.log("DlgPeople:fetch", data);
                    setPeopleInfo(data)
                })
            return () => {
                setPeopleInfo(undefined);
            }
        }
        , [people, setPeopleInfo]
    );
    return <>
        <div className={styles.dialog}>
            <div className={styles.header}>
                Информация об индивиде
                <div className={styles.close} onClick={()=>onClose()}></div>
            </div>
            <div className={styles.form}>
                <div className={styles.name}>
                    <label htmlFor="">Имя: </label>
                    <input type="text"
                           value={CSWAPI.Name(peopleInfo)}
                    ></input>
                </div>
                <div className={styles.height}>
                    <label htmlFor="">Рост:</label>
                    <input type="text"
                           value={CSWAPI.Height(peopleInfo)}
                    ></input>
                </div>
                <div className={styles.mass}>
                    <label htmlFor="">Рост:</label>
                    <input type="text"
                           value={CSWAPI.Mass(peopleInfo)}
                    ></input>
                </div>
                <div className={styles.gender}>
                    <label htmlFor="">Пол:</label>
                    <input type="text"
                           value={CSWAPI.Gender(peopleInfo)}
                    ></input>
                </div>
            </div>
        </div>
    </>
}