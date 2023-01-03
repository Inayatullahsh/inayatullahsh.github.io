const quotes = [
  `The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela`,
  `The way to get started is to quit talking and begin doing. -Walt Disney`,
  `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs`,
  `If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt`,
  `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey`,
  `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`,
  `Life is what happens when you're busy making other plans. -John Lennon`,
]


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  //console.log(randomNumber);
  //document.getElementById('quoteWrapper').classList.remove('hidden');
  document.getElementById('quoteWrapper').style.visibility = "visible";
  document.getElementById('quote').innerHTML = quotes[randomNumber];
}


document.onreadystatechange = () => {

  //newQuote();
  if (document.readyState === "complete") {
    document.getElementById('loader').classList.add('hidden');
    //console.log("ready");
  }

  const navbar = document.getElementById("navbar");
  if (this.scrollY > 400) {
    navbar.classList.add("sticky-nav");
  }
  window.onscroll = (e) => {

    if (this.scrollY > 400) {
      navbar.classList.add("sticky-nav");
      //console.table(this.oldScroll, this.scrollY);
    } else {
      if (navbar.classList.contains("sticky-nav")) {
        navbar.classList.remove("sticky-nav");
      }
    }
    this.oldScroll = this.scrollY;
  }
  // TODO: make navbar show on scroll up and hide on scroll down.
  /*window.onscroll = (e) => {
    const navbar = document.getElementById("navbar");

    if (this.oldScroll > this.scrollY && this.scrollY > 0) {
      navbar.classList.add("sticky");
      //console.table(this.oldScroll, this.scrollY);
    } else {
      if (navbar.classList.contains("sticky")) {
        navbar.classList.remove("sticky");
      }
    }
    this.oldScroll = this.scrollY;
  }
*/

};
