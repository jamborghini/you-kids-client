export interface Video {
  id: number;
  createdAt: Date;
  videoId: string;
  stats: Stats;
}

export interface Stats {
  title: string;
  likeCount: number;
  dislikeCount: number;
  viewCount: number;
  publishedAt: string;
}
