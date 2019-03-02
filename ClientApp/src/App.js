import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Settings } from './components/Settings';
import { BusinessReporting } from './components/BusinessReporting';
import { Users } from './components/Users/Users';
import { Award } from './components/Award';
import { AddUser } from './components/Users/AddUser';
import { EditUser } from './components/Users/EditUser';

import { ForgetPassword } from './components/ForgetPassword';
import { Switch } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LogOut } from './components/LogOut';
import { ProtectedRoute } from './ProtectedRoute';



export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <ProtectedRoute path='/login' component={Login} />
                <ProtectedRoute exact path="/logout" component={LogOut}/>

                <ProtectedRoute path='/home' component={Home} />
               
                <ProtectedRoute path='/signup' component={SignUp} />
                <ProtectedRoute path='/ForgetPassword' component={ForgetPassword} />
                <ProtectedRoute exact path='/businessreporting' component={BusinessReporting} />
                <ProtectedRoute path='/users' component={Users} />
                <ProtectedRoute path='/award' component={Award} />
                <ProtectedRoute path='/settings' component={Settings} />
                <ProtectedRoute path='/addUser' component={AddUser} />
                <ProtectedRoute path='/editUser' component={EditUser} />
                <Route path="*" component = {()=> "404 NOT FOUND"}/>
             </Switch>
        </Layout>


    );
  }
}