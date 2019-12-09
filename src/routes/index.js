import MainPage from "../containers/ConnectMainPage";
import PersonalCard from "../components/organisms/PersonalCard";
export const customerRoutes = [{
        path: "/main",
        component: MainPage,
        exact: true
    },
    {
        path: "/personalcard",
        component: PersonalCard,
        exact: true
    }
];