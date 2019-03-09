import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()

export class HttpService {
  public itemAdded: EventEmitter<any>;

  constructor(private http: HttpClient) {
    this.itemAdded = new EventEmitter();
    const popup = window.open(
      'https://accounts.spotify.com/authorize?response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F&client_id=0f753b419ced46e7bbd33e3cdf69ded4',
      'Login with Spotify',
      'width=800,height=600'
    );
    const token = window.location.hash.substr(1).split('&')[0].split('=')[1];
    if (token) {
      localStorage.setItem('spotifyToken', token);
      popup.close();
    }
  }

  // ready the query to send with the Authorization headers.
  getQuery(query: string, payload) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${payload}`
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }

  // get the list of albums by artist id limit by 50.
  getAlbumListByArtistId(artistId: string, payload) {
    return this.getQuery(`artists/${artistId}/albums?market=ES&limit=50`, payload);
  }
}
