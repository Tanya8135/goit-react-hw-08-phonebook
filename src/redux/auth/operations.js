import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const resp = await axios.post('users/signup', credentials);
            setAuthHeader(resp.data.token);
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const resp = await axios.post('/users/login', credentials);
            setAuthHeader(resp.data.token);
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const resp = await axios.get('/users/current');
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);