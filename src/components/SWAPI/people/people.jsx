import styles from "./people.module.css"
import {CSWAPI} from "../../../classes/swapi.js";
import DlgPeople from "../../DlgPeople/DlgPeople.jsx";
import {useState} from "react";

export default function People({people}){

    // const [people] = useState(people)
    const [dlg, dlgShow] = useState(false)
    return <>
        <div className={styles.item} onClick={() => dlgShow(true)}>
            <div className={styles.name}>{CSWAPI.Name(people)}</div>
            <div className={styles.height}>{CSWAPI.Height(people)}</div>
            <div className={styles.mass}>{CSWAPI.Mass(people)}</div>
        </div>
        {dlg && <DlgPeople people={people} onClose={() => dlgShow(false)}></DlgPeople>}
    </>
}
