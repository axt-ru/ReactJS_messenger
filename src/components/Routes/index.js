import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import React from 'react';
import Home from '../Home';
import Blog from '../Blog';
import Profile from '../Profile';
import "./style.css"

export default function Routes() {
    return (
        <div className="backImage">
        <BrowserRouter>
        <ul className="home">
            <Button variant="outlined" size="large" className="button"><Link to="/home">Главная</Link></Button>
            <Button variant="outlined" size="large" > <Link to="/profile">Профиль</Link></Button>
            <Button variant="outlined" size="large" > <Link to="/blog">Блог</Link></Button>
        </ul>

            <Switch>
                <Route
                    path="/profile"
                    render={(data) => <Profile match={data.match} />}
                ></Route>
                <Route path="/home/:chatId?">
                    <Home />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/nochat">
                    <h2> Чат отсутствует </h2>
                    <Link to="/home"></Link>
                </Route>
                <Route path="/" exact>
                    <h2>Приветствуем Вас!</h2>
                </Route>
                <Route path="*">
                    <h2>Ошибка 404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
        </div>
    );
}

