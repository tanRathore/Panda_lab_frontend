import { createRouter, createWebHistory } from 'vue-router';
    import LoginPage from '../views/LoginPage.vue';
    import SignUpPage from '../views/SignUpPage.vue';
    import ProfilePage from '../views/ProfilePage.vue';
    import EditProfilePage from '../views/EditProfilePage.vue';
    import FoodLogEntryPage from '../views/FoodLogEntryPage.vue';
    import DashboardPage from '../views/DashboardPage.vue';
    import SettingsPage from '../views/SettingsPage.vue';

    const routes = [
      {
        path: '/',
        name: 'Login',
        component: LoginPage,
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUpPage,
      },
      {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage,
      },
      {
        path: '/profile/edit',
        name: 'EditProfile',
        component: EditProfilePage,
      },
      {
        path: '/food-log-entry',
        name: 'FoodLogEntry',
        component: FoodLogEntryPage,
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
      },
      {
        path: '/settings',
        name: 'Settings',
        component: SettingsPage,
      },
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    export default router;
