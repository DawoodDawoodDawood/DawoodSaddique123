import {ADD_ITEM} from './types';

export const addStudent = (std) =>{
    const state ={
        type: ADD_ITEM, 
        value: std
    }
    return state;
}