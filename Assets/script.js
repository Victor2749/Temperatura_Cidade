const btn = document.querySelector('#conteudo button');

btn.addEventListener('click', function () {
  let cidade = document.getElementById('cidade').value;
  let estado = document.getElementById('estado').value;

  apiConsulta(cidade, estado).catch((e) => console.log(e));
});

async function apiConsulta(cidade, estado) {
  const url = 'https://weather.contrateumdev.com.br/api/weather/city/?city=';
  let urlConsultaAPI = `${url}${cidade},${estado}`;

  const consulta = await fetch(urlConsultaAPI).then((r) => r.json());

  let temperaturaCidade = consulta.main.temp;
  let cidadePesquisada = consulta.name;

  console.log(consulta);

  document.querySelector(
    '#conteudo p'
  ).innerHTML = `${temperaturaCidade} ºC <p style="font-size:20px">${cidadePesquisada}<p/>`;
}
