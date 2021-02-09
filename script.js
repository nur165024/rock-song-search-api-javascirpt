document.getElementById('searchBtn').addEventListener('click',function(){
    let songSearchInput = document.getElementById('songSearchInput').value;
    let url = `https://api.lyrics.ovh/suggest/${songSearchInput}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        SearchResultShow(data.data);
    })
});

let SearchResultShow = (data) =>{
    data.forEach(element => {
        console.log(element);
        const showSearchResult = document.getElementById('showSearchResult');
        const div = document.createElement('div');
        div.className = 'single-result row align-items-center my-3 p-3';
        const showHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${element.title}</h3>
                <p class="author lead">Album by <span>${element.title_short}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
            </div>
        `;
        div.innerHTML = showHTML;
        showSearchResult.appendChild(div);
    });
}