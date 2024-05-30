// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData()
  //   const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/runAlgo")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl rounded-3xl">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} className="rounded-3xl"/>
    </div>
  );
};

export default Github;

export const githubInfoloder = async () => {
  const response = await fetch('https://api.github.com/users/runAlgo')
  return response.json();
}
