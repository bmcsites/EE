import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropDownData} from '@shared/models/dropdown.interface';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  // get the options from the component that was calling the dropdown
  @Input() dropDownOptions: DropDownData;
  // represent the selected option
  @Input() optSelected?: string;
  // the output EventEmitter
  @Output() dropDownChange = new EventEmitter();
  constructor() {}

  ngOnInit() {
    if (!this.optSelected) {
      this.optSelected = '';
    }
  }
  // emit the changes to component that was calling the dropdown
  returnVal(val) {
    this.dropDownChange.emit(val);
  }
}
