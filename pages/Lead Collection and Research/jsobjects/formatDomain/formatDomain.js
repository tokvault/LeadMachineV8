export default {
  myVar1: [],
  myVar2: {},
  myFun1() {
    // Assuming the "inputFull" widget has a property named "text" accessible via its value
    const websiteUrl = Table1.selectedRow.website;
    const domainMatch = websiteUrl.match(/^(?:https?:\/\/)?(?:www\.)?(.*)$/);
    const domain = domainMatch ? domainMatch[1] : null;

    // You should use storeValue to set a value and bind the input widgets to these stored values.
    storeValue('domain', domain);
  },
  async myFun2() {
    //	use async-await or promises
    //	await storeValue('varName', 'hello world')
  }
}
