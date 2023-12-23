export default {
  myVar1: [],
  myVar2: {},
  myFun1() {
    // Assuming verifyEmail is the API call name
    const deliverableValue = verifyEmail.data.response.smtp.deliverable;
		const hostExistsValue = verifyEmail.data.response.smtp.host_exists;
		const inboxFullValue = verifyEmail.data.response.smtp.full_inbox;
		const catchAllValue = verifyEmail.data.response.smtp.catch_all;
		const mxRecordsValue = verifyEmail.data.response.has_mx_records;
		const isFreeValue = verifyEmail.data.response.free;

    // Store the value as 'emailVerifiedResult'
    storeValue('emailVerifiedResult', deliverableValue);
    storeValue('hostExists', hostExistsValue);
		storeValue('inboxFull', inboxFullValue);
		storeValue('catchAll', catchAllValue);
		storeValue('hasMxRecord', mxRecordsValue);
		storeValue('isFree', isFreeValue)
    // Example: Setting myVar1 to an array
    this.myVar1 = [1, 2, 3];
  },
  async myFun2() {
    // Use async-await or promises
    // await storeValue('varName', 'hello world')
  }
}
