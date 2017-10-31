import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import AppBar  from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'

import LastTweets from '../LastTweets'
import FormAddScreenName from './FormAddScreenName'

import stl from './index.css'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      screenNames: ['SIIcanada', 'CanadiensMTL'],
      popupIsShown: false,
      drawerIsShown: false,
    }
  }

  showHidePopupForm(show) {
    this.setState({popupIsShown: show})
  }

  showHideDrawer(show) {
    this.setState({drawerIsShown: show})
  }

  addScreenName(screenName) {
    this.setState((prevState, props) => {
      return {screenNames: [...prevState.screenNames, screenName]}
    })

    this.showHidePopupForm(false)
  }

  removeScreenName(screenName) {
    this.setState((prevState, props) => {
      const index = prevState.screenNames.findIndex(el => el === screenName)

      return {
        screenNames: [...prevState.screenNames.slice(0, index), ...prevState.screenNames.slice(index + 1)]
      }
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <section className="App">

          <Drawer
            docked={false}
            width={200}
            open={this.state.drawerIsShown}
            onRequestChange={(open) => this.showHideDrawer(open)}
          >

            <RaisedButton  onClick={() => {
              this.showHideDrawer(false)
              this.showHidePopupForm(true)
            }} label="Add new account" style={{margin:'10px'}}></RaisedButton>

          </Drawer>

          <AppBar title="Test Sii" onLeftIconButtonTouchTap={ () => this.showHideDrawer(true) }></AppBar>

          <section className={stl.flexContainer}>
            { this.state.screenNames.map((screenName, index) => (
              <LastTweets key={screenName} screenName={screenName} onRemove={ this.removeScreenName.bind(this, screenName) } count={10} />
            )) }
          </section>

          <Dialog
            open={this.state.popupIsShown}
            onRequestClose={() => this.showHidePopupForm(false)}
          >
            <FormAddScreenName onSubmit={this.addScreenName.bind(this)} />
          </Dialog>
        </section>
      </MuiThemeProvider>
    )
  }
}

export default App
