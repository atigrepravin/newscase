import Home from "./pages/home";
import Search from "./pages/search";

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/search',
        component: Search
    }
]

