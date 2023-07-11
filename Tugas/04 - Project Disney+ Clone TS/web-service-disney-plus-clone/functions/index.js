const functions = require("firebase-functions");
const admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require("express");
const cors = require("cors");
const app = express();
const db = admin.firestore();
app.use(cors({ origin: true }));

class MovieManager {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  async createMovie(movieData) {
    try {
      const docRef = await db.collection(this.collectionName).add(movieData);
      return { status: "Success", msg: "Data Saved", id: docRef.id };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async getMovie(id) {
    try {
      const docRef = db.collection(this.collectionName).doc(id);
      const movieDetail = await docRef.get();
      if (!movieDetail.exists) {
        return { status: "Failed", msg: "Movie not found" };
      }
      const data = movieDetail.data();
      return { status: "Success", data };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async getAllMovies() {
    try {
      const querySnapshot = await db.collection(this.collectionName).get();
      const movies = [];
      querySnapshot.forEach((doc) => {
        const movie = {
          id: doc.id,
          ...doc.data(),
        };
        movies.push(movie);
      });
      return { status: "Success", data: movies };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async updateMovie(id, movieData) {
    try {
      const docRef = db.collection(this.collectionName).doc(id);
      await docRef.update(movieData);
      return { status: "Success", msg: "Data Updated" };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async deleteMovie(id) {
    try {
      const docRef = db.collection(this.collectionName).doc(id);
      await docRef.delete();
      return { status: "Success", msg: "Data Removed" };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }
}

class SerieManager {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  async createSeries(SeriesData) {
    try {
      const docRef = await db.collection(this.collectionName).add(SeriesData);
      return { status: "Success", msg: "Data Saved", id: docRef.id };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async getSeries(id) {
    try {
      const docRef = db.collection(this.collectionName).doc(id);
      const SeriesDetail = await docRef.get();
      if (!SeriesDetail.exists) {
        return { status: "Failed", msg: "Series not found" };
      }
      const data = SeriesDetail.data();
      return { status: "Success", data };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async getAllSeries() {
    try {
      const querySnapshot = await db.collection(this.collectionName).get();
      const series = [];
      querySnapshot.forEach((doc) => {
        const seriesObj = {
          id: doc.id,
          ...doc.data(),
        };

        series.push(seriesObj);
      });
      return { status: "Success", data: series };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async getSeriesSeason() {
    try {
      const series = [];

      const seriesSnapshot = await db.collection(this.collectionName).get();

      const promises = seriesSnapshot.docs.map(async (seriesDoc) => {
        const seriesId = seriesDoc.id;
        const seasonSnapshot = await seriesDoc.ref.collection("season").get();

        const seasonPromises = seasonSnapshot.docs.map(async (seasonDoc) => {
          const seasonId = seasonDoc.id;
          const seasonData = seasonDoc.data();
          const episodeSnapshot = await seasonDoc.ref.collection("episode").get();
          const seriesObj = {
            seriesId: seriesId,
            seasonId: seasonId,
            ...seasonData,
          };

          series.push(seriesObj);
        });

        await Promise.all(seasonPromises);
      });

      await Promise.all(promises);

      return { status: "Success", data: series };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async getSeriesEpisode() {
    try {
      const series = [];

      const seriesSnapshot = await db.collection(this.collectionName).get();

      const promises = seriesSnapshot.docs.map(async (seriesDoc) => {
        const seriesId = seriesDoc.id;
        const seasonSnapshot = await seriesDoc.ref.collection("season").get();

        const seasonPromises = seasonSnapshot.docs.map(async (seasonDoc) => {
          const seasonId = seasonDoc.id;
          const episodeSnapshot = await seasonDoc.ref.collection("episode").get();

          episodeSnapshot.forEach((episodeDoc) => {
            const episodeId = episodeDoc.id;
            const episodeData = episodeDoc.data();

            const seriesObj = {
              seriesId: seriesId,
              seasonId: seasonId,
              episodeId: episodeId,
              ...episodeData,
            };

            series.push(seriesObj);
          });
        });

        await Promise.all(seasonPromises);
      });

      await Promise.all(promises);

      return { status: "Success", data: series };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async updateSeries(id, seriesData) {
    try {
      const docRef = db.collection(this.collectionName).doc(id);
      await docRef.update(seriesData);
      return { status: "Success", msg: "Data Updated" };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }

  async deleteSeries(id) {
    try {
      const docRef = db.collection(this.collectionName).doc(id);
      await docRef.delete();
      return { status: "Success", msg: "Data Removed" };
    } catch (error) {
      console.log(error);
      return { status: "Failed", msg: error };
    }
  }
}

const movieManager = new MovieManager("movies");
const seriesManager = new SerieManager("series");

// Routes
app.get("/", (req, res) => {
  return res.status(200).send("Hai there");
});

app.post("/api/movie/create", (req, res) => {
  movieManager
    .createMovie(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

app.get("/api/movies/:id", (req, res) => {
  movieManager
    .getMovie(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

app.get("/api/movies", (req, res) => {
  movieManager
    .getAllMovies()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

app.get("/api/series/:id", (req, res) => {
  seriesManager
    .getSeries(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});
app.get("/api/series/:id/season/", (req, res) => {
  seriesManager
    .getSeriesSeason(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});
app.get("/api/series/:id/episode", (req, res) => {
  seriesManager
    .getSeriesEpisode(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

app.get("/api/series/", (req, res) => {
  seriesManager
    .getAllSeries()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

app.put("/api/movie/update/:id", (req, res) => {
  movieManager
    .updateMovie(req.params.id, req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

app.delete("/api/movie/delete/:id", (req, res) => {
  movieManager
    .deleteMovie(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

exports.app = functions.https.onRequest(app);
