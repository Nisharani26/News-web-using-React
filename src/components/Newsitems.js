import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        let { title, description, imgUrl, source_url } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imgUrl ? "https://media.gettyimages.com/id/184886377/photo/blank-photo-54-megapixels.jpg?s=612x612&w=gi&k=20&c=sgz7WDfy5ApaHFdtmX6hruR8QqUI1qH8tt51hn4J_oc=" : imgUrl} className="card-img-top" alt="the image is not loading" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={source_url} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitems
