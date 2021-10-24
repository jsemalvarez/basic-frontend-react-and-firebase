import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginPage } from '../pages/login/LoginPage';
import { RegisterPage } from '../pages/register/RegisterPage';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ LoginPage }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ RegisterPage }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>

        </div>
    )
}
