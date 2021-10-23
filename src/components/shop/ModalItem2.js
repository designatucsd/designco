import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel2 from './Carousel2';

function ModalItem2(props) {
    const [clickImage, setClickImage] = useState('me-item1-image1');

    return (
        <div>
            {props.show && (
                <div className="me-everything">
                    <div className="me-background" onClick={props.onHide}></div>
                    <div className="me">
                        <Grid container className="me-container">
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-left">
                                <img className="me-x-mobile" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-mobile" id="m1-5b">Design Co Holographic Nanna Teapot Sticker</h3>
                                <Carousel2></Carousel2>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-right">
                                <img className="me-x" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-desktop" id="m1-5b">Design Co Holographic Nanna Teapot Sticker</h3>
                                <p id="m3b">$2</p>
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
                                <p id="m1-5b" className="smaller-text">Rep Design Co with your very own DCo logo sticker! It’s perfect for your laptop, water bottle, and everything</p>
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

export default ModalItem2;