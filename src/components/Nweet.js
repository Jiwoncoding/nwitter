const Nweet = ({ nweetObj, isOwner }) => {
  const onDeleteClick = () => {
    const ok = window.confirm("삭제?");
    console.log(ok);
  }

  return (
    <div>
      <h4>{nweetObj.text}</h4>
      {isOwner && (
        <>
        <button onClick={onDeleteClick}>Delete Nweet</button>
        <button>Edit Nweet</button>
        </>
      )}
    </div>
  );
};

export default Nweet;