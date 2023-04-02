import React from 'react'

export default function NewsItem(props) {
  let { getTitle, description, imgurl, newsurl, author, date, source } = props;
  let newdate = new Date(date);
  return (
    <div>
      <div className="card" >
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "85%" }}>{source.name}</span>
          <h5 className="card-title ">{getTitle}</h5>
          <p className="card-text" >{description}</p>
          <p className="card-text"><small className="text-muted">By - {author} on {newdate.toGMTString()} </small></p>
          <a href={newsurl} target="blank" className="btn btn-sm btn-outline-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}
