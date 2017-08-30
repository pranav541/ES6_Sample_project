import {
    GET_DATA,
    ADD_ITEM,
    REMOVE_ITEM
} from '../actions/actionTypes';
const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = Object.assign([], state);
    switch (action.type) {
        case GET_DATA:
            return action.payload;
            break;
        case ADD_ITEM:
            if (newState.mylist.find((item) => {
                    return item.id === action.item.id
                })) {
                return newState;
            } else {
                return Object.assign({}, state, {
                    mylist: [...state.mylist, action.item],
                    recommendations: Object.assign([], newState.recommendations.filter(item => {
                        return item.id != action.item.id
                    }))
                })
            }
            break;
        case REMOVE_ITEM:
            return Object.assign({}, newState, {
                mylist: Object.assign([], newState.mylist.filter(item => {
                    return item.id != action.item.id
                })),
                recommendations: [...state.recommendations, action.item]
            })
            break;
        default:
            return state;
            break;
    }
}
