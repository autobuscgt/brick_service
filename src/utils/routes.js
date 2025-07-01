import Admin from "../pages/Admin";
import Calculator from "../pages/Calculator";
import Contact from "../pages/Contact";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import { ADMIN_ROUTE, CALCULATOR_ROUTE, CONTACT_ROUTE, HOMEPAGE_ROUTE, PRODUCT_ROUTE } from "./consts";

export const routes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
    },
    {
        path:CALCULATOR_ROUTE,
        Component: Calculator
    },
    {
        path:CONTACT_ROUTE,
        Component:Contact
    },
    {
        path:PRODUCT_ROUTE + '/:id',
        Component:ProductPage
    },
    {
        path:ADMIN_ROUTE,
        Component: Admin
    }
]