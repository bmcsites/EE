export interface AlbumsData {
  [index: number]: {
    id: string;
    images: [];
    name: string;
    release_date: string;
  };
  find(param: (album: any) => boolean): any;
}

export interface AlbumData {
    id: string;
    images: [];
    name: string;
    release_date: string;
}
