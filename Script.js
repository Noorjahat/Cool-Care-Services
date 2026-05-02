
// 🔐 Password protection
let pass = prompt("Enter Password");

if(pass !== "Afreen"){
  document.body.innerHTML = "<h2>Access Denied</h2>";
}

// 🧾 Auto Bill Number
document.getElementById("billNo").innerText =
  "INV" + Math.floor(1000 + Math.random()*9000);

// 📅 Auto Date
document.getElementById("billDate").innerText =
  new Date().toLocaleDateString();


// 💰 Auto total (manual amount)
document.getElementById("amount").addEventListener("input", () => {
  document.getElementById("total").innerText =
    document.getElementById("amount").value || 0;
});


// 🖨️ Print Bill Function (Manual Billing)
function printBill(){

  // Step 1: inputs lena
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let work = document.getElementById("work").value;
  let amount = document.getElementById("amount").value;

  // Step 2: validation
  if(!name || !mobile || !amount){
    alert("Fill all details");
    return;
  }

  // Step 3: invoice fill karna
  document.getElementById("pName").innerText = name;
  document.getElementById("pMobile").innerText = mobile;

  document.getElementById("pServices").innerHTML =
    `<p>${work || "Service"} - ₹${amount}</p>`;

  document.getElementById("pTotal").innerText = amount;

  // Step 4: invoice show
  document.getElementById("invoice").style.display = "block";

  // Step 5: print
  window.print();

  // Step 6: hide again
  document.getElementById("invoice").style.display = "none";
}
