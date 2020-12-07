import React, { Component } from "react";
import Slider from "react-slick";


const cssstyle = `
.container {
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
    width: 750px;
}
.content {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    height: calc(100% - 30px);
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            rtl:true
        };
        return (
            
            <div>
                <style>{cssstyle}</style>
                {/*<h2> Surah Slider</h2>*/}
                <Slider {...settings}>
                    {[...Array(4)].map((_, i) => {
                        let path = "https://raw.githubusercontent.com/quran/quran-ios/master/Quran/Resources/images/images_1280/width_1280/page" + (i + 1).toString().padStart(3, '0') + ".png";
                        return (<div className="content">
                            <img id="thumbnail-image" src={path} class="img-fluid"  alt="thumbnail" />
                        </div>);
                    })}
                </Slider>
            </div>
            
        );
    }
}