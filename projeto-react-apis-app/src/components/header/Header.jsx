import { useNavigate } from "react-router-dom";
import * as s from "./styledHeader";
import { goToPage } from "../../routes/coordinator";

export function Header() {
   const navigate = useNavigate()

    return (
        <s.HeaderContainer>
            <s.LogoPokedex onClick={() => goToPage(navigate, '/') } src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />
            <s.BtnPokedex onClick={() => goToPage(navigate, '/page/pokedex') } >Pokédex</s.BtnPokedex>
        </s.HeaderContainer>
    )
}