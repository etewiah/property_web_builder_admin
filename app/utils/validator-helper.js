// export default function validatorHelper() {
//   return true;
// }
// http://blog.abuiles.com/blog/2014/10/03/working-with-javascript-plugins-in-ember-cli/
// idea had been to have my own validate function instead of that from http://validatejs.org/
// never got round to is so using the global validate method
function iValidate(date, format) {
  return undefined;
  // return window.moment(date).format(format);
}

export default {
  iValidate
};