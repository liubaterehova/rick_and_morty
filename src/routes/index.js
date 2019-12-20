import MainPage from "../containers/ConnectMainPage";
import ConnectPersonalCard from "../containers/ConnectPersonalCard";
export const customerRoutes = [{
        path: "/main",
        component: MainPage,
        exact: true
    },
    {
        path: "/personalcard",
        component: ConnectPersonalCard,
        exact: true
    }
];