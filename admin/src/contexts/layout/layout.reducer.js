

//export const SOME_ACTION = 'SOME_ACTION'

export const DEFAULT_LANG = 'es'

export const START_LOADING = 'START_LOADING'
export const END_LOADING = 'END_LOADING'
export const ASYNC_ERROR = 'ASYNC_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const CLEAR_RESPONSE = 'CLEAR_RESPONSE'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const SET_ROUTE="SET_ROUTE";
export const initialState = () => {
	return {
        isLoading: false,
		isLogin: false,
		user: null,
		jwt: null,
		errorMsg: null,
		responseMsg: null,
        route:"USUARIOS",
        
    }
}

const someMethod = (payload, state) => {
	return { ...state }
}

const loginUser = (payload, state) => {

	
return {...state}

	
}

const logoutUser = (payload, state) => {
	localStorage.removeItem('__JWT_ADMIN')
	return { ...state, isLogin: false }
}

export const LayoutReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return loginUser(action.payload, state)
			break;
		case LOGOUT_USER:
			return logoutUser(action.payload, state)
			break;
		case START_LOADING:
			return { ...state, isLoading: true }
			break;
		case END_LOADING:
			return { ...state, isLoading: false }
			break;
		case ASYNC_ERROR:
			return { ...state, errorMsg: action.payload }
			break;
		case CLEAR_ERROR:
			return { ...state, errorMsg: null }
			break;
		case CLEAR_RESPONSE:
			return { ...state, responseMsg: null }
            break;
        case SET_ROUTE:
            return{...state, route:action.payload} 
		default:
			return initialState()
	}
}