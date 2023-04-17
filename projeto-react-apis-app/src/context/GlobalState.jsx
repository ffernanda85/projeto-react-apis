import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";

export function GlobalState() {
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    const getAllPokemons = async () => {
        try {
            const res = await axios.get(BASE_URL)
            setPokemons(res.data.results)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    const capture = (pokemon) => {
        /* const newPokemon = pokemons.filter(e => e.name !== pokemon.name) */
        pokemon.isPokedex = true
        /* setPokemons(newPokemon) */
        setPokedex([...pokedex, pokemon])
        setModal(true)
        setAction("capture")
    }

    const del = (pokemon) => {
        /* const copyPokedex = pokedex.filter(pokedex => pokedex.name !== pokemon.name) */
        pokemon.isPokedex = false

        /* setPokemons([...pokemons, pokemon]) */
        setModal(true)
        setAction("delete")
        /* setPokedex(copyPokedex) */
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