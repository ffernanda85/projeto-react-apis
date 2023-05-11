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
        pokemon.isPokedex = true
        setPokedex([...pokedex, pokemon])
        setModal(true)
        setAction("capture")
    }

    const del = (pokemon) => {
        pokemon.isPokedex = false
        setModal(true)
        setAction("delete")
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