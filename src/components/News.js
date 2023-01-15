import React from 'react'

function News(prop) {

    return (
        <div className='my-3'>
            <div className="card">
                <img src={prop.imgurl == null ? 'https://www.reuters.com/resizer/c_3XrdTL5_LH9MsoPwY_cOuVvK4=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5DT5YMBZ4NJFNJEYECDCGO2GYI.jpg' : prop.imgurl} className="card-img-top" alt="..." />
                <div className="card-body" style={prop.context}>
                    <h5 className="card-title">{prop.title}</h5>
                    <p className="card-text">{prop.text}</p>
                    <p className="card-text"><small className="text-muted">{new Date(prop.date).toGMTString()}</small></p>
                    <a href={prop.newsurl} target="blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default News