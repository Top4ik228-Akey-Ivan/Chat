# Chat

Этот проект был разработан для изучения webSocket, практики работы с nodeJS, mongodb, RestApi. В данный момент проект находится в разработке и не заверешен.

## 📘Функционал
На текущем этапе приложение имеет следующий функционал:
1. Форму для входа и регистрации(с хэшированием пароля)
2. Страницу профиля с возможностью установки аватара и загрузки на сервер
3. Страницу с отображением чатов, а именно фотографии, названия и последнего сообщения. Также реализован функционал добавления чатов
4. Страницу с чатом. Она включает в себя диалоговое окно, с любым кол-вом участников. Работает на основании WebSocket, рассылает сообщением всем подключенным к комнате пользователям и сохраняет сообщения в БД.

## 🔧 Технологии и Инструменты
<div>
    <img src="https://img.shields.io/badge/-SASS-000000?style=for-the-badge&logo=SASS&logoColor=CC6699" alt="sass"/>
    <img src="https://img.shields.io/badge/-JAVASCRIPT-000000?style=for-the-badge&logo=javascript" alt="javascript"/>
    <img src="https://img.shields.io/badge/-REACT-000000?style=for-the-badge&logo=REACT" alt="react"/>
    <img src="https://img.shields.io/badge/-REDUX-000000?style=for-the-badge&logo=REDUX&logoColor=893dbf" alt="redux"/>
    <img src="https://img.shields.io/badge/-NODE-000000?style=for-the-badge&logo=NODE.JS&logoColor=23b84d" alt="nodejs"/>
    <img src="https://img.shields.io/badge/-MongoDB-000000?style=for-the-badge&logo=mongodb&logoColor=23b84d" alt="mongodb"/>
</div>

## Запуск проекта

Логика проекта прописана в основных двух папках Backend и Frontend.<br>
Backend реализован с помощью nodejs и базы данных mongodb<br>
Для запуска проекта необходимо иметь установленную на устройство базу данных mongodb и nodejs

Необходимо запустить базу данных на устройстве.<br>
В терминале папки Backend прописать:

### `npm run dev`
В терминале папки Frontend прописать:


### `npm start`

Проект запустится по адресу: [http://localhost:3000](http://localhost:3000)


