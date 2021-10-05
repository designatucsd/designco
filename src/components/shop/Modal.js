import React, {useState} from "react";
import { ShopItems } from "./ShopItems";
import { Grid } from "@material-ui/core";
import Carousel from './Carousel';
import Slider from './Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Modal(props) {
    const idx = props.index;
    const current_item = ShopItems[idx];

    const [current, setCurrent] = useState(0);
    const length = 3;

    const nextSlide = () => {
        setCurrent(current === length ? 0 : setCurrent + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length : setCurrent - 1);
    };

    if (length <= 0) {
        return null;
    }

    return (
        <div>
            {props.show && (
                <div className="me-everything">
                    <div className="me-background" onClick={props.onHide}></div>
                    <div className="me">
                        <Grid container className="me-container">
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-left">
                                <img className="me-x-mobile" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-mobile" id="m1-5b">{current_item.merch_item}</h3>
                                <div>
                                <img src={require('../../images/shop/left-arrow.svg').default} className='left-arrow' onClick={() => setCurrent(current-1)} />
                                <img src={require('../../images/shop/right-arrow.svg').default} className='right-arrow' onClick={() => setCurrent(current+1)} />
      
                                    {ShopItems.map((slide, index) => {
                                        return (
                                        <div
                                            className={index === current ? 'slide active' : 'slide'}
                                            key={index}
                                        >
                                            {index === current && (
                                            <img  src={slide.yes[{current}].default} alt='travel image' className='slider-image' >
                                                
                                            </img>
                                            )}
                                            {/* {slide.small_images.map((imgs) => {
                                                return (
                                                    <div>
                                                        <img src={imgs.sm_img.default} />
                                                    </div>
                                                );
                                            })} */}
                                        </div>
                                        );
                                    })}
                                    </div>
                                <div className="me-img-container">
                                    {/* {current_item.small_images.map(item => {
                                        return (
                                            <div>
                                                <img src={item.sm_img.default} className="me-img-small"></img>
                                            </div>
                                                
                                        );
                                    })} */}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-right">
                                <img className="me-x" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-desktop" id="m1-5b">{current_item.merch_item}</h3>
                                <p id="m3b">$20</p>
                                <div className="me-button">
                                    <p>Order Form</p>
                                </div>
                                <p id="m1-5b" className="bold-text">Sizes Available</p>
                                <div id="m2b" className="me-container-sizes">
                                    <p id="m3r" className="smaller-text">S</p>
                                    <p id="m3r" className="smaller-text">M</p>
                                    <p id="m3r" className="smaller-text">L</p>
                                    <p id="m3r" className="smaller-text">XL</p>
                                    <p id="m3r" className="smaller-text">XXL</p>
                                </div>
                                <p id="m1-5b" className="smaller-text">Description of merch design + material</p>
                                <p id="m1-5b" className="smaller-text">Designed by Cornpuppy</p>
                                <p id="m1-5b" className="smaller-text">Model is 5'6" and is wearing size Medium</p>
                            </Grid>
                            
                        </Grid>
                    </div>
                </div>
                
            )}
        
        </div>
        
    );
}

export default Modal;