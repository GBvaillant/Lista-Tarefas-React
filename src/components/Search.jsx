import { PiMagnifyingGlass } from 'react-icons/pi'


function Search({ search, setSearch }) {
    return (
        <div className="search">
            <h2>Pequisar tarefa</h2>
            <input
                type="text"
                placeholder='Pesquisar'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search