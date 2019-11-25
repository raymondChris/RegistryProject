import React from 'react'

const registryPage = props => {
    const reg = props.title.charAt(0).toUpperCase() + props.title.substring(1)
    const title = (props.title) ? 'Registry of ' + reg : 'Seleziona un registro nella sidebar' 
    return(
        <h1>{title}</h1>
    )
}

export default registryPage;