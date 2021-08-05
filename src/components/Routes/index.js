import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../Home';
import Profile from '../Profile';
import "./style.css"


export default function Routes() {
    return (
        <BrowserRouter>
        <ul style={{marginLeft: "100px", lineHeight:"30pt"}} >
            <li>
                <Link to="/home">Главная</Link>
            </li>
            <li>
                <Link to="/profile">Профиль</Link>
            </li>
        </ul>

            <Switch>
                <Route
                    path="/profile"
                    render={(data) => <Profile match={data.match} />}
                ></Route>
                <Route path="/home/:chatId?"><Home /></Route>
                <Route path="/" exact>
                    <h2>Приветсвуем Вас!</h2>
                </Route>
                <Route path="*">
                    <h2>Ошибка 404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

