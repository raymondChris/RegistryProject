import React from 'react';

import Table from '../../components/Table/Table';

const registryPage = props => {
    const { registryName, recordInfo } = props.regSelect;
    const reg = registryName ? registryName.charAt(0).toUpperCase() + registryName.substring(1) : null
    const title = (reg) ? 'Registry of ' + reg : 'Seleziona un registro nella sidebar' 
    return(
        <div>
            <h1>{title}</h1>
            <Table
                title={reg || 'Table'}
                recordList={recordInfo}
            />
        </div>
        
    )
}

export default registryPage;