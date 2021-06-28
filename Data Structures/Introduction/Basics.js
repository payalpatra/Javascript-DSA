// ** What are Data Structures ??

// -- Data Structures are collections of values, 
// -- They conatins the relationships among those values and the functions or operations that can be applied to the data.

// ** Looking for a Bookish Definition ?

// -- A data structure is a collection of data type (values) which are stored and organized in such a way that it allows for efficient access and modification.


/// OBJECT ORIENTED PROGRAMMING \\\

// ** What is a class ?
// -- A blueprint for creating objects with pre-defined properties and methods.

// ** What is this ??
// -- When we are inside of a constructor this refers to the Individual Instance of class.

/// -- Declaring A Class -- \\\

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.late_comers = 0;
        this.scores = []
    }
    getThis() {
        return this
    }

    // Instance Methods
    getFullName() {
        // Here this refers to the individual student
        return `Hey There, ${this.firstName} ${this.lastName}`
    }

    markLate() {
        this.late_comers++;
        return `${this.firstName} ${this.lastName} has been late ${this.late_comers} times`
    }

    addScore(score) {
        this.scores.push(score)
        return this.scores
    }

    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) {
            return a + b;
        })
        return sum
    }

    // Class Method -- Cannot access by instances

    static enrollStudent(...students) {
        // May be send and email here
        return students
    }

    static ageDifference(student1, student2) {
        return Math.abs(student1.age - student2.age)
    }
}

// Creating objects/Instances from Classes

let firstStudent = new Student("Payal", "Patra", 20);
let secondStudent = new Student("Elan", "Watson", 22)


console.log("1. ", firstStudent.getThis())
// Output -- Student { firstName: 'Payal', lastName: 'Patra', age: 20 }

console.log("2. ", firstStudent.firstName)
// Output -- Payal


/// ------ INSTANCE METHODS ------ \\\

console.log("3. ", firstStudent.getFullName())
// Output -- Hey There, Payal Patra

console.log("4. ", firstStudent.markLate())
// Output -- Payal Patra has been late 1 times

console.log("5. ", firstStudent.addScore(92))
// Output -- [ 92 ]

console.log("6. ", firstStudent.calculateAverage())
// Output -- 92

/// ------ CLASS METHODS ------ \\\

// Static Keyword - The Static Keyword defines a static method for a class.
// Static Methods - Static methods are called without instantiating their class and cannit be called through a class instance.
// Static Methods are often used to create utility functions for an application.

console.log("7. ", Student.enrollStudent([firstStudent, secondStudent]))
// Output

/*

 [
  [
    Student {
      firstName: 'Payal',
      lastName: 'Patra',
      age: 20,
      late_comers: 1,
      scores: [Array]
    },
    Student {
      firstName: 'Elan',
      lastName: 'Watson',
      age: 22,
      late_comers: 0,
      scores: []
    }
  ]
]

*/

console.log("8. ", Student.ageDifference(firstStudent, secondStudent))


// ** How we will be using classes for Data Structures ??

/*

class DataStructure (){
    constructor(){
        // What default properties should it have
    }

    InstanceMethod(){
        // What should each object created from this class be able to do
    }
}

*/


//// ---- SUMMARY ---- \\\\

// -- Classes are blueprints that when created make objects known as instances.
// Instances are created with new keyword.
// The constructor function is a special function that gets called when the class is instiated.
// Instance methods can be added to classes similar to methods in objects.
// Class methods can be added using Static keyword.

