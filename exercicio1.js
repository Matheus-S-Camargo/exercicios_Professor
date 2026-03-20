const streamingApp = {
  plataforma: "CineFlow Premium",
  versao_api: "v2.4.0",
  usuario_logado: {
    id: "user_772",
    nome: "André Pereira",
    plano: "Ultra 4K",
    preferencias: {
      idioma_padrao: "pt-BR",
      legendas: true,
      autoplay: false
    }
  },
  biblioteca: {
    total_titulos: 1250,
    categorias_disponiveis: ["Sci-Fi", "Drama", "Ação", "Documentário", "Terror"],
    filmes: [
      {
        id: "m-101",
        titulo: "Interestelar",
        diretor: "Christopher Nolan",
        ano_lancamento: 2014,
        generos: ["Ficção Científica", "Drama"],
        classificacao: "12+",
        dados_tecnicos: {
          duracao_minutos: 169,
          resolucao_maxima: "4K HDR",
          formatos_audio: ["Dolby Atmos", "DTS-X", "Stereo 5.1"],
          proporcao_tela: "2.39:1"
        },
        elenco: [
          { ator: "Matthew McConaughey", personagem: "Cooper" },
          { ator: "Anne Hathaway", personagem: "Amelia Brand" },
          { ator: "Jessica Chastain", personagem: "Murph" }
        ],
        avaliacoes: {
          imdb: 8.7,
          rotten_tomatoes: "73%",
          metacritic: 74
        },
        disponibilidade: ["Brasil", "EUA", "Portugal", "Canadá"]
      },
      {
        id: "m-102",
        titulo: "O Poderoso Chefão",
        diretor: "Francis Ford Coppola",
        ano_lancamento: 1972,
        generos: ["Crime", "Drama"],
        classificacao: "16+",
        dados_tecnicos: {
          duracao_minutos: 175,
          resolucao_maxima: "4K Dolby Vision",
          formatos_audio: ["Mono Original", "Surround 5.1"],
          proporcao_tela: "1.85:1"
        },
        elenco: [
          { ator: "Marlon Brando", personagem: "Vito Corleone" },
          { ator: "Al Pacino", personagem: "Michael Corleone" }
        ],
        avaliacoes: {
          imdb: 9.2,
          rotten_tomatoes: "97%",
          metacritic: 100
        },
        premios: ["Oscar de Melhor Filme", "Oscar de Melhor Ator"]
      },
      {
        id: "m-103",
        titulo: "Duna: Parte Dois",
        diretor: "Denis Villeneuve",
        ano_lancamento: 2024,
        generos: ["Épico", "Sci-Fi"],
        classificacao: "14+",
        dados_tecnicos: {
          duracao_minutos: 166,
          resolucao_maxima: "IMAX Digital",
          formatos_audio: ["Dolby Atmos"],
          proporcao_tela: "1.90:1 (IMAX)"
        },
        elenco: [
          { ator: "Timothée Chalamet", personagem: "Paul Atreides" },
          { ator: "Zendaya", personagem: "Chani" }
        ],
        avaliacoes: {
          imdb: 8.9,
          rotten_tomatoes: "93%",
          metacritic: 79
        }
      }
    ]
  },
  configuracoes_servidor: {
    cdn_principal: "aws-sa-east-1",
    cache_habilitado: true,
    timeout_ms: 5000
  }
};

function novoObjeto(obj){
    const objNovo = [];
    objNovo.push(Object.entries(obj).find(item => {
        if (item[0] == "plataforma") return item;
    }));
    objNovo.push(Object.entries(obj).find(item => {
        if (item[0] == "versao_api") return item;
    }));
    obj.biblioteca.filmes.forEach(item => {
        objNovo.push(`${item.titulo} - ${item.ano_lancamento}`);
        objNovo.push(item.generos);
        objNovo.push(item.dados_tecnicos);
    })

    console.log(objNovo);
    
}

novoObjeto(streamingApp);

// function(param){
//     plataforma: "CineFlow Premium",
//     versao_api: "v2.4.0",


//     TITULO - ANO
//         -- gêneros
//             --  dados técnicos
// }