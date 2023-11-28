const contributionGraph = document.querySelector('.contribution-graph')

const arrayColumn = []
const arrayLine = []
function addCell(id, idModule){
    return `<div 
                id='cell cell_${id}' 
                class="contribution-graph__cell">
                <div 
                    id='module module_${id,idModule}' 
                    class="module">
                        <h2 class="module__title">25 contribution</h2>
                        <div class="module__descr">Четверг, Ноябрь 28, 2022</div>
                    </div>
                </div>`
}
function addLine(id){
    return `<div id="line line${id}" class="contribution-graph__line">${(arrayColumn.map((indexColum)=>`${addCell(indexColum, id)}`)).join('')}</div>`
}
function generation(){
    for(let i = 0; i < 51; i++){
        arrayColumn.push(i)
    }
    for(let i = 0; i< 7; i++){
        arrayLine.push(i)
    }
    contributionGraph.innerHTML += `${(arrayLine.map(indexLine=>addLine(indexLine))).join('')}`
    const module = document.querySelectorAll('.module')
    const cell = document.querySelectorAll('.contribution-graph__cell')
    for(let i = 0; i < 356; i++){
        cell[i].onmouseover = function() {
            module[i].style.display = "block"
        }
        cell[i].onmouseout = function() {
            module[i].style.display = "none"
        }
    }
}

generation()








