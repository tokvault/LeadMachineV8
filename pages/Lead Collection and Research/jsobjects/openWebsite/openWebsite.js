export default {
  myVar1: [],
  myVar2: {},
  myFun1() { const baseUrl = `${Table1.selectedRow.website}`; const searchQuery = ``; // Add your search query here 
						const fullUrl = baseUrl + encodeURIComponent(searchQuery); navigateTo(fullUrl, {}, "NEW_WINDOW"); }, 
  async myFun2() {
    // use async-await or promises
    // await storeValue('varName', 'hello world')
  },
};