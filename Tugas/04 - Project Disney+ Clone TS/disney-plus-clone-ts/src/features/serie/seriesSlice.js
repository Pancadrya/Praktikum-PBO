import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    setSeries: (state, action) => {
      state.series = action.payload;
    },
    addSeason: (state, action) => {
      const { seriesId, seasonData } = action.payload;
      const series = state.series.find((series) => series.id === seriesId);
      if (series) {
        series.seasons.push(seasonData);
      }
    },
    addEpisode: (state, action) => {
      const { seriesId, seasonIndex, episodeData } = action.payload;
      const series = state.series.find((series) => series.id === seriesId);
      if (series && series.seasons[seasonIndex]) {
        series.seasons[seasonIndex].episodes.push(episodeData);
      }
    },
  },
});

export const { setSeries, addSeason, addEpisode } = seriesSlice.actions;
export const selectSeries = (state) => state.series.series;
export default seriesSlice.reducer;
