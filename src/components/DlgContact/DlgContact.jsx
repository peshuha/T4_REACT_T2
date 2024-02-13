import styles from "./DlgContact.module.css"
import {useEffect, useState} from "react";

export default function DlgContact({onClose, onSummary}) {

    const [email, setMail] = useState("x@mail.ru")
    const [phone, setPhone] = useState("222-33-222")
    const [comment, setComment] = useState("вольные слова")

    useEffect(() => {
            // Текущие данные отдаем суммарно
            onSummary(
                'Contacts: '
                + `${email}, `
                + `${phone}, `
                + `${comment}`
            )
            return ()=> {
                // При возврате очищаем
                onSummary("")
            }
        }
        , [email, phone, comment, onSummary]
    );

    return <>
        <div className={styles.dialog}>
            <div className={styles.header}>
                Введите контактные данные
                <div className={styles.close} onClick={()=>onClose()}></div>
            </div>
            <div className={styles.form}>
                <div className={styles.email}>
                    <label htmlFor="">Email:</label>
                    <input type="text"
                           value={email}
                           onInput={(e)=>setMail(e.target.value)}
                    ></input>
                </div>
                 <div className={styles.phone}>
                     <label htmlFor="">Phone:</label>
                     <input type="text"
                            value={phone}
                            onInput={(e)=>setPhone(e.target.value)}
                     ></input>
                 </div>
                <div className={styles.comment}>
                    <label htmlFor="">Comment:</label>
                    <textarea
                           value={comment}
                           onInput={(e)=>setComment(e.target.value)}
                    ></textarea>
                </div>
                <button className={styles.submit}>Отправить</button>
            </div>
        </div>
    </>
}

