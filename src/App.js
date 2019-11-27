import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import RegistryPage from './Pages/RegistryPage/RegistryPage';
import Modal from './UI/Modal';
import Button from './UI/Button';

import { CssBaseline, Typography, TextField} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }, 
  toolbar: theme.mixins.toolbar,
});

class App extends Component {

  state = {
    /*
    registryList: [
      {
        registryList: [
          {
            registryName: 'persona',
            field: [
                {
                  label: 'name'
                  isRequired: true,
                  type: 'string,
                  value: 'mickey',
                },
                {

                }

            ]
          }
        ]
      }
    ]
    */
    registryList: [
      {
        registryName: 'persona',
        recordInfo: [[
          {
            label: 'name',
            outPut: 'Name',
            value: 'mickey',
            type: 'string',
            isRequired: true,
          },
          { 
            label: 'lastName',
            outPut: 'Last Name',
            value: 'mouse',
            type: 'string',
            isRequired: true,
          },
          { 
            label: 'age',
            outPut: 'Age',
            value: 91,
            type: 'integer',
            isRequired: false,
          },
        ],
        [
          {
            label: 'name',
            outPut: 'Name',
            value: 'goofy',
            type: 'string',
            isRequired: true,
          },
          { 
            label: 'lastName',
            outPut: 'Last Name',
            value: '',
            type: 'string',
            isRequired: true,
          },
          { 
            label: 'age',
            outPut: 'Age',
            value: 87,
            type: 'integer',
            isRequired: false,
          },
        ]] 
      },
      {
        registryName: 'animale',
        recordInfo: [[
          { 
            label: 'name',
            outPut: 'Name',
            value: 'pluto',
            type: 'string',
            isRequired: true,
          },
          { 
            label: 'race',
            outPut: 'Race',
            value: 'Bloodhound',
            type: 'string',
            isRequired: true,
          },
          { 
            label: 'age',
            outPut: 'Age',
            value: 79,
            type: 'integer',
            isRequired: false,
          },
        ]]
      }
    ],
    whichRegistry: '',
    isOpen: false,
    modalState: undefined,
  }

  registrySelectedHandler = (e, index) => {
    this.setState({whichRegistry: {...this.state.registryList[index]}})
  }

  setModalHandler = (title, body, action) => {
    const modal = <Modal
                    title={title}
                    body={body}
                    action={action}
                    close={this.hideModalHandler}
                  />
    this.setState({modalState: modal})
  }

  showModalHandler = () => {
    this.setState({isOpen: true})
  }

  hideModalHandler = () => {
    this.setState({isOpen: false})
  }

  render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {this.state.isOpen ? this.state.modalState || null : null}
      <Navbar/>

      <Sidebar 
        clickedAdd={() => {this.showModalHandler();
                           this.setModalHandler(
                            'Create a Registry',
                            <form className={classes.root} noValidate autoComplete="off">
                              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            </form>,
                            <Button type={'ok'}>Confirm</Button>);
                          }
        }
        clickedSelected={this.registrySelectedHandler}
        list={this.state.registryList}/>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RegistryPage
          regSelect={this.state.whichRegistry}
        />
      </main>

    </div>
  );}
}

export default  withStyles(styles, { withTheme: true})(App)