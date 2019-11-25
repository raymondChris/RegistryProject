import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import RegistryPage from './Pages/RegistryPage/RegistryPage'

import { CssBaseline, Typography} from '@material-ui/core/';
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
    registryList: [
      {
        registryName: 'persona',
        recordInfo: [             /* dara il nome alle colonne */
          { name: 'mickey', type: 'string' },
          { lastName: 'mouse', type: 'string' },
          { age: 91, type: 'integer' },
        ]
      },
      {
        registryName: 'animale',
        recordInfo: [             /* dara il nome alle colonne */
          { name: 'pluto', type: 'string' },
          { razza: 'Chien de Saint-Hubert', type: 'string' },
          { age: 89, type: 'integer' },
        ]
      },
    ],
    whichRegistry: '',
  }

  registrySelectedHandler = (e, index) => {
    console.log(index)
    this.setState({whichRegistry: this.state.registryList[index].registryName})
  }

  render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Navbar/>

      <Sidebar 
        clicked={this.registrySelectedHandler}
        list={this.state.registryList}/>

      

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RegistryPage
          title={this.state.whichRegistry}
        />
      </main>

    </div>
  );}
}

export default  withStyles(styles, { withTheme: true})(App)