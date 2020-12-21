export const putData = (items) => (localStorage.setItem('items', JSON.stringify(items)));

export const loadData = () => (localStorage.getItem('items') != null
  ? JSON.parse(localStorage.getItem('items')) : []);
