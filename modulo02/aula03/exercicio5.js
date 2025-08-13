function Conexao() {
    //CRIA UM NOVO OBJETO xMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    //Configura a solicitação , especificando o método (GET) e a URL
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    //DEFINE UMA FUNÇÃO DE CALLBACK PARA LIDAR COM A RESPOSTA

xhr.onload = function () {
    if (xhr.status === 200) {
        //A solicitação foi bem-sucedida, e o status da resposta é 200 (ok)
        const response = JSON.parse(xhr.responseText);
        console.log('Título do post:', response.title);
    } else {
        //A solicitação falhou, e o status da resposta não é 200
        console.error('Erro ao buscar dados:', xhr.status, xhr.statusText);
    }
};
    //ENVIA A SOLICITAÇÃO
    xhr.send();
    
}