export default {
  myVar1: [],
  myVar2: {},
  myFun1() {
    const baseUrl = "https://www.google.com/search?q=";
    const searchQuery = `${inputBusinessName.text} in ${inputBusinessCity.text} ${inputBusinessState.text} owner`;
    const fullUrl = baseUrl + encodeURIComponent(searchQuery);
    navigateTo(fullUrl, {}, "NEW_WINDOW");
  },
  async myFun2() {
    // use async-await or promises
    // await storeValue('varName', 'hello world')
  },
};