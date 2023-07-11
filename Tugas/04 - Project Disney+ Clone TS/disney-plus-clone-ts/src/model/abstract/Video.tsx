abstract class Video {
  title: string;
  duration: string;

  abstract setTitle(title: string): void;
  abstract getTitle(): string;
}

export default Video;
