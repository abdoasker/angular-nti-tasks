//1
let data: unknown = "TypeScript";

// type assertion
console.log((data as string).length);

// task2 2 — Classes & Classes with Interfaces
class Car {
  constructor(public brand: string, public year: number) {}

  printInfo(): void {
    console.log(`${this.brand} - ${this.year}`);
  }
}

const c = new Car("Toyota", 2020);
c.printInfo(); // "Toyota - 2020"
interface Drivable {
  drive(): void;
}

class Truck implements Drivable {
  constructor(public model: string) {}

  drive(): void {
    console.log("Driving...");
  }
}

const t = new Truck("Volvo");
t.drive(); // "Driving..."

//task 3 — Type Narrowing

function printId(id: string | number): void {
  if (typeof id === "number") {
    console.log(`ID is number: ${id}`);
  } else {
    console.log(`ID is string: ${id}`);
  }
}

type Admin = { username: string; isAdmin: boolean; permissions: string[] };
type Editor = { username: string; canEdit: boolean; sections: string[] };
type Viewer = { username: string };

type x = "up" | "down";
let f:x = 'up'
function printRole(user: Admin | Editor | Viewer): void {
  if ("isAdmin" in user) {
    console.log(
      `Admin ${user.username} has permissions: ${user.permissions.join(", ")}`
    );
  } else if ("canEdit" in user) {
    if (user.sections.length === 0) {
      console.log(`Editor ${user.username} has no sections assigned`);
    } else {
      console.log(
        `Editor ${user.username} can edit sections: ${user.sections.join(", ")}`
      );
    }
  } else {
    console.log(`Viewer ${user.username}`);
  }
}

//task 4 — Basic Simple Generics
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const result = wrapInArray(5); // result: number[] = [5]

function processConfig(config: unknown) {
  const cfg = config as { settings: { theme: string; version: number } };
  console.log(cfg.settings.theme);
}

processConfig({ settings: { theme: "dark", version: 2 } });
const input = document.querySelector("#username") as HTMLInputElement;
input.value = "Hello";

// task Bonus 2 — Classes & Interfaces
interface Serializable {
  toJSON(): string;
}

class User implements Serializable {
  constructor(public id: number, public name: string) {}

  toJSON(): string {
    return JSON.stringify({ id: this.id, name: this.name });
  }
}

const users = [new User(1, "Ali"), new User(2, "Sara")];
const jsons = users.map((u) => u.toJSON());
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

class PrefixedLogger implements Logger {
  log(message: string) {
    console.log(`[LOG] ${message}`);
  }
}

function runLogger(logger: Logger) {
  logger.log("Hello");
}

runLogger(new ConsoleLogger());
runLogger(new PrefixedLogger());

// task Bonus 3 — Type Narrowing

type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };

function calculateArea(shape: Circle | Rectangle): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.width * shape.height;
  }
}
type Admin2 = { username: string; isAdmin: boolean };
type Guest = { username: string; guestId: number };

function printInfo(user: Admin2 | Guest) {
  if ("isAdmin" in user) {
    console.log(`Admin: ${user.username}`);
  } else {
    console.log(`Guest: ${user.username} - ID ${user.guestId}`);
  }
}

//task Bonus 4 — Generic Functions
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "Ali" }, { age: 30 });
// merged: { name: string; age: number }
