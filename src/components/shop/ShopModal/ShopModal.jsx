import React from "react";
import "./ShopModal.scss";
import AutoTiles from "../../AutoTiles/AutoTiles";
import AutoTile from "../../AutoTiles/subcomponents/AutoTile";
import ShopSize from "../ShopSize/ShopSize";
import ShopPhotoGallery from "../ShopPhotoGallery/ShopPhotoGallery";
export const ShopModal = ({
  title,
  price,
  description,
  sizes,
  onCloseClick = () => {},
  onOverlayClick = () => {},
  images,
}) => {
  return (
    <div className="shop-modal">
      <div className="shop-modal_overlay" onClick={onOverlayClick} />
      <div className="shop-modal_box-wrapper">
        <div className="shop-modal_box">
          <AutoTiles minWidth={250} space={40}>
            <AutoTile className="shop-modal_photos">
              <ShopPhotoGallery images={images} />
            </AutoTile>
            <AutoTile>
              <div className="shop-modal_details">
                <button className="shop-modal_close" onClick={onCloseClick} />
                <h1>{title}</h1>
                <span>{price}</span>
                <a href="https://example.com">Order Form</a>
                {sizes.length > 1 && (
                  <div className="shop-modal_available-sizes">
                    <span className="shop-modal_available-sizes-title">
                      Sizes Available
                    </span>
                    <div className="shop-modal_available-sizes-icons">
                      {sizes.map((i) => (
                        <ShopSize size={i.size} available={i.available} />
                      ))}
                    </div>
                  </div>
                )}
                <div className="shop-modal_description">{description}</div>
              </div>
            </AutoTile>
          </AutoTiles>
        </div>
      </div>
    </div>
  );
};
