////======================================
window.localStorage.getItem("body");
if (window.localStorage.getItem("body")) {
  // localStorage.clear();
  document.body.innerHTML = window.localStorage.getItem("body");
}
////======================================

//---------------------------------------Menue
let menue = document.querySelector("#menue");
let navul = document.querySelector("nav ul");
menue.addEventListener("click", function () {
  navul.classList.toggle("display");
});
//hide menue
let hid = document.querySelector("nav i");
document.addEventListener("click", function (e) {
  if (e.target != hid) {
    if (navul.className == "display") {
      navul.classList.toggle("display");
    }
  }
});
///////////////////==================================
let linkToHome = document.querySelector(".linkToHome");
let home = document.querySelector(".home");
let linkToSend = document.querySelector(".linkToSend");
let sendmoney = document.querySelector(".sendmoney");
let sendmoneypage = document.querySelector(".sendmoneypage");
let linkToCustomers = document.querySelector(".linkToCustomers");
let linkToAllCustomers = document.querySelector(".linkToAllCustomers");
let viewAllCustomers = document.querySelector(".viewAllCustomers");
let linkToTransactions = document.querySelector(".linkToTransactions");
let transactions = document.querySelector(".transactions");
let linkTocontactus = document.querySelector(".linkTocontactus");
let contactuspage = document.querySelector(".contactuspage");
let linkToaboutus = document.querySelector(".linkToaboutus");
let aboutus = document.querySelector(".aboutus");
// let linkToaboutus = document.querySelector(".linkToaboutus");
let sendInTable = document.querySelectorAll("table tr td a");
let checkbal = document.querySelector(".getcheckBalance ");
let link1getcheckBalance = document.querySelector(".link1getcheckBalance ");
let link2getcheckBalance = document.querySelector(".link2getcheckBalance ");

