import AccountLoginPage from "@/account/pages/login/AccountLoginPage.vue"
import AccountRegisterPage from "@/account/pages/register/AccountRegisterPage.vue"
import NomalAccountRegisterPage from "@/account/pages/register/NomalAccountRegisterPage.vue"
import AccountMyPage from "@/account/pages/my/AccountMyPage.vue"
const AccountRoutes = [
        path: '/account/login',
        name: 'AccountLoginPage',
        component: AccountLoginPage
    },
    {
        path: '/account/register',
        name: 'AccountRegisterPage',
        component: AccountRegisterPage
    },
    {
        path: '/account/register',
        name: 'NomalAccountRegisterPage',
        component: NomalAccountRegisterPage
    },
    {
        path: '/account/mypage',
        name: 'AccountMyPage',
        component: AccountMyPage
    },
    {
]

export default AccountRoutes