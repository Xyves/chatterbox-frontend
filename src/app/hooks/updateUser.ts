import { UserData } from "../../types";

const backendUrl = import.meta.env.VITE_BACKENDURL;

export const updateUser = async ({ email, bio, avatar_url, id }: UserData) => {
  const token = localStorage.getItem("userToken");

  try {
    const response = await fetch(`${backendUrl}/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, bio, avatar_url, id }),
    });
    if (!response.ok) {
      throw new Error("Failed to post comment");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
};
