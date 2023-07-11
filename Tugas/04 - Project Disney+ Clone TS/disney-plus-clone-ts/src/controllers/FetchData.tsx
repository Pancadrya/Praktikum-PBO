import { Movie } from "../model/inheritence/Movie";
import { Series } from "../model/inheritence/Series";
import { Episode } from "../model/inheritence/Episode";

class FetchData {
  public fetchMovieAndSeries(id: string, setMovie: any, setSeries: any, setSeason: any, setEpisode: any): void;
  public fetchMovieAndSeries(setMovie: any, setSeries: any): void;
  public fetchMovieAndSeries(): void;

  public fetchMovieAndSeries(arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): void {
    if (typeof arg1 === "string" && typeof arg2 === "function" && typeof arg3 === "function" && typeof arg4 === "function" && typeof arg5 === "function") {
      // Implementation for fetchMovieAndSeries(id, setMovie, setSeries)
      const id = arg1;
      const setMovie = arg2;
      const setSeries = arg3;
      const setSeason = arg4;
      const setEpisode = arg5;

      try {
        fetch(`http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/movies/${id}`)
          .then((res) => res.json())
          .then((data) => {
            const movieData = data["data"];
            const movie = new Movie(
              movieData.title,
              movieData.genre,
              movieData.releaseDate,
              movieData.duration,
              movieData.ageRating,
              movieData.synopsis,
              movieData.director,
              movieData.linkWatch,
              movieData.linkTrailer,
              movieData.backgroundImg
            );
            setMovie(movie);
          });
      } catch (error) {
        console.error("Error fetching movie and series:", error);
      }

      try {
        fetch(`http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/series/${id}`)
          .then((res) => res.json())
          .then((data) => {
            const seriesData = data["data"];
            const series = new Series(
              seriesData.title,
              seriesData.genre,
              seriesData.releaseDate,
              seriesData.duration,
              seriesData.ageRating,
              seriesData.synopsis,
              seriesData.linkTrailer,
              seriesData.backgroundImg,
              seriesData.season,
              seriesData.episode
            );
            setSeries(series);
          });
      } catch (error) {
        console.error("Error fetching movie and series:", error);
      }

      try {
        fetch(`http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/series/${id}/season`)
          .then((res) => res.json())
          .then((data) => {
            const seasonData = data["data"];
            let season: any;
            seasonData.map((seasons: any) => (season = seasons.title));
            setSeason(season);
          });
      } catch (error) {
        console.error("Error fetching movie and series:", error);
      }

      try {
        fetch(`http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/series/${id}/episode`)
          .then((res) => res.json())
          .then((data) => {
            const episodeData = data["data"];
            const episodes = Object.entries(data.data).map(([id, episodeData]) => {
              return {
                id: id,
                ...(episodeData as Record<string, any>),
              };
            });
            setEpisode(episodes);
          });
      } catch (error) {
        console.error("Error fetching movie and series:", error);
      }
    } else if (typeof arg1 === "function" && typeof arg2 === "function" && arg3 === undefined && arg4 === undefined && arg5 === undefined) {
      // Implementation for fetchMovieAndSeries(setMovie, setSeries)
      const setMovie = arg1;
      const setSeries = arg2;

      try {
        fetch("http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/movies")
          .then((res) => res.json())
          .then((data) => {
            if (data && data.data) {
              const moviesArray = Object.entries(data.data).map(([id, movieData]) => {
                return {
                  id: id,
                  ...(movieData as Record<string, any>),
                };
              });
              setMovie(moviesArray);
            }
          });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }

      try {
        fetch("http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/series")
          .then((res) => res.json())
          .then((data) => {
            if (data && data.data) {
              const seriesArray = Object.entries(data.data).map(([id, serieData]) => {
                return {
                  id: id,
                  ...(serieData as Record<string, any>),
                };
              });
              setSeries(seriesArray);
            }
          });
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    } else {
      // Implementation for fetchMovieAndSeries()
      // Rest of the code...
    }
  }
}

export default FetchData;
