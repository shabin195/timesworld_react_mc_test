// import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     name: '',
//     loggedIn: false,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.name = action.payload.name;
//       state.loggedIn = true;
//     },
//     logout: (state) => {
//       state.name = '';
//       state.loggedIn = false;
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;

// export default userSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Assume getUrl is defined elsewhere
const getUrl = 'https://restcountries.com/v2/all?fields=name,region,flag';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
 
    const response = await fetch(getUrl, {
      method: 'GET',
    });
    if (!response.ok) {
      
      throw new Error('Failed to fetch countries');
    }

  
    const data = await response.json();
    return data;
  });

const userSlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const getUrl = 'https://restcountries.com/v2/all?fields=name,region,flag'; // Replace with your API URL

// // Define an async thunk for fetching data

// export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
//     console.log("----------------------------fhfjfh---------------------------")
//   const response = await fetch(getUrl, {
//     method: 'GET',
//   });
//   console.log("-------------------------------------------------------",response)
//   return response.json();
// });


// // Create a slice
// const userSlice = createSlice({
//   name: 'countries',
//   initialState: {
//     countries: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCountries.pending, (state) => {
//         state.status = 'loading';
//         console.log("-------------------------1------------------------------")
//       })
//       .addCase(fetchCountries.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.countries = action.payload;
//         console.log("-------------------------1-2-----------------------------")
//       })
//       .addCase(fetchCountries.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//         console.log("-------------------------13------------------------------")
//       });
//   },
// });

// export default userSlice.reducer;


