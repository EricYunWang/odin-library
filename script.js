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

Book.prototype.swapRead = function(){
    if (this.read == true){
        this.read = false;
    }
    else {
        this.read = true;
    }
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
        newDiv.classList.add('card-div');

        const delBtn = document.createElement("button");
        const readBtn = document.createElement("button");
        const buttondiv = document.createElement('div');
        buttondiv.classList.add('button-div');
        delBtn.textContent = "Delete";
        delBtn.dataset.id = book.id;
        readBtn.textContent = "Read";
        readBtn.dataset.id = book.id;

        const authordiv = document.createElement('div');
        const titlediv = document.createElement('div');
        const readdiv = document.createElement('div');
        authordiv.textContent = `Book Author: ${book.author}`;
        titlediv.textContent = `Book Ttitle: ${book.title}`;
        readdiv.textContent = `Book Read? ${book.read}`;

        // newDiv.textContent = `Book Title: ${book.title} \nBook Author: ${book.author}, \nRead? ${book.read}`;
        // newDiv.style.whiteSpace = "pre-line";
        buttondiv.appendChild(delBtn);
        buttondiv.appendChild(readBtn);
        newDiv.appendChild(authordiv);
        newDiv.appendChild(titlediv);
        newDiv.appendChild(readdiv);
        newDiv.appendChild(buttondiv);
        containerDiv.appendChild(newDiv);

        delBtn.addEventListener("click", () => {
            const index  = myLibrary.findIndex(book => book.id === delBtn.dataset.id);
            if(index > -1){
                myLibrary.splice(index, 1);
            }
            display(myLibrary);
        });

        readBtn.addEventListener("click", () =>{
            const index = myLibrary.findIndex(book => book.id === readBtn.dataset.id);
            if(index > -1){
                myLibrary[index].swapRead();
            }
            display(myLibrary);
        })
    });
}

addBookToLibrary("Taylor Jenkins Reid", "The Seven Husbands of Evelyn Hugo", 400, false);
addBookToLibrary("Harper Lee", "To Kill a Mockingbird", 300, true);


function addBookFunction(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("add-book-popup").style.display = "block";
    document.getElementById("book-name").focus();
}

function closeForm(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("add-book-popup").style.display = "none";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const bookName = formData.get("book-name");
    const authorName = formData.get("author-name");
    const pageNumber = formData.get("page-number");
    const alreadyRead = formData.get("read");
    console.log(bookName);
    addBookToLibrary(bookName, authorName, pageNumber, alreadyRead);
});


