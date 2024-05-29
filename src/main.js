// Запросы к серверу
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';

// Работа с датой


import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('ru');
dayjs.extend(relativeTime)
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration)


// Всё для vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';


// Рендер в HTML
createApp(App).use(router).mount('#app');
