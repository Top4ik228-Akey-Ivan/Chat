import styles from './music.module.scss'

import pic from '../../../images/photos/lavanda.jpg'

const PlaylistSmall = () => {
    return (
        <div className={styles.playlistSmall}>
            <img src={pic} alt="" />
            <div>Подпевай!</div>
        </div>
    );
}

const Playlists = () => {
    return (
        <div className={styles.playlists}>
            <PlaylistSmall/>
            <PlaylistSmall/>
            <PlaylistSmall/>
            <PlaylistSmall/>
            <PlaylistSmall/>
        </div>
    )
}
 
export default Playlists;