//close tab

export default function closeTab(messageId, tabId) {
  const message = document.getElementById(messageId);
  const tab = document.getElementById(tabId);

  if (message.classList.contains("active")) {
    message.classList.remove("active");
    tab.classList.remove("active");
  }

  function change() {
    tab.classList.add("active");
    message.classList.add("active");
  }

  if (!message.classList.contains("active")) {
    tab.addEventListener("click", change);
  }
}
