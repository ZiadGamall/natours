import axios from "axios";
import { showAlert } from "./alerts";

export const signup = async (userData) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${window.location.origin}/api/v1/users/signup`,
      data: userData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("RESPONSE RECEIVED:", res.data);
    console.log("STATUS FIELD:", res.data.status);

    if (res.data.status === "success") {
      showAlert("success", "Account created successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    } else {
      console.log("SUCCESS BLOCK DID NOT TRIGGER");
    }
  } catch (err) {
    console.log("AXIOS ERROR:", err);
    showAlert("error", err.response.data.message);
  }
};
