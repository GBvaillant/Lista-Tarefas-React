function Filter({ filter, setFilter, setSort, task }) {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>    
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">todas</option>
                        <option value={task.complete}>Completas</option>
                        <option value={task.complete}>Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética</p>
                    <button onClick={() => setSort('Asc')}>Asc</button>
                    <button onClick={() => setSort('Desc')}>Desc</button>
                </div>
            </div>

        </div>
    )
}

export default Filter