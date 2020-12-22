export interface ItemObject {
  title:string;
  edit:boolean;
  id:number;
  create_date:string;
  checked:boolean;
}

type ItemObjectType = ItemObject;

export function putData(items: Array<ItemObjectType>): void {
  localStorage.setItem('items', JSON.stringify(items));
}

export function loadData(): Array<ItemObjectType> {
  return localStorage.getItem('items') != null
    ? JSON.parse(localStorage.getItem('items')) : [];
}
