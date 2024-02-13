import styles from "./Header.module.css";
import {Link} from "react-router-dom";

export default function Header() {

    const mnu = [
        {title: "Главная", route: "/"}
        , {title: "Лента", route: "/dots"}
        , {title: "Внешний", route: "/post"}
        , {title: "?...", route: "/"}
    ]
    return <>
        <div className={styles.main}>
            {
                mnu.map((el, idx) =>{
                    return <Link key={idx + "-header-item"} to={el.route} className={styles.menuitem}>
                        {el.title}
                    </Link>
                })
            }
        </div>
    </>
}