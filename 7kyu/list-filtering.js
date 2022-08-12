/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
    // Return a new array with the strings filtered out
    //Declare new array to hold the numbers
    let newArr = []
    //For each element of l
    l.forEach(element => {
        //If the type of element is a number
        if (typeof element === 'number'){
            //Push the element to the array
            newArr.push(element)
        }
    })
    //Return the array
    return newArr
}