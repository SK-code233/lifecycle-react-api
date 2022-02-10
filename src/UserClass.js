import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UserClass = () => {

    const [users, setUsers] = useState([]);

    async function getData() {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("Home mounted");
        getData();

        return () => {
            console.log("Home unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("State updated");
    });

    return (
        <div>

            {users.map((user) => {
                return <h1>{user.name} <br /> {user.username} <br /> {user.email}</h1>;

            })}
        </div>
    );
}

export default UserClass;