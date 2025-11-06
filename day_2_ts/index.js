var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1 
var data = "TypeScript";
// type assertion
console.log(data.length);
// task2 2 — Classes & Classes with Interfaces
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    Car.prototype.printInfo = function () {
        console.log("".concat(this.brand, " - ").concat(this.year));
    };
    return Car;
}());
var c = new Car("Toyota", 2020);
c.printInfo(); // "Toyota - 2020"
var Truck = /** @class */ (function () {
    function Truck(model) {
        this.model = model;
    }
    Truck.prototype.drive = function () {
        console.log("Driving...");
    };
    return Truck;
}());
var t = new Truck("Volvo");
t.drive(); // "Driving..."
//task 3 — Type Narrowing
function printId(id) {
    if (typeof id === "number") {
        console.log("ID is number: ".concat(id));
    }
    else {
        console.log("ID is string: ".concat(id));
    }
}
function printRole(user) {
    if ("isAdmin" in user) {
        console.log("Admin ".concat(user.username, " has permissions: ").concat(user.permissions.join(", ")));
    }
    else if ("canEdit" in user) {
        if (user.sections.length === 0) {
            console.log("Editor ".concat(user.username, " has no sections assigned"));
        }
        else {
            console.log("Editor ".concat(user.username, " can edit sections: ").concat(user.sections.join(", ")));
        }
    }
    else {
        console.log("Viewer ".concat(user.username));
    }
}
//task 4 — Basic Simple Generics
function wrapInArray(value) {
    return [value];
}
var result = wrapInArray(5); // result: number[] = [5]
function processConfig(config) {
    var cfg = config;
    console.log(cfg.settings.theme);
}
processConfig({ settings: { theme: "dark", version: 2 } });
var input = document.querySelector("#username");
input.value = "Hello";
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.toJSON = function () {
        return JSON.stringify({ id: this.id, name: this.name });
    };
    return User;
}());
var users = [new User(1, "Ali"), new User(2, "Sara")];
var jsons = users.map(function (u) { return u.toJSON(); });
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) { console.log(message); };
    return ConsoleLogger;
}());
var PrefixedLogger = /** @class */ (function () {
    function PrefixedLogger() {
    }
    PrefixedLogger.prototype.log = function (message) { console.log("[LOG] ".concat(message)); };
    return PrefixedLogger;
}());
function runLogger(logger) { logger.log("Hello"); }
runLogger(new ConsoleLogger());
runLogger(new PrefixedLogger());
function calculateArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return shape.width * shape.height;
    }
}
function printInfo(user) {
    if ("isAdmin" in user) {
        console.log("Admin: ".concat(user.username));
    }
    else {
        console.log("Guest: ".concat(user.username, " - ID ").concat(user.guestId));
    }
}
//task Bonus 4 — Generic Functions
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var merged = mergeObjects({ name: "Ali" }, { age: 30 });
// merged: { name: string; age: number }
