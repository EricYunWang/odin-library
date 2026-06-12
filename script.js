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
}

function display(array){
    array.forEach((item,index)=>{   
        console.log(`id ${item.id}: ${item.title}`);

    });
}

addBookToLibrary("me", "you", 12, true);
addBookToLibrary("mee", "y2ou", 19, false);
addBookToLibrary("meee", "yoou", 22, true);
addBookToLibrary("me3", "yeou", 45, true);
addBookToLibrary("mwe", "yofu", 78, false);

display(myLibrary);


function addBookFunction(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("add-book-popup").style.display = "block";
}

function closeForm(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("add-book-popup").style.display = "none";
}