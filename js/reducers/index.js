import { combineReducers } from 'redux'

import boardReducers from './board_reducers'

const rootReducer = combineReducers({
	board: boardReducers
})

export default rootReducer