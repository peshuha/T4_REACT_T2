import styles from "./people.module.css"
// import {CSWAPI} from "../../../classes/swapi.js";
import DlgPeople from "../DlgPeople/DlgPeople.jsx";
import {useState} from "react";

export default function People({people, onClick}){
    const {name, height, mass} = people;
    return <>
        <div className={styles.item} onClick={onClick}>
            <div className={styles.name}>{name}</div>
            <div className={styles.height}>{height}</div>
            <div className={styles.mass}>{mass}</div>
        </div>
    </>
}
