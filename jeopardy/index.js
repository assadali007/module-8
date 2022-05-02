
async  function getCategories(count,offset) {
    let response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
    let data = await response.json()
    return data
}


function getClueHtml(grid,number) {
    return `<div class="my-category-clue" style="grid-row-start: ${grid}">$${number}</div>
`
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        ${getClueHtml(2,100)}
        ${getClueHtml(3,200)}
        ${getClueHtml(4,300)}
        ${getClueHtml(5,400)}

   

    `
}

getCategories(5,30).then(categories => {
    console.log(categories)
    document.body.innerHTML = `
    <div class="board">
       ${categories.map(getCategoryHtml).join('')}
    </div>
    
    `

})