import { getUsername, clearStorage } from "../utils/Storage";
import { confirm } from "react-confirm-box";
import Admin from "../Admin";

const username = getUsername();

export default function Logout() {
  if (username) {
    const doLogout = confirm("Are you sure you want to logout?");
    if (doLogout) {
      clearStorage();
      //  location.href = "/admin";
      Admin();
    }
  }
}
