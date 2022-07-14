import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const SearchResultPage = lazy(() => import("../views/ui/SearchResultPage"));
const WishList = lazy(() => import("../views/ui/WishList"));
const Cart = lazy(() => import("../views/ui/Cart"));
const DetailPage = lazy(() => import("../views/ui/DetailPage"));
const Guide = lazy(() => import("../views/ui/Guide"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const CheckOutPage = lazy(() => import("../views/ui/CheckOutPage"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/SearchResultPage" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/detail", exact: true, element: <DetailPage /> },
      { path: "/Guide", exact: true, element: <Guide /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/SearchResultPage", exact: true, element: <SearchResultPage /> },
      { path: "/WishList", exact: true, element: <WishList /> },
      { path: "/Cart", exact: true, element: <Cart/> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/CheckOutPage", exact: true, element: <CheckOutPage /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
