import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { selectArticlesLoading, selectArticlesError, selectArticles } from "../../store/blog/selectors";
import { getArticles } from "../../store/blog/actions";
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Blog () {
    const loading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);
    const articles = useSelector(selectArticles);
    const dispatch = useDispatch();
    
    const requestArticles = useCallback(() => {
        dispatch(getArticles());
    }, []);

    useEffect(() => {
        requestArticles();
        
    }, []);

    if (loading) {
        return <CircularProgress className="CircularProgress" thicknes="10" />
        // <CircularProgressWithLabel value={progress} />
    }

    if (error) {
        return (
            <>
            <h3>Ошибка запроса</h3>
            <button onClick={requestArticles}>Повторить запрос</button>
            </>
        )
    }
    
    if (!articles.length) {
        return <h3>Нет статей</h3>;
      }

    return articles.articles?.map((i) => 
    <List>
        <ListItem divider="true" selected="true" className="list" key={articles.articles.id}>&#10003; {i.title}</ListItem>
    </List>

    );
};

// setLoading(true);
// fetch(API_URL)
//     .then(response => {
//     return response.json();
// }).then(result => setArticles(result)).
// catch(() => { 
//     setError(true)
// }). finally(()=> {
//     setLoading(false);
// });

