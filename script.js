function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

function stringToItalic(texto) {
const elementoItalico = document.createElement('i'); // Cria um elemento <i>
elementoItalico.textContent = texto; // Define o texto do elemento
return elementoItalico.outerHTML; // Retorna a string HTML do elemento
}



fetch('dados.json')
    .then(response => response.json())
    .then(especies => {
        const dados = especies
        const speciesContainer = document.querySelector('.container');

        especies.forEach(especie => {
        

            const nomePoupular = capitalizeFirstLetter(especie.NP)
            const nomeCientifico =stringToItalic(capitalizeFirstLetter(especie.NC))
            const classificacao = especie.Classificacao
            const familia = capitalizeFirstLetter(especie.familia)
            const genero = capitalizeFirstLetter(especie.genero)
            
          // Criar elementos HTML

          const species = document.createElement('div')
          species.classList.add('species');

          const speciesItem = document.createElement('div');
          speciesItem.classList.add('species-item');

          const speciesImg = document.createElement('div');
          speciesImg.classList.add('species-img');
          speciesImg.innerHTML = `<img src="images/${especie.images}" alt="${especie.NP}">`;

          const speciesInfo = document.createElement('div');
          speciesInfo.classList.add('species-info');
          speciesInfo.innerHTML = `
            <p class='familia'>Família: <span>${familia}</span></p>
            <p class='genero'>Gênero: <span>${genero}</span></p>
            <p class='classificacao'>Classificação: <span>${classificacao}</span></p>
            <p class='nc'>Nome Científico: <span>${nomeCientifico.split("_").join(" ")}</span></p>
            <p class='np'>Nome Popular: <span>${nomePoupular.split("_").join(" ")}</span></p>
          `;

          // Adicionar elementos ao container
          speciesItem.appendChild(speciesImg);
          speciesItem.appendChild(speciesInfo);
          species.appendChild(speciesItem)
          speciesContainer.appendChild(species);

            const speciesItems = document.querySelectorAll('.species-item');
        
            const closeButtons = document.querySelectorAll('.close');
            const modals = document.querySelectorAll('.modal');

            const modalBody = document.querySelector('.modal-body-description')

            modalBody.innerHTML = 'Descrição da espécie...'


            const modalImg = document.querySelector('#modal-img')
            const modalFamilia = document.querySelector('#modal-familia')
            const modalGenero = document.querySelector('#modal-genero')
            const modalCientifico = document.querySelector('#modal-cientifico')
            const modalPopular = document.querySelector('#modal-popular')
            const modalClassificacao = document.querySelector('#modal-classificacao')

            
            speciesItems.forEach(item => {
                item.addEventListener('click', function() {

                    // Seleciona a imagem dentro da div clicada
                    const imgElement = this.querySelector("img");                   
                    
                    const elementFamilia = this.querySelector('.familia')
                    const elementGenero = this.querySelector('.genero')
                    const elementCientifico = document.querySelector('.nc')
                    const elementPopular = document.querySelector('.np')
                    const elementClassificacao = document.querySelector('.classificacao')

                    modalImg.src = imgElement.src;
                    modalFamilia.innerHTML = elementFamilia.innerHTML;
                    modalGenero.innerHTML = elementGenero.innerHTML;
                    modalCientifico.innerHTML = elementCientifico.innerHTML;
                    modalPopular.innerHTML = elementPopular.innerHTML;
                    modalClassificacao.innerHTML = elementClassificacao.innerHTML
                    




                    
                    const modal = document.getElementById('modal-1');
                    if (modal) {
                        modal.style.display = 'block';
                    } else {
                        console.error(`Modal com ID '${modalId}' não encontrado.`);
                    }
                });
            });

            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const modal = button.closest('.modal');
                    if (modal) {
                        modal.style.display = 'none';
                    } else {
                        console.error('Modal não encontrado para fechar.');
                    }
                });
            });

            // Fechar o modal se o usuário clicar fora da área do modal
            window.addEventListener('click', function(event) {
                modals.forEach(modal => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            });

        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

    

    

