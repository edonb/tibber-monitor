import {createRef, useEffect, useState} from "react";
import "./TV2News.css"
import Feed from "./Feed";


const NewsFeed = () => {
    const [news, setNews] = useState(null)
    const [newsRef, setNewsRef] = useState(null)
    useEffect(() => {
        fetch("https://www.tv2.no/rss/nyheter", {method: 'GET'})
            .then(response => response.text())
            .then(result => {
                const parser = new DOMParser()
                const xmlDoc = parser.parseFromString(result, "text/xml")
                const newsObjects = [...xmlDoc.getElementsByTagName("item")]
                const news = []
                newsObjects.forEach(n => {
                    news.push(
                        {
                            title: n.getElementsByTagName("title")[0].textContent,
                            link: n.getElementsByTagName("link")[0].textContent,
                            summary: n.getElementsByTagName("description")[0].textContent,
                        }
                    )
                })
                setNews(news)

            })
            .catch(error => console.log('error', error));
    }, [])


    if (!news) return

    return (
        <div className={"news-container"}>
            <ul className="news-list">
                <Feed news={news}/>
            </ul>
        </div>
    )
}
export default NewsFeed