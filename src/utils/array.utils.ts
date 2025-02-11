
export function equals<Type>(a: Type[], b: Type[]): boolean {
  let retVal = false;
  if (a.length === b.length) {
    retVal = true
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        retVal = false;
        break;
      }
    }
  }
  return retVal;
}