import { useState } from "react";

export function GlobalState() {
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState("")
    const [id, setId] = useState("")
    const [image, setImage] = useState("")
    const [pokemons, setPokemons] = useState([])


    return {
        modal,
        setModal,
        action,
        setAction,
        id,
        setId,
        image,
        setImage,
        pokemons,
        setPokemons
    }
}