import React from "react";
import ImageTextLayout from "../../layouts/ImageTextLayout/ImageTextLayout";
import Image1 from "../../assets/Phone1.png";
import Image2 from "../../assets/Phone2.png";
import Image3 from "../../assets/Phone3.png";
import "./Content.css";

function Content() {
  return (
    <div>
      <ImageTextLayout
        imageSrc={Image1}
        subtitle="Create an account"
        title="Create/login to an existing account to get started"
        text="An account is created with your email and a desired password"
        isImageOnRight={false}
      />

      <ImageTextLayout
        imageSrc={Image2}
        subtitle="Explore while shopping"
        title="Shop for your favorites meal as e dey hot."
        text="Shop for your favorite meals or drinks and enjoy while doing it."
        isImageOnRight={true}
      />

      <ImageTextLayout
        imageSrc={Image3}
        subtitle="Checkout"
        title="When you done check out and get it delivered."
        text="When you done check out and get it delivered with ease."
        isImageOnRight={false}
      />
    </div>
  );
}

export default Content;
