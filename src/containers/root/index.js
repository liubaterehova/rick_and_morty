import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { connect } from "react-redux";
import MainPage from "../ConnectMainPage";

class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/main" component={MainPage} />{" "}
          <Route exact path="/" render={() => <Redirect to="/main" />} />{" "}
        </Switch>{" "}
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => {
  // if(!state.loginForm.decodedJWT) history.push('/login')
  return {
    //isAuthorized: !!state.loginForm.decodedJWT,
  };
};

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators({
//       ...authActions,
//     }, dispatch),
//   });

export default connect(mapStateToProps)(Root);
