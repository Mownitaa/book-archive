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
    console.log(results);
    const numFound = document.getElementById('num-found');
    numFound.innerHTML = `<h3>Total number of results found: ${nums.numFound}</h3>`
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // conditions about getting searched results
    const errorMessage = document.getElementById('error-message');
    if (results.length === 0) {
        errorMessage.innerHTML = `<h4 class="text-danger">No Result Found!!!</h4>`;
    }
    else {
        errorMessage.innerHTML = ' ';
    }

    // getting array elements
    results.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('col');
        const image = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`;
        let authorName = result.author_name;
        let publishYear = result.first_publish_year;
        let publisher = result.publisher;
        if (authorName === undefined) {
            authorName = ['Unknown Author']
        }
        if (publishYear === undefined) {
            publishYear = ['.....']
        }
        if (publisher === undefined) {
            publisher = ['Unknown']
        }
        div.innerHTML = `
           <img src="${image}" class="card-img-top">
             <div class="card-body">
             <h1 class="card-title">${result.title}</h2>
           <h3>${authorName[0]}</h3>
             <h5>${publishYear}</h5>
            <h6>${publisher[0]}</h6>
        </div>
        </div>`;
        searchResult.appendChild(div);
    })
}

