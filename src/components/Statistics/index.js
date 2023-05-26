// import PropTypes from "prop-types";
import style from "./Statistics.module.css"

export const Statistics = ({ data, title }) => {
  return (
    <section className={style.statistics}>
      {title !== undefined && 
        (<h2 className={style.title}>{title}</h2>)}
      <ul className={style.stat_list}>
        {data.map(info => (
          <li key={info.id} className={style.item} style={{background: getRandomHexColor()}}>
            <span className={style.label}>{info.label}</span>
            <span className={style.percentage}>{info.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}