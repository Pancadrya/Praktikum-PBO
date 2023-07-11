class MovieApp {
  constructor() {
    this.titleV = document.getElementById("title");
    this.genreV = document.getElementById("genre");
    this.releaseDateV = document.getElementById("releaseDate");
    this.durationV = document.getElementById("duration");
    this.ageRatingV = document.getElementById("ageRating");
    this.directorV = document.getElementById("director");
    this.synopsisV = document.getElementById("synopsis");
    this.cardImgV = document.getElementById("cardImg");
    this.linkWatchV = document.getElementById("linkWatch");
    this.linkTrailerV = document.getElementById("linkTrailer");
    this.backgroundImgV = document.getElementById("backgroundImg");
    this.tbody = document.getElementById("tbody");
    this.editnama = document.getElementById("editnama");
    this.editnohp = document.getElementById("editnohp");
    this.idV = document.getElementById("id");
    this.getid = document.getElementById("getid");
  }

  initialize() {
    this.getData();
  }

  getData() {
    fetch("http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/movies")
      .then((res) => res.json())
      .then((data) => {
        let tabel = "";
        let no = 1;
        let output = Object.entries(data);
        console.log(output);
        output[1][1].forEach((row) => {
          tabel += `
          <tr>
              <td>${no}</td>
              <td>${row.title}</td>
              <td>${row.genre}</td>
              <td>${row.releaseDate}</td>
              <td>${row.duration}</td>
              <td>${row.ageRating}</td>
              <td>${row.director}</td>
              <td>${row.synopsis}</td>
              <td>${row.cardImg}</td>
              <td>${row.linkWatch}</td>
              <td>${row.linkTrailer}</td>
              <td>${row.backgroundImg}</td>
              <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="app.editRow('${row.id}')">Edit</td>
              <td><button type="button" class="btn btn-danger"  onclick="app.deleteRow('${row.id}')">Hapus</td>
          </tr>
          `;
          no++;
        });

        this.tbody.innerHTML = tabel;
      });
  }

  createData() {
    let data = {
      title: this.titleV.value,
      genre: this.genreV.value,
      releaseDate: this.releaseDateV.value,
      duration: this.durationV.value,
      ageRating: this.ageRatingV.value,
      director: this.directorV.value,
      synopsis: this.synopsisV.value,
      cardImg: this.cardImgV.value,
      linkWatch: this.linkWatchV.value,
      linkTrailer: this.linkTrailerV.value,
      backgroundImg: this.backgroundImgV.value,
    };
    console.log(data);
    fetch("http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/movie/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        this.getData();
      });

    this.titleV.value = "";
    this.genreV.value = "";
    this.releaseDateV.value = "";
    this.durationV.value = "";
    this.ageRatingV.value = "";
    this.directorV.value = "";
    this.synopsisV.value = "";
    this.cardImgV.value = "";
    this.linkWatchV.value = "";
    this.linkTrailerV.value = "";
    this.backgroundImgV.value = "";
  }

  editRow(id) {
    fetch("http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/movies/" + id)
      .then((res) => res.json())
      .then((data) => {
        const output = data["data"];
        console.log(data);
        this.editnama.value = output.title;
        this.editnohp.value = output.genre;
        this.editreleaseDate.value = output.releaseDate;
        this.editduration.value = output.duration;
        this.editageRating.value = output.ageRating;
        this.editgenre.value = output.genre;
        this.editdirector.value = output.director;
        this.editsynopsis.value = output.synopsis;
        this.editcardImg.value = output.cardImg;
        this.editlinkWatch.value = output.linkWatch;
        this.editlinkTrailer.value = output.linkTrailer;
        this.editbackgroundImg.value = output.backgroundImg;
        this.getid.value = id;
      });
  }

  updateData() {
    let putdata = {
      title: this.edittitle.value,
      genre: this.editgenre.value,
      releaseDate: this.editreleaseDate.value,
      duration: this.editduration.value,
      ageRating: this.editageRating.value,
      director: this.editdirector.value,
      synopsis: this.editsynopsis.value,
      cardImg: this.editcardImg.value,
      linkWatch: this.editlinkWatch.value,
      linkTrailer: this.editlinkTrailer.value,
      backgroundImg: this.editbackgroundImg.value,
    };
    fetch("http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/movie/update/" + this.getid.value, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putdata),
    })
      .then((res) => res.json())
      .then((data) => {
        this.getData();
      });
    this.updateData.setAttribute("data-bs-dismiss", "modal");
  }

  deleteRow(id) {
    fetch("http://localhost:5001/disney-plus-clone-fireba-9856a/us-central1/app/api/movie/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        this.getData();
      });
  }
}

const app = new MovieApp();
app.initialize();
