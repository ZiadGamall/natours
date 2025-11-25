import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51SWVIbK55reZt4bMk3k5qoRJnPwFu4uQTax4fsABXNuFeGgTKIW5MoWBDVbDtBPV0FTjEKoubtU1rWrcBF4GgoM200vMHEQ590",
);

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  try {
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`,
    );
    // 2) Create checkoutform + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
