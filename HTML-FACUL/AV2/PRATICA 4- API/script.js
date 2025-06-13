
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
    acre: "Rio Branco,br",
    alagoas: "Maceió,br",
    amapa: "Macapá,br",
    amazonas: "Manaus,br",
    bahia: "Salvador,br",
    ceara: "Fortaleza,br",
    distritofederal: "Brasília,br",
    espiritosanto: "Vitória,br",
    goias: "Goiânia,br",
    maranhao: "São Luís,br",
    matogrosso: "Cuiabá,br",
    matogrossodosul: "Campo Grande,br",
    minasgerais: "Belo Horizonte,br",
    para: "Belém,br",
    paraiba: "João Pessoa,br",
    parana: "Curitiba,br",
    pernambuco: "Recife,br",
    piaui: "Teresina,br",
    riodejaneiro: "Rio de Janeiro,br",
    riograndedonorte: "Natal,br",
    rondonia: "Porto Velho,br",
    roraima: "Boa Vista,br",
    riograndedosul: "Porto Alegre,br",
    santacatarina: "Florianópolis,br",
    saopaulo: "São Paulo,br",
    sergipe: "Aracaju,br",
    tocantins: "Palmas,br",
  };
  const estadodigitado = document.getElementById ("estadoInput").value;
  const estadoformatado = formatarNome(estadodigitado);

  if (!cidadesValidas[estadoformatado]) 
  {
    alert("Estado não reconhecido. Tente digitar corretamente.");
    return;
  }

  try {
    const apiKey = "96136474cd8886a4ebceb1c0be7ae411"; 
    const cidadeConsulta = cidadesValidas[estadoformatado];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeConsulta}&appid=${apiKey}&units=metric&lang=pt_br`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    const temp = dados.main.temp;

    const nomesExibicao = 
    {
      acre: "Acre",
      alagoas: "Alagoas",
      amapa: "Amapá",
      amazonas: "Amazonas",
      bahia: "Bahia",
      ceara: "Ceará",
      distritofederal: "Distrito Federal",
      espiritosanto: "Espírito Santo",
      goias: "Goiás",
      maranhao: "Maranhão",
      matogrosso: "Mato Grosso",
      matogrossodosul: "Mato Grosso do Sul",
      minasgerais: "Minas Gerais",
      para: "Pará",
      paraiba: "Paraíba",
      parana: "Paraná",
      pernambuco: "Pernambuco",
      piaui: "Piauí",
      riodejaneiro: "Rio de Janeiro",
      riograndedonorte: "Rio Grande do Norte",
      rondonia: "Rondônia",
      roraima: "Roraima",
      riograndedosul: "Rio Grande do Sul",
      santacatarina: "Santa Catarina",
      saopaulo: "São Paulo",
      sergipe: "Sergipe",
      tocantins: "Tocantins",
    };
    
    nomeCidade.textContent = `Clima em ${nomesExibicao[estadoformatado] || estadoformatado}`;
    temperatura.textContent = `Temperatura: ${temp}°C`;
    imagem.src = `imagens/${estadoformatado}200.jpg`;
    imagem.alt = `Imagem do estado ${estadoformatado}`;


  } 
  catch (erro) 
  {
    alert("Erro ao buscar os dados da API.");
    console.error(erro);
  }
}
