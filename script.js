"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
// task 1
let userId = 10;
let isLoggedIn = true;
function printId(id) {
    if (typeof id === "number") {
        console.log("ID is number:", id);
    }
    else {
        console.log("ID is string:", id);
    }
}
printId(userId);
printId("abc");
// task 2 Arrays و Tuples
let usernames = ["Ali", "Sara", "Omar"];
let httpResponse = [200, "OK", true];
let products = [
    { id: 1, name: "Laptop", price: 10000, tags: ["tech", "electronics"] },
    { id: 2, name: "Book", price: 100, tags: ["study"] },
];
let aps = {
    x: 5,
    y: 10
};
function printUser(user) {
    console.log("Name:", user.name);
    console.log("Location:", user.location.x, user.location.y);
}
let user1 = { id: 1, name: "Ali", location: { x: 10, y: 20 } };
printUser(user1);
let user2 = { id: 2, name: "sara ", location: { x: 5, y: 10 } };
printUser(user2);
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(5, 3));
console.log(multiply(5, 3));
//TASK 5 DATA 
let users = [
    { id: 1, name: "Ali", location: { x: 10, y: 20 } },
    { id: 2, name: "Sara", location: { x: 5, y: 15 } },
];
function findUserById(id) {
    return users.find((u) => u.id === Number(id));
}
function updateUserLocation(id, newLocation) {
    let user = users.find((u) => u.id === id);
    if (user)
        user.location = newLocation;
}
updateUserLocation(1, { x: 50, y: 60 });
console.log(users);
function handleResponse(res) {
    if (res.status === "success") {
        console.log(" Data:");
        res.data.forEach((item) => console.log(item));
    }
    else {
        console.log(" Error:", res.message);
    }
}
handleResponse({ status: "success", data: ["HTML", "CSS", "JS"] });
handleResponse({ status: "error", message: "Server not found" });
function printEmployeeProfile(emp) {
    console.log(`ID: ${emp.id}`);
    console.log(`Name: ${emp.name}`);
    console.log(`Age: ${emp.age}`);
    console.log(`Department: ${emp.department}`);
}
const emp1 = {
    id: 101,
    name: "Abdul Latif",
    age: 22,
    department: "Frontend",
};
printEmployeeProfile(emp1);
const company = {
    name: "NTI Tech",
    employees: [
        { id: 1, name: "Abdul", age: 22, department: "Frontend" },
        { id: 2, name: "Omar", age: 25, department: "Backend" },
    ],
    locations: [
        ["Cairo", "Egypt"],
        ["Riyadh", "Saudi Arabia"],
    ],
};
console.log(" Company:", company.name);
console.log(" Employees:");
company.employees.forEach((e) => console.log(e.name));
console.log(" Locations:");
company.locations.forEach(([city, country]) => console.log(`${city}, ${country}`));
function processNames(names, transformer) {
    return names.map(transformer);
}
const toUpper = (name) => name.toUpperCase();
const addTitle = (name) => "Mr. " + name;
const people = ["Abdul", "Omar", "Sara"];
console.log(processNames(people, toUpper)); // ["ABDUL", "OMAR", "SARA"]
console.log(processNames(people, addTitle)); // ["Mr. Abdul", "Mr. Omar", "Mr. Sara"]
const userSettings = {
    theme: "dark",
    language: "en",
    notificationsEnabled: true,
};
console.log(userSettings);
// Task 11 – Data Filtering & Searching
function findEmployee(company, id) {
    return company.employees.find((e) => e.id === id);
}
const found = findEmployee(company, 2);
console.log(found ? found.name : "Employee not found");
// Task 12 – Advanced Type Guard
function print(value) {
    if (typeof value === "string") {
        (0, console_1.log)(value.toUpperCase());
    }
}
