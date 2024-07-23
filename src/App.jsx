import "./App.css";
import React, { useState } from "react";
import FriendList from "./FriendsList";
import AddForm from "./AddForm";
import SplitForm from "./SplitForm";
import { initialFriends } from "../public/data";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");
  //   states for bill split
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [payer, setPayer] = useState("");
  const [splitResult, setSplitResult] = useState("");
  const [status, setStatus] = useState("even");

  const addNewFriend = (name, imgSrc) => {
    const newFriend = {
      id: friends.length + 1,
      name,
      text: `You and ${name} are even`,
      imgSrc,
      restatus: "even",
    };
    setFriends([...friends, newFriend]);
  };

  const handleSelectedFriend = (friend) => {
    if (selectedFriend === friend) {
      setSelectedFriend("");
    } else {
      setSelectedFriend(friend);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted, selected friend:", selectedFriend);
    console.log("Bill:", bill);
    console.log("Payer:", payer);
    console.log("Your Expense:", yourExpense);
    console.log("Friend Expense:", friendExpense);

    if (!selectedFriend) return;
    if (!bill) return;

    let result = "";

    if (payer === "you") {
      result = `${selectedFriend.name} owes you $${friendExpense}`;
      setStatus("owed");
    } else if (payer === selectedFriend.name) {
      result = `You owe ${selectedFriend.name} $${yourExpense}`;
      setStatus("owing");
    } else {
      result = `You and ${selectedFriend.name} are even`;
      setStatus("even");
    }
    setSplitResult(result);

    setFriends((prevFriends) => {
      const updatedFriends = prevFriends.map((friend) =>
        friend.id === selectedFriend.id ? { ...friend, text: result } : friend
      );

      return updatedFriends;
    });
  };

  const handleReset = () => {
    setBill("");
    setYourExpense("");
    setFriendExpense("");
    setPayer("");
    setSplitResult("");
    setStatus("even");
    setFriends(
      friends.map((f) => ({
        ...f,
        text: `You and ${f.name} are even`,
      }))
    );
  };

  return (
    <>
      <h1 className="title">Eat-'N-Split App </h1>
      <div className="container">
        <div className="left-side">
          <FriendList
            friends={friends}
            handleSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
            splitResult={splitResult}
            status={status}
          />
          <AddForm
            addNewFriend={addNewFriend}
            defaultImgUrl="https://i.pravatar.cc/300"
          />
        </div>
        <div className="right-side">
          {selectedFriend && (
            <SplitForm
              selectedFriend={selectedFriend}
              bill={bill}
              setBill={setBill}
              yourExpense={yourExpense}
              setYourExpense={setYourExpense}
              friendExpense={friendExpense}
              setFriendExpense={setFriendExpense}
              payer={payer}
              setPayer={setPayer}
              handleFormSubmit={handleFormSubmit}
              handleReset={handleReset}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