// console.log(sendInTable);
linkToaboutus.addEventListener("click", function () {
  contactuspage.classList.remove("visibile");
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
  aboutus.classList.add("visibile");
  //////=========================

  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
linkTocontactus.addEventListener("click", function () {
  contactuspage.classList.add("visibile");
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  aboutus.classList.remove("visibile");
  checkbal.classList.remove("visibile");
  //////=========================

  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
// console.log(sendInTable);
link1getcheckBalance.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.add("visibile");
  aboutus.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================

  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
link2getcheckBalance.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.add("visibile");
  aboutus.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================
  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});

linkToHome.addEventListener("click", function () {
  home.classList.add("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
  aboutus.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================
  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
linkToSend.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.add("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
  aboutus.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================
  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
sendmoney.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.add("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
  aboutus.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================
  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
linkToCustomers.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.add("visibile");
  transactions.classList.remove("visibile");
  aboutus.classList.remove("visibile");
  checkbal.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================

  //////=========================
  //////=========================
  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
linkToAllCustomers.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.add("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
  aboutus.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================
  //////=========================

  //////=========================
  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
linkToTransactions.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.add("visibile");
  checkbal.classList.remove("visibile");
  aboutus.classList.remove("visibile");
  contactuspage.classList.remove("visibile");
  //////=========================
  //////=========================

  //////=========================
  //////=========================
  let body = document.body.innerHTML; //
  console.log(body);
  window.localStorage.setItem("body", body); //
  window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
sendInTable.forEach(function (e) {
  e.addEventListener("click", function () {
    checkbal.classList.remove("visibile");
    home.classList.remove("visibile");
    sendmoneypage.classList.add("visibile");
    viewAllCustomers.classList.remove("visibile");
    aboutus.classList.remove("visibile");
    transactions.classList.remove("visibile");
    contactuspage.classList.remove("visibile");
    //////=========================

    //////=========================
    let chaild = e.parentElement;
    let parent = chaild.parentElement;
    // console.log(parent.children[2].textContent);
    sendersAccountNumber.value = parent.children[2].textContent;
    //////=========================
    //////=========================
    let body = document.body.innerHTML; //
    console.log(body);
    window.localStorage.setItem("body", body); //
    window.localStorage.getItem("body"); //
    //////=========================
    //////=========================
  });
});
///////////////////==============================
let mina = document.querySelector(".mina");
let btnTransfer = document.querySelector(".btnTransfer");
let sendersAccountNumber = document.querySelector(`.sendersAccountNumber`);
let recieversAccountNumber = document.querySelector(".recieversAccountNumber");
let amount = document.querySelector(".amountToTransfer");
let balancemina = document.querySelector(".balancemina");
let transaction = document.querySelector(".transactions tbody");

// console.log(
//   (transaction.innerHTML = ` <tr>
// <td>${sendersAccountNumber.value}</td>
// <td>${recieversAccountNumber.value}</td>
// <td>${amount.value}</td>
// <td>succes</td>
// </tr>`)
// );

// console.log(sendersAccountNumber.value);

// mina.textContent = parseInt(mina.textContent) + 2;
// console.log(parseInt(mina.textContent) + 2);
// console.log(btnTransfer);
// console.log(sendersAccountNumber.value);
// btnTransfer.addEventListener("click", function () {
//   // console.log(amount.value);
//   // if (sendersAccountNumber.value == "162020655") {
//   //   balancemina.textContent = parseInt(balancemina.textContent - amount.value);
//   // }
//   let balance = document.querySelector(`num${sendersAccountNumber.value}`);
//   console.log(balance);
// });
btnTransfer.addEventListener("click", function () {
  let balsender = document.querySelector(`.balan${sendersAccountNumber.value}`);
  let balreciever = document.querySelector(
    `.balan${recieversAccountNumber.value}`
  );
  let amount = document.querySelector(".amountToTransfer");

  console.log(balsender.textContent);
  console.log(balreciever.textContent);
  if (
    parseInt(balsender.textContent) >= parseInt(amount.value) &&
    eval(amount.value * 1) > 0 &&
    sendersAccountNumber.value != recieversAccountNumber.value
  ) {
    balsender.textContent = parseInt(balsender.textContent - amount.value);
    balreciever.textContent =
      parseInt(balreciever.textContent) + parseInt(amount.value);

    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color:  green ;">succeed</td>
    </tr>`;
    sendersAccountNumber.value = "";
    recieversAccountNumber.value = "";
    amount.value = "";
    //////=========================
    //////=========================
    let body = document.body.innerHTML; //
    console.log(body);
    window.localStorage.setItem("body", body); //
    window.localStorage.getItem("body"); //
    //////=========================
    //////=========================
  } else if (sendersAccountNumber.value == recieversAccountNumber.value) {
    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color: red ;">Failed</td>
    </tr>`;
    alert("You try to send to the same account !");
    //////=========================
    //////=========================
    let body = document.body.innerHTML; //
    console.log(body);
    window.localStorage.setItem("body", body); //
    window.localStorage.getItem("body"); //
    //////=========================
    //////=========================
  } else if (eval(amount.value * 1) <= 0) {
    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color: red ;">Failed</td>
    </tr>`;
    alert("Enter Avalid Balance");
    //////=========================
    //////=========================
    let body = document.body.innerHTML; //
    console.log(body);
    window.localStorage.setItem("body", body); //
    window.localStorage.getItem("body"); //
    //////=========================
    //////=========================
  } else {
    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color: red  ;">Failed</td>
    </tr>`;
    alert("Not Sufficient Balance in Account !");
    //////=========================
    //////=========================
    let body = document.body.innerHTML; //
    console.log(body);
    window.localStorage.setItem("body", body); //
    window.localStorage.getItem("body"); //
    //////=========================
    //////=========================
  }
});
//////////////////============================
let check = document.querySelector(".getcheckBalance .accountNumber");
let paragraphInCheck = document.querySelector(".getcheckBalance p");
let submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  console.log(check.value);
  let userbalance = document.querySelector(`.balan${check.value}`);
  console.log(userbalance.textContent);
  paragraphInCheck.textContent = `Account Balance is ${userbalance.textContent}$`;
  //////=========================
  //////=========================
  // let body = document.body.innerHTML; //
  // console.log(body);
  // window.localStorage.setItem("body", body); //
  // window.localStorage.getItem("body"); //
  //////=========================
  //////=========================
});
// //////=========================
// //////=========================
// let body = document.body.innerHTML;
// console.log(body);
// window.localStorage.setItem("body", body);
// window.localStorage.getItem("body");
// //////=========================
// //////=========================
////////**start to make the form in contact us send to my gmail */

let form = document.querySelectorAll("form");
console.log(form[2]);
console.log(document.getElementById("message"));

form[2].onsubmit = function (e) {
  e.preventDefault();
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_j5ijgxa", "template_3spqeqv", params)
    .then(function (res) {
      alert("Your message sent successfully");
    });
};
////////**end to make the form in contact us send to my gmail */
