import {useState} from 'react'
import './Myform.css'
import { use } from 'react';

const MyForm = ({useName, useEmail}) => {

    const [name, setName] = useState(useName); 
    const [email, setEmail] = useState(useEmail); 

    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    };

    console.log(name);

    // TODO: 5 - envido do formulário
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name, email, bio, role)

        // TODO: 7 - Limpando inputs
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - envio do formulario */}
        <form onSubmit={handleSubmit}>
            <h1>Form em React</h1>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name='name' 
                placeholder='Digite seu nome:' 
                onChange={handleName}
                // TODO: 6 - controlled input
                value={name || ""}
                />
            </div>
            {/* 2 - label envolvendo input */}
            <div>
                <label>
                    <span>E-mail:</span>
                    <input 
                    type="text" 
                    placeholder='Digite seu e-mail'
                    // TODO: 4 - Simplificando manipulação
                    onChange={(e) => setEmail(e.target.value)}
                    // TODO: 6 - controlled input
                    value={email || ""}
                    />
                </label>
            </div>
            {/* 8 - textarea */}
            <div>
                <label>
                    <span>Bio:</span>
                    <textarea 
                    name="bio" 
                    placeholder='Descrição do usuário'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}>
                    </textarea>
                </label>
            </div>
            {/* 9 - select */}
            <div>
                <label htmlFor="">
                    <span>Função do sistema</span>
                    <select name='role' onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
            </div>
            <input type="submit" value='Enviar'/>
        </form>
    </div>
  )
}

export default MyForm