/* 
Custom Errors - 
The Userdefined Errors are the Errors which are defined by the User. 
*/

class ValidationError{
    constructor(message) {
        this.message = message;
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