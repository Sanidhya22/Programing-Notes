/* 
Custom Errors - 
The Userdefined Errors which are created by the User. 
*/

class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error"
    }
}


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Error";
    }
}


function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("No field: Age");
    }

    if (!user.name) {
        throw new ValidationError("No field: Name");
    }

    return user;
}

try {
    let user = readUser('{"age":"25"}');
    
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid Data: " + err.message);
    }
    else {
        throw err;
    }
}