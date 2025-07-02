import { lazy } from "react";
import Admin from "../pages/Admin";
import MultiColors from "../pages/Bricks/MultiColors";
import Calculator from "../pages/Calculator";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import { ADMIN_ROUTE, CALCULATOR_ROUTE, HOMEPAGE_ROUTE, MULTICOLORS_ROUTE, PLAIN_ROTE,PRODUCT_ROUTE } from "./consts";

const MonoColor = lazy(()=> import('../pages/Bricks/MonoColor'))

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
        path:MULTICOLORS_ROUTE,
        Component:MultiColors
    },
    {
        path:PLAIN_ROTE,
        Component:MonoColor
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