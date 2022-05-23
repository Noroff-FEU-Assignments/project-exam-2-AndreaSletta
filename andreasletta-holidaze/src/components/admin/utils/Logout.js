import { clearStorage } from "../utils/Storage";
import { confirm } from "react-confirm-box";

export default async function Logout() {
  const doLogout = await confirm("Are you sure you want to logout?");
  if (doLogout) {
    clearStorage();
    window.location.reload(false);
  }
}
