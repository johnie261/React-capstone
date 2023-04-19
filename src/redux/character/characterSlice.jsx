import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = "https://hp-api.onrender.com/api/characters";

const initialState = {
    characters : [],
    isLoading: false
}

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters',
    async (thunkAPI) => {
        try {
            const resp = await axios(url);
            return resp.data.slice(0,25);
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    });

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
        // fetch characters from the API
          .addCase(fetchCharacters.pending, (state) => ({
            ...state,
            isLoading: true,
          }))
          .addCase(fetchCharacters.fulfilled, (state, action) => ({
            ...state,
            characters: action.payload,
            isLoading: false,
          }))
          .addCase(fetchCharacters.rejected, (state) => ({
            ...state,
            isLoading: false,
          }));
      },
})

export default characterSlice.reducer;
