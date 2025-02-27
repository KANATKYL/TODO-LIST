let tasks = []

let imgDone, imgCorrect, imgTrash

imgDone = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  </svg>`


imgCorrect = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>`

imgTrash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg>`

let output = document.getElementById('output')
let addtask = document.getElementById('addtask')


const addTodo = () => {
    let input = document.getElementById('inputText')
    const todo = {
        id: tasks.length + 1,
        name: input.value,
        completed: false
    }
    tasks.push(todo)
    input.value = ''
    addTol()

}


const renderToDos = () => {
    output.innerHTML = ""
    tasks.forEach(el => {
        let card = document.createElement('div')
        let h = document.createElement('h2')
        h.classList.add('h2')

        let btns = document.createElement('div')
        let done = document.createElement('input')
        done.setAttribute('type', 'radio')
        done.classList.add('done')
        let correct = document.createElement('button')
        let trash = document.createElement('button')

        done.addEventListener('click', () => {

        })

        card.classList = el.completed == true ? 'active' : 'card'

        h.innerHTML = el.name
        done.innerHTML = imgDone
        correct.innerHTML = imgCorrect
        trash.innerHTML = imgTrash

        btns.classList.add('www')

        card.append(h)
        card.append(btns)
        btns.append(done)
        btns.append(correct)
        btns.append(trash)
        output.append(card)

        let id = el.id
        done.addEventListener('click', () => {
            tasks.forEach(el => {
                if (el.id == id) {
                    el.completed = !el.completed
                }
            })
            addTol()
        })
        trash.addEventListener('click', () => {
            let con = confirm('Действительно ли хотите удалить?')
            if (con) {
                tasks = tasks.filter(el => el.id != id)
            }
            addTol()
        })
        correct.addEventListener('click', () => {
            tasks.forEach(el => {
                if (el.id == id) {
                    let pr = prompt('Correct word')
                    el.name = pr
                }
            })
            addTol()
        })
    })
}


let addTol = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderToDos()
}
const getFromLocalStorage = () => {
    const reference = localStorage.getItem('tasks')
    if (reference) {
        tasks = JSON.parse(reference)
        renderToDos()
    }
}
getFromLocalStorage()