import React from 'react'

const useMapSelect = (list) => {
    return (
        <>
            {
                list.map((item) => {
                    return (
                        <option key={item} value={item}>{item}</option>
                    )
                })
            }
        </>
    )
}

export { useMapSelect as default }