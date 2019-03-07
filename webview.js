module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
          const element = document.querySelector('[class="unread-count"]');
          if(element) count = parseInt(element.innerText, 10);
    // set Franz badge
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};