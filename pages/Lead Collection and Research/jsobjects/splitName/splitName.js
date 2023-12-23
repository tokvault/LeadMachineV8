export default {
  myVar1: [],
  myVar2: {},
  myFun1() {
    // Assuming the "inputFull" widget has a property named "text" accessible via its value
    let fullName = inputFull.text.split(" ");
    let firstName = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1).toLowerCase();
    let lastName = fullName.length > 1 ? fullName.slice(1).join(" ").charAt(0).toUpperCase() + fullName.slice(1).join(" ").slice(1).toLowerCase() : "";

    // You should use storeValue to set a value and bind the input widgets to these stored values.
    storeValue('inputFirst', firstName);
    storeValue('inputLast', lastName);
  },
  async myFun2() {
    //	use async-await or promises
    //	await storeValue('varName', 'hello world')
  }
}
