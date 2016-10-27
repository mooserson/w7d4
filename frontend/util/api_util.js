export const fetchAllPokemon = success => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
};

export const fetchPokemon = (id,success) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success
  });
};
