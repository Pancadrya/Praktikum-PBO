import { Season } from "./Season";

export class Episode {
  [x: string]: any;
  seriesId: string;
  seasonId: string;
  episodeId: string;
  linkWatch: string;
  title: string;

  constructor(seriesId: string, seasonId: string, episodeId: string, title: string, linkWatch: string) {
    this.seriesId = seasonId;
    this.seasonId = seasonId;
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }
  public getSeriesId(): string {
    return this.seriesId;
  }
  public getSeasonId(): string {
    return this.seasonId;
  }
  public getEpisodeId(): string {
    return this.episodeId;
  }
  public getLinkWatch(): string {
    return this.linkWatch;
  }
}
