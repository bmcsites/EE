import {Component, OnInit} from '@angular/core';
import {AlbumData, AlbumsData} from '../../shared/models/album-data.inteface';
import {DropDownData} from '../../shared/models/dropdown.interface';
import {HttpService} from '../../shared/services/http.service';
import {ArtistAlbumsData} from '../../shared/models/artist-albums-data.inteface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  data: AlbumsData;
  selectedAlbum: AlbumData;
  artistId: string;
  dropDownOptions: DropDownData;
  optSelected: string;
  payload: any;
  countInterval: number;

  constructor(private httpService: HttpService) {
    this.artistId = '0du5cEVh5yTK9QJze8zA0C';
    this.countInterval = 1;
  }

  ngOnInit() {
    this.waitForToken();
  }

  waitForToken() {
    if (this.countInterval) {
      this.countInterval++;
      if (localStorage.getItem('spotifyToken')) {
        console.log()
        this.countInterval = 0;
        this.getAlbums(this.artistId);
      } else {
        if (this.countInterval < 240) {
          setTimeout(() => { this.waitForToken(); }, 500);
        } else {
          console.log('no connection');
        }
      }
    } else {
      console.log('something is wrong');
    }
  }

  getAlbums(artistId: string) {
    // call api to get albums
    this.payload = localStorage.getItem('spotifyToken');
    this.httpService.getAlbumListByArtistId(artistId, this.payload).subscribe((data: ArtistAlbumsData) => {
        if (data.items) {
          // arrange data for dropdown and for album selection
          this.data = data.items.map(({id, name, images, release_date}) => ({id, name, images, release_date}));
          this.dropDownOptions = data.items.map(({id, name}) => ({val: id, txt: name}));
          // call function that check's for the last album displayed
          this.loadLastAlbum();
        }
      },
      err => {
        console.log('err:::', err);
      });
  }

  // activated when the dropdown component selection was made.
  dropDownChanges(e: string | null) {
    // validate data that come from the dropdown
    if (e && e !== '' && this.data) {
      // find the album by id from the album list and bind it to the show-album component.
      this.selectedAlbum = this.data.find(album => album.id === e);
      // save album id in the localStorage.
      localStorage.setItem('albumId', e);
    } else {
      this.selectedAlbum = undefined;
    }
  }

  // check for album id in the localStorage and update the show-album component and the dropdown.
  loadLastAlbum() {
    if (localStorage.getItem('albumId')) {
      this.dropDownChanges(localStorage.getItem('albumId'));
      this.optSelected = localStorage.getItem('albumId');
    }
  }
}
