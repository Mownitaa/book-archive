
const searchInfo = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data, data.docs));
}

const displayResults = (nums, results) => {
    // console.log(nums)
    // console.log(results)
    const numFound = document.getElementById('num-found');
    numFound.innerHTML = `<h3>Total number of results found: ${nums.numFound}</h3>`
    // console.log(results)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';


    results.forEach(result => {
        // if (result === 0) {
        //     const errorMessage = document.getElementById('error-message');
        //     const div = document.createElement('div');
        //     div.innerHTML = `<h4>No Result Found</h4>`;
        //     errorMessage.appendChild(div);
        // }
        // else {
        const div = document.createElement('div');
        div.classList.add('col');
        const image = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`;

        div.innerHTML = `
           <img src="${image}" class="card-img-top">
             <div class="card-body">
             <h1 class="card-title">${result.title}</h2>
            <h3>${result.author_name}</h3>
             <h5>${result.first_publish_year}</h5>
            <h6>${result.publisher}</h6>
        </div>
        </div>`;
        searchResult.appendChild(div);
        // }
    })
}

