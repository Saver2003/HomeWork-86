import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Toolbar from "../../components/UI/Toolbar/Toolbar";

const Layout = props => (
  <Fragment>
    <header>
      <Toolbar user={props.user}/>
    </header>
    <main className="container">
      {props.children}
    </main>
  </Fragment>
);

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(Layout);