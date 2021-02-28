import React from 'react'
import harborOne from "../../../assets/harbor.jpg"
import harborTwo from "../../../assets/harbor1.jpg"
import harborThree from "../../../assets/harbor2.jpg"
import theTruck from "../../../assets/truck.jpg"
import "./News.css"

const News = () => {
    return (
        <div className="main-news">
            <div className="main-news-content">
                <h4 className="main-news-content-h4">940air NEWSROOM</h4>
                <h2 className="main-news-content-h2">Our Articles</h2>
                <p className="main-news-content-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged.</p>
            </div>
            <div className="main-news-content-body">
                <div className="main-news-content-body-left">
                    <img className="main-news-content-body-left-img" src={theTruck} alt="logistics truck"/>
                    <h4 className="main-news-content-body-left-h4">NEWS ARTICLE</h4>
                    <h2 className="main-news-content-body-left-h2">The title of the content</h2>
                    <p className="main-news-content-body-left-date">20-02-2020</p>
                    <p className="main-news-content-body-left-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing  ...
                    </p>
                </div>
                <div className="main-news-content-body-right">
                    <div className="main-news-content-body-right-cards">
                        <hr/>
                        <div className="main-news-content-body-right-single-card">
                            <img className="main-news-content-body-right-single-card-img" 
                                src={harborOne} alt="harbor one"/>
                            <div className="main-news-content-body-right-single-card-content">
                                <h2 className="main-news-content-body-right-single-card-content-h2">
                                    Some Content here
                                </h2>
                                <p className="main-news-content-body-right-single-card-content-date">
                                    20-02-2019
                                </p>
                                <p className="main-news-content-body-right-single-card-content-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    ...
                                </p>
                            </div>
                        </div>

                        <hr/>
                        <div className="main-news-content-body-right-single-card">
                            <img className="main-news-content-body-right-single-card-img" 
                                src={harborTwo} alt="harbor one"/>
                            <div className="main-news-content-body-right-single-card-content">
                                <h2 className="main-news-content-body-right-single-card-content-h2">
                                    Some Content here
                                </h2>
                                <p className="main-news-content-body-right-single-card-content-date">
                                    20-02-2019
                                </p>
                                <p className="main-news-content-body-right-single-card-content-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    ...
                                </p>
                            </div>
                        </div>

                        <hr/>
                        <div className="main-news-content-body-right-single-card">
                            <img className="main-news-content-body-right-single-card-img" 
                                src={harborThree} alt="harbor one"/>
                            <div className="main-news-content-body-right-single-card-content">
                                <h2 className="main-news-content-body-right-single-card-content-h2">
                                    Some Content here
                                </h2>
                                <p className="main-news-content-body-right-single-card-content-date">
                                    20-02-2019
                                </p>
                                <p className="main-news-content-body-right-single-card-content-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <button className="news-section-button">See all articles</button>
        </div>
    )
}

export default News
