import styles from "./External.module.css"
import Layout from "../../components/Layout/Layout.jsx";
import {useEffect, useState} from "react";
import People from "../../components/People/People.jsx";
import url from "../../constants/url.js";
import DlgPeople from "../../components/DlgPeople/DlgPeople.jsx";

export default function External (){
  const [person, setPerson] = useState(null)

    // Получаем всех
    const [peoples, setPeoples] = useState(null)
    useEffect(() => {
            fetch(url)
                .then((r) => r.json())
                .then((data) => {
                    setPeoples(data.results)
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
                    return <People key={idx + "-people"}  people={people} onClick={() => setPerson(people)} />
                })
            }
            </div>
            {person && <DlgPeople person={person} onClick={() => setPerson(null)}/>}
        </Layout>
    </>
}