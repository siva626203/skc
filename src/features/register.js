import {createSlice} from '@reduxjs/toolkit'
export const registerSlice= createSlice({
    name: 'register',
    initialState: {value: {cname:"",caddress:"",sname:"",scontact:0,sdname:"",sdevent:""}},
    reducers: {
        register: (state,action)=>{
            state.value=action.payload;
        }
    }   
},   
)
export const {register}= registerSlice.actions;
export default registerSlice.reducer;