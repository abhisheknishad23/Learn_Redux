import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from 'react-toastify';

// const initialState = {
//     items: JSON.parse(localStorage.getItem('collection')) || []
// }

const initialState = {
    items: (() => {
        try {
            return JSON.parse(localStorage.getItem('collection')) || [];
        } catch (e) {
            return []; // Fallback to empty array if parsing fails
        }
    })()
};

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection: (state, action)=>{
            const alreadyExists = state.items.find(
                item=> item.id===action.payload.id
            )
            if (!alreadyExists){
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },

        removeCollection: (state, action)=>{
            state.items= state.items.filter(
                item=>item.id !==action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },

        clearCollection:(state)=>{
            state.items = []
            localStorage.removeItem('collection')
        },
        addToToast:()=>{
            toast.success('Added Collection', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
        },

         removeToast:()=>{
            toast.error('Remove From Collection', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
        },
        

    }
})

export const {
    addCollection,
    removeCollection,
    addToToast,
    removeToast,
    clearCollection
} = collectionSlice.actions;

export default collectionSlice.reducer;