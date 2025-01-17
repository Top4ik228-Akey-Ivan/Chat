import styles from './friends.module.scss'
import pic from '../../../images/IMG_20231021_134804.jpg'

const FriendSmall = () => {
    return (
        <div className={styles.friendSmall}>
            <img src={pic} alt="" />
            <div>Иван</div>
        </div>
    );
}
 
export default FriendSmall;