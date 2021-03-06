const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('placecholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
event.target.classList.add('hold')
setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
console.log('drag over');
}
function dragleave(event) {
    console.log('drag leave');
}
function dragenter(event) {
    console.log('drag over');
}
function dragdrop(event) {
    console.log('drag drop');
}