import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
         <div>
          <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                           <img src={!imageUrl ? "https://bulma.io/images/placeholders/1280x960.png" : imageUrl} className="card-img-top" alt="Placeholder-image"  />
                      </figure>
                    </div>
                    <div className="card-content">
                       <div className="content">
                          <span className="is-underline"> {source} </span>
                            <h5 className="card-title">{title}  </h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">
                              <small className="text-muted">By { !author ? "Unknown" : author } on  { new Date(date).toGMTString() }</small>
                            </p>
                            <a className="button is-outlined p-0 ml-auto is-flex" rel="noreferrer" href={newsUrl} target="_blank" style="width:108px; height:48px;">Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </a>
                      </div>
                    </div>
                  </div>    
      </div> 
      </>
    )
}

export default NewsItem

