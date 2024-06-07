import { createApp } from 'vue';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue';
import TaskServicePlugin from './plugins/TaskServicePlugin';

const app = createApp(App);

app.use(TaskServicePlugin);

app.mount('#app');
