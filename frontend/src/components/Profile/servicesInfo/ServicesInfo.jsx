import { Link } from "react-router-dom";
import styles from './ServicesInfo.module.scss'
import '../../../index.css'


const ServicesInfo = () => {
    return (
        <div className={`${styles.services} borderBlock`}>
            <ul>
                <li className={styles.services__li}>
                    <Link className={styles.services__link} to=''>Мои друзья</Link>
                </li>
                <li className={styles.services__li}>
                    <Link className={styles.services__link} to=''>Заявки в друзья</Link>
                </li>
                <li className={styles.services__li}>
                    <Link className={styles.services__link} to=''>Исходящие заявки</Link>
                </li>
                <li className={styles.services__li}>
                    <Link className={styles.services__link} to=''>Поиск друзей</Link>
                </li>
                <li className={styles.services__li}>
                    <Link className={styles.services__link} to=''>Мало взаимодействуете</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default ServicesInfo;