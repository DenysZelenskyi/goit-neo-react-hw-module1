import "./App.css";
import Profile from "./components/task1/Profile";
import FriendList from "./components/task2/FriendList";
import TransactionHistory from "./components/task3/TransactionHistory";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
