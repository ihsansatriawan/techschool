function fetchList() {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const config = {
    method: 'GET'
  }

  return fetch(url, config)
    .then(resp => resp.json())
}

export {
  fetchList
}