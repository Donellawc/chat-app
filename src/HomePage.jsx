import React, {useState} from "react";

function HomePage(){
    
    const [username, setUsername] = useState("");
    const [roomID, setRoomID] = useState("");
    const navigate = useNavigate();





  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="roomID">Room ID</label>
        <input
          id="roomID"
          value={roomID}
          type="text"
          onChange={(e) => setRoomID(e.target.value)}
        />
      </div>
      <button onClick={()=>{
        if(roomID && username){ 
            navigate (`/chat/${roomID}`);    
        }
      }}
      >
        Join Chat Room
        </button>
    </div>
  );
}
  

export default HomePage;