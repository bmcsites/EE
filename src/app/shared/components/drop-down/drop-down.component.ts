import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DropDownData, DropDownDataItem} from '../../models/dropdown.interface';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent{
  // get the options from the component that was calling the dropdown
  _dropDownOptions: DropDownDataItem[];

  @Input() set dropDownOptions(change: any) {
    this._dropDownOptions = change;
  }

  get dropDownOptions() {
    return this._dropDownOptions;
  }

  // represent the selected option
  @Input() optSelected?: string;
  // the output EventEmitter
  @Output() dropDownChange = new EventEmitter();
  constructor() {
    if (!this.optSelected) {
      this.optSelected = '';
    }
  }

  // emit the changes to component that was calling the dropdown
  returnVal(val: any) {
    this.dropDownChange.emit(val);
  }
}
