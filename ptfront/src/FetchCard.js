import React, { useState, useEffect, useCallback } from 'react'
import getPosts from './helpers/getPosts';
import getUser from './helpers/getUser';

/* const initialUser = {
    name: "Luis",
    email: "correo@correo.com"
}

const initialPost = [
    { id: 1, title: "Post 1"},
    { id: 2, title: "Post 2"}
] */

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const updateUser = () => {
        getUser()
            .then((newUser)=> {
                setUser(newUser);
            })
    }

const updatePosts = useCallback(() => {
    getPosts(user?.id)
        .then((newPosts) => {
            setPosts(newPosts);
        })
}, [user.id]);

useEffect(() => {
    // hacer una consulta a la api
    // que sea necesaria en la primera carga del componente
    // es uno de los usos más frecuentes
    // ejecutar cualquier lógica que se tenga que realizar solo la primera vez y luego nunca más se vuelva a ejecutar.
    updateUser();
}, [])

useEffect(() => {
    updatePosts();
}, [user, updatePosts])

  return (
    <div>
        <button onClick={updateUser}>
            Another User
        </button>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>

        <br />

        <h2>Posts - user: {user.id}</h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li> // el key es necesario para que no exista warning, ya que al mappear, requiere un key único
            ))}
        </ul>
    </div>
  )
}

export default FetchCard