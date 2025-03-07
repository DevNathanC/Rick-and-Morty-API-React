async function fetchCharactersData() {

    const response = await fetch("https://rickandmortyapi.com/api/character/")
    const data = await response.json()    
    return data.results;
};

export default fetchCharactersData;
