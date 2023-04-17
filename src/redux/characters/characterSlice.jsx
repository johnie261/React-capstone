import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters : [],
    isLoading: false
}

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {

    }
})