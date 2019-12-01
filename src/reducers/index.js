const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_FAILED':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const sameItem = state.items.find(item => item.id === id);

            if (sameItem === undefined) {
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    number: 1,
                };
                return {
                    ...state,
                    total: state.total + newItem.price,
                    items: [
                        ...state.items,
                        newItem
                    ]
                };
            } else {
                sameItem.number++;
                return {
                    ...state,
                    total: state.total + sameItem.price,
                };
            }


        case 'ITEM_DELETE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const itemDel = state.items.find(item => item.id === idx);
            return {
                ...state,
                total: state.total - (itemDel.price * itemDel.number),
                items: [...state.items.slice(0, itemIndex),
                ...state.items.slice(itemIndex + 1)
                ]
            }
        default:
            return state;
    }
}


export default reducer;