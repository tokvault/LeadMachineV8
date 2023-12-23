export default {
  myVar1: [],
  myVar2: {},
  myFun1() {
    const baseUrl = "https://www.usphonebook.com/";
    const searchQuery = `${Table1.selectedRow.business_phone.toString().replace(/^1/, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`;
    const fullUrl = baseUrl + encodeURIComponent(searchQuery);
    navigateTo(fullUrl, {}, "NEW_WINDOW");
  },
  async myFun2() {
    // use async-await or promises
    // await storeValue('varName', 'hello world')
  },
};
