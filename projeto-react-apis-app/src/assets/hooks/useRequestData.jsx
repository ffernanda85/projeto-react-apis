import { useEffect, useState } from "react";
import axios from "axios";

export function useRequestData() {
    
    const [pokemons, setPokemons] = useState([])

    const getAllPokemons = async () => {

        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            setPokemons(res.data.results)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    return pokemons

}