import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
    render() {
        return (
            <div>
                <div className='container  my-3'>
                    <h2>Headlines</h2>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Newsitems title="myTitle" description="myDescription" />
                        </div>
                        <div className='col-md-4'>
                            <Newsitems title="myTitle" description="myDescription" />
                        </div>
                        <div className='col-md-4'>
                            <Newsitems title="myTitle" description="myDescription" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
