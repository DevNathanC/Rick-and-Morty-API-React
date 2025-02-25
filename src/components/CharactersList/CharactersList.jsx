import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import fetchCharacterData from "../fetchCharactersData/fetchCharactersData";
import "./CharactersList.css"

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

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <div>
                <ul>
                    {
                        listCharacters.characters.map((character) => {
                            return (
                                <li key={character.id} >
                                    <div className="infosCharacters" style={{color:theme.color ,backgroundColor: theme.background}}>
                                    <img src={character.image} alt={character.name} />
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


