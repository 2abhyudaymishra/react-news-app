import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalArticles, settotalArticles] = useState(0);

    const update = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pagesize}`
        setloading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData["articles"])

        setarticles(parsedData["articles"])
        settotalArticles(parsedData["totalResults"])
        setloading(false)
    }
    const fetchMoreData = async () => {
        setpage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pagesize}`
        
        let data = await fetch(url)
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData["articles"]))
        settotalArticles(parsedData["totalResults"])
    };

    useEffect(() => {
        document.title = `NewsApp - ${props.category}`;
        update();
        // eslint-disable-next-line 
    }, []);
    return (
        <>

            <h2 className='text-center ' style={{ marginTop: "90px" }}>News Headlines on {props.category}</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}
            >
                <div className="container my-3 ">
                    <div className="row ">
                        {articles.map((element) => {
                            return <div className="col-md-4 justify-content-evenly my-3" key={element.url} >
                                <NewsItem getTitle={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage ? element.urlToImage : "https://i.guim.co.uk/img/media/5a22129697cf46e0e35e4daa6bf5aaa0bc175eb7/0_134_4672_2803/master/4672.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9682ead76e23f5702df826dbe7d817cd"} newsurl={element.url ? element.url : "/"} author={element.author ? element.author : "unknown"} date={element.publishedAt ? element.publishedAt : "not found"} source={element.source} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}


News.defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
}
