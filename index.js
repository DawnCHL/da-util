class Util {
  logs(str) {
    console.log(`%c${str}`, 'color:green')
  }
  sayHello(name = "world") {
    this.logs("Welcome! this log was written by Da-util.")
    return `Hello, ${name}!`
  }
}

const daUtil = new Util
export default daUtil