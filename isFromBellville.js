module.exports = function (regNumber) {

    if (regNumber.startsWith("CY")) {
        console.log(true)
    }
    else if (!regNumber.startsWith("CY")) {
        console.log(false)
    }

}