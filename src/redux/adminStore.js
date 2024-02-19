import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/adminSlice'

export default configureStore({
    reducer:{
        auth:authReducer,
    }
})