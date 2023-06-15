import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = "https://restcountries.com/v3.1";

class FetchAPI {
    all = createAsyncThunk("country/all", 
    async (_, thunkAPI) => {
        const res: Response = await fetch(`${URL}/all`);
        if (!res.ok) thunkAPI.rejectWithValue(res.statusText);
        const data = await res.json();
        return [...data];
    });

    code = createAsyncThunk("country/code", 
    async (code: string, thunkAPI) => {
        const res: Response = 
            await fetch(`${URL}/alpha/${code}`);
        if (!res.ok) thunkAPI.rejectWithValue(res.statusText);
        const data = await res.json();
        return data;
    });

    region = createAsyncThunk("country/region", 
    async (region: string, thunkAPI) => {
        const res: Response = 
        await fetch(`${URL}/region/${region}`);
        if (!res.ok) thunkAPI.rejectWithValue(res.statusText);
        const data = await res.json();
        return data;
    });
};

export const API: FetchAPI = new FetchAPI();


