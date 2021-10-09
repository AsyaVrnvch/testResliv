import * as actions from './actions'

const initialState = {
    employees:[],
    isLoad:false
}

export default function employees(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_EMPLOYEES:
            return {
                ...state,
                employees:[
                    ...state.employees,
                    action.payload
            ]
            };

        case actions.DELETE_EMPLOYEES:
            return {
                ...state,
                employees:state.employees.filter((item) => item.id !==action.payload)
            };

        case actions.LOAD_EMPLOYEES_REQUEST:
            return {
                ...state,
                isLoad:false
            };

        case actions.LOAD_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isLoad:true,
                employees:action.payload
            };

        case actions.LOAD_EMPLOYEES_FAILURE:
            return {
                ...state,
                isLoad:false,
            };

        default: return state
    }
}