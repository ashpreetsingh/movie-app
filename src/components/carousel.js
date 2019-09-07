import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Data from "../content"
class MovieCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true}  interval={2500} width="70vw" infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false}>
                {Data.movie.map((data)=>{
                    return(
                        <div>
                            <img src={data.bg}></img>
                            <p className="legend">{data.name}</p>
                        </div>
                    )

                })}
                

            </Carousel>
        );
    }
}
 export default MovieCarousel;