// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


// // shrotCut Key For Make react class base Component - rce

// const News = (props) => {
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
//     // document.title = ` DailyDose - ${props.category} `

//     const updateNews = async () => {
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
//         setLoading(true)
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//     }

//     useEffect(() => {
//         updateNews();
//     }, [updateNews])

//     const handlePreviousClick = async () => {
//         setPage(page-1)
//         updateNews();
//     }


//     const handleNextClick = async () => {
//         setPage(page+1)
//         updateNews();
//     }

//     const fetchMoreData = async () => {
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=$
//         {props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//         setPage(page + 1)
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//     };

//     return (
//         <div className='container my-3'>
//             <h2 className='text-center pt-3 mt-5'>DailyDose - {props.category} </h2>
//             {loading && <Spinner />}
//             <InfiniteScroll
//                 dataLength={articles.length}
//                 next={fetchMoreData}
//                 hasMore={articles.length !== totalResults}
//                 loader={<Spinner />}
//             >
//                 <div className="container">
//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
//                             </div>
//                         })}
//                     </div>
//                 </div>
//             </InfiniteScroll>

//         </div >
//     );

// }


// News.defaultProps = {
//     country: 'in',
//     pageSize: 6,
//     category: 'general'
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
// }



// export default News

// ********************************************************************

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async (pageNumber) => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        if (pageNumber === 1) {
            setArticles(parsedData.articles);
        } else {
            setArticles(prevArticles => prevArticles.concat(parsedData.articles));
        }
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        updateNews(1);
    }, [props.country, props.category, props.apiKey, props.pageSize]);

    const fetchMoreData = () => {
        updateNews(page + 1);
        setPage(page + 1);
    };

    return (
        <div className='container my-3'>
            <h2 className='text-center pt-3 mt-5'>DailyDose - {props.category} </h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div >
    );
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired
}

export default News;





