const form = document.getElementById("book-form");
const containerDiv = document.getElementById("container");

const myLibrary = [];

function Book(author, title, numberOfPages, read){
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(author, title, numberOfPages, read){
    let book = new Book(author, title, numberOfPages, read);
    myLibrary.push(book);
    display(myLibrary);

}

function display(array){
    containerDiv.replaceChildren();
    array.forEach((book)=>{
        const newDiv = document.createElement('div');
        const btn = document.createElement("button");
        btn.textContent = "read";
        newDiv.textContent = `${book.title}: ${book.author}`;
        newDiv.appendChild(btn);
        containerDiv.appendChild(newDiv);
    });
}

addBookToLibrary("me", "you", 12, true);
addBookToLibrary("mee", "y2ou", 19, false);
addBookToLibrary("meee", "yoou", 22, true);
addBookToLibrary("me3", "yeou", 45, true);
addBookToLibrary("mwe", "yofu", 78, false);


function addBookFunction(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("add-book-popup").style.display = "block";
}

function closeForm(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("add-book-popup").style.display = "none";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());
    const bookName = formData.get("book-name");
    const authorName = formData.get("author-name");
    const pageNumber = formData.get("page-number");
    const alreadyRead = formData.get("read");
    console.log(bookName);
    addBookToLibrary(bookName, authorName, pageNumber, alreadyRead);
});
