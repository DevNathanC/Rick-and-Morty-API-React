import { useEffect, useState } from "react";
import fetchCharacterData from "../fetchCharactersData/fetchCharactersData";
import "./Characters.css"

const CharacterList = () => {
    const [listCharacters, setCharacters] = useState({
        characters: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const characatersData = await fetchCharacterData()

            setCharacters({
                characters: characatersData
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <div>
                <ul>
                    {
                        listCharacters.characters.map((character) => {
                            return (
                                <li key={character.id}>
                                    <img src={character.image} alt={character.name} />
                                    <div className="infosCharacters">
                                    <p>Name: {character.name}</p>
                                    <p>Status: {character.status}</p>
                                    <p>Species: {character.species}</p>
                                    <p>Gender: {character.gender}</p>
                                    <p>Origin:{character.origin.name}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
};

export default CharacterList;


