import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { selectSeries } from "../features/serie/seriesSlice";
import { useSelector } from "react-redux";
import { db, db2 } from "../firebase";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import FetchData from "../controllers/FetchData";

function Movies() {
  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const fetchData = new FetchData();

  useEffect(() => {
    // const moviesRef = ref(db2, "movies");
    // const seriesRef = ref(db2, "series");

    // Mengambil data movies dari Realtime Database
    // onValue(moviesRef, (snapshot) => {
    //   const movieData = snapshot.val();
    //   if (movieData) {
    //     const moviesArray = Object.entries(movieData).map(([id, data]) => {
    //       return {
    //         id: id,
    //         ...(data as Record<string, any>),
    //       };
    //     });
    //     setMovies(moviesArray);
    //   }
    // });

    fetchData.fetchMovieAndSeries(setMovies, setSeries);

    //   // Mengambil data series dari Realtime Database
    //   onValue(seriesRef, (snapshot) => {
    //     const seriesData = snapshot.val();
    //     if (seriesData) {
    //       const seriesArray = Object.values(seriesData);
    //       setSeries(seriesArray);
    //     }
    //   });
  }, []);

  return (
    <Container>
      <br />
      <br />
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie: any) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/movies/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
      <br />
      <br />
      <h4>Series</h4>
      <Content>
        {series &&
          series.map((serie: any) => (
            <Wrap key={serie.id}>
              <Link to={`/detail/series/${serie.id}`}>
                <img src={serie.cardImg} alt={serie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
