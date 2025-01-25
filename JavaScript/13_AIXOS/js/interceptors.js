// TODO: Requisição
postFetch.interceptors.request.use(
    function(config) {
        console.log("Antes da requisição...")
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)


// TODO: Resposta
postFetch.interceptors.response.use(
    function(response) {
        console.log("Depois da resposta...")
        return response;
    }, function (error) {
        return Promise.reject(error);
    }
)
