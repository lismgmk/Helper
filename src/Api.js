export const getUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>  res.json())
     return   response
}

export const getTodos = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res =>  res.json())
     return   response
}