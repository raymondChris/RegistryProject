import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import RegistryPage from './Pages/RegistryPage/RegistryPage';
import ModalComponent from './UI/ModalComponent';

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
  constructor(props) {
    super()
  
  this.state = {
    profileList: [
      {profile: 'admin'},
      {profile: 'supervisor'},
      {profile: 'operator'},
    ],
    registryList: [
      {
        registryName: 'persona',
        recordInfo: [[
          {
            label: 'id',
            outPut: '',
            value: 'disney01m',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: false,
          },
          {
            label: 'profile',
            outPut: 'Profile',
            value: 'admin',
            type: 'profile',
            lookup: 'dropdown',
            editable: true,
            isRequired: true,
          },
          {
            label: 'name',
            outPut: 'Name',
            value: 'mickey',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'lastName',
            outPut: 'Last Name',
            value: 'mouse',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'xf',
            outPut: 'XF',
            value: 91453,
            type: 'integer',
            lookup: 'numeric',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'email',
            outPut: 'e-mail',
            value: 'mickey@dmail.com',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'status',
            outPut: 'Status',
            value: true,
            type: 'boolean',
            lookup: 'toogle',
            editable: true,
            isRequired: true,
          },
        ],
        [
          {
            label: 'id',
            outPut: '',
            value: 'disney01g',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: false,
          },
          {
            label: 'profile',
            outPut: 'Profile',
            value: 'supervisor',
            type: 'profile',
            lookup: 'dropdown',
            editable: false,
            isRequired: true,
          },
          {
            label: 'name',
            outPut: 'Name',
            value: 'goofy',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'lastName',
            outPut: 'Last Name',
            value: '',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'xf',
            outPut: 'XF',
            value: 44553,
            type: 'integer',
            lookup: 'numeric',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'email',
            outPut: 'e-mail',
            value: 'pippo@dmail.com',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'status',
            outPut: 'Status',
            value: false,
            type: 'boolean',
            lookup: 'toogle',
            editable: true,
            isRequired: true,
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
            lookup: 'textfield',
            isRequired: true,
          },
          { 
            label: 'race',
            outPut: 'Race',
            value: 'Bloodhound',
            type: 'string',
            lookup: 'textfield',
            isRequired: true,
          },
          { 
            label: 'age',
            outPut: 'Age',
            value: 79,
            type: 'integer',
            lookup: 'numeric',
            isRequired: false,
          },
        ]]
      }
    ],
    UserList: [[
      {
        label: 'id',
        outPut: '',
        value: 'disney04m',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: false,
      },
      {
        label: 'name',
        outPut: 'Name',
        value: 'minnie',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'lastName',
        outPut: 'Last Name',
        value: 'mouse',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'xf',
        outPut: 'XF',
        value: 71423,
        type: 'integer',
        lookup: 'numeric',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'email',
        outPut: 'e-mail',
        value: 'minnie@dmail.com',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      ],
      [
      {
        label: 'id',
        outPut: '',
        value: 'disney05m',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: false,
      },
      {
        label: 'name',
        outPut: 'Name',
        value: 'daisy',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'lastName',
        outPut: 'Last Name',
        value: 'duck',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'xf',
        outPut: 'XF',
        value: 12453,
        type: 'integer',
        lookup: 'numeric',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'email',
        outPut: 'e-mail',
        value: 'daisy@dmail.com',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      ],
      [
      {
        label: 'id',
        outPut: '',
        value: 'disney09m',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: false,
      },
      {
        label: 'name',
        outPut: 'Name',
        value: 'donald',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'lastName',
        outPut: 'Last Name',
        value: 'duck',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'xf',
        outPut: 'XF',
        value: 65453,
        type: 'integer',
        lookup: 'numeric',
        editable: false,
        isRequired: true,
      },
      { 
        label: 'email',
        outPut: 'e-mail',
        value: 'donald@dmail.com',
        type: 'string',
        lookup: 'textfield',
        editable: false,
        isRequired: true,
      },
      ],[
        {
          label: 'id',
          outPut: '',
          value: 'disney04m',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: false,
        },
        {
          label: 'name',
          outPut: 'Name',
          value: 'minnie',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'lastName',
          outPut: 'Last Name',
          value: 'mouse',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'xf',
          outPut: 'XF',
          value: 71423,
          type: 'integer',
          lookup: 'numeric',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'email',
          outPut: 'e-mail',
          value: 'minnie@dmail.com',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        ],
        [
        {
          label: 'id',
          outPut: '',
          value: 'disney05m',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: false,
        },
        {
          label: 'name',
          outPut: 'Name',
          value: 'daisy',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'lastName',
          outPut: 'Last Name',
          value: 'duck',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'xf',
          outPut: 'XF',
          value: 12453,
          type: 'integer',
          lookup: 'numeric',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'email',
          outPut: 'e-mail',
          value: 'daisy@dmail.com',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        ],
        [
        {
          label: 'id',
          outPut: '',
          value: 'disney09m',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: false,
        },
        {
          label: 'name',
          outPut: 'Name',
          value: 'donald',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'lastName',
          outPut: 'Last Name',
          value: 'duck',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'xf',
          outPut: 'XF',
          value: 65453,
          type: 'integer',
          lookup: 'numeric',
          editable: false,
          isRequired: true,
        },
        { 
          label: 'email',
          outPut: 'e-mail',
          value: 'donald@dmail.com',
          type: 'string',
          lookup: 'textfield',
          editable: false,
          isRequired: true,
        },
        ],[
          {
            label: 'id',
            outPut: '',
            value: 'disney04m',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: false,
          },
          {
            label: 'name',
            outPut: 'Name',
            value: 'minnie',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'lastName',
            outPut: 'Last Name',
            value: 'mouse',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'xf',
            outPut: 'XF',
            value: 71423,
            type: 'integer',
            lookup: 'numeric',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'email',
            outPut: 'e-mail',
            value: 'minnie@dmail.com',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          ],
          [
          {
            label: 'id',
            outPut: '',
            value: 'disney05m',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: false,
          },
          {
            label: 'name',
            outPut: 'Name',
            value: 'daisy',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'lastName',
            outPut: 'Last Name',
            value: 'duck',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'xf',
            outPut: 'XF',
            value: 12453,
            type: 'integer',
            lookup: 'numeric',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'email',
            outPut: 'e-mail',
            value: 'daisy@dmail.com',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          ],
          [
          {
            label: 'id',
            outPut: '',
            value: 'disney09m',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: false,
          },
          {
            label: 'name',
            outPut: 'Name',
            value: 'donald',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'lastName',
            outPut: 'Last Name',
            value: 'duck',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'xf',
            outPut: 'XF',
            value: 65453,
            type: 'integer',
            lookup: 'numeric',
            editable: false,
            isRequired: true,
          },
          { 
            label: 'email',
            outPut: 'e-mail',
            value: 'donald@dmail.com',
            type: 'string',
            lookup: 'textfield',
            editable: false,
            isRequired: true,
          },
          ],[
            {
              label: 'id',
              outPut: '',
              value: 'disney04m',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: false,
            },
            {
              label: 'name',
              outPut: 'Name',
              value: 'minnie',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'lastName',
              outPut: 'Last Name',
              value: 'mouse',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'xf',
              outPut: 'XF',
              value: 71423,
              type: 'integer',
              lookup: 'numeric',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'email',
              outPut: 'e-mail',
              value: 'minnie@dmail.com',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            ],
            [
            {
              label: 'id',
              outPut: '',
              value: 'disney05m',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: false,
            },
            {
              label: 'name',
              outPut: 'Name',
              value: 'daisy',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'lastName',
              outPut: 'Last Name',
              value: 'duck',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'xf',
              outPut: 'XF',
              value: 12453,
              type: 'integer',
              lookup: 'numeric',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'email',
              outPut: 'e-mail',
              value: 'daisy@dmail.com',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            ],
            [
            {
              label: 'id',
              outPut: '',
              value: 'disney09m',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: false,
            },
            {
              label: 'name',
              outPut: 'Name',
              value: 'donald',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'lastName',
              outPut: 'Last Name',
              value: 'duck',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'xf',
              outPut: 'XF',
              value: 65453,
              type: 'integer',
              lookup: 'numeric',
              editable: false,
              isRequired: true,
            },
            { 
              label: 'email',
              outPut: 'e-mail',
              value: 'donald@dmail.com',
              type: 'string',
              lookup: 'textfield',
              editable: false,
              isRequired: true,
            },
            ]
    ],
    whichRegistry: '',
    isOpen: false,
    modalAspect: undefined,
  }
  }

  findIndexHandler = (data, oldData) => {
    let index = -1;
    for(let i=0;i< data.length;i++){
      if(data[i].id === oldData.id )
       index = i;
    }
    return index
  }

  editRowHandler = (newData, oldData) => {
    const data = this.state.whichRegistry.recordInfo ? this.state.whichRegistry.recordInfo.map( value => value.reduce((acc, cur) => ( {...acc,
      [cur.label] : cur.value || 'N/D',
      }), {})) : [];
    const index = this.findIndexHandler(data, oldData);
    //newData.position = this.profileList[parseInt(newData.position)].profile
    data[index] = newData;
    const row = data[index];
    let registryAppoggio = [...this.state.registryList]
    for(let i = 0; i < registryAppoggio.length; i++) {
      if(registryAppoggio[i].registryName === this.state.whichRegistry.registryName) {
        for(let j = 0; j < registryAppoggio[i].recordInfo[index].length; j++) {
            switch(registryAppoggio[i].recordInfo[index][j].lookup){
              case 'dropdown':
                  switch(registryAppoggio[i].recordInfo[index][j].label) {
                    case 'profile':
                      registryAppoggio[i].recordInfo[index][j].value = this.state.profileList[row[Object.keys(row)[j]]].profile
                      break;
                    default:;
                  }
                break;
              default:
                registryAppoggio[i].recordInfo[index][j].value = row[Object.keys(row)[j]]
          }
        }
      }
    }
    this.setState({registryList: [...registryAppoggio]})
  }

  deleteRowHandler = (oldData) => {
    const data = this.state.whichRegistry.recordInfo ? this.state.whichRegistry.recordInfo.map( value => value.reduce((acc, cur) => ( {...acc,
                                                                                                        [cur.label] : cur.value || 'N/D', }), {})) : [];
    const index = this.findIndexHandler(data, oldData);
    let registryAppoggio = [...this.state.registryList]
    for(let i = 0; i < registryAppoggio.length; i++) {
      if(registryAppoggio[i].registryName === this.state.whichRegistry.registryName) {
        registryAppoggio[i].recordInfo.splice(index, 1)
      }
    }
    this.setState({registryList: [...registryAppoggio]})
  }


  registrySelectedHandler = (e, index) => {
    this.setState({whichRegistry: {...this.state.registryList[index]}})
  }

  addRegistryHandler = (title, body, action) => {
    const modal = <ModalComponent
                        close={() => this.setState({isOpen: false})}
                        title={title}
                        body={body}
                        action={action}
                    />
    this.setState({isOpen: true, modalAspect: modal})
  }

  changeRegistryListHandler = (profileSelected, rowSelected, statusSelected) => {
    console.log(profileSelected)
    console.log(rowSelected)
    console.log(statusSelected)
  }
  

  render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      {this.state.isOpen ? this.state.modalAspect : null}

      <Navbar/>

      <Sidebar 
        clickedAdd={() => this.addRegistryHandler(
          'Create a Registry',
          'Input Zone',
          'Action Zone',
        )}
        clickedSelected={this.registrySelectedHandler}
        list={this.state.registryList}/>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RegistryPage
          userList={this.state.UserList}
          profList={this.state.profileList}
          regSelect={this.state.whichRegistry}
          delete={(oldData) => this.deleteRowHandler(oldData)}
          edit={(newData, oldData) => this.editRowHandler(newData, oldData)}
          changeListTable={(profileSeected, rowSelected, statusSelected) => this.changeRegistryListHandler(profileSeected, rowSelected, statusSelected)}
        />
        
      </main>

    </div>
  );}
}

export default  withStyles(styles, { withTheme: true})(App)