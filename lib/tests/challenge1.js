module.exports = async (answer, data) => {
    if (parseInt(answer) === await challenge(data)) {
        return true
    } else {
        return false
    }
}

async function challenge(data) {
    if (data) {
        let i = 0;
        data = data.split(" ");
        await data.forEach(number => {
            if (number.includes("7")) i++;
        });
        return i
    } else {
        return null
    }
}
// challenge 1 77 = 1
// challenge 2 77  = 2