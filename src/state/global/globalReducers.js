const GlobalReducers = (state, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, allData: action.payload }
        case "WISH":
            let temp = []
            state.allData.map(item => {
                if (item.id == action.payload) {
                    item.wish = true
                }
                temp.push(item)
            })
            return { ...state, allData: temp }
        case "CART":
            let tempCart = []
            state.allData.map(item => {
                if (item.id == action.payload) {
                    item.cart = true
                }
                tempCart.push(item)
            })
            return { ...state, allData: tempCart }
        case "CLEARCART":
            let clrCart = []
            state.allData.map(item => {
                item.cart = false
                clrCart.push(item)
            })
            return { ...state, allData: clrCart }
        case "BUYNOW":
            return { ...state, checkOut: !state.checkOut }
        case "CONFIRM":
            return { ...state, confirmBuy: !state.confirmBuy }
        case "CANCEL":
            return { ...state, cancelBuy: !state.cancelBuy }
        default:
            return state
    }
}

export default GlobalReducers