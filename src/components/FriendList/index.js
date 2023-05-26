import style from "./FriendList.module.css";

export const FriendList = ({ data }) => {
  return (
    <section>
      <ul className={style.friend_list}>
        {data.map(info => (
          <li className={style.item}>
            <span className={info.isOnline == true ? "isOnline" : "outOnline"}></span>
            <img className={style.img} src={info.avatar} />
            <p className={style.name}>{info.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}