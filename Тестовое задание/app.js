const text = document.querySelector('.text')
const add = document.querySelector('.add')
const tasks = document.querySelector('#tasks')
const remove = document.querySelector('.remove')
const removeList = document.querySelector('.remove_list')


add.addEventListener('click', (e) => {
    if(text.value === '') return

    createAndDeleteElements(text.value)
    text.value = ''
})

function createAndDeleteElements (value) {
    const ul = document.createElement('ul')
    ul.className = 'list'


    const li = document.createElement('li')
    li.className = 'li'

    const text = document.createElement('div')
    text.className = 'text_task'
    text.textContent = value
    li.appendChild(text)

    const status = document.createElement('div')
    status.className = 'status'
    li.appendChild(status)



    const btnReady = document.createElement('button')
    btnReady.className = 'remove_list'
    btnReady.textContent = 'READY'
    li.appendChild(btnReady)

    const btnDelete = document.createElement('button')
    btnDelete.className = 'ready_list'
    btnDelete.textContent = 'DELETE'
    li.appendChild(btnDelete)


    remove.addEventListener('click', e => {
        tasks.removeChild(li)
    })

    // if(removeList.innerText === 'Unready') {
    //     status.style.background = 'green'
    // }

    // removeList.addEventListener('click', function () {
    //     if(removeList.innerText.toLowerCase() === 'Unready') {
    //         removeList.innerText = 'Ready'
    //     } else {
    //         removeList.innerText = 'Unready'
    //     }
    // })






    tasks.appendChild(li)


}