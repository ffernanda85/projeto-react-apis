import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";

export function GlobalState() {
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        getAllPokemons()
    }, [currentPage])

    const getAllPokemons = async () => {
        try {
            const res = await axios.get(`${BASE_URL}?offset=${currentPage}`)
            setPokemons(res.data.results)

        } catch (error) {
            console.log(error.response)
        }
    }

    const capture = (pokemonName) => {
        const newPokemons = pokemons.map(pokemon => {
            if (pokemon.name === pokemonName) {
                pokemon.isPokedex = true
            }
            return pokemon
        })
        setPokemons(newPokemons)
        setModal(true)
        setAction("capture")
    }

    const del = (pokemonName) => {
        const newPokemons = pokemons.map(pokemon => {
            if (pokemon.name === pokemonName) {
                pokemon.isPokedex = false
            }
            return pokemon
        })
        setPokemons(newPokemons)
        setModal(true)
        setAction("delete")
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 20)
    }

    const backPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 20)    
        }
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
        del,
        nextPage,
        backPage
    }
}