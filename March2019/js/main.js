// // // a = 12;
// // // b = "kous"
// // // console.log(b)
// // // console.log(typeof a);
// // // console.log(typeof (b));

// // // console.log(b.split(''));

// // // const c = new Array(1, 2, 3, 4, 5);
// // // console.log(typeof (c))
// // // console.table(c)


// // const person = {
// //     first: 'John',
// //     last: 'doe',
// //     hobbies: ['music', 'movies', 'dance'],
// //     address: {
// //         street: '50 ave',
// //         city: 'mumbai',
// //         state: 'ko'
// //     }

// // // }

// // // person.first = "kou"

// // // console.log(person.first)


// // // const name = "koushith"
// // // name = "Amin"

// // // console.log(name)

// // const students = [
// //     {
// //         name: "koushith",
// //         age: 23,
// //         isCool: true
// //     },
// //     {
// //         name: "Preetham",
// //         age: 22,
// //         isCool: false
// //     },
// //     {
// //         name: "Swaroop",
// //         age: 24,
// //         isCool: true
// //     },
// //     {
// //         name: "Mohith",
// //         age: 21,
// //         isCool: false
// //     }

// // ]

// // for (let s of students) {
// //     console.log(s.age);
// // }

// // for each

// // students.forEach(function (s) {
// //     console.log(s.name)

// // })

// // students.forEach(function (s) => 
// //     console.log(s.name)

// // )

// // const arrtet = students.map(function (s) {
// //     return s.name;

// // })

// // console.log(arrtet)


// // filter

// // const ageee = students.filter(function (s) {
// //     return s.age > 23;

// // }).map(function (s) {
// //     return s.name;
// // })

// // console.log(ageee)


// // Functions

// // function addNum(n1, n2) {
// //     return n1 + n2;

// // }

// // console.log(addNum(3, 3))


// // const addNum = (n1, n2) => n1 + n2;


// // console.log(addNum(11, 5))


// // const sub = (n1, n2) => {
// //     return n1 - n2;
// // }
// // console.log(sub(10, 5))

// // //Constructor
// // function Person(firstName, lastName, dob) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.dob = new Date(dob);

// //     //get full year
// //     this.getFullYear = function () {
// //         return this.dob.getFullYear();
// //     }
// // }

// // // Instanciate

// // const Person1 = new Person('john', 'doe', '14-12-1997');
// // const Person2 = new Person('Koushith', 'Amin', '12-12-1997');


// // console.log(Person1.firstName + " " + Person1.lastName);
// // console.log(Person1.getFullYear)

// //clss

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// const Person1 = new Person('john', 'doe', '14-12-1997');
// const Person2 = new Person('Koushith', 'Amin', '12-12-1997');

// console.log(Person1.getBirthYear())

// console.log(Person1.getFullName())

//Single element selector

// console.log(document.getElementById('my-form'));

//   

// const all = document.querySelectorAll('.item');

// all.forEach((item) => console.log(item))


// const ul = document.querySelector('.items')
// ul.firstElementChild.textContent = "Hello";

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e);
//     document.querySelector('.btn').style.background = 'red'
// })


// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//listen for submit event on form

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value)

    //Form  Validateion

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error'); //error styling
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}