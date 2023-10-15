document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
form.addEventListener('submit', (e) => {
  e.preventDefault()
 buildMyToDo(e.target.querySelector("#text").value)
 form.reset()

})
});
function buildMyToDo(todo){
  let li = document.createElement('li');
 let btn = document.createElement('button')
 btn.addEventListener('click', handleDelete )
 btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  console.log(li)

}
function handleDelete(e){
  e.target.parentNode.remove()
}
