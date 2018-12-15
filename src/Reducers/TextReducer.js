import { ADD_ITEM} from '../Actions/types';


const state={
    studentList:[], 
    count: 0
}

function TextReducer(mState ={...state}, action)
{
    switch(action.type)
    {
        case ADD_ITEM:
            mState.studentList.push(action.value);
            mState.count++;
            return {...mState};
      
       
        default:
         return {...mState};
    }
}
export default TextReducer;