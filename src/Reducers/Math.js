import { INC_NUMBER,DEC_NUMBER} from '../Actions/types';


const state={
    studentList:[], 
    count: 0
}

function MathFunction(mState ={...state}, action)
{
    switch(action.type)
    {
        case INC_NUMBER:
         
            mState.count++;
            return {...mState};
            case DEC_NUMBER:
         
            mState.count--;
            if( mState.count > 0)
          {  return {...mState};}
          
          
            
        
        default:
         return {...mState};
    }
}
export default MathFunction;