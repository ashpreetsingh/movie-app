import React, { Component } from 'react'

export default class movietrailer extends Component {
    render() {
        return (
            <div>
                <iframe
                    src="https://www.youtube.com/embed/HZ7PAyCDwEg"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="100%"
                    height="350vh"
                    />
            </div>
        )
    }
}
