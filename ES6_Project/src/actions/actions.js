import DataService from './promise';
import {
    GET_DATA,
    REMOVE_ITEM,
    ADD_ITEM
} from './actionTypes';

export function loadData() {
    return function(dispatch) {
        return DataService.getData().then(
            function(response) {
                dispatch(addDataSuccess(response));
            }
        )
    }
}

function addDataSuccess(response) {
    const mylist = response.mylist;
    const recommendations = response.recommendations;
    let payload = {};
    payload.mylist = mylist;
    payload.recommendations = recommendations;
    return {
        type: GET_DATA,
        payload
    };
};

export function add(item) {
    return function(dispatch) {
        dispatch({
            type: ADD_ITEM,
            item
        })
    }
}

export function remove(item) {
    return function(dispatch) {
        dispatch({
            type: REMOVE_ITEM,
            item
        })
    }
}
