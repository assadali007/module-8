

async  function findShow(query) {
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    let data = await response.json()
    console.log(data)
    return data
}

function getShowHtml(show) {
    return `<div class="my-show">
        <div class="my-show-title">
            ${show.name}
        </div>
        
        <div class="my-show-summary">
            ${show.summary}
        </div>
    </div>`
}

function displayShow(shows) {
    document.body.innerHTML=  `<div class="my-shows">
      ${shows.map(show => getShowHtml(show.show)).join('')}
</div>`
}


findShow("office").then(displayShow)
    .catch(e => console.log(e))



