import FriendItem from "./FriendItem";

function FriendList({
  friends,
  selectedFriend,
  handleSelectedFriend,
  splitResult,
  status,
}) {
  return (
    <>
      <div className=" friend-list">
        {friends.map((friend) => (
          <FriendItem
            key={friend.id}
            name={friend.name}
            text={selectedFriend === friend.id ? splitResult : friend.text}
            imgSrc={friend.imgSrc}
            friend={friend}
            handleSelectedFriend={handleSelectedFriend}
            isSelected={selectedFriend === friend}
            status={selectedFriend.id === friend.id && status}
          />
        ))}
      </div>
    </>
  );
}

export default FriendList;
