import {ADD_TODO, TOGGLE_TODO} from '../action';

const todo = (state, action) =>{
    switch (action.type){
        case ADD_TODO:
            return  {
                id: action.id,
                text: action.text,
                completed: false
            };
        case TOGGLE_TODO:
            if(state.id !== action.id)
                return state;

            return {
                id: state.id,
                text: state.text,
                completed: !state.completed
            };
        default: return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
                todo(undefined ,action)
            ];
        case 'TOGGLE_TODO':
            return state.map( t => todo(t,action));
        default:
            return state;
    }
};
//TODO: ...todo 연산 안됨..

export default todos;