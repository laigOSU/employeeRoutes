import React, { Component } from 'react';
import ReactDOM from "react-dom";
import auth from "./auth";

export class Login extends Component {
  displayName = Login.name


render() {
    return (

      <div> {/*JSX ROOT*/}
        
        <div class="card">
            <article class="card-body">
                <h4 class="card-title text-center mb-4 mt-1">LOGIN</h4>

                <p class="text-success text-center">Please log in with your email and password</p>
                <form class="login100-form validate-form">
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                     </div>
                    <input name="" class="form-control" placeholder="Email" type="email" name="email" id="email" />
                </div> 
                </div> 
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                     </div>
                    <input class="form-control" placeholder="******" type="password" name="password" id="password"/>
                </div> 
                </div> 
            <div class="row">
                    <div class = "col-md-6">

                        <div class="form-group">
                        

                                          <button class="btn btn-primary btn-block" onClick="Validate()"
      >Login</button>
                                    </div>
                    </div>
                    <div class="col-md-6">
                         <a href="/signup" class="btn btn-outline-primary btn-block">Sign up</a>
                    </div>

                    </div>

                <p class="text-center"><a href="/ForgetPassword" class="btn">Forgot password?</a></p>
                </form>
            </article>

            </div> 
      </div> // End of JSX root in render
    );
  }
}
