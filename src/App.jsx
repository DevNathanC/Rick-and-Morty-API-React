import './App.css'
import CharacterList from './components/CharactersList/CharactersList'
import { ThemeProvider } from './components/contexts/theme-context'
import { ThemeTogglerButton } from './components/theme-toggler-button/Theme-toggler-button'


function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeTogglerButton />
        <CharacterList />
      </ThemeProvider>
    </>
  )
}

export default App
