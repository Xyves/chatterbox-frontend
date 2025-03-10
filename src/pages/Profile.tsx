export default function Profile() {
  import { useState } from "react";
  const backendUrl = "http://127.0.0.1:4000/api";
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const token = localStorage.getItem("userToken");
    try {
      const response = await fetch(`${backendUrl}/user/me`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        Authorization: `Bearer ${token}`,
      });
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const data = await response.json();
      console.log("Backend response:", data);
      setUserData(data);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  };
  getUserData();
  return <div>Profile</div>;
}
