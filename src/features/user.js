import {createSlice} from '@reduxjs/toolkit'
export const userSlice= createSlice({
    name: 'user',
    initialState: {value: {name: 'siva',age: 0,email: '@gmail'}},
    reducers: {
        login: (state,action)=>{
            state.value=action.payload
        }
    }
})
export default userSlice.reducer;