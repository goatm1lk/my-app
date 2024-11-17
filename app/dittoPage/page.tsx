"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./dittoPage.css";
import Header from "../components/Header";
const HomePage = () => {
  const [dittoData, setDittoData] = useState(null);
  const [spriteBackImageURL, setSpriteBackImageURL] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/006/692/205/small_2x/loading-icon-template-black-color-editable-loading-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"
  );
  const [spriteFrontImageURL, setFrontImageURL] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/006/692/205/small_2x/loading-icon-template-black-color-editable-loading-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"
  );

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(async (res) => {
        const data = await res.json();
        setDittoData(data);
        setSpriteBackImageURL(data.sprites.back_shiny);
        setFrontImageURL(data.sprites.front_shiny);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(dittoData);
  return (
    <>
      <div className="pageBody">
        <div className="pageContents">
          <Header />
          <div className="imageContainer">
            <div className="images">
              {
                <Image
                  src={spriteFrontImageURL}
                  alt={"Ditto sprite"}
                  height={500}
                  width={500}
                />
              }
              {
                <Image
                  src={spriteBackImageURL}
                  alt={"Ditto sprite"}
                  height={500}
                  width={500}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
