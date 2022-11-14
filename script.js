let myLibrary = []
const oldDiv = document.querySelector('.oldDiv')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(event) {
    event.preventDefault()
    let title = document.querySelector('.title').value
    let author = document.querySelector('.author').value
    let pages = document.querySelector('.pages').value
    let read = document.querySelector('.read').value
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    printArray()
}

function printArray() {
    let arrayLength = myLibrary.length;
    for (let i = 0; i<arrayLength; i++) {
        let newDiv = document.createElement('div')
        oldDiv.appendChild(newDiv)
        newDiv.classList.add('cardinfo')
        newDiv.classList.add('card')
        newDiv.textContent = myLibrary[i].title + " " + myLibrary[i].author + " " + myLibrary[i].pages
        myLibrary.pop()
    }
}

let form = document.querySelector('form')
form.addEventListener('submit', addBookToLibrary) 




var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

let submit = document.querySelector('.submit')
submit.addEventListener('click',()=>{
    modal.style.display = "none"
})