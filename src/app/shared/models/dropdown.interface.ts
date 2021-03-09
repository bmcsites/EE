export interface DropDownData {
  [index: number]: {
    val: string;
    txt: [];
  };
  find(param: (album) => boolean): any;
}

export interface DropDownDataItem {
    val: string;
    txt: [];
}
