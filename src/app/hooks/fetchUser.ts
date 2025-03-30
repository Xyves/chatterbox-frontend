const backendUrl = import.meta.env.VITE_BACKENDURL;

export const getUserData = async () => {
  const token = localStorage.getItem("userToken");
  try {
    const response = await fetch(`${backendUrl}/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
