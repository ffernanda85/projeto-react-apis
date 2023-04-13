import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import axios from "axios";
import { BASE_URL } from '../constant/constant';


export function useRequestData() {
    /* const [pokemons, setPokemons] = useState([]) */
    /* const context = useContext(GlobalContext)

    const getAllPokemons = async () => {
        try {
            const res = await axios.get(BASE_URL)
            context.setPokemons(res.data.results)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    return context.pokemons */
}