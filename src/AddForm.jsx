import React, { useState } from "react";
import AddButton from "./AddButton";

function AddForm({ defaultImgUrl, addNewFriend }) {
  const [openAddForm, setOpenAddForm] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState(defaultImgUrl);

  const handleOpenAddForm = () => {
    setOpenAddForm(!openAddForm);
  };

  const handleSubmit = (e) => {
    if (!friendName) return;
    e.preventDefault();
    addNewFriend(friendName, friendImage);
    setFriendName("");
    setFriendImage(defaultImgUrl);
  };

  return (
    <div className="add-form">
      {!openAddForm && <AddButton handleOpenAddForm={handleOpenAddForm} />}
      {openAddForm && (
        <>
          <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="name">
              Friend's name:
            </label>
            <input
              type="text"
              placeholder="friend name.."
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
            />
            <label className="label" htmlFor="name">
              Image url:
            </label>
            <input
              type="text"
              placeholder="Add an image.."
              value={defaultImgUrl}
              onChange={(e) => setFriendImage(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          <button onClick={handleOpenAddForm}>close</button>
        </>
      )}
    </div>
  );
}

export default AddForm;
