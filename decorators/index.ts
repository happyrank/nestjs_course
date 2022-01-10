class Boat {
  color: string = "red";

  get formattedColor() {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot() {
    throw new Error();
    console.log("swish");
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  Object.keys(target).forEach((key) => {
    console.log(`${key}: ${target[key]}`);
  });
}

// function testDecorator(target: any, key: string): void {
//   Object.keys(target).forEach((key) => {
//     console.log(`${key}: ${target[key]}`);
//   });

//   console.log(`key: ${key}`);
// }

// testDecorator(Boat.prototype, "pilot");
