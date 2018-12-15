
import {INC_NUMBER,DEC_NUMBER} from './types';

export const increment = (std) =>{
    const state ={
        type: INC_NUMBER, 
        value: std
    }
    return state;
}
export const decrement = (std) =>{
    const state ={
        type: DEC_NUMBER, 
        value: std
    }
    return state;
}