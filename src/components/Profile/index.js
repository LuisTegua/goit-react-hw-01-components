import PropTypes from "prop-types";
import style from "./Profile.module.css"

export const Profile = ({ user }) => {
  return (
    <section className={style.profile}>
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
    </section>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  })
}