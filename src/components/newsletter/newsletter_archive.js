import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsletterArchive extends Component {

    constructor(props) {
        super(props)

        this.items = []
    }

    renderNewsletterArchiveItem = function(item, index) {
        return (
            <li key={index} className="archive-item">
                <div>
                    <Link to={`/newsletter/detail/${item._id}`}>{item.title}</Link>
                </div>
                
                <div><p>09/15/2030</p></div>
            </li>
        )
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.archive) {
            nextprops.archive.map((item, index) => {
                this.items.push(this.renderNewsletterArchiveItem(item, index))
            })
        }
    }

    render() {
        return (
            <div className="newsletter-archive">
                <div className="archive__title">Archive</div>
                <ul>
                    {
                        this.items
                    }
                </ul>
            </div>
        )
    }
}

export default NewsletterArchive;