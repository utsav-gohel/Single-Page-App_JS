const AboutUs = document.getElementById("abtus");
AboutUs.style.fontSize = "24px";

const body = (document.body.style.backgroundColor = "#fff");

let btn1 = document.getElementById("btn1");
btn1.style.display = "block";
btn1.style.textAlign = "center";
btn1.style.background = "red";
btn1.style.borderRadius = "3px";
btn1.style.color = "#fff";
btn1.style.width = "180px";
btn1.style.height = "50px";
btn1.style.fontSize = "20px";
btn1.style.lineHeight = "50px";
btn1.style.margin = "0 auto";

btn1.addEventListener("mouseover", () => {
  btn1.style.background = "#444";
});
btn1.addEventListener("mouseleave", () => {
  btn1.style.background = "red";
});

let sprtsheading = document.getElementById("sprtsheading");
sprtsheading.addEventListener("mouseover", () => {
  sprtsheading.style.background = "cyan";
});
sprtsheading.addEventListener("mouseleave", () => {
  sprtsheading.style.background = "";
});

let service = document.getElementById("service");
service.addEventListener("mouseover", () => {
  service.style.background = "#daa520";
});
service.addEventListener("mouseleave", () => {
  service.style.background = "";
});

let sec1 = document.getElementById("sec-1");
sec1.addEventListener("mouseover", () => {
  sec1.style.color = "#c71585";
});
sec1.addEventListener("mouseleave", () => {
  sec1.style.color = "";
});

let sec2 = document.getElementById("sec-2");
sec2.addEventListener("mouseover", () => {
  sec2.style.color = "#ffa07a";
});
sec2.addEventListener("mouseleave", () => {
  sec2.style.color = "";
});
let sec3 = document.getElementById("sec-3");
sec3.addEventListener("mouseover", () => {
  sec3.style.color = "#00ced1";
});
sec3.addEventListener("mouseleave", () => {
  sec2.style.color = "";
});

let dravidQuote = document.getElementById("dravidQuote");
dravidQuote.addEventListener("mouseover", () => {
  dravidQuote.style.color = "red";
});
dravidQuote.addEventListener("mouseleave", () => {
  dravidQuote.style.color = "";
});

let sachinQuote = document.getElementById("sachinQuote");
sachinQuote.addEventListener("mouseover", () => {
  sachinQuote.style.color = "#1e90ff";
});
sachinQuote.addEventListener("mouseleave", () => {
  sachinQuote.style.color = "";
});

viratQuote = document.getElementById("viratQuote");
viratQuote.addEventListener("mouseover", () => {
  viratQuote.style.color = "green";
});
viratQuote.addEventListener("mouseleave", () => {
  viratQuote.style.color = "";
});

let popimg = document.getElementById("popimg");
popimg.addEventListener("mouseover", () => {
  popimg.style.background = "#00FFFF";
});
popimg.addEventListener("mouseleave", () => {
  popimg.style.background = "";
});

let abt = document.getElementById("abt");
abt.addEventListener("mouseover", () => {
  abt.style.background = "#00FFFF";
});
abt.addEventListener("mouseleave", () => {
  abt.style.background = "";
});

let abtus = document.getElementById("abtus");
abtus.addEventListener("mouseover", () => {
  abtus.style.background = "cyan";
  abtus.style.color = "red";
});
abtus.addEventListener("mouseleave", () => {
  abtus.style.color = "";
  abtus.style.background = "";
});

let section1 = document.getElementById("homebtn");
section1.addEventListener("click", () => {
  // document.body.scrollTop;
  //   debugger;
  window.scrollTo(0, 0);
});
