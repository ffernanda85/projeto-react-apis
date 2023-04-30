import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./styledHeader";
import { goToPage } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)

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
                            <s.BtnDeletePokemon onClick={() => {
                                context.setModal(true),
                                    context.setAction("delete")
                            }}>Excluir da Pokédex</s.BtnDeletePokemon>
                        </s.HeaderContainer>
            }

        </>
    )
}