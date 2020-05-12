import {INCREMENT, DECREMENT, CHANGE_THEME, ENABLED, DISABLED} from "./types";


export function increment() {
    return {
        type: INCREMENT
    }
}
export function decrement() {
    return {
        type: DECREMENT
    }
}
export function disabledB() {
    return {
        type: DISABLED
    }
}
export function enabledB() {
    return {
        type: ENABLED
    }
}
export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function asynC() {
    return function (dispatch) {
        dispatch(disabledB())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enabledB())
        }, 2000)
    }
}

