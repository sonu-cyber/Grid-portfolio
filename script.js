//Define Portfolio urls
const proj_url1 = "https://simple-port-folio.netlify.app";
const proj_url2 = "https://trillo-proj.netlify.app";
const proj_url3 = "https://project-start.netlify.app";
const proj_url4 = "https://fmnet.netlify.app";
const proj_url5 = "https://grid-gard.netlify.app";
const proj_url6 = "https://redditapp-proj.netlify.app";
const proj_url7 = "https://nasa-apod-proj.netlify.app";
const proj_url8 = "https://questioner-app.netlify.app";
const proj_url9 = "https://cryptonator-api-proj.netlify.app";
const proj_url10 = "https://weather-api-proj.netlify.app";

//Define const for querySelectors
const proj1 = document.querySelector(".project1");
const proj2 = document.querySelector(".project2");
const proj3 = document.querySelector(".project3");
const proj4 = document.querySelector(".project4");
const proj5 = document.querySelector(".project5");
const proj6 = document.querySelector(".project6");
const proj7 = document.querySelector(".project7");
const proj8 = document.querySelector(".project8");
const proj9 = document.querySelector(".project9");
const proj10 = document.querySelector(".project10");

function fb_link_id() {
  const faceBook = document.querySelector(".fb");
  faceBook.href = "https://www.facebook.com";
  window.open(faceBook.href);
  //this.document.location.href = faceBook.href;
  console.log("faceBook.href", faceBook.href);
}

function git_hub_link() {
  const git_Hub = document.querySelector(".git_hub");
  git_Hub.src = "https://www.github.com/sonu-cyber/";
  window.open(git_Hub.src);
  console.log("git_Hub.src", git_Hub.src);
}
function linked_in_link() {
  const linked_In = document.querySelector(".linked_in");
  linked_In.src = "https://www.linkedin.com/in/gayathriraghuram/";
  window.open(linked_In.src);
}

const insta_Gram = document.querySelector(".insta_gram");
insta_Gram.href = "https://www.instagram.com";
function insta_Gram_link() {
  const insta_Gram = document.querySelector(".insta_gram");
  insta_Gram.src = "https://www.instagram.com";
  window.open(insta_Gram.src);
  console.log("insta_Gram.src", insta_Gram.src);
}

//Call the project functions
function project1() {
  proj1.src = proj_url1;
  console.log("proj1.src", proj1.src);
  window.open(proj1.src);
}
function project2() {
  proj2.src = proj_url2;
  console.log("proj2.src", proj2.src);
  window.open(proj2.src);
}
function project3() {
  proj3.src = proj_url3;
  console.log("proj3.src", proj3.src);
  window.open(proj3.src);
}
function project4() {
  proj4.src = proj_url4;
  console.log("proj4.src", proj4.src);
  window.open(proj4.src);
}
function project5() {
  proj5.src = proj_url5;
  console.log("proj5.src", proj5.src);
  window.open(proj5.src);
}
function project6() {
  proj6.src = proj_url6;
  console.log("proj6.src", proj6.src);
  window.open(proj6.src);
}
function project7() {
  proj7.src = proj_url7;
  console.log("proj7.src", proj7.src);
  window.open(proj7.src);
}
function project8() {
  proj8.src = proj_url8;
  console.log("proj8.src", proj8.src);
  window.open(proj8.src);
}
function project9() {
  proj9.src = proj_url9;
  console.log("proj9.src", proj9.src);
  window.open(proj9.src);
}
function project10() {
  proj10.src = proj_url10;
  console.log("proj10.src", proj10.src);
  window.open(proj10.src);
}
