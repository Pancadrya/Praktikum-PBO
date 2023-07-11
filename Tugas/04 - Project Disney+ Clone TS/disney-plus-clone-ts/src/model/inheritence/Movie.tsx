import Video from "../abstract/Video";

export class Movie extends Video {
  private genre: string;
  private linkWatch: string;
  private linkTrailer: string;
  private releaseDate: number;
  private ageRating: string;
  private synopsis: string;
  private director: string;
  private backgroundImg: string;

  constructor(title: string, genre: string, releaseDate: number, duration: string, ageRating: string, synopsis: string, director: string, linkWatch: string, linkTrailer: string, backgroundImg: string) {
    super();
    this.title = title;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.duration = duration;
    this.ageRating = ageRating;
    this.synopsis = synopsis;
    this.director = director;
    this.linkWatch = linkWatch;
    this.linkTrailer = linkTrailer;
    this.backgroundImg = backgroundImg;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }

  public setLinkWatch(linkWatch: string): void {
    this.linkWatch = linkWatch;
  }

  public getLinkWatch() {
    return this.linkWatch;
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

  public setDirector(director: string): void {
    this.director = director;
  }

  public getDirector() {
    return this.director;
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
}
