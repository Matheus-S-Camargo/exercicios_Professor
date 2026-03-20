
// valor1 = 5;
// valor2 = 8;

// function soma (var1, var2){
//     let soma = var1 + var2;
//     return soma;
// }

// console.log(soma(valor1, valor2));

 const ecommerceStore = {
  id: "store_88291",
  nome: "Nexus Tech Store",
  ativa: true,
  estatisticas: {
    visualizacoes: 15400,
    vendas_totais: 450,
    avaliacao_media: 4.8
  },
  localizacao: {
    endereco: "Av. Paulista, 1000",
    cidade: "São Paulo",
    estado: "SP",
    coordenadas: {
      lat: -23.5505,
      lng: -46.6333
    }
  },
  categorias: ["Hardware", "Periféricos", "Setup Gamer"],
  inventario: [
    {
      id: "prod_001",
      nome: "Teclado Mecânico RGB",
      preco: 350.00,
      especificacoes: {
        switch: "Blue",
        layout: "ABNT2",
        conexao: "USB-C"
      },
      tags: ["gamer", "perifericos", "rgb"]
    },
    {
      id: "prod_002",
      nome: "Monitor 144Hz 1ms",
      preco: 1200.00,
      especificacoes: {
        painel: "IPS",
        resolucao: "1920x1080",
        tamanho: "24 polegadas"
      },
      tags: ["monitor", "high-performance"]
    }
  ],
  metodos_pagamento: ["PIX", "Cartão de Crédito", "Boleto"],
  configuracoes_envio: {
    transportadoras: ["Loggi", "Correios", "FedEx"],
    frete_gratis_acima_de: 250.00
  }
};

const ec2 = {
    item2: this
}

const nova_lista = Object.entries(ecommerceStore).filter((item) => {
    if (item[0] == 'nome'){
        return item[1];
    }
});

ecommerceStore.metodos_pagamento.map(item => {
    nova_lista.push(item);
})

ecommerceStore.inventario.map(item => {
    nova_lista.push(item.nome);
    nova_lista.push(item.preco);
})

function teste(a, b){
    const param = {
        item: 1
    } 
    return param;
}

console.log(teste());
