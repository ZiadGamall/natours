import axios from "axios";
import { showAlert } from "./alerts";

export const signup = async (userData) => {
  try {
    const res = await axios.post("/api/v1/users/signup", userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Account created successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
