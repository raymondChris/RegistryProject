import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import ProfileTable from '../../components/Tables/ProfilesTable';
import UserTable from '../../components/Tables/UsersTable';
import Button from '../../UI/Button';
import ModalComponent from '../../UI/ModalComponent';


class RegistryPage extends Component {
    
    state = {
        isOpen: false,
        rowSelected: [],
        profileSelected: this.props.profList[0].profile,
        statusSelected: false,
        indexRowChecked: [],
    }
    
    hideModalHandler = () => {
        this.setState({isOpen: false})
    }

    showModalHandler = () => {
        this.setState({isOpen: true})
    }

    addPersonHandler = () => {
        this.setState({isOpen: true})
    }

    changeStatusHandler = () => {
        const status = this.state.statusSelected
        this.setState({statusSelected: !status})
    }

    changeProfileHandler = (e) => {
        this.setState({profileSelected: e.target.value})
    }

    changeSelectedRowHandler = (rows) => {
        this.setState({rowSelected: [...rows]})
    }

    render () {

    const { registryName, recordInfo } = this.props.regSelect;
    const regName = registryName ? registryName.charAt(0).toUpperCase() + registryName.substring(1) : null
    const title = regName ? 'Registry of ' + regName : 'Seleziona un registro nella sidebar'

    
    const modal =   <ModalComponent
                        close={this.hideModalHandler}
                        title={'Add Person'}
                        body={  <UserTable
                                  rows={this.state.rowSelected}
                                  profiles={this.props.profList}
                                  recordList={this.props.userList}
                                  changeStatus={this.changeStatusHandler}
                                  changeProfile={(e) => this.changeProfileHandler(e)}
                                  changeSelectedRow={(rows) => this.changeSelectedRowHandler(rows)}
                                  profileSelected={this.state.profileSelected}
                                  status={this.state.statusSelected}/>}
                        action={
                            <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                            >
                                    <Button
                                        type={'cancel'}
                                        clicked={this.hideModalHandler}
                                    >Cancel</Button>
                                    <Button
                                        type={'ok'}
                                        clicked={() => {
                                                this.props.changeListTable( this.state.profileSelected,
                                                                            this.state.rowSelected,
                                                                            this.state.statusSelected)
                                                }}
                                    >Confirm</Button>
                                </Grid>}
                            />

        return(
            <div>
                <h1>{title}</h1>

                {this.state.isOpen ? modal : null}

                <ProfileTable
                    listStatus={this.props.statList}
                    profiles={this.props.profList}
                    edited={(newData, oldData) => this.props.edit(newData, oldData)}
                    deleted={(oldData) => this.props.delete(oldData )}
                    title={regName || 'Table'}
                    recordList={recordInfo ? recordInfo : []}
                    addPerson={() => this.showModalHandler()}
                />
            </div>

        )
    }
}

export default RegistryPage;