import React, { useEffect, useState } from "react";
import { auth, db } from "./fireBase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react"; // Import emoji picker
import "./chatRoom.css";
import { IoSend } from "react-icons/io5";
import { data } from "./data";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import chatVid from "../../Assets/chatVid.mp4";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State to toggle emoji picker
  const navigate = useNavigate();
  const vid =
    "./";


  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const { uid, displayName } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: message,
      createdAt: new Date(),
      uid,
      displayName,
    });

    setMessage("");
  };

  const handleEmojiClick = (emojiData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji); // Append the emoji to the message
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

//   const handleSignOut = () => {
//     signOut(auth);
//     navigate("/signin");
//   };

  // console.log(auth?.currentUser?.displayName)

  const abbreviateToInitials = (fullName) => {
    // Check if fullName is null, undefined, or an empty string
    if (!fullName || fullName.trim() === "") {
      return ""; // Return an empty string or any default value
    }

    // Split the full name into parts
    const nameParts = fullName.trim().split(" ");

    // Extract initials and join them together
    const initials = nameParts.map((part) => part[0].toUpperCase()).join("");

    return initials;
  };

  const fakeData = data;

  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fakeData.length) {
      // Show the question first
      const questionTimeout = setTimeout(() => {
        setDisplayedMessages((prev) => [
          ...prev,
          { ...fakeData[currentIndex], showQuestion: true, showAnswer: false },
        ]);

        // After a short delay, show the answer
        const answerTimeout = setTimeout(() => {
          setDisplayedMessages((prev) =>
            prev.map((msg, idx) =>
              idx === currentIndex ? { ...msg, showAnswer: true } : msg
            )
          );
          setCurrentIndex((prev) => prev + 1); // Move to the next message
        }, Math.random() * 5000 + 2000); // Random delay up to 5s, minimum of 2s

        return () => clearTimeout(answerTimeout);
      }, Math.random() * 5000 + 2000); // Random delay up to 5s, minimum of 2s

      return () => clearTimeout(questionTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="chatRoomMain">
      <div className="chatVid">
        <video controls src={chatVid} className="vid" />
        <div className="logoVideoContainer">
         <img src="https://i.postimg.cc/nrBjKGwZ/pic1.png" alt="logo" className="logoVideo" onClick={() => navigate("/")}/>
        <p className="headerPtag">
          I have over 30 years of work experience, will this limit me from
          having a remote job
        </p> 
        </div>
        
        <div className="socialMedia">
          <div class="btn-group dropend ">
            <button type="button" class="btn btn-secondary dropdownBtn">
              Services Offered
            </button>
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle dropdown-toggle-split dropdownBtnToggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="visually-hidden">Toggle Dropright</span>
            </button>
            <ul class="dropdown-menu diff">
              <li onClick={() => navigate("/viewService")}>
                <a class="dropdown-item active" href="#">
                  CV REVAMP
                </a>
              </li>
              <li onClick={() => navigate("/viewLStudentPack")}>
                <a class="dropdown-item" href="#">
                  STUDENT PACKAGE REVAMP
                </a>
              </li>
              <li onClick={() => navigate("/viewLinkedIn")}>
                <a class="dropdown-item" href="#">
                  LINKEDIN OPTIMAISATION
                </a>
              </li>
              <li onClick={() => navigate("/viewCoachingSesh")}>
                <a class="dropdown-item" href="#">
                  COACHING SESSION
                </a>
              </li>
              <li onClick={() => navigate("/viewInterview")}>
                <a class="dropdown-item" href="#">
                  INTERVIEW PREP
                </a>
              </li>
              <li onClick={() => navigate("/consult")}>
                <a class="dropdown-item" href="#">
                  PICK MY BRAIN
                </a>
              </li>
              <li onClick={() => navigate("/remoteMasterCL")}>
                <a class="dropdown-item" href="#">
                  REMOTE WORK MASTER CLASS
                </a>
              </li>
              <li onClick={() => navigate("/viewIntroVideo")}>
                <a class="dropdown-item" href="#">
                  INTRODUCTORY VIDEO
                </a>
              </li>
              {/* <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li> */}
            </ul>
          </div>
          <div className="mainSocialMedia">
            {/* <FaYoutube  size={27} color="red" style={{cursor: "pointer"}}/>
            <RiInstagramFill size={23} color="" style={{cursor: "pointer"}}/>
            <FaTiktok size={23} color="black" style={{cursor: "pointer"}}/>
            <FaXTwitter size={23} style={{cursor: "pointer"}}/>
            <ImFacebook2 size={22} color="blue" style={{cursor: "pointer"}}/> */}
            <Link to="https://www.tiktok.com/@beyond.the.savannah" target="blank" className="footerSocialIcons">
              <FaTiktok size={23} color="black" style={{cursor: "pointer"}}/>
            </Link>
             <Link to="https://www.linkedin.com/in/otienolorraine/?originalSubdomain=ke" target="blank" className="footerSocialIcons">
              <FaLinkedin size={23} color="black" style={{cursor: "pointer"}}/>
            </Link>
             <Link to="https://www.instagram.com/lorraineotieno/?hl=en" target="blank" className="footerSocialIcons">
              <RiInstagramFill size={23} color="" style={{cursor: "pointer"}}/>
            </Link>
             <Link to="https://www.youtube.com/@beyondthesavannah" target="blank" className="footerSocialIcons">
              <FaYoutube  size={27} color="red" style={{cursor: "pointer"}}/>
            </Link>

            {/* 
            
            Link to="https://www.tiktok.com/@beyond.the.savannah" target="blank" className="footerSocialIcons">
              <FaTiktok size={23} color="black" style={{cursor: "pointer"}}/>
            </Link>
             <Link to="https://www.linkedin.com/in/otienolorraine/?originalSubdomain=ke" target="blank" className="footerSocialIcons">
              <FaLinkedin size={23} color="black" style={{cursor: "pointer"}}/>
            </Link>
             <Link to="https://www.instagram.com/lorraineotieno/?hl=en" target="blank" className="footerSocialIcons">
              <RiInstagramFill size={23} color="" style={{cursor: "pointer"}}/>
            </Link>
             <Link to="https://www.youtube.com/@beyondthesavannah" target="blank" className="footerSocialIcons">
              <FaYoutube  size={27} color="red" style={{cursor: "pointer"}}/>
            </Link>
            */}
          </div>
        </div>
      </div>
      <div className="chatArea">
        <div className="topChatAre">
          <p className="topChatArePtag">Frequently Asked Questions</p>
        </div>
        <div className="chat-window">
          {displayedMessages?.map((msg) => (
            <div key={msg.id} className="messageConatiner1">
              <p className="textSMS">
                {/* {
                  msg.displayName ? <em className="abbriviation" style={{color: "white"}}>{abbreviateToInitials(msg?.displayName)}</em> : null 
                } */}
                {/* <em style={{ color: "grey", marginRight: "10px", fontWeight: "500", fontSize: "12px" }}>
                 {msg?.name}
                </em>{" "} */}
                {/* {msg.text} */}
              </p>
              <div>
                <p className="question">
                  {msg.question} <em>by {msg.name}</em>
                </p>
                <p className="answer">
                  {msg.answer}. <em>Answer to question by {msg.name}</em>
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>

        {/* <form onSubmit={handleSendMessage} className="chartForm">
          <div className="inputArea">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Chat..."
            />
            <button type="button" onClick={toggleEmojiPicker} className="btnSendEmoji">
              😀
            </button>
            <button type="submit" className="btnSendEmoji">
              <IoSend size={18} color="grey"/>
            </button>
          </div>
          
          {showEmojiPicker && (
            <div className="emojiPicker">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </form> */}
      </div>
    </div>
  );
};

export default ChatRoom;

{
  /* <div className="chat-window">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${
                msg.uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <p className="textSMS">
                {
                  msg.displayName ? <em className="abbriviation" style={{color: "white"}}>{abbreviateToInitials(msg?.displayName)}</em> : null 
                }
                <em style={{ color: "grey", marginRight: "10px", fontWeight: "500", fontSize: "12px" }}>
                 {msg?.displayName}
                </em>{" "}
                {msg.text}
              </p>
            </div>
          ))}
        </div> 
        
        
         <Route path="/viewLinkedIn" element={<ViewLinkedIn/>} />
          <Route path="/viewInterview" element={<ViewInterview/>} />
          <Route path="/viewLStudentPack" element={<ViewStudentPack/>} />
          <Route path="/viewCoachingSesh" element={<ViewCoachingSesh/>} />
          <Route path="/consult" element={<Consultation/>} />
          <Route path="/remoteMasterCL" element={<RemoteMasterClass/>} />
          <Route path="/viewIntroVideo" element={<IntroVideoView/>} />
        
        
        
        */
}
