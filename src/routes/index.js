import MainPage from "../containers/ConnectMainPage";
import ConnectPersonalCard from "../containers/ConnectPersonalCard";
import ConnectDetails from "../containers/ConnectDetails";
export const customerRoutes = [{
        path: "/main",
        component: MainPage,
        exact: true
    },
    {
        path: "/personalcard",
        component: ConnectPersonalCard,
        exact: true
    },
    {
        path: '/details/:id',
        component: ConnectDetails,
    }
];