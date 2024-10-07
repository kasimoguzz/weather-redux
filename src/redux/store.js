import {configureStore} from '@reduxjs/toolkit'
import AppSlice from './App/AppSlice'


export const store = configureStore({
    reducer:{
        app: AppSlice
    }
})