import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.scss']
})
export class ShowAlbumComponent {
  @Input() selectedAlbum: any;
  constructor() { }
}
