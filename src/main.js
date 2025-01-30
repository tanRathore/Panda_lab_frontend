import { createApp } from 'vue';
    import App from './App.vue';
    import PrimeVue from 'primevue/config';
    import Button from 'primevue/button';
    import Card from 'primevue/card';
    import Chart from 'primevue/chart';
    import Checkbox from 'primevue/checkbox';
    import Dialog from 'primevue/dialog';
    import Dropdown from 'primevue/dropdown';
    import FileUpload from 'primevue/fileupload';
    import InputMask from 'primevue/inputmask';
    import InputText from 'primevue/inputtext';
    import Menu from 'primevue/menu';
    import Password from 'primevue/password';
    import ProgressBar from 'primevue/progressbar';
    import TabView from 'primevue/tabview';
    import TabPanel from 'primevue/tabpanel';
    import Toast from 'primevue/toast';
    import ToastService from 'primevue/toastservice';
    import Message from 'primevue/message';
    import router from './router';

    import 'primevue/resources/themes/aura-light-green/theme.css';
    import 'primeflex/primeflex.css';
    import 'primeicons/primeicons.css';

    const app = createApp(App);

    app.use(PrimeVue);
    app.use(ToastService);
    app.use(router);

    app.component('Button', Button);
    app.component('Card', Card);
    app.component('Chart', Chart);
    app.component('Checkbox', Checkbox);
    app.component('Dialog', Dialog);
    app.component('Dropdown', Dropdown);
    app.component('FileUpload', FileUpload);
    app.component('InputMask', InputMask);
    app.component('InputText', InputText);
    app.component('Menu', Menu);
    app.component('Password', Password);
    app.component('ProgressBar', ProgressBar);
    app.component('TabView', TabView);
    app.component('TabPanel', TabPanel);
    app.component('Toast', Toast);
    app.component('Message', Message);

    app.mount('#app');
