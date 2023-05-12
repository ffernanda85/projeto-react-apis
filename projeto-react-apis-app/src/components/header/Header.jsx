import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./styledHeader";
import { goToPage } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export function Header({pokemonDetails}) {
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)
    const {pokedex, capture, del} = context

    function filterPokedexHeader() {
        return pokedex.find((item) => item.name === pokemonDetails.name)
    }
    
    //console.log(context)
    //console.log(filterPokedexHeader())
    
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
                            

                            {pokemonDetails.isPokedex && <s.BtnPokedex isOn={true} onClick={() => { del(pokemonDetails) }}>Excluir da Pokédex</s.BtnPokedex>}

                            {!pokemonDetails.isPokedex && <s.BtnPokedex isOn={false} onClick={() => { capture(pokemonDetails) }}>Adicionar Pokédex</s.BtnPokedex>}
                            
                        </s.HeaderContainer>
            }

        </>
    )
}