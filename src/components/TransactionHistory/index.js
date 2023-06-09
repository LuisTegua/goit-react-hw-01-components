import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

export const TransactionHistory = ({ data }) => {
  return (
    <section>
      <table className={style.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th className={style.item_border}>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={info.id} className={index % 2 === 0 ?"item":style.item_background}>
              <td>{info.type}</td>
              <td className={style.item_border}>{info.amount}</td>
              <td>{info.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}