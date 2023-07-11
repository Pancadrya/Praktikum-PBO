import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Slider from "react-slick";
import Viewers from "./Viewers";
import Movies from "./Movies";
import Login from "./Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { setSeries } from "../features/serie/seriesSlice";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import { Movie } from "../model/inheritence/Movie";
import FetchData from "../controllers/FetchData";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  // const { fetchMovieAndSeries } = FetchData();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const dbRef = collection(db, "movies");
  //     const unsubscribe = onSnapshot(dbRef, (snapshot) => {
  //       const movies = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       dispatch(setMovies(movies));
  //     });

  //     return () => unsubscribe();
  //   };

  //   fetchData();
  // }, []);
  // fetchMovieAndSeries();

  // }, []);

  // useEffect(() => {
  //   const fetchSeries = async () => {
  //     const dbRef = collection(db, "series");
  //     const unsubscribe = onSnapshot(dbRef, (snapshot) => {
  //       const series = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       dispatch(setSeries(series));
  //     });

  //     return () => unsubscribe();
  //   };

  //   fetchSeries();
  // }, []);

  return (
    <>
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
          </Container>
        </>
      )}
    </>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 30px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;
