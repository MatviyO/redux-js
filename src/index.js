import './styles.css'
import {createStore,  applyMiddleware} from "redux";
import {rootreducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import {asynC, decrement, increment} from "./redux/actions";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

function logger(state) {
    return function (next) {
        return function (action) {
            console.log('state', state)
            console.log('action', action)
            return next(action)
        }
    }
}

const store = createStore(rootreducer, 0, applyMiddleware(thunk, logger))

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
    store.dispatch(asynC())
})
store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state
})
store.dispatch({type: 'INIT_APPLICATION'})

themeBtn.addEventListener('click', () => {
})

render()




