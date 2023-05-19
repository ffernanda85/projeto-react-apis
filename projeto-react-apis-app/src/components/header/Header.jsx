import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./styledHeader";
import { goToPage } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";

export function Header({ pokemonName }) {
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)

    const [isPokedex, setIsPokedex] = useState(false)
    const { pokemons, del, capture } = context

    useEffect(() => {
        pokemons?.forEach(pokemon => {
            if (pokemon.name === pokemonName) {
                if (pokemon.isPokedex) {
                    setIsPokedex(true)
                } else {
                    setIsPokedex(false)
                }
            }
        })
    }, [pokemons])

    return (
        <>
            {location.pathname === '/' &&
                <s.HeaderContainer>
                    <s.LogoPokedex onClick={() => goToPage(navigate, '/')} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />

                    <s.BtnPokedex onClick={() => goToPage(navigate, '/pokedex')} >Pokédex</s.BtnPokedex>
                </s.HeaderContainer>
            }

            {location.pathname === '/pokedex' &&
                <s.HeaderContainer>
                    <s.TitlePokedexPage onClick={() => goToPage(navigate, '/')} >Todos Pokémons</s.TitlePokedexPage>
                    <s.LogoPokedex onClick={() => goToPage(navigate, '/')} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />
                </s.HeaderContainer>
            }

            {location.pathname.includes('details') &&
                <s.HeaderContainer>
                    <s.TitlePokedexPage onClick={() => goToPage(navigate, '/')} >Todos Pokémons</s.TitlePokedexPage>
                    <s.LogoPokedex onClick={() => goToPage(navigate, '/')} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />

                    {isPokedex && <s.BtnPokedex isOn={true} onClick={() => { del(pokemonName) }}>Excluír da Pokédex</s.BtnPokedex>}
                    {!isPokedex && <s.BtnPokedex isOn={false} onClick={() => { capture(pokemonName) }}>Capturar</s.BtnPokedex>}

                </s.HeaderContainer>
            }
        </>
    )
}