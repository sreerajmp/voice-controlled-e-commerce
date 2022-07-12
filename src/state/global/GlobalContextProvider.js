import React, { useReducer } from 'react'
import GlobalReducers from './globalReducers';
import van1 from "../../assets/images/shirts/van.avif";
import Peter from "../../assets/images/shirts/peter.avif";
import FullSlv from "../../assets/images/shirts/full.avif";
import jacket1 from "../../assets/images/jacket/jacket1.avif";
import jack2 from "../../assets/images/jacket/jack2.avif";
import jack3 from "../../assets/images/jacket/jack3.avif";
import blkshoe from "../../assets/images/shoe/blkshoe.avif";
import brwshoe from "../../assets/images/shoe/brwshoe.avif";
import whtshoe from "../../assets/images/shoe/whtshoe.avif";
export const GlobalContext = React.createContext();
const initialState = {
    checkOut:false,
    confirmBuy:false,
    cancelBuy:false,
    allData: [
        {
            id: 1,
            image: van1,
            title: "Vanhusen Printed Shirts",
            tag: "shirt",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            wish: false,
            cart: false,
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        },
        {
            id: 2,
            image: Peter,
            title: "Peter England T-shirt",
            tag: "shirt",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            wish: false,
            cart: false,
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        },
        {
            id: 3,
            image: FullSlv,
            title: "Tommy Hilfiger Full-sleeve Shirt",
            tag: "shirt",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            cart: false,
            wish: false,
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        },
        {
            id: 4,
            image: jacket1,
            title: "Zara Jacket for summer",
            tag: "jacket",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            cart: false,
            wish: false,
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        }, {
            id: 5,
            image: jack2,
            title: "Simple is beautiful",
            tag: "jacket",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            cart: false,
            wish: false,
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        }, {
            id: 6,
            image: jack3,
            title: "Simple is beautiful",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            cart: false,
            wish: false,
            tag: "jacket",
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        }, {
            id: 7,
            image: brwshoe,
            title: "Simple is beautiful",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            cart: false,
            wish: false,
            tag: "shoes",
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        }, {
            id: 8,
            image: blkshoe,
            title: "Simple is beautiful",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            cart: false,
            tag: "shoes",
            wish: false,
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        }, {
            id: 9,
            image: whtshoe,
            title: "Simple is beautiful",
            selected: false,
            cost:890,
            discount:90,
            finalPrice:800,
            cart: false,
            tag: "shoes",
            wish: false,
            description:
                "This is a wider card with supporting text below as a natural lead-in to additional content.",
            btnbg: "primary",
        }
    ]
}
function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(GlobalReducers, initialState)
    return (
        <GlobalContext.Provider value={{ globalState: state, globalDispatch: dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider
