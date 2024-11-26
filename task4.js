// Write simple async function which takes two number as input and return addition of it in promise. This function should validate input argument for number if not then it should throw error.
// Call this function
// With valid number and display result (not promise) on console.
// With invalid argument and display error messages

async function addition(num1, num2) {
    return new Promise((resolve, reject) => {
       if(typeof num1 !== 'number' || typeof num2 !== 'number') {
           reject('Invalid argument');
       }
       resolve(num1 + num2);
    });
}

async function main(agr1, arg2) {
    try {
        const result = await addition(agr1, arg2);
        console.log(result);
    } catch (error) {
        console.log("ERROR: ",error);
    }
}

//Call function with valid arguments
main(2,3);
//Call function with invalid arguments
main(2,'3');