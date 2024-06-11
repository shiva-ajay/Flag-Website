import SearchBar from './components/SearchBar'
import Header from './components/Header'
import SelectMenu from './components/SelectMenu'
import './App.css'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
      </main>
    </>
  )
}


export default App
