import { connect }  from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import App from './app';


export default withRouter(connect(()  => ({}))(App));