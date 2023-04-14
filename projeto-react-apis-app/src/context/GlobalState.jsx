import { useState } from "react";

export function GlobalState() {
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    const capture = (pokemon) => {
        const newPokemon = pokemons.filter(e => e.name !== pokemon.name)

        setPokemons(newPokemon)
        setPokedex([...pokedex, pokemon])
        setModal(true)
        setAction("capture")
    }

    const del = (pokemon) => {
        const copyPokedex = pokedex.filter(pokedex => pokedex.name !== pokemon.name)

        setModal(true)
        setAction("delete")
        setPokedex(copyPokedex)
    }
    
    return {
        modal,
        setModal,
        action,
        setAction,
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        capture,
        del
    }
}