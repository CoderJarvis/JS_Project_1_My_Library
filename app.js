class BookDetails {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let tableBody = document.getElementById('tableBody'); //which container it will be populate//where to papulate
        //each html has to be populate//what to papulate
        let html = ` <tr>              
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
        tableBody.innerHTML += html; //pushing the book details each time by .innerHTML
    }

    emptyField(book) {
        if (book.name.length == 0 || book.author.length == 0)
            return true;
        else
            return false;
    }

    validate(book) {
        if (book.name.length <= 3 || book.author.length <= 3)
            return false;
        else
            return true;
    }

    clear() {
        let myForm = document.getElementById('myForm');
        myForm.reset(); //to clear the form after add
    }

    emptyFieldError(){
        let emptyError=document.getElementById('alert');
        emptyError.innerHTML=
            `<div class="alert alert-danger" role="alert">
                Error...Fileds cant be blank..Try Again
            </div>`

            setTimeout(() => {
                emptyError.innerHTML="";
            }, 3000);
    }

    successAlert() {
        let successAlert = document.getElementById('alert');
        successAlert.innerHTML =
            `<div class="alert alert-success" role="alert">
        Success...Your Book Has Been successfully Added
        </div>`

        setTimeout(() => {
            successAlert.innerHTML = '';
        }, 3000);
    }

    errorAlert() {
        let errorAlert = document.getElementById('alert');
        errorAlert.innerHTML =
            `<div class="alert alert-danger" role="alert">
        Error...Book name and Author name should be greater than three letters
        </div>`

        setTimeout(() => {
            errorAlert.innerHTML = "";
        }, 3000);
    }
}



let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", libraryFormSubmit) //program starts from here when user click button

function libraryFormSubmit(e) {
    //make variables of inputed values by the user//here 3 variabes
    let name = document.getElementById("book").value; //1st var
    let author = document.getElementById("author").value; //2nd var

    let motivational = document.getElementById("motivational");
    let novel = document.getElementById("novel");
    let comic = document.getElementById("comic");
    let type; //3rd var by checking


    //checking each radio button who is checked 
    if (motivational.checked) {
        type = motivational.value;
    } else if (novel.checked) {
        type = novel.value;
    } else if (comic.checked) {
        type = comic.value;
    }

    let book = new BookDetails(name, author, type); //constructor that stores all variables in a object
    let display = new Display(); //now we have to display the object

    if (display.emptyField(book)) { //firat check if user left any fiels blank
        display.emptyFieldError();
    } else if (display.validate(book)) //some conditions to input
    {
        display.add(book); //to add the book details
        display.clear();
        display.successAlert();
    } else {
        display.errorAlert();
    }
    e.preventDefault(); //not to reload the page//prevent submit behaviour

}