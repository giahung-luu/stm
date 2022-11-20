import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCharacters } from "../../services/characterService";

const Search = () => {
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = React.useState([]);

    useEffect(() => {
        getCharacters().then((characters) => {
            setCharacters(characters);
        });
    }, []);

    const matchedCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
    });

    return <div className="search-input">
        <form id="search" action="#">
            <input
                type="text"
                placeholder="Type Something"
                id="searchText"
                name="searchKeyword"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fa fa-search"></i>
        </form>
        {search && <div className="search-result" style={{ color: 'white' }}>
            <p>Search Result for {search}</p>
            {matchedCharacters.length > 0 ? <ul>
                {matchedCharacters.map((character) => (
                    <li key={character.id} onClick={() => setSearch('')}>
                        <Link href={{ pathname: '/character', query: { data: JSON.stringify(character) } }}>
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul> : 'No result found'}
        </div>
        }
    </div >
}

export default Search;