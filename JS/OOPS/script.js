function CreateBook(bname,bauthor,bpages,bprice){
    this.bookName = bname;
    this.bookAuthor = bauthor;
    this.bookPages = bpages;
    this.bookPrice = bprice;
    this.getDetails = ()=>{
        console.log("Name: "+ this.bookName);
        console.log("Author: "+ this.bookAuthor);
        console.log("Pages: "+ this.bookPages);
        console.log("Price: "+ this.bookPrice);
        
    }
}

let b1 = new CreateBook('Tintin', 'Arge',270,500);

console.log(b1);
b1.getDetails();

class Students{
    constructor(fName,lName,cRoll,cDept){
        this.fname = fName;
        this.lname = lName;
        this.roll = cRoll;
        this.dept = cDept;
    }
}

let s1 = new Students("Akash","Das",13,"CSE");

console.log(s1);
