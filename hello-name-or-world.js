// https://www.codewars.com/kata/57e3f79c9cb119374600046b/javascript

function hello(name) {
    return (name === '' || name == undefined) ? "Hello, World!" : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
}