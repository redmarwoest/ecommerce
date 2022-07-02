interface Person {
  name: string;
  age: number;
}

export default function play() {
  console.log("hello world");

  const name = "henk";
  const age = 30;

  const person: Person = {
    name: "henk",
    age: 30,
  };

  function logPersonInfo(personName: string, personAge: number) {
    //   const info = "Name:" + personName + ", age:" + personAge
    const info = `Name: ${personName}, age: ${personAge}`;
    console.log(info);
    return info;
  }

  function logPersonInfo2(person: { name: string; age: number }) {
    //   const info = "Name:" + personName + ", age:" + personAge
    const info = `Name: ${person.name}, age: ${person.age}`;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(person);
}
