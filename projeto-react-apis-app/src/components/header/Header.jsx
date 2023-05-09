import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./styledHeader";
import { goToPage } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export function Header({pokemon}) {
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)


    const filterPokedexHeader = pokemon ? context.pokedex.filter((item) => item.name === pokemon.name) : []
    
//<s.BtnCatch isOn={false} onClick={() => { context.capture(pokemon) }} > Capturar!</s.BtnCatch>
//<s.BtnCatch isOn={true} onClick={() => { context.del(pokemon) }} > Excluir</s.BtnCatch>

    console.log(pokemon)
    console.log(filterPokedexHeader)
    return (
        <>

            {
                location.pathname === '/' ?

                    <s.HeaderContainer>
                        <s.LogoPokedex onClick={() => goToPage(navigate, '/')} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />

                        <s.BtnPokedex onClick={() => goToPage(navigate, '/pokedex')} >Pokédex</s.BtnPokedex>
                    </s.HeaderContainer>
                    :
                    location.pathname === '/pokedex' ?

                        <s.HeaderContainer>
                            <s.TitlePokedexPage onClick={() => goToPage(navigate, '/')} >Todos Pokémons</s.TitlePokedexPage>
                            <s.LogoPokedex onClick={() => goToPage(navigate, '/')} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />
                        </s.HeaderContainer>
                        :
                        <s.HeaderContainer>
                            <s.TitlePokedexPage onClick={() => goToPage(navigate, '/')} >Todos Pokémons</s.TitlePokedexPage>
                            <s.LogoPokedex onClick={() => goToPage(navigate, '/')} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />
                            

                            {pokemon && filterPokedexHeader.length > 0 && <s.BtnPokedex isOn={true} onClick={() => { context.del(pokemon) }}>Excluir da Pokédex</s.BtnPokedex>}

                            {pokemon && filterPokedexHeader.length === 0 && <s.BtnPokedex isOn={false} onClick={() => { context.capture(pokemon) }}>Adicionar Pokédex</s.BtnPokedex>}
                            
                        </s.HeaderContainer>
            }

        </>
    )
}