import styles from './music.module.scss'

import pic from '../../../images/photos/car.jpg'
const Track = () => {
    return (
        <div className={styles.track}>
            <img src={pic} alt="" />
            <div className={styles.trackInfo}>
                <div>Хотелось бросить</div>
                <div>Амура</div>
            </div>
        </div>
    );
}

const Tracks = () => {
    return (
        <div className={styles.tracks}>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
        </div>
    )
}
 
export default Tracks;