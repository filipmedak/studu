// React Components
import React, { useContext } from 'react'
// Logic Components
import AppContext from '../../context/app-context'
import MapSelect from '../../hooks/MapSelect'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filter = () => {
    const { classes, filterClass, setFilterClass, todos } = useContext(AppContext) 

    // Return classes from todos array, and filter them by unique values
    const usedClasses = todos.map((todo) => { return todo.course })
    const uniqueUsedClasses = [...new Set(usedClasses)]

    return (
        <div className="_filter_form" >
            {/* Mobile version filter */}
            <select 
                value={filterClass}
                onChange={ (e) => { setFilterClass(e.target.value) }}
                className="_filter_form_mobile"
            >
                <option value="" hidden>Filter by class:</option>
                <option value="">All Classes</option>
                { classes && MapSelect(uniqueUsedClasses) }
            </select>
            {/* Desktop version filter */}
            <div className="_filter_form_dekstop">
                <p className="_filter_select_title">
                    <FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} className="_chalkboard_teacher_icon" />
                    Classes
                </p>
                <p 
                    className="_filter_all_classes_option"
                    onClick= {() => setFilterClass('')}
                >
                    <FontAwesomeIcon icon={['fas', 'circle']} className="_circle_icon"/>
                    All Classes
                </p>
                {
                    uniqueUsedClasses.map((uniqueClass) => {
                        return (
                            <p 
                                key={uniqueClass} 
                                value={uniqueClass}
                                className="_filter_class_option"
                                onClick= {() => setFilterClass(uniqueClass)}
                            >
                                <FontAwesomeIcon icon={['fas', 'circle-notch']} className="_circle_notch_icon"/>
                                {uniqueClass}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { Filter as default }