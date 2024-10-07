import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// 5 günlük hava durumu tahmini
export const getAllAsync = createAsyncThunk(
  "app/getAllAsync", 
  async (city) => {
    const getWeather = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c5f12f4cadcaa792ab0fb22bc351c972&lang=tr&units=metric`
    );
    return getWeather.data;
  }
);

export const AppSlice = createSlice({
  name: "app",
  initialState: {
    theme: "light",
    itemAll: [],  
    status: "idle",
    error: null,
  },
  reducers: {
    chanheTheme :( state ) =>{
     
      if(state.theme === "light"){
        state.theme = "dark"
      }
      else{
        state.theme = "light"
      }
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        
        const forecastData = action.payload;
        const filteredDays = [];

        // Her gün için ilk tahmini filtrelemek
        forecastData.list.forEach((item) => {
          const date = item.dt_txt.split(' ')[0]; 
          if (!filteredDays.some((forecast) => forecast.date === date)) {
            filteredDays.push({
              date: date,
              temperature: item.main.temp,
              humidity: item.main.humidity,
              rain: item.rain ? item.rain["3h"] : 0,
              windSpeed: item.wind.speed,
              mainWeather: item.weather[0].main,
              weatherDescription: item.weather[0].description,
              icon: item.weather[0].icon,
            });
          }
        });

        state.itemAll = filteredDays; // 5 günlük tahmini state'e atıyoruz
      })
      .addCase(getAllAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {chanheTheme} = AppSlice.actions
export default AppSlice.reducer;
