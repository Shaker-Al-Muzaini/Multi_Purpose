import Das from './components/Das.vue';
import ListAppointments from './pages/appointments/ListAppointments.vue';
import UserList from './pages/users/UserList.vue';
import AppointmentForm from './pages/appointments/AppointmentForm.vue';
import UpdateSetting from './pages/settings/UpdateSetting.vue';
import UpdateProfile from './pages/profile/UpdateProfile.vue';
import Login from './pages/auth/Login.vue'
export default[
    {
        path: '/admin/dashboard',
        name: 'Das',
        component: Das,
    },

    {
        path: '/login',
        name: 'admin.login',
        component: Login,
    },

    {
        path: '/admin/appointments',
        name: 'admin.appointments',
        component: ListAppointments,
    },


    {
        path: '/admin/users',
        name: 'admin.users',
        component: ListAppointments,
    },
    {
        path: '/admin/users',
        name: 'admin.users',
        component: UserList,
    },
    {
        path: '/admin/settings',
        name: 'admin.settings',
        component: UpdateSetting,
    },

    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: UpdateProfile,
    },

    {
        path: '/admin/appointments/create',
        name: 'admin.appointments.create',
        component: AppointmentForm,
    },
    {
        path: '/admin/appointments/:id/edit',
        name: 'admin.appointments.edit',
        component: AppointmentForm,
    }
]
