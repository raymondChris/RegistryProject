import React, { forwardRef, useState } from 'react';


import MaterialTable from 'material-table';

import { withStyles } from '@material-ui/styles';

import { Paper, Switch, Grid } from '@material-ui/core';

import  { Add, AddBox, ArrowDownward, Check,
          ChevronLeft, ChevronRight, Clear, DeleteOutline,
          Edit, FilterList, FirstPage, LastPage, Remove,
          SaveAlt, Search, ViewColumn } from '@material-ui/icons/';

import Button from '../../UI/Button';
import SelectPrf from '../SelectPrf/SelectPrf';
import SwitchComponent from '../../UI/SwitchComponent';
import UserList from '../UsersList/UsersList';

const tableIcons = {
    AddIcon: forwardRef((props, ref) => <Add {...props} ref={ref} />),
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const styles = theme => ({
    paper: {
        width: 'auto',
        textAlign: 'center',
        padding: '20px',
        margin: '16px',
    },
    paperList: {
        width: 'auto',
        textAlign: 'center',
        padding: '20px',
        margin: '16px',
        height: '400px',
        overflowY: 'scroll',
        minWidth: '633px',
    },
    toolbar: {
        padding: '10px 20px'
    }
})

const Table = (props) => {

    const { recordList, profiles, classes, rows} = props;

    const [ listSearchedState, setListSearchedState] = useState({list: []})

    const profileStringToCode = (profile) => {
        for(let i = 0; i<profiles.length; i++)
            if (profiles[i].profile===profile)
                return i;
    }

    const lookupContructorHandler = (label) => {
        let lookup;
        switch(label) {
            case 'profile': /** Create the object for column lookup type from profileList i will obtain this {0: admin, 1: supervisor, 2: operator} */
                lookup = Object.assign({}, profiles.map(value => value.profile))
                break;
            default:
                ;
        }
        return lookup
    }

    const dropdownDataContructorHandler = field => {
        let value;
        switch(field.label) {
            case 'profile':
                value = profileStringToCode(field.value)
                break;
            default:;
        }
        return value
    }

    const lookForUserHandler = (e) => {
        
        const listUser = [...recordList];
        let arrayIndexSearchedUsers = [];
        let arraySearchedUsers = [];
        if(e.target.value !== '') {
            const stringToSearch = e.target.value.toString().toUpperCase()
            for(let i = 0; i<listUser.length; i++) {
                let index;
                for(let j = 0; j<listUser[i].length; j++ ) {
                    index = listUser[i][j].value.toString().toUpperCase().indexOf(stringToSearch)
                    if(index > -1) {
                        break;
                    }
                }
                if(index > -1) {
                    arrayIndexSearchedUsers.push(i);
                }
            }
        }
        for(let i = 0; i<arrayIndexSearchedUsers.length; i++) {
            arraySearchedUsers.push(listUser[arrayIndexSearchedUsers[i]])
        }
        setListSearchedState({list: [...arraySearchedUsers]})
    }
    

    let cols = [];
    if(recordList[0].length !== 0) {
        for(let i = 0; i < recordList[0].length; i++) {
            if(recordList[0][i].isRequired) {
                    switch(recordList[0][i].lookup) {
                    case 'textfield':
                        cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label})
                        break;
                    case 'dropdown':
                        cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, lookup: lookupContructorHandler(recordList[0][i].label)})
                        break;
                    case 'toogle':
                        cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, type: 'boolean', render: rowData => <Switch disabled checked={rowData.status}/>, editComponent: props => (<Switch checked={props.rowData.status} onChange={e => props.onChange(!props.rowData.status)} />)})
                        break;
                    default:
                        cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label})
                        break;
                    }
            }
        }
    }


    let data = []
    if(recordList.length !== 0) {
        for(let i = 0; i < recordList.length; i++) {
            let dataRow = {}
            for(let j = 0; j < recordList[i].length; j++) {
                const x = recordList[i][j]
                switch(x.lookup) {
                    case 'textfield':
                        dataRow = {...dataRow, [x.label] : x.value }
                        break;
                    case 'dropdown':
                        dataRow = {...dataRow, [x.label] : dropdownDataContructorHandler(x)}
                        break;
                    default:
                        dataRow = {...dataRow, [x.label] : x.value }
                        break;
                }
            
            }
            data.push(dataRow)
        }
    }

    if(rows.lenght>0){
        for(let i = 0; i<data.lenght; i++)
            for(let j = 0; j<rows.length; j++)
            if(data[i].id === rows[j].id)
                data[i].tableData.checked = true 
    }
//    console.log(rows)
//    console.log(data)

    return (
        <Grid container>
            <Grid item>
                <Paper className={classes.paper}>
                    <h3>Select a Profile</h3>
                    <SelectPrf
                        profiles={props.profiles }
                        profileSelected={props.profileSelected}
                        changed={ (e) => props.changeProfile(e)}
                    />
                </Paper>
                <Paper className={classes.paper}>
                    <h3>Status</h3>
                    <SwitchComponent
                        checked={props.status}
                        changed={props.changeStatus}
                    />
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paperList}>
                    {/*<MaterialTable
                        title={'Users List'}
                        style={{boxShadow: 'none'}}
                        icons={tableIcons}
                        columns={recordList ? cols : []}
                        data={data}
                        // options = {{rowStyle: rowData => ({backgroundColor: ((rowData.status===undefined) ? 'white' : rowData.status ? '#D9FFD9' : '#FEE7F2')})}}
                        options={{
                            selection: true
                        }}
                        onSelectionChange={(rows) => props.changeSelectedRow(rows)}
                    />*/}
                    <UserList
                        userList={listSearchedState.list}
                        lookForUser={(e) => lookForUserHandler(e)}
                    />
                </Paper>
            </Grid>
            
        </Grid>
    )
}

export default withStyles(styles, { withTheme: true } )(Table);