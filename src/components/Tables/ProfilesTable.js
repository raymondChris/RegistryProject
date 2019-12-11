import React, { forwardRef } from 'react';


import MaterialTable, { MTableToolbar } from 'material-table';

import { withStyles } from '@material-ui/styles';
import { red, green } from '@material-ui/core/colors';

import { Paper, Switch, Grid } from '@material-ui/core';

import  { Add, PersonAdd, AddBox, ArrowDownward, Check,
          ChevronLeft, ChevronRight, Clear, DeleteOutline,
          Edit, FilterList, FirstPage, LastPage, Remove,
          SaveAlt, Search, ViewColumn } from '@material-ui/icons/';

import Button from '../../UI/Button';
import SwitchComponent from '../../UI/SwitchComponent';

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

const styles = {
    paper: {
        padding: '20px',
    },
    toolbar: {
        padding: '10px 20px'
    }
}

const table = (props) => {

    const { recordList, profiles, classes,} = props;

    /** It will return the code value from profile type.... example if 'admin' it will give me 0 */

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

    let cols = [];
    if(recordList.length !== 0) {
        for(let i = 0; i < recordList[0].length; i++) {
            if(recordList[0][i].isRequired) {
                    switch(recordList[0][i].lookup) {
                    case 'textfield':
                        recordList[0][i].editable ? cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label})
                        : cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, editable: 'never'})
                        break;
                    case 'dropdown':
                        recordList[0][i].editable ? cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, lookup: lookupContructorHandler(recordList[0][i].label)})
                        : cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, lookup: lookupContructorHandler(recordList[0][i].label), editable: 'never'})
                        break;
                    case 'toogle':
                        recordList[0][i].editable ? cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, type: 'boolean', render: rowData => <SwitchComponent disabled={true} checked={rowData.status}/>, editComponent: props => (<SwitchComponent checked={props.rowData.status} changed={e => props.onChange(!props.rowData.status)} />)})
                        : cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, type: 'boolean',render: rowData => <SwitchComponent disabled={true} checked={rowData.status}/>, editComponent: props => (<SwitchComponent checked={props.rowData.status} changed={e => props.onChange(!props.rowData.status)} />), editable: 'never'})
                        break;
                    default:
                        recordList[0][i].editable ? cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label})
                        : cols.push({title: recordList[0][i].outPut, field: recordList[0][i].label, editable: 'never'})
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

    const toolbar = recordList.length !== 0 ?
                            <Grid
                              container
                              direction="row"
                              justify="flex-end"
                              alignItems="center"
                            >
                                <Button 
                                    type={'addPerson'}
                                    clicked={props.addPerson}
                                >
                                    <PersonAdd/>
                                </Button>
                            </Grid> : null
    return (
        <Paper className={classes.paper}>
            <MaterialTable
                style={{boxShadow: 'none'}}
                icons={tableIcons}
                title={props.title}
                columns={recordList ? cols : []}
                data={data}
                editable = {{
                            onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                                                                        props.edited(newData, oldData);
                                                                        resolve();
                                                                        reject('qualcosa è andato storto')
                            
                                                                }),
                            onRowDelete: oldData => new Promise((resolve, reject) => {
                                                                    props.deleted(oldData);
                                                                    resolve();
                                                                    reject('qualcosa è andato storto')
                            
                                                            })                               }}
                options = {{rowStyle: rowData => ({backgroundColor: ((rowData.status===undefined) ? 'white' : rowData.status ? '#D9FFD9' : '#FEE7F2')})}}
                components = {{
                    Toolbar: props => (
                        //recordList.length !== 0 ?
                        <div className={classes.toolbar}>
                            <MTableToolbar {...props} />
                            {toolbar}
                        </div> // : null
                    )
                }}

            />
        </Paper>
    )
}

export default withStyles(styles)(table);