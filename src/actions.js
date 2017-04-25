export function addToGood(link) {
    return {type: 'ADD_GOOD', payload: link}
}
import fetch from 'isomorphic-fetch'
export function addToBad(link) {
    return {type: 'ADD_BAD', payload: link}
}
export function fetchNewImage() {
    return fetch('http://random.cat/meow')
}

export function placeNewPicture(link) {
    return {type: 'NEW_IMAGE', payload: link}
}

export function getNewImage() {

    // Invert control! Return a function that accepts `dispatch` so we can dispatch
    // later. Thunk middleware knows how to turn thunk async actions into actions.

    return function (dispatch) {
        return fetchNewImage()
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                return dispatch(placeNewPicture(data.file))
            }, error => dispatch(placeNewPicture('https://blog.sqlauthority.com/i/a/errorstop.png')));
    };
}