import { useState } from "react"

const ListRender = () =>  {
    const [list] = useState(["Lívia", "Lyeger", "Pamela"]);

    const [users, setUsers] =  useState([
        {id: 1, name: "Ivaneudo", age: 18},
        {id: 2, name: "Gabryel", age: 19},
        {id: 3, name: "Erica", age: 17},
        {id: 4, name: "Italo", age: 17},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

    return (
      <div>
        {/* 4 - render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - render com key */}
        <ul>
            {users.map((users) => (
                <li key={users.id}>
                    {users.name} - {users.age} anos
                </li>
            ))}
        </ul>
        {/* 6 - previous state */}
        <button onClick={deleteRandom}>Dele random user</button>

      </div>
    )
}

export default ListRender