import styles from './ProfileServices.module.scss'

import music from '../../../images/services/music.png'
import albums from '../../../images/services/news.png'
import photos from '../../../images/services/picture.png'
import videos from '../../../images/services/play.png'

const ProfileServices = () => {
    return (
        <div className={styles.services}>
            <div className={styles.serviceBox}>
                <img src={music} alt="mucsic" />
                <div>Музыка</div>
            </div>
            <div className={styles.serviceBox}>
                <img src={photos} alt="photos" />
                <div>Фото</div>
            </div>
            <div className={styles.serviceBox}>
                <img src={albums} alt="albums" />
                <div>Альбомы</div>
            </div>
            <div className={styles.serviceBox}>
                <img src={videos} alt="videos" />
                <div>Клипы</div>
            </div>
        </div>
    );
}
 
export default ProfileServices;