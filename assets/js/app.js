  const baseEndpoint = "https://api.github.com";
  const usersEndpoint = `${baseEndpoint}/users`;
  // Selecciona los elementos del DOM usando selectores correctos.
  const $n = document.querySelector("#name");
  const $b = document.querySelector("#blog");
  const $l = document.querySelector("#location");

  // La palabra clave 'async' es necesaria para usar 'await' dentro de la función.
  async function displayUser(username) {
    $n.textContent = "cargando...";
    // 'await' se usa para esperar a que la promesa se resuelva.
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Necesitas convertir la respuesta en JSON y también esperar a que se resuelva.
    const data = await response.json();
    console.log(data);
    // Usa interpolación de cadenas correctamente, no dentro de comillas simples.
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  }

  function handleError(err) {
    console.log("OH NO!");
    console.log(err);
    // 'n' no está definido. Deberías usar '$n' en su lugar.
    $n.textContent = `Algo salió mal: ${err}`;
  }

  // 'catch' se usa para manejar cualquier error que ocurra en la promesa.
  displayUser("stolinski").catch(handleError);
