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

export default class QuranSlider extends Component {

    range(start, stop) {
        var array = [];
        var length = stop - start;
        for (var i = 0; i <= length; i++) { 
            array[i] = start;
            start++;
        }
        return array;
    }
    render() {
        const settings = {
            initialSlide: 0,
            dots: false,
            infinite: false,
            autoplay: false,
            speed: 500,
            arrows: true,
            slidesToShow:2,
            rtl:true,
        
            
        };
        console.log(this.props.pageStart);
        console.log(this.props.pageEnd);
        const myArray=this.range(this.props.pageStart,this.props.pageEnd);
        return (
            
            <div>
                <style>{cssstyle}</style>
                {/*<h2> Surah Slider</h2>*/}
                
                <Slider {...settings} ref={slider=>(this.slider = slider)}>
                 
                    {[...Array.from(myArray)].map((_, i) => {
                        {console.log(myArray[i])}
                        if(myArray[i] !== 0){
                        let path = "https://raw.githubusercontent.com/quran/quran-ios/master/Quran/Resources/images/images_1280/width_1280/page" + myArray[i].toString().padStart(3, '0') + ".png";
                        //console.log(myArray[i]);
                        /*return (<div className="content">
                            <img id="thumbnail-image" src={path} className="img-fluid"  alt="thumbnail" />
                        </div>);*/
                        return (<div className="content" key={myArray[i]}>
                        <p className="text-center">{"Surah:"+this.props.surahData['name_arabic']+" "+this.props.surahData['name_complex']+" p."+myArray[i]}</p>
                        <img className="img-fluid" src={path} />  
                      </div>);
                        }
                    })}
                </Slider>
            </div>
            
        );
    }
}