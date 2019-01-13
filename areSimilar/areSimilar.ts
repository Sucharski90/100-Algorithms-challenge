function areSimilar(a: number[], b: number[]): boolean {
   let stringA = a.toString();
   let stringB = b.toString();

   return true ? stringA === stringB : false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [1, 2, 2]));
