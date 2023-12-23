export default {
  myVar1: [],
  myVar2: {},
  myFun1() { const baseUrl = `${secretaryOfState.data[0].url}`; const searchQuery = ``; // Add your search query here 
						const fullUrl = baseUrl + encodeURIComponent(searchQuery); navigateTo(fullUrl, {}, "NEW_WINDOW"); }, 
  async myFun2() {
    // use async-await or promises
    // await storeValue('varName', 'hello world')
  },
};