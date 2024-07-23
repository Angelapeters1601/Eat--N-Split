function SplitForm({
  selectedFriend,
  bill,
  setBill,
  yourExpense,
  setYourExpense,
  friendExpense,
  setFriendExpense,
  payer,
  setPayer,
  handleFormSubmit,
  handleReset,
}) {
  const handleBill = (e) => {
    const inputValue = e.target.value;
    if (inputValue > 0) {
      setBill(inputValue);
    }
  };
  const handleExpenseChange = (e) => {
    const value = Number(e.target.value);
    if (value <= bill) {
      setYourExpense(value);
      setFriendExpense(bill - value);
    }
  };

  const handlePayerChange = (e) => {
    setPayer(e.target.value);
  };

  return (
    <div className="split-form">
      <h2>{`Split bill with ${selectedFriend.name}`} </h2>

      <form onSubmit={handleFormSubmit}>
        <label className="label" htmlFor="bill">
          💲Bill value:
        </label>
        <input type="number" value={bill} onChange={handleBill} />

        <label className="label" htmlFor="yourBill">
          💁‍♂️Your expense:
        </label>
        <input
          type="number"
          value={yourExpense}
          onChange={handleExpenseChange}
        />

        <label className="label" htmlFor="friendsBill">
          👩🏻‍🤝‍🧑🏿 {selectedFriend.name}'s expense:
        </label>
        <input type="number" value={friendExpense} readOnly />

        <label className="label" htmlFor="payment">
          🤑Who is paying the bill ?
        </label>
        <select className="select" value={payer} onChange={handlePayerChange}>
          <option value="">Select payer</option>
          <option value="you"> 💁‍♂️ You</option>
          <option value={selectedFriend.name}>
            👩🏻‍🤝‍🧑🏿 {selectedFriend.name}
          </option>
        </select>

        <button type="submit">Split bill</button>

        <button
          type="button"
          onClick={handleReset}
          style={{ marginLeft: "20px" }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default SplitForm;
