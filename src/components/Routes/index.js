import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import Home from '../Home';
import Blog from '../Blog';
import Profile from '../Profile';
import "./style.css";
import { Login } from '../Login';
import { Logout } from "../Logout";
import PrivateRoute from "../../hocs/PrivateRoute";
import PublicRoute from "../../hocs/PublicRoute";
import { connectProfileToFB } from "../../store/profile/actions";


export default function Routes() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(connectProfileToFB());
    }, []);
    
    return (
        <div className="backImage">
        <BrowserRouter>
        <ul className="home">
            <Button variant="outlined" size="large" className="button"><Link to="/home">Главная</Link></Button>
            <Button variant="outlined" size="large" > <Link to="/profile">Профиль</Link></Button>
            <Button variant="outlined" size="large" > <Link to="/blog">Блог</Link></Button>
            <Button variant="outlined" size="large" > <Logout /><Link to="/home"></Link></Button>
        </ul>
        

            <Switch>
                <PrivateRoute
                    path="/profile"
                    render={(data) => (
                        <Profile match={data.match} history={data.history} />
                    )}
                />
                <PrivateRoute path="/home/:chatId?">
                    <Home />
                </PrivateRoute>
                <Route path="/blog">
                    <Blog />
                </Route>
                <PrivateRoute path="/nochat">
                    <h2> Чат отсутствует </h2>
                    <Link to="/home"></Link>
                </PrivateRoute>
                <Route path="/" exact>
                    <h2>Приветствуем Вас!</h2>
                </Route>
                <PublicRoute path="/login" path="/login" exact>
                    <Login />
                </PublicRoute>
                <PublicRoute path="/signup" path="/signup" exact>
                    <Login isSignUp />
                </PublicRoute>
                <Route path="*">
                    <h2>Ошибка 404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
        </div>
    );
}

