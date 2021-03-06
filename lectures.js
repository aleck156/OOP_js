/*

OOP - object oriented programming
paradigm
concept of object

we use objects to model the real-world or abstract features

object may contain data (properties) and code (methods)
packing  data and the corresponding behavior into one block

objects are self-contained pieces of code

objects are building blocks of application, and interact with one another

interactions happen through a public API - methods that the code outside of the object can access and use to cummunicate with the object

OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain
    // avoiding spaghetti code is always a good practice


// 4 MAIN CONCEPTS OF OJBECT-ORIENTED PROGRAMMING

// ABSTRACTION
+ hide the low-level details tht don't matter to the end-user
+ contract - changes to the inside code cannot change how the end-user already interacts with API

// ENCAPSULATION
+ keep some properties and methods private, inside the class, so they can't be accesses from the outside of the class
+ some methods can be exposed as a public API
+ the goal is to prevent external code to manipulate states without any control
    + bugs
    + security
    + performance
    + functionality
    + code maintenance and expanding
+ leave only essential methods as public 

// INHERITANCE
+ avoid code duplication
+ make all properties and methods of a certain class available to a child class
+ form a hierarchical relationship between classes
+ reuse common logic and model real-world relationships

// POLYMORPHISM
+ a child class can overwrite a method it inherited from a parent class

//////////////////////////////////////////
// 207. OOP in JavaScript

+ instantioation - creating an instance from a class blueprint

+ PROTOTYPES
+ objects are linked to a prototype object
+ contains methods and properties that all children can use
+ prototypal inheritance
    + the prototype contains methods that are accessible to all objects linked to taht prototype
+ in JS, it's an instance inheriting from a class, not a class inheriting from another class like in regular OOP it would be

+ behavior is delegated to the linked prototype object
+ objects delegate the behavior to their prototype
+ the arrows goes UP, from object to the prototype
    + in OOP, the arrow goes DOWN, from class to instance

// example
Array.prototype.map()

// 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT

// 1. constructor functions
+ technique to create objects programmatically from a funcion
+ this is how built-in objects like Array, Map or Set are actually implemented

// 2. ES6 classes
+ more modern way
+ syntactic sugar: behind the scenes, ES6 classes work exactly like constructor functions
+ ES6 classes do NOT behave like classes in classical OOP

// 3. Object.create()
+ the easiest and most straightforward way of linking an object to a prototype object
*/
