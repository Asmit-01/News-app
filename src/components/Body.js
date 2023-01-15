import React from 'react'
import News from './News'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component'


const Body = (prop) => {
    const [article, setArticle] = useState([]);
    const [page, setpage] = useState(1);
    const [tot, setot] = useState(0);
    const [theme, settheme] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btntext, setbtntext] = useState('Enable Dark Mode');

    const toggle = () => {
        if (theme.color == 'black') {
            settheme({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext('Enable Light Mode');
        }
        else {
            settheme({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext('Enable Dark Mode');
        }
    }


    const fetchMoreData = async () => {
        setpage(page + 1);
        let d = await fetch(`https://newsapi.org/v2/top-headlines?category=${prop.category}&language=en&apiKey=b2f84ff73d804206925a0ce730f17f09&page=${page}`);

        let parsedD = await d.json();
        setArticle(article.concat(parsedD.articles));
        console.log(tot, article.length, page);
    }


    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios
            .get(`https://newsapi.org/v2/top-headlines?category=${prop.category}&language=en&apiKey=b2f84ff73d804206925a0ce730f17f09&page=${page}`)
            .then((res) => {
                // console.log(res);
                setArticle(res.data.articles);
                setot(res.data.totalResults);
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <div style={theme}>
            <nav className="navbar  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Free News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/business'>Business</Link></li>
                                    <li><Link className="dropdown-item" to='/entertainment'>Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to='/general'>General</Link></li>
                                    <li><Link className="dropdown-item" to='/health'>Health</Link></li>
                                    <li><Link className="dropdown-item" to='/science'>Science</Link></li>
                                    <li><Link className="dropdown-item" to='/sports'>Sports</Link></li>
                                    <li><Link className="dropdown-item" to='/technology'>Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggle} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: 'white' }}>{btntext}</label>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='my-3 mx-5'>
                <h2>Top News</h2>
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== 100}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="container">
                        <div className="row">
                            {article.map((ele) => (
                                <div className="col-md-3" key={ele.url}>
                                    <News title={ele.title} imgurl={ele.urlToImage} text={ele.description} newsurl={ele.url} context={theme} date={ele.publishedAt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )

}

export default Body