
function formatarNome(nome) {
  return nome
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}  
async function verificarclima() {
  const estado = document.getElementById("estadoInput").value.toLowerCase();
  const nomeCidade = document.getElementById("cidadeNome");
  const temperatura = document.getElementById("temperatura");
  const imagem = document.getElementById("imagemEstado");

  // Dicionário de estados ou cidades válidas
  const cidadesValidas = {
    salvador: "Salvador,br",
    recife: "Recife,br",
    "são paulo": "São Paulo,br",
  };

  if (!cidadesValidas[estado]) {
    alert("Estado não reconhecido. Tente: Salvador, Recife ou São Paulo.");
    return;
  }

  try {
    const apiKey = "96136474cd8886a4ebceb1c0be7ae411"; 
    const cidadeConsulta = cidadesValidas[estado];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeConsulta}&appid=${apiKey}&units=metric&lang=pt_br`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    const temp = dados.main.temp;
    nomeCidade.textContent = `Clima em ${
      estado.charAt(0).toUpperCase() + estado.slice(1)
    }`;
    temperatura.textContent = `Temperatura: ${temp}°C`;
    imagem.src = `imagens/${estado}200.jpg`;
    imagem.alt = `Imagem do estado ${estadoInput}`;


  } catch (erro) {
    alert("Erro ao buscar os dados da API.");
    console.error(erro);
  }
}
