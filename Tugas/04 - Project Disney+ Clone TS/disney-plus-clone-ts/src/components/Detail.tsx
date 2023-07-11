import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { ref, onValue } from "firebase/database";
import { db, db2 } from "../firebase";
import { Movie } from "../model/inheritence/Movie";
import { Series } from "../model/inheritence/Series";
import { Season } from "../model/inheritence/Season";
import { Episode } from "../model/inheritence/Episode";
import FetchData from "../controllers/FetchData";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [series, setSeries] = useState<Series | undefined>(undefined);
  const [season, setSeason] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [episode, setEpisode] = useState<Episode | undefined>(undefined);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const fetchData = new FetchData();

  useEffect(() => {
    // Fetch movie and series by ID
    if (id) {
      fetchData.fetchMovieAndSeries(id, setMovie, setSeries, setSeason, setEpisode);
    }
  }, [id]);

  // let movies = MovieDB();
  // let newMovie = movies.filter((movie) => movie.id === Number(params.id));
  console.log(season);
  console.log(episode);
  return (
    <>
      <Container>
        {movie && (
          <>
            <Background>
              <img src={movie.getBackgroundImg()}></img>
            </Background>
            <Wrap>
              <TittleName>
                <h3>{movie.getTitle()}</h3>
              </TittleName>
              <Controls>
                <PlayButton>
                  <img src="/images/play-icon-black.png" />
                  <a href={movie.getLinkWatch()} style={{ textDecoration: "none", color: "black" }} target="_blank">
                    <span>PLAY</span>
                  </a>
                </PlayButton>
                <TrailerButton>
                  <img src="/images/play-icon-white.png" />
                  <a href={movie.getLinkTrailer()}>
                    <span>Trailer</span>
                  </a>
                </TrailerButton>
                <AddButton>
                  <span>+</span>
                </AddButton>
                <GroupWatchButton>
                  <img src="/images/group-icon.png" />
                </GroupWatchButton>
              </Controls>
              <SubTitle>
                {movie.getDuration()} · {movie.getReleaseDate()} · {movie.getGenre()} · {movie.getAgeRating()}
              </SubTitle>
              <Description>{movie.getSynopsis()}</Description>
            </Wrap>
          </>
        )}
      </Container>
      <Container>
        {series && episode && (
          <>
            <Background>
              <img src={series.getBackgroundImg()}></img>
            </Background>
            <Wrap>
              <TittleName>
                <h3>{series.getTitle()}</h3>
              </TittleName>
              <Controls>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic" style={{ height: "56px", marginRight: "22px", border: "1px solid #fff", backgroundColor: "transparent", color: "#ffffff" }}>
                    PLAY
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ maxHeight: "150px", overflowY: "auto" }}>
                    {episode &&
                      episode.map((ep: any) => (
                        <Dropdown.Item key={ep.episodeId} href={ep.linkWatch}>
                          {season} - {ep.title}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
                <TrailerButton>
                  <img src="/images/play-icon-white.png" />
                  <a href={series.getLinkTrailer()}>
                    <span>Trailer</span>
                  </a>
                </TrailerButton>

                <AddButton>
                  <span>+</span>
                </AddButton>
                <GroupWatchButton>
                  <img src="/images/group-icon.png" />
                </GroupWatchButton>
              </Controls>
              <SubTitle>
                {series.getReleaseDate()} · {series.getGenre()} · {series.getAgeRating()} · {series.getSeason()} Season · {series.getEpisode()} Episode
              </SubTitle>
              <Description>{series.getSynopsis()}</Description>
            </Wrap>
            <br />
            <br />
          </>
        )}
      </Container>
    </>
  );
}

export default Detail;

const Container = styled.div`
  max-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Wrap = styled.div`
  align-items: center;
  justify-content: center;
`;

const TittleName = styled.div`
  margin: 60px 0 0 0;

  h3 {
    font-size: 50px;
  }
`;

const Controls = styled.div`
  padding-top: 25px;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  a.link: {
    text-decoration: none;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: white;
  }
`;

const AddButton = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  font-weight: 500;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
