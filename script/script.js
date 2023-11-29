import getResponse from "./response.js"

const contributionGraph = document.querySelector('.contribution-graph')

const arrayColumn = []
const arrayLine = []
let contribution = 0
let baseDate = new Date()
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
baseDate.setDate(baseDate.getDate() - 357)
let response
getResponse().then(data=> {
    response = data
    generation()
})


function getDay(firstDate){
    firstDate.setDate(firstDate.getDate() + 1)
    let secondDate = firstDate.toLocaleDateString()
                            .split('.')
                            .reverse()
                            .join('-')
    return secondDate
}
function getColor(){
    if(contribution === 0) return 'rgba(237, 237, 237, 1)'
    if(contribution < 10) return 'rgba(172, 213, 242, 1)'
    if(contribution < 20) return 'rgba(127, 168, 201, 1)'
    if(contribution < 30) return 'rgba(82, 123, 160, 1)'
    return 'rgba(37, 78, 119, 1)'
}

function addCell(id, idModule){
    contribution = response[getDay(baseDate)] ?? 0
    return `<div 
                style = 'background-color: ${getColor()}'
                id='cell cell_${id}' 
                class="contribution-graph__cell">
                <div 
                    id='module module_${id,idModule}'
                    class="module">
                        <h2 class="module__title">${contribution} contribution</h2>
                        <div class="module__descr"> ${days[baseDate.getDay()]}, ${months[baseDate.getMonth()]} ${baseDate.getDate()} ${baseDate.getFullYear()}</div>
                    </div>
                </div>`
}
function addLine(id){
    return `<div id="line line${id}" class="contribution-graph__line">${(arrayColumn.map((indexColum)=>`${addCell(indexColum, id)}`)).join('')}</div>`
}
function generation(){
    for(let i = 0; i < 7; i++){
        arrayColumn.push(i)
    }
    for(let i = 0; i < 51; i++){
        arrayLine.push(i)
    }
    contributionGraph.innerHTML += `${(arrayLine.map(indexLine=>addLine(indexLine))).join('')}`
    const module = document.querySelectorAll('.module')
    const cell = document.querySelectorAll('.contribution-graph__cell')
    for(let i = 0; i < 357; i++){
        cell[i].onmouseover = function() {
            module[i].style.display = "block"
        }
        cell[i].onmouseout = function() {
            module[i].style.display = "none"
        }
    }
}










