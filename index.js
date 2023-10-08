// https://www.ebay.co.uk/fdbk/leave_feedback

/* Set feedback as positive */
(function() {
  const inputs = document.getElementsByTagName('input');
  Array.from(inputs).forEach(function(input) {
    if (input.value == 'POSITIVE') {
      input.click();
    }
    if (input.getAttribute('name') != undefined && input.getAttribute('name').includes('ON_TIME_DELIVERY') && input.value == 2) {
      input.click();
    }
    if (input.value == 5) {
      input.click();
    }
  });
})();

(function() {
  const reviews = [
    "🌟🌟🌟🌟🌟 Excellent seller! Fast shipping and item exactly as described 👌🏼 #SatisfiedCustomer",
    "🌟🌟🌟🌟🌟 A+ service! Delighted with the purchase, thank you! 😃 #TopNotchSeller",
    "🌟🌟🌟🌟🌟 Awesome experience! Highly recommended seller 👍🏼 #FiveStars",
    "🌟🌟🌟🌟🌟 Super quick delivery! Impressed with the quality 🎉 #GreatDeal",
    "🌟🌟🌟🌟🌟 Flawless transaction! Will buy from again 🛍️ #HappyCustomer",
    "🌟🌟🌟🌟🌟 Smooth as butter! Love the item 💖 #NoComplaints",
    "🌟🌟🌟🌟🌟 A breeze to deal with! Thanks for the prompt shipment 📦 #RecommendedSeller",
    "🌟🌟🌟🌟🌟 Exactly what I wanted! Thank you so much! 🙏🏼 #PerfectPurchase",
    "🌟🌟🌟🌟🌟 Couldn't be happier! Great product and fast delivery 🚚 #AwesomeSeller"
  ];

  function getRandomReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews[randomIndex];
  }

  function setRandomReviews() {
	const textareas = document.getElementsByClassName('textbox__control');
	Array.from(textareas).forEach(function(textarea) {
	  textarea.value = getRandomReview();
	  textarea.select();

	  // Create and dispatch input event
	  const inputEvent = new Event('input', { bubbles: true, cancelable: true });
	  textarea.dispatchEvent(inputEvent);

	  // Create and dispatch change event
	  const changeEvent = new Event('change', { bubbles: true, cancelable: true });
	  textarea.dispatchEvent(changeEvent);

	  // Create and dispatch keyup event
	  const keyupEvent = new Event('keyup', { bubbles: true, cancelable: true });
	  textarea.dispatchEvent(keyupEvent);

	  // Create and dispatch keydown event
	  const keydownEvent = new Event('keydown', { bubbles: true, cancelable: true });
	  textarea.dispatchEvent(keydownEvent);

	  // Custom events - you may need to add other specific events here
	});
  }

  function handleInputs() {
    const inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(function(input) {
      if (input.value == 'POSITIVE') {
        input.click();
      }
      if (input.getAttribute('name') != undefined && input.getAttribute('name').includes('ON_TIME_DELIVERY') && input.value == 2) {
        input.click();
      }
      if (input.value == 5) {
        input.click();
      }
    });
  }

  setTimeout(function() {
    setRandomReviews();
    console.log('setRandomReviews');
  }, 250);

  setTimeout(function() {
		handleInputs();
		const buttons = document.querySelectorAll('.btn.btn--primary');

		for (let index = 0; index < buttons.length; index++) {
			buttons[index].click();
		}
  }, 500);
})();
