// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

function greetDevelopers(list) {
    for (object in list) {
        list[object]["greeting"] = `Hi ${list[object].firstName}, what do you like the most about ${list[object].language}?`;
    }
    return list;
}