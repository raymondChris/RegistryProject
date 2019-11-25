import React, { Component } from 'react';

import Modal from '../../UI/Modal';
import Button from '../../UI/Button';

import { List } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    item: {
        marginTop: '10px',
        marginBottom: '10px',
        color: '#555555',
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
}

class TableList extends Component {
    constructor(props) {
        super()
        console.log(props.list)
        this.state =  {
            value: '',
            isOpen: false,
        }
        
    }
    

    changeHandler = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    
    closeHandler = () => {
        this.setState({isOpen: false})
    }
    
    changeValueHandler = (e) => {
        this.setState({value: e.target.value})
    }
    
    listChangeHandler = () => {
        const actualList = [...this.state.tables];
        actualList.push(this.state.value);
        this.setState({tables: [...actualList], value: ''});
    }

    
    
    
    render() {
    const { classes } = this.props;
    const list = this.props.list.length > 0 ? this.props.list.map( (value, index) =>
                                            <div
                                                key={index}
                                                className={classes.item}
                                                onClick={this.props.clicked}
                                            >
                                                {value.registryName}
                                            </div>
                                        )
                 : 'non ci sono tabelle';
        return(
            <List>
                {list}
            </List>
        )
    }
}

export default withStyles(styles)(TableList);