import Video from "../abstract/Video";

export class Series extends Video {
  private genre: string;
  private linkTrailer: string;
  private releaseDate: number;
  private ageRating: string;
  private synopsis: string;
  private backgroundImg: string;
  private season: number;
  private episode: number;

  constructor(title: string, genre: string, releaseDate: number, duration: string, ageRating: string, synopsis: string, linkTrailer: string, backgroundImg: string, season: number, episode: number) {
    super();
    this.title = title;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.duration = duration;
    this.ageRating = ageRating;
    this.synopsis = synopsis;
    this.linkTrailer = linkTrailer;
    this.backgroundImg = backgroundImg;
    this.season = season;
    this.episode = episode;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }

  public setLinkTrailer(linkTrailer: string): void {
    this.linkTrailer = linkTrailer;
  }

  public getLinkTrailer() {
    return this.linkTrailer;
  }

  public setGenre(genre: string): void {
    this.genre = genre;
  }

  public getGenre(): string {
    return this.genre;
  }

  public setReleaseDate(releaseDate: number): void {
    this.releaseDate = releaseDate;
  }

  public getReleaseDate(): number {
    return this.releaseDate;
  }

  public setDuration(duration: string): void {
    this.duration = duration;
  }

  public getDuration() {
    return this.duration;
  }

  public setAgeRating(ageRating: string): void {
    this.ageRating = ageRating;
  }

  public getAgeRating() {
    return this.ageRating;
  }

  public SetSynopsis(synopsis: string): void {
    this.synopsis = synopsis;
  }

  public getSynopsis() {
    return this.synopsis;
  }

  public setBackgroundImg(backgroundImg: string): void {
    this.backgroundImg = backgroundImg;
  }

  public getBackgroundImg() {
    return this.backgroundImg;
  }

  public setSeason(season: number) {
    this.season = season;
  }

  public getSeason() {
    return this.season;
  }

  public setEpisode(episode: number) {
    this.episode = episode;
  }

  public getEpisode() {
    return this.episode;
  }
}
