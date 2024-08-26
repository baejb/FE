export interface AlbumArtistType {
  id: string;
  name: string;
}

export interface AlbumImageType {
  imageUrl: string;
  width: number;
  height: number;
}

export interface AlbumStatisticsType {
  id: string;
  averageScore: number;
  count: number;
}

export interface AlbumType {
  id: string;
  name: string;
  modifiedAt?: string;
  releasedAt: string;
  artists: AlbumArtistType[];
  images: AlbumImageType[];
  statistics: AlbumStatisticsType;
}

export interface SearchAlbumPageParam {
  offset: number;
}
