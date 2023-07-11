import { Series } from "./Series";

export class Season {
  private seriesId: string;
  private seasonId: string;
  private title: string;

  constructor(seriesId: string, seasonId: string, title: string) {
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
}
