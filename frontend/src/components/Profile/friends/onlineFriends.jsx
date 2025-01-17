import FriendSmall from "./FriendSmall";

import styles from './friends.module.scss'

const OnlineFriends = () => {
    return (
        <>
            <div className={styles.onlineFriends}>
                <div>Друзья онлайн</div>
                <div className={styles.friendsBox}>
                    <FriendSmall/>
                    <FriendSmall/>
                    <FriendSmall/>
                    <FriendSmall/>
                </div>
            </div>
        </>
    );
}
 
export default OnlineFriends;