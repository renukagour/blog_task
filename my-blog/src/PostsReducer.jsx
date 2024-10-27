import {createSlice} from '@reduxjs/toolkit'
import {posts} from './Data'
const postsSlice=createSlice({

    name: 'posts',
    initialState:posts,
    reducers:{
        addblog:(state,action)=>{
            console.log(action);
            state.push(action.payload);
        }
    }
})

export const {addblog}=postsSlice.actions;
export default postsSlice.reducer;