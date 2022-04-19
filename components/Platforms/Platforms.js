import React from "react";
import styles from "./platforms.module.scss";

const Platforms = () => {
  const data = [
    {
      title: "PFP & Collectibles",
      des: `Mint Generative Projects or Collectable Artist Renderings with Your Own Smart Contract, Store Front. Airdrops. Royalities. Creator Splits`,
      image: "/Assets/p_1.svg"
    },
    {
      title: "Gaming NFT’s",
      des: `Fund, Engage, and Develop Your Game With In Game Asset NFT’s. In Game Token Ecomonies Built With Token`,
      image: "/Assets/p_2.svg"
    },
    {
      title: "Marketplaces",
      des: `Build Your Own Dual Sided Marketplace,Fully Dynamic Minting with Multi Chain Token Access `,
      image: "/Assets/p_3.svg"
    },
    {
      title: "Community / Discord",
      des: `Token Gated Access To Community Only Platforms and Private Channels to Discord for Token Holders`,
      image: "/Assets/p_4.svg"
    },
    {
      title: "Developer Tools",
      des: `Developer Friendly Smart Contract Deployment with Contract ABI Intergation Documentation and Developer Relations Open Hours`,
      image: "/Assets/p_5.svg"
    },
    {
      title: "DAO’s",
      des: `No Code Smart Contract Deployment For DAO Formation. Exclusive DAO Member Only Platform Perks`,
      image: "/Assets/p_6.svg"
    }
  ];
  return (
    <div className={styles.platform_container}>
      <div className={styles.top_header}>
        <h1>
          THE FASTEST, EASY USE NFT ECOSYSTEM <br /> BUILDING PLATFORM IN THE
          WORLD
        </h1>
      </div>
      <div className={styles.platform_list_container}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.platform_item_container}>
              <img src={item.image} />
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.btn_container}>
        <button className="btn">GET STARTED</button>
      </div>
    </div>
  );
};

export default Platforms;
