import React from "react";
import css from "./card.module.css";

interface CardPropsI {
  title: string;
  repoLink: string;
  link: string;
  desc?: string;
  stars: number;
  forks: number;
}
const Card: React.FC<CardPropsI> = ({ title, repoLink, link, desc, stars, forks }) => {
  return (
    <div className={css.card}>
      <div className={css.body}>
        <div className={css.header}>{!repoLink ? title : <a href={repoLink}>{title}</a>}</div>
        <div className={css.link}>
          <a href={link}>{link}</a>
        </div>
        <div className={css.desc}>{desc}</div>
      </div>
      <div className={css.stats}>
        <div className={css.stars}>
          <sup>Stars</sup>
          {stars}
        </div>
        <div className={css.forks}>
          <sup>Forks</sup>
          {forks}
        </div>
      </div>
    </div>
  );
};

export default Card;
