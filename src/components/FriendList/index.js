import PropTypes from "prop-types";
import style from "./FriendList.module.css";

export const FriendList = ({ data }) => {
  return (
    <section className={style.FriendList}>
      <ul className={style.friend_list}>
        {data.map(info => (
          <li className={style.item} key={info.id}>
            <span className={info.isOnline === true ? style.isOnline : style.outOnline}></span>
            <img className={style.img} src={info.avatar} alt={info.name} />
            <p className={style.name}>{info.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })),
}