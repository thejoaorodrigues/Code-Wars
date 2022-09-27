/*

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]*/

multiplicationTable = function(size) {
    // insert code here
    let output = []
      for(i=1; i<=size; i++){
        let subArray = []
        for(j=1; j<=size; j++){
          subArray.push(j*i)
        }
        output.push(subArray)
      }
    return output
  }
  