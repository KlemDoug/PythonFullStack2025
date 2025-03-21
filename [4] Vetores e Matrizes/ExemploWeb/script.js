// Matriz de produtos (3x3)
let produtos = [
    [
      { nome: "Camiseta", imagem: "camiseta.jpg", preco: 29.99 },
      { nome: "Calça Jeans", imagem: "calca.jpg", preco: 59.99 },
      { nome: "Tênis", imagem: "tenis.jpg", preco: 99.99 }
    ],
    [
      { nome: "Relógio", imagem: "relogio.jpg", preco: 149.99 },
      { nome: "Óculos de Sol", imagem: "oculos.jpg", preco: 79.99 },
      { nome: "Mochila", imagem: "mochila.jpg", preco: 49.99 }
    ],
    [
      { nome: "Notebook", imagem: "notebook.jpg", preco: 1999.99 },
      { nome: "Smartphone", imagem: "smartphone.jpg", preco: 999.99 },
      { nome: "Fone de Ouvido", imagem: "fone.jpg", preco: 199.99 }
    ]
  ];
  
  // Função para renderizar os produtos no grid
  function renderizarProdutos() {
    let grid = document.getElementById("grid-produtos"); // Elemento html onde os produtos serão renderizados
  
    for (let i = 0; i < produtos.length; i++) {
      for (let j = 0; j < produtos[i].length; j++) {
        let produto = produtos[i][j];
  
        // Cria um elemento HTML para o produto
        let produtoHTML = `
          <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
          </div>
        `;
  
        // Adicionando meus produtos no grid
        grid.innerHTML += produtoHTML;
      }
    }
  }
  
  // Chamando a função para renderizar os produtos quando a página carregar (Live Server)
  window.onload = renderizarProdutos;