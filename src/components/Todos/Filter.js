// React Components
import React, { useContext } from 'react'
// Logic Components
import AppContext from '../../context/app-context'
import MapSelect from '../../hooks/MapSelect'

const Filter = () => {
    const { classes, filterClass, setFilterClass, todos } = useContext(AppContext)  

    // Return classes from todos array, and filter them by unique values
    const usedClasses = todos.map((todo) => { return todo.course })
    const uniqueUsedClasses = [...new Set(usedClasses)]

    return (
        <div>
            <select 
                value={filterClass}
                onChange={ (e) => { setFilterClass(e.target.value) }}
            >
                <option value="" hidden>Filter by class:</option>
                <option value="">All Classes</option>
                { classes && MapSelect(uniqueUsedClasses) }
            </select>
        </div>
    )
}

export { Filter as default }