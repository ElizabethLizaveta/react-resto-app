const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};


const menuFailed = () => {
    return {
        type: 'MENU_FAILED'
    };
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
};

const deletedFromCart = (id) => {
    return {
        type: 'ITEM_DELETE_FROM_CART',
        payload: id
    };
};

export {
    menuLoaded,
    menuRequested,
    menuFailed,
    addedToCart,
    deletedFromCart
};