class Boat {
  color: string = "red";

  get formattedColor() {
    return `This boats color is ${this.color}`;
  }

  @logError("Oops boat was sunk in ocean")
  pilot() {
    throw new Error();
    console.log("swish");
  }
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}

const boat = new Boat();
boat.pilot();

// function testDecorator(target: any, key: string): void {
//   Object.keys(target).forEach((key) => {
//     console.log(`${key}: ${target[key]}`);
//   });

//   console.log(`key: ${key}`);
// }

// testDecorator(Boat.prototype, "pilot");
