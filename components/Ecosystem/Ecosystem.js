import Image from 'next/image';
import React from "react";
import img1 from '../../images/Card-1-baby-doge.png';
import img10 from '../../images/Card-10-Dijonai-Carrington.png';
import img2 from '../../images/Card-2-Rich-Apez.png';
import img3 from '../../images/Card-3-wac.png';
import img4 from '../../images/Card-4-Misfitz.png';
import img5 from '../../images/Card-5-baby-doge.png';
import img6 from '../../images/Card-6-ndo-Champ.png';
import img7 from '../../images/Card-7-Donald-Y.png';
import img8 from '../../images/Card-8-Shaquem-Griffin.png';
import img9 from '../../images/Card-9-Karina-Nicoldine.png';
import styles from "./eco-sys.module.scss";

const Ecosystem = () => {
  const data = [
    {
      tagline: "NFT Collection",
      title_1: "BABY",
      title_2: "DOGE",
      image: img1,
      //image: "/Assets/Card-1-baby-doge.png"
    },
    {
      tagline: "NFT Collection",
      title_1: "RICH",
      title_2: "APEZ",
      image: img2
    },
    {
      tagline: "NFT Collection",
      title_1: "WEALTHY",
      title_2: "APES",
      image: img3
    },
    {
      tagline: "NFT Collection",
      title_1: "MISFITZ",
      title_2: "",
      image: img4
    },
    {
      tagline: "NFT Collection",
      title_1: "BABY",
      title_2: "DOGE",
      image: img5
    },
    {
      tagline: "Fitness Influencer",
      title_1: "NDO",
      title_2: "CHAMP",
      image: img6
    },
    {
      tagline: "Tennis Player",
      title_1: "DONALD",
      title_2: "YOUNG",
      image: img7
    },
    {
      tagline: "NFL STAR",
      title_1: "SHAQUEM",
      title_2: "GRIFFIN",
      image: img8
    },
    {
      tagline: "IBBF PRO",
      title_1: "KARINA ",
      title_2: "NICOLDINE",
      image: img9
    },
    {
      tagline: "WNBA",
      title_1: "DIJONAI ",
      title_2: "CARRINGTON",
      image: img10
    }
  ];
  return (
    <div className={styles.eco_container}>
      <div className={styles.top_header}>
        <h1>THE NFT ECOSYSTEM 
        </h1>
        <h1>DEVELOPMENT PLATFORM</h1>
      </div>
      <div className={styles.eco_cards_container} data-aos='fade-up' data-aos-duration='1000'>
        {data.map((item, i) => (
          <div key={i} className={styles.card_container}>
            <Image alt="" src={item.image} />
            <div className={styles.shadow_box}>
              <p>{item.tagline}</p>
              <h3>
                {item.title_1}
                <br />
                {item.title_2}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;
