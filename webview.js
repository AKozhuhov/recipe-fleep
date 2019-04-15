module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
    const element = document.querySelector('[class="unread-toggle"]').innerText.match(/\d+/g);
    if (element) count = parseInt(element, 10);
    // set Franz badge
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};