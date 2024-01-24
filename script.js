const links = document.querySelector(".header");
const btn = document.querySelector(".btn--mobile");
const iconlink = document.querySelector(".icon-links");
const input = document.querySelector(".input-type");
const fbtn = document.querySelector(".f-btn");
const fbtn1 = document.querySelector(".f-1");
const fbtn2 = document.querySelector(".f-2");
const fbtn3 = document.querySelector(".f-3");
const FOPtion = document.querySelector(".feature_option");
const Foption = document.querySelector(".feature_option--1");
const foption = document.querySelector(".feature_option--2");
const fOption = document.querySelector(".feature_option--3");

const email = document.querySelector(".input-type");
const Eicon = document.querySelector(".error-icon");
const error = document.querySelector(".email-error");
const button = document.querySelector(".sg-btn");

btn.addEventListener("click", function () {
  links.classList.toggle("nav-open");

  iconlink.style.display = " flex";
});
fbtn1.addEventListener("click", function () {
  Foption.classList.remove("hidden");
  fbtn1.style.borderBottom = "4px solid  hsl(0, 94%, 66%)";
  fbtn2.style.borderBottom = "none";
  fbtn3.style.borderBottom = "none";
  foption.classList.add("hidden");
  fOption.classList.add("hidden");
});
fbtn2.addEventListener("click", function () {
  Foption.classList.add("hidden");
  foption.classList.remove("hidden");
  fbtn1.style.borderBottom = "none";
  fbtn3.style.borderBottom = "none";
  fbtn2.style.borderBottom = "4px solid  hsl(0, 94%, 66%)";
  fOption.classList.add("hidden");
});
fbtn3.addEventListener("click", function () {
  fOption.classList.remove("hidden");
  fbtn1.style.borderBottom = "none";
  fbtn2.style.borderBottom = "none";
  fbtn3.style.borderBottom = "4px solid  hsl(0, 94%, 66%)";
  foption.classList.add("hidden");
  Foption.classList.add("hidden");
});

button.addEventListener("click", function () {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.innerHTML = "Whoops make sure,it's an email";
    email.style.border = "2px solid  hsl(0, 94%, 66%)";
    error.style.padding = "6px 26px";
    Eicon.classList.remove("hidden");
    return false;
  } else {
    error.innerHTML = " ";
    Eicon.classList.add("hidden");
    email.style.border = "5px solid green";
    return true;
  }
});

const arrowdown = document.querySelector(".icon-arrow");
const arrowup = document.querySelector(".icon-arrow-up");

function myfunction0() {
  let qn = document.querySelector(".qn-p0");
  if (qn.style.display === "none") {
    qn.style.display = "block";
    arrowdown.style.display = "none";
    arrowup.style.display = "block";
  } else {
    qn.style.display = "none";
    arrowdown.style.display = "block";
    arrowup.style.display = "none";
  }
}
const arrowdown1 = document.querySelector(".icon-arrow1");
const arrowup1 = document.querySelector(".icon-arrow-up1");
function myfunction1() {
  let qn = document.querySelector(".qn-p1");
  if (qn.style.display === "none") {
    qn.style.display = "block";
    arrowdown1.style.display = "none";
    arrowup1.style.display = "block";
  } else {
    qn.style.display = "none";
    arrowdown1.style.display = "block";
    arrowup1.style.display = "none";
  }
}

const arrowdown2 = document.querySelector(".icon-arrow2");
const arrowup2 = document.querySelector(".icon-arrow-up2");

function myfunction2() {
  let qn = document.querySelector(".qn-p2");
  if (qn.style.display === "none") {
    qn.style.display = "block";
    arrowdown2.style.display = "none";
    arrowup2.style.display = "block";
  } else {
    qn.style.display = "none";
    arrowdown2.style.display = "block";
    arrowup2.style.display = "none";
  }
}

const arrowdown3 = document.querySelector(".icon-arrow3");
const arrowup3 = document.querySelector(".icon-arrow-up3");

function myfunction3() {
  let qn = document.querySelector(".qn-p3");
  if (qn.style.display === "none") {
    qn.style.display = "block";
    arrowdown3.style.display = "none";
    arrowup3.style.display = "block";
  } else {
    qn.style.display = "none";
    arrowdown3.style.display = "block";
    arrowup3.style.display = "none";
  }
}
