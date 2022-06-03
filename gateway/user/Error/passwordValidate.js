
const passwordValidate = async(password) => {
    const validRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(validRegex)){
        return true;
    } else {
        return false;
    }
}

module.exports = passwordValidate;