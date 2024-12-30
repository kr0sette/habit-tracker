import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import HabitsPage from "@/pages/HabitsPage";
import IdentityPage from "@/pages/IdentityPage";
import ReflectionsPage from "@/pages/ReflectionsPage";
import ErrorPage from "@/pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'',
                element: <HabitsPage />
            },
            {
                path:'identity',
                element: <IdentityPage />
            },
            {
                path:'reflections',
                element: <ReflectionsPage />
            }
        ]
    }
])

export default router;