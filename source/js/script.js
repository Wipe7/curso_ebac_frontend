// Seleciona o botão e o contêiner onde as imagens serão exibidas
const addImageButton = document.getElementById('addImageButton');
const imageContainer = document.getElementById('imageContainer');

// Lista de URLs das imagens do projeto
const imageList = [
    "./source/contents/images/bird-ga5d9ed257_1920.jpg",
    "./source/contents/images/birds-g6b63afc7a_1920.jpg",
    "./source/contents/images/butterfly-g7f3546b64_1920.jpg",
    "./source/contents/images/hands-gc143a78ba_1920.png",
    "./source/contents/images/lilies-g19bcb21a4_1920.jpg",
    "./source/contents/images/street-gddeece843_1920.jpg",
];

// Variável para rastrear a próxima imagem a ser adicionada
let currentImageIndex = 0;

// Função para adicionar uma imagem
function addImage() {
    if (currentImageIndex < imageList.length) {
    // Cria um elemento de imagem
    const img = document.createElement('img');
    img.src = imageList[currentImageIndex];
    img.alt = `Imagem ${currentImageIndex + 1}`;
    img.style.width = "200px"; // Define um tamanho padrão para as imagens
    img.style.margin = "10px";

    // Adiciona a imagem ao contêiner
    imageContainer.appendChild(img);

    // Incrementa o índice para a próxima imagem
    currentImageIndex++;
        } else {
        alert("Todas as imagens já foram adicionadas!");
    }
}

// Adiciona o evento de clique ao botão
addImageButton.addEventListener('click', addImage);
