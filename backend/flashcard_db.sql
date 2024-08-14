CREATE DATABASE flashcards_db;
USE flashcards_db;

CREATE TABLE flashcards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL
);


INSERT INTO flashcards (question, answer) VALUES ('What is a variable?', 'A variable is a storage location in a computer program that can hold a value.');
INSERT INTO flashcards (question, answer) VALUES ('What is a function?', 'A function is a block of code designed to perform a particular task. It can take inputs and return an output.');
INSERT INTO flashcards (question, answer) VALUES ('What is an array?', 'An array is a collection of elements, each identified by an index or key. Arrays are used to store multiple values in a single variable.');
INSERT INTO flashcards (question, answer) VALUES ('What is a loop?', 'A loop is a control structure that repeatedly executes a block of code as long as a specified condition is true.');
INSERT INTO flashcards (question, answer) VALUES ('What is an object?', 'An object is an instance of a class that contains data in the form of fields (attributes) and code in the form of methods (functions).');
INSERT INTO flashcards (question, answer) VALUES ('What is a class?', 'A class is a blueprint for creating objects. It defines a data structure and the functions that can operate on the data.');
INSERT INTO flashcards (question, answer) VALUES ('What is inheritance?', 'Inheritance is an OOP concept where a new class is created from an existing class, inheriting its properties and behaviors.');
INSERT INTO flashcards (question, answer) VALUES ('What is polymorphism?', 'Polymorphism is an OOP concept that allows methods or functions to operate differently based on the input or the objects they are acting on.');
INSERT INTO flashcards (question, answer) VALUES ('What is encapsulation?', 'Encapsulation is an OOP principle that binds together the data and functions that manipulate the data, and keeps both safe from outside interference and misuse.');
INSERT INTO flashcards (question, answer) VALUES ('What is recursion?', 'Recursion is a process in which a function calls itself directly or indirectly to solve a problem.');
