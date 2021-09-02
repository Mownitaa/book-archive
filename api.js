//load informations by fetching data
const searchInfo = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data, data.docs));
}


// function for displaying book details
const displayResults = (nums, results) => {
    const numFound = document.getElementById('num-found');
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // conditions about getting searched results
    const errorMessage = document.getElementById('error-message');
    if (results.length === 0) {
        numFound.innerHTML = ' ';
        errorMessage.innerHTML = `<h2 class="text-danger">No Result Found!!!</h2>`;
    }
    else {
        numFound.innerHTML = `<h3>Total number of results found: ${nums.numFound}</h3>`
        errorMessage.innerHTML = ' ';
    }

    // getting array elements
    results.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('columns');
        const image = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`;
        let authorName = result.author_name;
        let publishYear = result.first_publish_year;
        let publisher = result.publisher;
        if (authorName === undefined) {
            authorName = ['Unknown Author']
        }
        if (publishYear === undefined) {
            publishYear = ['........']
        }
        if (publisher === undefined) {
            publisher = ['Unknown']
        }
        div.innerHTML = `
           <img src="${image}" class="card-img-top p-4">
             <div class="card-body">
             <h3 class="card-title text-danger">${result.title}</h3>
           <h4>${authorName[0]}</h4>
             <h5 class="text-info">${publishYear}</h5>
            <h6>${publisher[0]}</h6>
        </div>
        </div>`;
        searchResult.appendChild(div);
    })
}

