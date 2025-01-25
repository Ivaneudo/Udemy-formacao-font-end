// TODO: 1 - Instalação
console.log(axios)

// TODO: 2 - Primeiro 
const getData = async() => {
    try {
        const response = await postFetch.get(
            "/users",
            // TODO: 4 - Definndo headers
            {
                Headers: {
                    "Content-Type": "applicaation/json",
                    custom: "header",
                }
            }
            
        );

        console.log(response)

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

getData()

// TODO: 3 - Inprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement = document.createElement("h2");

        const emailElement = document.createElement("p")

        emailElement.textContent = user.email;

        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        div.appendChild(emailElement);
        
        container.appendChild(div);
    })
}

printData()

// TODO: 4 - Configurando os headers L9

// TODO: 5 - post
const fomr = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

fomr.addEventListener("submit", (e) => {
    e.preventDefault();

    postFetch.post(
        "/posts",
        {
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        }
    )
})

// TODO: 













// TODO: 