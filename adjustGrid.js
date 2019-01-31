let gridSize = document.getElementById('grid_size')
let htmlStyles = window.getComputedStyle(document.querySelector("html"))
let gridRows = parseInt(htmlStyles.getPropertyValue("--rowNum"))
let gridCols = parseInt(htmlStyles.getPropertyValue("--colNum"))

gridSize.addEventListener('change', adjustGrid)

function adjustGrid() {
    let gridValue = gridSize.value

    document.documentElement.style.setProperty("--rowNum", gridValue)
    document.documentElement.style.setProperty("--colNum", gridValue)
}