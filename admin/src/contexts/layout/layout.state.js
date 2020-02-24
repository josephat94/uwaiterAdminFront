import React, { useReducer } from 'react'
import { LayoutReducer, initialState, START_LOADING, END_LOADING, ASYNC_ERROR, LOGOUT_USER } from './layout.reducer'
import LayoutContext from './layout.context'

const LayoutState = (props) => {

    const [ layoutState, layoutDispatch ] = useReducer(LayoutReducer, undefined, initialState)

    // const changeLanguage = (language) => {
    // 	appDispatch({ type: CHANGE_LANGUAGE, payload: language })
    // }

    const isPromise = (obj) => {
        return (
            !!obj &&
            (typeof obj === "object" || typeof obj === "function") &&
            typeof obj.then === "function"
        );
    }

    const wrapperappDispatch = (dispatch) => {
        return (action) => {
            if (isPromise(action.payload)) {
                dispatch({ type: START_LOADING });
                action.payload
                    .then((result) => {
                        if(result.success==false){
                            console.log(result)

                            if(result.code=901){
                                console.log("ERROR EN ENABLE O TOKEN");
                                
                                dispatch({ type: LOGOUT_USER })
                            }else{
                                dispatch({ type: ASYNC_ERROR, payload: result.error })
                                dispatch({ type: END_LOADING })
                            }
                        
                        }else{
                            dispatch({ type: action.type, payload: result });
                            dispatch({ type: END_LOADING });
                        }
                       
                    })
                    .catch((error) => {
                        dispatch({ type: ASYNC_ERROR, payload: error.error })
                        dispatch({ type: END_LOADING })
                    })
            } else {
                dispatch(action);
            }
        };
    }

    return (
        <LayoutContext.Provider
            value={{ layoutState: layoutState, layoutDispatch: wrapperappDispatch(layoutDispatch) }}
        >
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutState