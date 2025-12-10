import axios from "axios";
import { showAlert } from "./alerts";

export const signup = async (data) => {
  try {
    console.log(data);
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data,
    });

    console.log(res);
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
