import { dbService, storageService } from "../fbase";
import { useState, useEffect } from "react";
import Nweet from "components/Nweet";
import { v4 as uuidv4 } from "uuid";

const Home = ({userObj}) => {
  // console.log(userObj);
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState(""); 

  // const getNweets = async () => {
  //   const dbNweets = await dbService.collection("nweets").get();
  //   // console.log(dbNweets);
  //   dbNweets.forEach((document)=>{
  //   const nweetObject = {...document.data(), id: document.id};
  //   setNweets((prev)=>[nweetObject, ...prev])
  // });
  // };

  useEffect(()=>{
    // getNweets();
    dbService.collection("nweets").onSnapshot((snapshot)=>{
      const newArray = snapshot.docs.map((document)=>({
        id: document.id,
        ...document.data(),
      }));
      setNweets(newArray);
    });
  }, []);

  const onSubmit = async(event) => {
    event.preventDefault();
    // await dbService.collection("nweets").add({
    //   text: nweet,
    //   createdAt: Date.now(),
    //   creatorId: userObj.uid,
    // });
    // setNweet("");
    const attachmentRef = storageService
      .ref()
      .child(`${userObj.uid}/${uuidv4()}`);
    const response = await attachmentRef.putString(attachment, "data_url");
    const attachmentUrl = await response.ref.getDownloadURL();
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    });
    setNweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    event.preventDefault();
    const {
      target: {value},
    } = event;
    setNweet(value);
  };

  const onFileChange = (event) => {
    // console.log(event.target.files);
    const {
      target : {files},
    } = event;
    const theFile = files[0]; // eslint-disable-line no-unused-vars
    const reader = new FileReader();
    reader.onload = (finishedEvent) => {
      const {
        currentTarget: {result},
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment("");

  return (
    <>
    <form onSubmit={onSubmit}>
      <input
        value={nweet}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment &&  (
        <div>
        <img src={attachment} width="50px" height="50px" alt="alt" />
        <button onClick={onClearAttachment}>Clear</button>
        </div>
        )}
    </form>
    <div>
      {nweets.map((nweet)=>(
        // <div key={nweet.id}>
        //   <h4>{nweet.text}</h4>
        //   </div>
        <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId===userObj.uid} />
      ))}
    </div>
    </>
  );
};

export default Home;