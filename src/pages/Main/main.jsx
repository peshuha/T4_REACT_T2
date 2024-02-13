import Layout from "../../components/Layout/Layout.jsx";
import {useState} from "react";
import DlgContact from "../../components/DlgContact/DlgContact.jsx";

export default function Main (){

    const [dlg, dlgActivate] = useState(false);
    const [dlgSummary, setdlgSummary] = useState("")
    return <>
        <Layout>
            <button onClick={() =>{dlgActivate(true); console.log(dlg)}}>Диалог</button>
            <div>{dlgSummary}</div>
        </Layout>
        {dlg &&
            <DlgContact
                onClose={() => {dlgActivate(false); console.log(dlg)}}
                onSummary={setdlgSummary}
            ></DlgContact>
        }
    </>
}