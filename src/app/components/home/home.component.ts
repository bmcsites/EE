import {Component, OnInit} from '@angular/core';
import {ArtistAlbumsData} from '@shared/models/artist-albums-data.inteface';
import {HttpService} from '@shared/services/http.service';
import {AlbumData, AlbumsData} from '@shared/models/album-data.inteface';
import {DropDownData} from '@shared/models/dropdown.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  data: AlbumsData;
  selectedAlbum: AlbumData;
  artistId: string;
  dropDownOptions: DropDownData;
  optSelected: string;
  payload: any;

  constructor(private httpService: HttpService) {
    this.artistId = '0du5cEVh5yTK9QJze8zA0C';
    this.httpService.getToken().subscribe((data) => {
      this.getAlbums(this.artistId, data);
    });
  }

  ngOnInit() {
  }

  getAlbums(artistId: string, payload) {
    // call api to get albums
    console.log(payload);
/*    this.httpService.getAlbumListByArtistId(artistId, payload).subscribe((data: ArtistAlbumsData) => {
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
      });*/
  }

  // activated when the dropdown component selection was made.
  dropDownChanges(e) {
    // validate data that come from the dropdown
    if (e && e !== '') {
      // find the album by id from the album list and bind it to the show-album component.
      this.selectedAlbum = this.data.find(album => album.id === e);
      // save album id in the localStorage.
      localStorage.setItem('albumId', e);
    } else {
      this.selectedAlbum = null;
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
