import FriendSmall from "./FriendSmall";
import styles from './friends.module.scss'

const Friends = () => {
    return (
        <div>
            <div>Друзья</div>
            <div className={styles.friendsBox}>
                <FriendSmall/>
                <FriendSmall/>
                <FriendSmall/>
                <FriendSmall/>
            </div>
        </div>
    );
}
 
export default Friends;