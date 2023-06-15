import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry, IState } from "../models/Interfaces";
import { API } from "../global/FetchAPI";

const initialState: IState = {
    countries: [],
    countrySearched: [],
    region: "",
    searchTerm: "",
    loading: false,
    error: null
};

const CountrySlice = createSlice({
    name: "country",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.countrySearched = [],
            state.region = "",
            state.loading = false,
            state.error = null
        },
        setRegion: 
        (state, action: PayloadAction<string>) => {
            state.region = action.payload
        },
        setSearchTerm: 
        (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(API.all.rejected.toString(), 
        (state, action: PayloadAction<IState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.all.pending, (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.all.fulfilled.type, 
        (state, action: PayloadAction<ICountry[]>) => {
            state.loading = false,
            state.countries = [...action.payload]
        });
        builder.addCase(API.code.rejected.toString(), 
        (state, action: PayloadAction<IState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.code.pending, (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.code.fulfilled.type, 
        (state, action: PayloadAction<ICountry[]>) => {
            state.loading = false,
            state.countrySearched = [...action.payload]
        });
    },
});

export const Actions = CountrySlice.actions;
export const CountryReducer = CountrySlice.reducer;



