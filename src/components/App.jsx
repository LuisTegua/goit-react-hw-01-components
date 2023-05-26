import { Profile } from './Profile';
import User from '../data/user.json';

import { Statistics } from './Statistics';
import data from "../data/data.json"

import { FriendList } from './FriendList';
import friends from "../data/friends.json";

import { TransactionHistory } from './TransactionHistory';
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <>
      <Profile user={User} />
      <Statistics data={data} title="Upload Stats" />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
};
