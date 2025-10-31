import { log } from "console";

// task 1
let userId: number | string = 10;

let isLoggedIn: boolean = true;

function printId(id: number | string): void {
  if (typeof id === "number") {
    console.log("ID is number:", id);
  } else {
    console.log("ID is string:", id);
  }
}
printId(userId);
printId("abc");

// task 2 Arrays و Tuples
let usernames: string[] = ["Ali", "Sara", "Omar"];

let httpResponse: [number, string, boolean] = [200, "OK", true];

let products = [
  { id: 1, name: "Laptop", price: 10000, tags: ["tech", "electronics"] },
  { id: 2, name: "Book", price: 100, tags: ["study"] },
];

// Task 3  Type و Interface
type Coordinates = {
  x: number;
  y: number;
};
let aps:Coordinates = {
    x:5,
    y:10
}


interface User {
  id: number;
  name: string;
  location: Coordinates;
  email?: string; 
}

function printUser(user: User): void {
  console.log("Name:", user.name);
  console.log("Location:", user.location.x, user.location.y);
}
let user1: User = { id: 1, name: "Ali", location: { x: 10, y: 20 } };
printUser(user1);

let  user2:User ={id:2, name :"sara ", location :{ x:5 , y:10 } };
printUser(user2);

// Task 4  Functions
type MathOp = (a: number, b: number) => number;
const add: MathOp = (a, b) => a + b;
const multiply: MathOp = (a, b) => a * b;
console.log(add(5, 3));       
console.log(multiply(5, 3));  

//TASK 5 DATA 
let users: User[] = [
  { id: 1, name: "Ali", location: { x: 10, y: 20 } },
  { id: 2, name: "Sara", location: { x: 5, y: 15 } },
];

function findUserById(id: number | string): User | undefined {
  return users.find((u) => u.id === Number(id));
}

function updateUserLocation(id: number, newLocation: Coordinates): void {
  let user = users.find((u) => u.id === id);
  if (user) user.location = newLocation;
}

updateUserLocation(1, { x: 50, y: 60 });
console.log(users);

//BONUS  Task 6  Advanced Union & Type Narrowing
type ApiResponse =
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log(" Data:");
    res.data.forEach((item) => console.log(item));
  } else {
    console.log(" Error:", res.message);
  }
}
handleResponse({ status: "success", data: ["HTML", "CSS", "JS"] });
handleResponse({ status: "error", message: "Server not found" });

//TASK 7 Intersection Types
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeeProfile = Person & Employee;

function printEmployeeProfile(emp: EmployeeProfile) {
  console.log(`ID: ${emp.id}`);
  console.log(`Name: ${emp.name}`);
  console.log(`Age: ${emp.age}`);
  console.log(`Department: ${emp.department}`);
}
const emp1: EmployeeProfile = {
  id: 101,
  name: "Abdul Latif",
  age: 22,
  department: "Frontend",
};

printEmployeeProfile(emp1);

// Task 8 – Nested Complex Structures
interface Company {
  name: string;
  employees: EmployeeProfile[];
  locations: [string, string][]; // [city, country]
}

const company: Company = {
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

// Task 9 – Function Types with Callbacks

// alias للفنكشن
type NameTransformer = (name: string) => string;

function processNames(names: string[], transformer: NameTransformer): string[] {
  return names.map(transformer);
}

const toUpper = (name: string) => name.toUpperCase();
const addTitle = (name: string) => "Mr. " + name;

const people = ["Abdul", "Omar", "Sara"];

console.log(processNames(people, toUpper));  // ["ABDUL", "OMAR", "SARA"]
console.log(processNames(people, addTitle)); // ["Mr. Abdul", "Mr. Omar", "Mr. Sara"]

//TASK 10  Optional & Readonly Properties
type Settings = {
  readonly theme: "light" | "dark";
  readonly language: string;
  readonly notificationsEnabled?: boolean;
};

const userSettings: Settings = {
  theme: "dark",
  language: "en",
  notificationsEnabled: true,
};

console.log(userSettings);

// Task 11 – Data Filtering & Searching
function findEmployee(company: Company, id: number): EmployeeProfile | undefined {
  return company.employees.find((e) => e.id === id);
}
const found = findEmployee(company, 2);
console.log(found ? found.name : "Employee not found");

// Task 12 – Advanced Type Guard
function print(value: number | string){
    if (typeof value === "string") {
        log (value.toUpperCase());
}
}
