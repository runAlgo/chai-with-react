// import { useState } from "react";

import { useEffect, useState } from "react";

// const FormValid = () => {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     setValues((prevValues) => {
//       return { ...prevValues, [e.target.name]: e.target.value };
//     });
//   };

//   return (
//     <div className="">
//       <form className="items-center text-center m-11">
//         <input
//           value={values.firstName}
//           className="border-blue-400 rounded border-2 my-2 focus:border-blue-400 is"
//           onChange={handleChange}
//           name="firstName"
//           placeholder="First Name"
//         />
//         <br />
//         <input
//           value={values.lastName}
//           className="border-blue-400 rounded border-2 my-2 focus:border-blue-400"
//           onChange={handleChange}
//           name="lastName"
//           placeholder="Last Name"
//         />
//         <br />
//         <input
//           value={values.email}
//           className="border-blue-400 rounded border-2 my-2 focus:border-blue-400"
//           onChange={handleChange}
//           name="email"
//           placeholder="Email"
//         />
//         <br />
//         <button className="bg-blue-400 rounded px-2" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormValid;

// ##### useEffect hook #####

// let didInit = false;

// const Update = () => {
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     if(!didInit) {
//     console.log("set")
//     setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000);
//     didInit = true
//     }
//   }, []);

//   return <div className="items-center text-center">Timer: {timer}</div>;
// };

// export default Update;


const TimerCounter = ({ seconds, setSeconds }) => {
  
  useEffect(() => {
     const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        console.log("Counting...");
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  return <div>{seconds} seconds have passed since mounting.</div>;
};

function Timer() {
  const [seconds, setSeconds] = useState(0);

  return seconds < 5 ? (
    <TimerCounter seconds={seconds} setSeconds={setSeconds} />
  ) : (
    "Not rendering"
  );
}

export default Timer;
