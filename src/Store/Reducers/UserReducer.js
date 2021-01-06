const UserState = {

};


// Product Reducer
const UserReducer = (state = UserState, action) => {

    if (action.type === 'SET_FULL_SCREEN_GAME_THUMB') {
        if (action.thumbImage === undefined) return { ...state }
        return {
            ...state,
            fullScreenGameThumbUrl: action.thumbImage,
            fullscreenIndex: action.index
        }
    }

    return state;
    
};

export default UserReducer;