// Mencoba hijrah dari Java ke Typescript

const movieList = [
  {
    id: 1,
    title: "Pengabdi Setan",
    genre: "Horor",
    releaseDate: 2017,
    duration: "1 hr 47 m",
    ageRating: "17+",
    director: "Joko Anwar",
    synopsis: "After being mysteriously ill for almost 3 years, mother finally passes away. Dad then leaves town for a job leaving the kids all alone. Soon, the children sense that mother has come back to the house.",
    cardImg: "https://teraskata.com/wp-content/uploads/2022/01/teraskata.com-Film-Pengabdi-Setan.jpg",
    linkWatch: "https://www.hotstar.com/id/movies/pengabdi-setan/1260040130/watch",
    linkTrailer: "https://www.youtube.com/embed/0hSptYxWB3E",
    backgroundImg:
      "https://cdn1-production-images-kly.akamaized.net/R7YFSRn693uhvTyZuuPeGhvlKfQ=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3269889/original/058758700_1602889820-Pengabdi_Setan.jpg",
  },
  {
    id: 2,
    title: "Pengabdi Setan 2: Communion",
    genre: "Horor",
    releaseDate: 2022,
    duration: "1 hr 58 m",
    ageRating: "17+",
    director: "Joko Anwar",
    synopsis: "When the heavy storm hits, it wasn't the storm that a family should fear but the people and non-human entities who are out for them.",
    cardImg: "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7609/1387609-h-c5e1e5827609",
    linkWatch: "https://www.hotstar.com/id/movies/pengabdi-setan-2-communion/1260119056/watch",
    linkTrailer: "https://www.youtube.com/embed/8LIHcd7WfWI",
    backgroundImg: "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7609/1387609-h-c5e1e5827609",
  },
  {
    id: 3,
    title: "Sri Asih",
    genre: "Action",
    releaseDate: 2022,
    duration: "2 hr 13 m",
    ageRating: "13+",
    director: "",
    synopsis: "Alana was separated from her parents and was adopted by a rich woman. As she reaches adulthood, she discovers the truth about her origin.",
    cardImg: "https://cdn0-production-images-kly.akamaized.net/LtrTGvGcKZDoELPMouvzpXn12ns=/0x0:680x383/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2885228/original/064283700_1566125016-bumilangit2.jpg",
    linkWatch: "https://www.hotstar.com/id/movies/sri-asih/1260133861/watch",
    linkTrailer: "https://www.youtube.com/embed/oQWpRUbWZnU",
    backgroundImg: "https://akcdn.detik.net.id/visual/2022/10/03/film-sri-asih-2022-1_169.png?w=650",
  },
  {
    id: 4,
    title: "Black Panther: Wakanda Forever",
    genre: "Action",
    releaseDate: 2022,
    duration: "2 hr 41 m",
    ageRating: "13+",
    director: "",
    synopsis: "Queen Ramonda, Shuri, M’Baku, Okoye and Dora Milaje fight to protect their nation from intervening world powers after the death of King T’Challa.",
    cardImg: "https://whatsondisneyplus.com/wp-content/uploads/2022/10/black-panther-wakanda-forever-1024x576.jpg",
    linkWatch: "https://www.hotstar.com/id/movies/black-panther-wakanda-forever/1260118821/watch",
    linkTrailer: "https://www.youtube.com/embed/_Z3QKkl1WyM",
    backgroundImg: "https://comicbookmovie.com/images/articles/banners/197121.jpeg",
  },
  {
    id: 5,
    title: "Marvel's The Avengers",
    genre: "Superhero",
    releaseDate: 2011,
    duration: "2 hr 22 m",
    ageRating: "17+",
    director: "",
    synopsis:
      "When an unexpected enemy emerges that threatens the fate of mankind, Nick Fury, Director of S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
    cardImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4298/674298-h",
    linkWatch: "https://www.hotstar.com/id/movies/marvels-the-avengers/1660000015/watch",
    linkTrailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    backgroundImg: "https://radiodisneyclub.fr/wp-content/uploads/2021/01/Avengers.jpg",
  },
  {
    id: 6,
    title: "The Avengers: Age of Ultron",
    genre: "Action",
    releaseDate: 2015,
    duration: "2 hr 21 m",
    ageRating: "13+",
    director: "",
    synopsis: "Tony Stark builds an AI system, Ultron, with Bruce Banner's help. When things go wrong, it's up to the mightiest heroes to stop the villainous Ultron.",
    cardImg: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/03/EG2GZbMU4AAVbOv.jpg?w=1000&h=600&crop=1",
    linkWatch: "https://www.hotstar.com/id/movies/avengers-age-of-ultron/1260018315/watch",
    linkTrailer: "https://www.youtube.com/embed/tmeOjFno6Do",
    backgroundImg:
      "https://cdn1-production-images-kly.akamaized.net/mHm6sp__qQ_-hV5Pu_oDj9WO1us=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/864873/original/089762100_1430308403-avengers-2-image-02-edit1.jpg",
  },
  {
    id: 7,
    title: "Avengers: Infinity War",
    genre: "Superhero",
    releaseDate: 2018,
    duration: "2 hr 29 m",
    ageRating: "13+",
    director: "",
    synopsis: "With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers and their Superhero allies risk everything in the ultimate showdown of all time.",
    cardImg: "https://1.bp.blogspot.com/-ewO3jQXnQpQ/Xqe8ss_Qj-I/AAAAAAAAHAw/XO5CWsarG2YJMvNGubMegOe3yZFV478_QCLcBGAsYHQ/s1600/Avengers-Infinity-War.jpg",
    linkWatch: "https://www.hotstar.com/id/movies/avengers-infinity-war/1660010677/watch",
    linkTrailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
    backgroundImg:
      "https://w0.peakpx.com/wallpaper/93/158/HD-wallpaper-avengers-infinity-war-movie-imax-poster-avengers-infinity-war-infinity-war-hulk-thor-wanda-maximoff-winter-solider-vision-falcon-war-machine-spiderman-iron-man-captain-america-doctor-strange.jpg",
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    genre: "Superhero",
    releaseDate: 2019,
    duration: "3 hr 1 m",
    ageRating: "13+",
    director: "",
    synopsis: "After the devastating events of the Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos’ actions and restore balance to the universe.",
    cardImg: "https://pbs.twimg.com/media/EJD_zUzVUAEObRb.jpg",
    linkWatch: "https://www.hotstar.com/id/movies/avengers-endgame/1260013556/watch",
    linkTrailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    backgroundImg: "https://cdn.marvel.com/content/1x/avengersendgame_lob_mas_mob_01.jpg",
  },
];

function MovieDB() {
  return movieList;
}

export default MovieDB;
