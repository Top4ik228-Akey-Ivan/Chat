import { useSelector } from 'react-redux'; 
import axios from '../../../axios'; 
import styles from './ProfileAvatar.module.scss'; 

const ProfileAvatar = () => { 
    const me = useSelector(state => state.auth.data); 

    const handleFileChange = async (event) => { 
        const file = event.target.files[0]; 
        if (file) {
            await handleUpload(file); // Автоматическая загрузка файла
        }
    }; 

    const handleUpload = async (file) => { 
        if (!file) { 
            alert('Пожалуйста, выберите файл для загрузки'); 
            return; 
        } 

        const formData = new FormData(); 
        formData.append('image', file); 

        try { 
            // Загрузка изображения на сервер
            const response = await axios.post('/upload', formData, { 
                headers: { 
                    'Content-Type': 'multipart/form-data', 
                }, 
            });
            console.log(response)

            // Обновление профиля с новым URL аватара
            const updatingResponse = await axios.patch(`/profile/${me._id}`, { 
                avatarUrl: response.data.url // Используйте правильный URL
            }); 

            console.log(updatingResponse);

            alert('Файл успешно загружен!'); 
        } catch (error) { 
            console.error('Ошибка загрузки файла:', error); 
            alert('Ошибка загрузки файла: ' + (error.response ? error.response.data : 'Неизвестная ошибка')); 
        }
    };  

  console.log(me)
    return ( 
        <> 
            {me ? ( 
                <div className={`borderBlock ${styles.profile}`}> 
                    <label className={styles.custom_file_upload}> 
                        <img className={styles.avatar} src={me.avatarUrl} alt="Аватар" /> 
                        <input className={styles.profileInput} type="file" onChange={handleFileChange}/>
                    </label> 

                    <div className={styles.profileHeader}> 
                        <div className={styles.userInfo}> 
                            <h2 className={styles.profileName}>{me.fullName}</h2> 
                            <div className={styles.profileDesc}>Desc</div> 
                        </div> 
                        <div className={styles.btnBox}> 
                            <button className={styles.profileBtn}>Редактировать профиль</button> 
                            <button className={styles.profileBtn}>Ещё</button> 
                        </div> 
                    </div> 
                </div> 
            ) : ( 
                '' 
            )} 
        </> 
    ); 
}; 
  
export default ProfileAvatar;
