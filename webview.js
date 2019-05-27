module.exports = (Franz) => {
  const getMessages = () =>  {
    let count = 0;
    const element = document.querySelector('[class="unread-toggle"]');
    if (element) {
      if (element.innerText.match(/\d+/g)) {
        count = parseInt(element.innerText.match(/\d+/g), 10);
      }
    }
    // set Franz badge
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
