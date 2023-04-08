import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailsPage } from '../page/detailsPage/DetailsPage'
import { PokedexPage } from '../page/pokedexPage/PokedexPage'
import { PokemonListPage } from '../page/pokemonListPage/PokemonListPage'

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PokemonListPage />} />
                    <Route path="/page/details" element={<DetailsPage />} />
                    <Route path="/page/pokedex" element={<PokedexPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}