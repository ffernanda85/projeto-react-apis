import * as s from "./styledHeader";


export function Header() {
    return (
        <s.HeaderContainer>
            <s.LogoPokedex src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="pokelogo" />
            <s.BtnPokedex>Pokédex</s.BtnPokedex>
        </s.HeaderContainer>
    )
}