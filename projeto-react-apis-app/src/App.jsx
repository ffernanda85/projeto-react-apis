import { Router } from './routes/Router'
import { GlobalContext } from './context/GlobalContext'
import { GlobalState } from './context/GlobalState'


function App() {
  const context = GlobalState()

  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </>
  )
}

export default App
