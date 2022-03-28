const getUser = async () => { // para usar el await, tiene que estar dentro de una función async
    const userId = Math.floor(Math.random()*10)+1;    
    const url = "https://jsonplaceholder.typicode.com/users/"+userId;
    const response = await fetch(url); // await para que espere a que termine el proceso
    const user = await response.json();

    return user;
}

export default getUser;