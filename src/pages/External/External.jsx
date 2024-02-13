import styles from "./External.module.css"
import Layout from "../../components/Layout/Layout.jsx";
import {useEffect, useRef, useState} from "react";
import People from "../../components/SWAPI/people/people.jsx";
import {CSWAPI as CWAPI, CSWAPI} from "../../classes/swapi.js";

export default function External (){

    // Получаем всех
    const [peoples, setPeoples] = useState(null)
    useEffect(() => {
            fetch(CSWAPI.UrlPeople)
                .then((r) => r.json())
                .then((data) => {
                    console.log("data", CSWAPI.PeopleList(data));
                    setPeoples(CSWAPI.PeopleList(data))
                })
            return () => {
                setPeoples([])
            }
        }
        , [setPeoples]
    );

    return <>
        <Layout>
            <div className={styles.peoples}>
            {
                peoples &&
                peoples.map((people, idx)=>{
                    return <People key={idx + "-people"}  people={people}  ></People>
                })
            }
            </div>
        </Layout>
    </>
}