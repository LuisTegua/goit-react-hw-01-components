import PropTypes from "prop-types";
import style from "./Perfil.module.css"

export const Perfil = ({ user }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img className={style.avatar} src={user.avatar} alt={user.tag} />
        <span className={style.name}>{user.username}</span>
        <span className={style.info}>@{user.tag}</span>
        <span className={style.info}>{user.location}</span>
      </div>
      <ul className={style.stats}>
        <li className={style.stats__item}><span className={style.stats__label}>Followers</span><span className={style.stats__quantity}>{user.stats.followers}</span></li>
        <li className={style.stats__item}><span className={style.stats__label}>Views</span><span className={style.stats__quantity}>{user.stats.views}</span></li>
        <li className={style.stats__item}><span className={style.stats__label}>Likes</span><span className={style.stats__quantity}>{user.stats.likes}</span></li>
      </ul>
    </div>
  );
}