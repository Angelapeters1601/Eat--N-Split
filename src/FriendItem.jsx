function FriendItem({
  name,
  text,
  imgSrc,
  friend,
  handleSelectedFriend,
  isSelected,
  status,
}) {
  const getTextColor = (status) => {
    if (status === "owing") return "green";
    if (status === "owed") return "red";
    return "black";
  };
  const textColor = status ? getTextColor(status) : "black";

  return (
    <>
      <div className="friend-item">
        <img src={imgSrc} />
        <h3>{name}</h3>
        <p style={{ color: textColor }}>{text}</p>
        <button onClick={() => handleSelectedFriend(friend)}>
          {!isSelected ? "select" : "close"}
        </button>
      </div>
    </>
  );
}

export default FriendItem;
