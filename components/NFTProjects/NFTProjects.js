import Image from 'next/image';
import React from "react";
import { Col, Row } from "reactstrap";
import {
  algorand,
  avalanche,
  binance, cardano, celo, Eth, near,
  polygon,
  solana
} from '../../images/HomeSectionFive';
import WebsiteImg from '../../images/View-Page-Website.png';
import YoutubeImg from '../../images/View-Page-Youtube.png';
import SelectTemplate from "../SelectTemplate/SelectTemplate";
import styles from "./nftprojects.module.scss";

const NFTProjects = () => {
  const projects_round = [
    {
      title: "MISFITZ",
      image: "/Assets/HomeSectionFour/Eclipse - Misfitz.png"
    },
    {
      title: "WEALTHY APES",
      title_2: "",
      image: "/Assets/HomeSectionFour/Eclipse - WAC.png"
    },
    {
      title: "RICH APEZ",
      image: "/Assets/HomeSectionFour/Eclipse - Rich Apez.png"
    },
    {
      title: "BAD BEARS",
      image: "/Assets/HomeSectionFour/Eclipse - Bad Bear.png"
    },
    {
      title: "BABY DOGE",
      image: "/Assets/HomeSectionFour/Eclipse - Babt Doge.png"
    }
  ];
  const scrollToForm = () => {
    let hero = document.getElementById("contact-form");
    hero && hero.scrollIntoView();
  }
  return (
    <div className={styles.nft_projects_container}>
      <div className={styles.top_header}>
        <h1>NFT PROJECTS</h1>
      </div>
      <section className={styles.project_list_rounded} data-aos='fade-left'>
        {projects_round.map((item, i) => {
          return (
            <div key={i} className={styles.project_list_item}>
              <img src={item.image} />
              <p>
                {item.title}
                <br />
                {item.title_2 && item.title_2}
              </p>
            </div>
          );
        })}
      </section>
      <section className={styles.rich_apez_project} data-aos='fade-right' data-aos-duration='700'>
        <div className={styles.bg_cont}>
          <img src="/Assets/Rich-Apez-bg.png" />
          <img src="/Assets/rich-apez-fox.png" />
          <h4>RICH APEZ</h4>
          <ul>
            <li><img src="/Assets/Icon-spots-left.svg" alt="" /> 5 spots left</li>
            <li><img src="/Assets/bi_wallet-fill.svg" alt="" /> Scan Wallet</li>
          </ul>
        </div>
        <div className={styles.comment}>
            <div className={styles.head}>
              <img src="/Assets/Person1-NFT-Superkeys.png" alt="" /> RICH APEZ
            </div>
            <div className={styles.body}>
            Rich Apez Uses Mintdropz To Mint In Game Assets and PFP NFT Minting To Fund Game Development
            </div>
        </div>
        <div className={styles.name}>RICH APEZ</div>
      </section>
      <section className={styles.one_click_sec} data-aos='fade-down' data-aos-duration='700'>
        <h1>1 Click, No Code Smart Contract Deployment</h1>
        <p>
          No Technical Experience needed. <br /> 1 Click Smart Contract
          Deployment on All Major Chains
        </p>
        <div className={styles.img_cont}>
          <img src="/Assets/HomeSectionFive/bcgk - Smart contract.png" alt="" />
          <div className={styles.label}>Token Price</div>
          <div className={styles.label}>Token Symbol</div>
          <div className={styles.label}>Token Supply</div>
          <div className={styles.icon_cont}>
            <Image className={styles.icon} src={Eth} alt="" />
            <Image className={styles.icon} src={polygon} alt="" />
            <Image className={styles.icon} src={celo} alt="" />
            <Image className={styles.icon} src={solana} alt="" />
            <Image className={styles.icon} src={cardano} alt="" />
            <Image className={styles.icon} src={algorand} alt="" />
            <Image className={styles.icon} src={avalanche} alt="" />
            <Image className={styles.icon} src={binance} alt="" />
            <Image className={styles.icon} src={near} alt="" />
          </div>
        </div>
      </section>
      <SelectTemplate />
      <div className={styles.project_features_container}>
        {/* FEATURE 1 */}
        <section className={styles.features_item_container} data-aos='fade-right' data-aos-duration='1000'>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.content_sec}>
                <h1>UPLOAD ALL MEDIA TYPES</h1>
                <p>
                  Upload all types of files and share it with your community as
                  an NFT to monetize all types of Media
                </p>
              </div>
            </Col>
            <Col sm={12} md={6}>
            <div className={`${styles.image_sec} ${styles.image_sec1}`}>
                {/* <img src="/Assets/feature_1.png" /> */}
                <img src="/Assets/HomeSectionSix/Backg - Arquives.png" />
                <div className={styles.media_icons}>
                  <img src="/Assets/HomeSectionSix/jpeg.png" alt="" />
                  <img src="/Assets/HomeSectionSix/Arq - MP3.png" alt="" />
                  <img src="/Assets/HomeSectionSix/Arq - MP4.png" alt="" />
                  <img src="/Assets/HomeSectionSix/Arq - PDF.png" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </section>
        {/* FEATURE 2 */}
        <section className={`${styles.features_item_container} ${styles.features_item_container_rev}`} data-aos='fade-left' data-aos-duration='1000'>
          <Row className="flex-row-reverse">
            <Col sm={12} md={7}>
              <div className={styles.content_sec}>
                <h1>FULLY CUSTOMIZABLE</h1>
                <p>Completely Dyanmic Front End and Backend</p>
                <div className={styles.btn_container}>
                  <button className="btn" onClick={scrollToForm}>GET STARTED</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className={`${styles.image_sec} ${styles.image_sec2}`}>
                {/* <img src="/Assets/feature_2.png" /> */}
                <div className={styles.feature_2}>
                  <div className={styles.window_box}>
                    <div className={styles.head}>
                      <div className={styles.cnt}>
                        <img src="/Assets/Icon_Expand.svg" alt="" />
                        <img src="/Assets/Icon_Close.svg" alt="" />
                      </div>
                      <div className={styles.title}>
                        Website
                      </div>
                    </div>
                    <Image src={WebsiteImg} alt="" />
                  </div>
                  <div className={`${styles.window_box} ${styles.window_box2}`}>
                    <div className={styles.head}>
                      <div className={styles.cnt}>
                        <img src="/Assets/Icon_Expand.svg" alt="" />
                        <img src="/Assets/Icon_Close.svg" alt="" />
                      </div>
                      <div className={styles.title}>
                        CMS
                      </div>
                    </div>
                    <Image src={YoutubeImg} alt="" />
                  </div>
                  {/* <img src="/Assets/HomeSectionSix/Windows-Website.png" alt="" />
                  <img src="/Assets/HomeSectionSix/windows-cms1.png" alt="" /> */}
                </div>
              </div>
            </Col>
          </Row>
        </section>
        {/* FEATURE 3  */}
        <section className={styles.features_item_container} data-aos='fade-right' data-aos-duration='1000'>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.content_sec}>
                <h1>TOKEN & FIAT GATED CONTENT</h1>
                <div className={styles.btn_container}>
                  <button className="btn" onClick={scrollToForm}>GET STARTED</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
            <div className={`${styles.image_sec} ${styles.image_sec3}`}>
                <div className={styles.feature_3}>
                  <div className={styles.label}>THE MAKING OF DONDA</div>
                  <img src="/Assets/HomeSectionSix/kanye-west-donda-listening-party.jpg" alt="" />
                  <div className={styles.label}>TOKEN HOLDERS ONLY</div>
                  <div className={styles.label}>TOKEN GATED CONTENT</div>
                  <div className={styles.comment}>
                      <div className={styles.head}>
                        <img src="/Assets/HomeSectionSix/photo-profile-asked.png" alt="" /> SCAN WALLET
                      </div>
                      <div className={styles.body}>
                        YZY NFT HOLDERS CAN ACCESS THE MAKING OF DONDA WITH YZY NFT'S
                      </div>
                      <div className={styles.btns}>
                          <a href="#">View</a>
                          <a href="#">Buy</a>
                      </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* FEATURE 4 */}
        <section className={`${styles.features_item_container}  ${styles.features_item_container_last}`} data-aos='fade-left' data-aos-duration='1000'>
          <Row className="flex-row-reverse">
            <Col sm={12} md={6}>
              <div className={styles.content_sec}>
                <h1>LIVE STREAMING</h1>
                <p>
                  Creators can go live with their community and make amazing
                  moments together like live courses, events, and more
                </p>
                <div className={styles.btn_container}>
                  <button className="btn" onClick={scrollToForm}>GET STARTED</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
            <div className={`${styles.image_sec} ${styles.image_sec4}`}>
                {/* <img style={{width:"400px"}} src="/Assets/feature_4.png" /> */}
                <div className={styles.feature_4}>
                  <div className={styles.label}>2 WAY STREAM</div>
                  <div className={styles.label}>AUDIO STREAM</div>
                  <div className={styles.bg_cont}>
                    <img src="/Assets/HomeSectionSix/stream-ways-bg.png" alt="" />
                    <img src="/Assets/HomeSectionSix/date-img.png" alt="" />
                    <h4>WORK OUT WITH SHAQUEM</h4>
                    <ul>
                      <li><img src="/Assets/HomeSectionSix/Icon-spots-left.png" alt="" /> 2 spots left</li>
                      <li><img src="/Assets/HomeSectionSix/Icon-days.png" alt="" /> 60 min</li>
                    </ul>
                  </div>
                  <div className={styles.label}>ONE ON ONE VIDEO STREAM</div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* FEATURE 5 */}
        <section className={styles.features_item_container} data-aos='fade-right' data-aos-duration='1000'>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.content_sec}>
                <h1>TOKEN GATED E-COMMERCE</h1>
                <p>Merch Shops for Token Holders Only</p>
                <div className={styles.btn_container}>
                  <button className="btn" onClick={scrollToForm}>GET STARTED</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={styles.image_sec}>
                <div className={styles.feature_5}>
                  <img src="/Assets/token-ecommerce-bg.png" />
                  <img src="/Assets/scan-wallet.png" />
                  <h4>YZY GAP JAKCET</h4>
                  <a href="#">Buy</a>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* FEATURE 6 */}
        <section className={styles.features_item_container} data-aos='fade-left' data-aos-duration='1000'>
          <Row className="flex-row-reverse">
            <Col sm={12} md={6}>
              <div className={styles.content_sec}>
                <h1>EXCLUSIVE MEMBERS ONLY APPS</h1>
                <p>Mobile and TV Apps</p>
                <div className={styles.btn_container}>
                  <button className="btn" onClick={scrollToForm}>GET STARTED</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={styles.image_sec}>
                <img src="/Assets/feature_6.png" />
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default NFTProjects;
