import { Router } from './routes/Router'
import { GlobalContext } from './context/GlobalContext'
import { GlobalState } from './context/GlobalState'
import { Modal } from './components/modal/Modal'


function App() {
  const context = GlobalState()

  return (
    <>
      <GlobalContext.Provider value={context}>
        {context.modal && <Modal/> }
        <Router />
      </GlobalContext.Provider>
    </>
  )
}

export default App
