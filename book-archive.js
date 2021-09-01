
const loadInfo = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}
loadInfo()