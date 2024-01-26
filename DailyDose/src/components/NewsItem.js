import React from 'react'
import './cardButton.css'

//  shrotCut Key For Make react class base Component - rce

const NewsItem =(props) => {
        let { title, description, imageUrl, newsUrl,author,date } = props
        return (
            <div className='my-4 mx-2  w-50'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https:imgeng.jagran.com/images/2023/jul/XBOX%20(1)1689688440483.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date (date).toGMTString()} </small></p>
                        {/* <a rel='noreferrer' href={newsUrl} target='_blank'   className="btn btn-sm btn-dark">Read More</a> */}
                        <a rel='noreferrer' href={newsUrl} target='_blank' ><button>
                            <span>Read More</span>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
