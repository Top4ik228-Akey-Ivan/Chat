import { useSelector } from 'react-redux';


import styles from './profile.module.scss'

import photos from '../../images/services/picture.png'
import videos from '../../images/services/play.png'

import ProfileAvatar from '../../components/Profile/profileAvatar/ProfileAvatar';
import ProfileServices from '../../components/Profile/profileServices/ProfileServices';
import Playlists from '../../components/Profile/music/PlaylistSmall';
import Tracks from '../../components/Profile/music/Track';
import OnlineFriends from '../../components/Profile/friends/onlineFriends';
import Friends from '../../components/Profile/friends/friends';


const Profile = () => {

    const me = useSelector(state => state.auth.data)


    return (
        <div className='container'>
            {me ?
                (
                <div>
                    <ProfileAvatar/>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div className={styles.profileBlock}>
                                <ProfileServices/>

                                <Playlists/>

                                <Tracks/>
                                <button className={styles.musicBtn}>Показать все</button>
                            </div>

                            <div className={styles.profileBlock}>
                                <div className={styles.addPostBtn}>
                                    <div className={styles.addPostBtnText}>Создать пост</div>
                                    <div className={styles.btnLogos}>
                                        <img src={photos} alt="" />
                                        <img src={videos} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={styles.right}>
                            <div className={styles.profileBlock}>
                                <OnlineFriends/>

                                <Friends/>                                
                            </div>
                            <div className={styles.profileBlock}>
                                <div>райт</div>
                                <div>райт</div>
                            </div>
                        </div>
                    </div>
                </div>
                    ) : (
                '')}
        </div>
    );
};

export default Profile;