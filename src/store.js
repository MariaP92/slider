import createStore from 'redux-zero'
import {FUXION} from './data'

const initialState = {
    fuxion: FUXION,
    fuxionUser: [],
    selectedItem : -1,
    
}

const store = createStore(initialState)
export default store