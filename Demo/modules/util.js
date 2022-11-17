// named export - beliebig viele pro Datei
export function greet(user) {
  return 'Hello ' + user.fullName;
}

export function format(user) {
  return '--- ' + user.fullName + ' ---';
}

const myObj = {};
export default myObj;
