import { getUsername, clearStorage } from "../utils/Storage";
import { confirm } from "react-confirm-box";
import Admin from "../Admin";

const username = getUsername();

export default function Logout() {
  function reload() {
    setTimeout(function () {
      window.location.reload(false);
    }, 3000);
  }

  const doLogout = confirm("Are you sure you want to logout?");
  console.log(doLogout);
  if (doLogout) {
    clearStorage();
    reload();
    console.log(doLogout, "Yes");
  } else {
    console.log(doLogout, "No");
  }
}
