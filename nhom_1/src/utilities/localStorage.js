// selectedItem {
//     square: String;
//     piece: String;
// }

export function getSelectedItem() {
    let selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
    return selectedItem;
}

export function setSelectedItem(selectedItem) {
    localStorage.setItem('selectedItem', JSON.stringify(selectedItem))
}
export function removeSelectedItem() {
    localStorage.removeItem('selectedItem');
}