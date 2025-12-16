// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [isOn, setIsOn] = useState(false);

//   const toggle = () => setIsOn((s) => !s);

//   return (
//     <center>
//       <div className="container">
//         <h2>Elon Musk Mood</h2>

//         <img
//           src={
//             isOn
//               ? "https://mxp-media.ilnmedia.com/media/content/2018/Oct/elon-musk-asked-people-to-send-him-dank-memes-1400x653-1540559163.jpg"
//               : "https://www.entrepreneur.com/wp-content/uploads/sites/2/2018/08/20180817161246-GettyImages-974773028-edit.jpeg"
//           }
//           alt={isOn ? "Sad" : "Happy"}
//           className="image"
//           onClick={toggle}
//           style={{ cursor: "pointer", height: 600, maxWidth: 800 }}
//         />

//         <p>State: {isOn ? "Happy" : "Sad"}</p>
//       </div>
//     </center>
//   );
// }

// export default App;
//------------------------------------------------------------------------------------

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const isButtonDisabled =
//     username.length < 1 || password.length < 1 || isSubmitting;

//   const handleSubmission = async () => {
//     setIsSubmitting(true);

//     console.log("Submission started...");

//     await new Promise((resolve) => setTimeout(resolve, 3000));

//     console.log("Waited 3 seconds. Resetting form...");

//     setUsername("");
//     setPassword("");

//     setIsSubmitting(false);

//     alert("Form reset successfully after 3 seconds.");
//   };

//   return (
//     <>
//       <div>
//         <center>
//           <label htmlFor="username">User Name: </label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Mayank"
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//             disabled={isSubmitting}
//           ></input>

//           <br />
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="********"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             disabled={isSubmitting}
//           ></input>
//           <br />
//           <button
//             type="submit"
//             id="submit"
//             disabled={isButtonDisabled}
//             onClick={handleSubmission}
//           >
//             {isSubmitting ? "Processing..." : "Submit"}
//           </button>
//         </center>
//       </div>
//     </>
//   );
// }

// export default Login;

//---------------------------------------------------------------------------------------------------------
import React, { useEffect, useRef, useState } from "react";

// API Endpoint
// const API_URL = "https://jsonplaceholder.typicode.com/users";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Fetching data... waiting 5 seconds...");
//         await new Promise((resolve) => setTimeout(resolve, 5000));

//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();

//         setUsers(data);
//         setError(null);
//       } catch (e) {
//         setError("Failed to fetch data: " + e.message);
//         console.error("Fetch error: ", e);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDelete = (userId) => {
//     setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
//     console.log(`User with ID ${userId} deleted locally.`);
//   };

//   if (isLoading) {
//     return (
//       <div style={{ padding: "20px", textAlign: "center" }}>
//         <h2>Loading Data...</h2>
//         <p>Please wait 5 seconds for the data to load from the API.</p>

//         <div
//           style={{
//             border: "5px solid #f3f3f3",
//             borderTop: "5px solid #3498db",
//             borderRadius: "50%",
//             width: "40px",
//             height: "40px",
//             animation: "spin 2s linear infinite",
//             margin: "20px auto",
//           }}
//         ></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div style={{ color: "red", padding: "20px" }}>Error: {error}</div>;
//   }

//   if (users.length === 0) {
//     return <div style={{ padding: "20px" }}>No users found.</div>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>User Directory</h1>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>ID</th>
//             <th style={thStyle}>Name</th>
//             <th style={thStyle}>Username</th>
//             <th style={thStyle}>Email</th>
//             <th style={thStyle}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td style={tdStyle}>{user.id}</td>
//               <td style={tdStyle}>{user.name}</td>
//               <td style={tdStyle}>{user.username}</td>
//               <td style={tdStyle}>{user.email}</td>
//               <td style={tdStyle}>
//                 <button
//                   onClick={() => handleDelete(user.id)}
//                   style={deleteButtonStyle}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTab

function SimpleTimerCounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);

      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1);

      console.log("Timer Started");
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
      console.log("Timer Stopped");
    }
  };

  const handleReset = () => {
    handleStop();
    setCount(0);
    console.log("Timer Reset");
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        console.log("Component Unmounted - Interval Cleared");
      }
    };
  }, []);

  return (
    <div>
      <center>
        <h1>Simple Counter</h1>
        <h2>Count: {count}</h2>

        <div>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </center>
    </div>
  );
}

export default SimpleTimerCounter;
