const users = ["Montse", "Emi", "Mafer", "Maricruz"];

const getUser = (userName) => {
    try {   
        const userIndex = users.indexOf(userName);

        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No username was sent",
            }
        }

        if(userIndex>=0) {
            const user = users.at(userIndex);
            return {
                code: 200,
                body: user,
                msg: "User found successfully",
            }
        }

        return {
            code: 404,
            body: null,
            msg: "The user was not found",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

const getUsers = () => {
    try {
        return {
            code: 200,
            body: users,
            msg: "Users successfully obtained",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

const addUser = (userName) => {
    try {
        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No username submitted",
            }
        }

        users.push(userName);
        return {
            code: 201,
            body: userName,
            msg: "User " + userName +  " successfully added",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}    

const removeUserByIndex = (userIndex) => {
    try {
        if(userIndex<0) {
            return {
                code: 400,
                body: null,
                msg: "No valid user index submitted",
            }
        }

        const user = users.at(userIndex);
        users.splice(userIndex, 1);
        return {
            code: 200,
            body: user,
            msg: "User '" + user +  " deleted successfully",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

const removeLastUser = () => {
    try {
        const lastUser = users.pop();
        return {
            code: 200,
            body: lastUser,
            msg: "The user " + lastUser +  " was successfully removed",
        }
    }  catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

const removeFirstUser = () => {
    try {
        const firstUser = users.shift();
        return {
            code: 200,
            body: firstUser,
            msg: "The user " + firstUser +  "' was successfully removed",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

const updateUserByIndex = (userIndex, userName) => {
    try {
        if(userIndex<0) {
            return {
                code: 400,
                body: null,
                msg: "User index is invalid",
            }
        }
        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No user was sent"
            }
        }
        if(userIndex>=users.length) {
            return {
                code: 404,
                body: null,
                msg: "The user was not found",
            }
        }
        if(users.indexOf(userName)>=0) {
            return {
                code: 409,
                body: null,
                msg: "User already exists",
            }
        }
        users[userIndex] = userName;
        return {
            code: 200,
            body: userName,
            msg: "The user '" + userName +  "User already exists",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

const getUserSize = () => {
    try {
        const usersSize = users.length;
        return {
            code: 200,
            body: usersSize,
            msg: "The array contains" + usersSize + "users ",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

//get user 
console.log("getUser:")//takes one username and return it if exists
console.log(getUser("Emi"));
console.log("getUsers:")// return all existing users
console.log(getUsers());
//addUser
console.log("addUser:")// adds a new user to the users array and return the user created
console.log(addUser("Lore"));
console.log("Users before :")
console.log(getUsers());// all users in new array and the user created
//removeUserByIndex
console.log("removeUserByIndex:")//takes an index and, if found, removes the element from the array, it returns the deleted element and the new array.
console.log(removeUserByIndex(4));
console.log("Users after :")
console.log(getUsers());
//removeLastUser 
console.log("Users before :") //removes the last element from the array, it returns the deleted element and the new array.
console.log(getUsers());
console.log(removeLastUser());
console.log("Users after :")
console.log(getUsers());
//RemoveFirstUser 
console.log("Users before :")//removes the first element from the array, it returns the deleted element and the new array.
console.log(getUsers());
console.log(removeFirstUser());
console.log("Users after :")
console.log(getUsers());
//updateUserByIndex
console.log("Users before :") //takes the index and the new value, if index exists then replace the element with the new value.
console.log(getUsers());
console.log(updateUserByIndex(1, "Lore"));
console.log("Users after :")
console.log(getUsers());
//getUsersSize
console.log(getUserSize()); // return the number of users in the array.
