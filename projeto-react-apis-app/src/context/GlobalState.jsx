import { useState } from "react";

export function GlobalState() {
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    const capture = (pokemon) => {
        const test = pokedex.some((e) => e.name === pokemon.name)
        
        if (test) {
            return
        }
        setPokedex([...pokedex, pokemon])
        setAction("capture")
        setModal(true)
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
        capture
    }
}