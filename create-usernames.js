// https://www.codewars.com/kata/582a53ed261c2af9d200018c/javascript

function addUsername(list) {
    let currentTime = new Date()
    return list.map((object, index) => {
        object.username = object.firstName.toLowerCase() + object.lastName.charAt(0).toLowerCase() + (currentTime.getFullYear() - (object.age))
        return object
    })
}  