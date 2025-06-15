import React, { useState } from 'react';

const JoinCreateRoom = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleJoinRoom = () => {
    console.log('Join Room:', { name, roomId });
  };

  const handleCreateRoom = () => {
    console.log('Create Room:', { name, roomId });
  };

  return (
    <div className="outer">
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          background: linear-gradient(135deg, #03142e, #165972);
          background-size: 400% 300%;
          animation: gradientShift 15s ease infinite;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .outer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          padding: 20px;
        }

        .box {
          background-color: rgba(20, 80, 121, 0.9);
          padding: 40px;
          border-radius: 16px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 20px;
          backdrop-filter: blur(12px);
        }

        .box label {
          font-size: 18px;
          margin-bottom: 6px;
          color: #f1f1f1;
        }

        .box input {
          width: 95%;
          padding: 14px 16px;
          font-size: 16px;
          border-radius: 10px;
          border: 1px solid #444;
          background-color: #1f2a38;
          color: #f5f5f5;
          transition: border 0.3s ease;
        }

        .box input:focus {
          border-color: #4fc3f7;
          outline: none;
        }

        .box input::placeholder {
          color: #aaa;
        }

        .buttons {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .buttons button {
          flex: 1;
          padding: 14px 0;
          font-size: 17px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          background: linear-gradient(to right, #34d399, #3b82f6);
          color: white;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .buttons button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 480px) {
          .box {
            padding: 30px 20px;
          }

          .buttons {
            flex-direction: column;
          }

          .buttons button {
            width: 100%;
          }
        }
      `}</style>

      <div className="box">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="roomId">Room ID / New Room ID</label>
        <input
          type="text"
          id="roomId"
          placeholder="Enter Room ID or New Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />

        <div className="buttons">
          <button onClick={handleJoinRoom}>Join Room</button>
          <button onClick={handleCreateRoom}>Create Room</button>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateRoom;
