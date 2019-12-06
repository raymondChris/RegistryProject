import React, { Component } from 'react';

import Table from '../../components/Table/Table';
import Button from '../../UI/Button';

import ModalComponent from '../../UI/ModalComponent';

class RegistryPage extends Component {
    
    state = {
        isOpen: false,
        modalAspect: undefined,
    }

    

    render () {

    const { registryName, recordInfo } = this.props.regSelect;
    const regName = registryName ? registryName.charAt(0).toUpperCase() + registryName.substring(1) : null
    const title = regName ? 'Registry of ' + regName : 'Seleziona un registro nella sidebar'

        return(
            <div>
                <h1>{title}</h1>

                {this.state.isOpen ? this.state.modalAspect : null}

                <Table
                    listStatus={this.props.statList}
                    profiles={this.props.profList}
                    edited={(newData, oldData) => this.props.edit(newData, oldData)}
                    deleted={(oldData) => this.props.delete(oldData )}
                    title={regName || 'Table'}
                    recordList={recordInfo ? recordInfo : []}
                    addPerson={this.props.add}
                />
            </div>

        )
    }
}

export default RegistryPage;