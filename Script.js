// Auto Bill Number
document.getElementById("billNo").innerText =
  "INV" + Math.floor(1000 + Math.random()*9000);

// Auto Date
document.getElementById("billDate").innerText =
  new Date().toLocaleDateString();

// Calculate total when checkbox changes
document.querySelectorAll("input[type=checkbox]").forEach(cb => {
  cb.addEventListener("change", calc);
});

document.getElementById("other").addEventListener("input", calc);

// Function to calculate total
function calc(){
  let total = 0;

  document.querySelectorAll("input[type=checkbox]:checked")
    .forEach(cb => total += parseInt(cb.value));

  let other = document.getElementById("other").value;
  if(other) total += parseInt(other);

  document.getElementById("total").innerText = total;
}

// Print function (SAFE METHOD - NO BLANK ISSUE)
// Print Bill Function (FINAL)
function printBill(){

  // Step 1: input lena
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;

  // Step 2: validation
  if(!name || !mobile){
    alert("Fill details first");
    return;
  }

  // Step 3: data invoice me fill karna
  document.getElementById("pName").innerText = name;
  document.getElementById("pMobile").innerText = mobile;

  let servicesHTML = "";

  document.querySelectorAll("input[type=checkbox]:checked")
    .forEach(cb => {
      servicesHTML += `<p>${cb.dataset.name} - ₹${cb.value}</p>`;
    });

  let other = document.getElementById("other").value;
  let desc = document.getElementById("desc").value;

  if(other){
    servicesHTML += `<p>${desc || "Other"} - ₹${other}</p>`;
  }

  document.getElementById("pServices").innerHTML = servicesHTML;

  document.getElementById("pTotal").innerText =
    document.getElementById("total").innerText;

  // Step 4: invoice show karna
  document.getElementById("invoice").style.display = "block";

  // Step 5: print
  window.print();

  // Step 6: wapas hide
  document.getElementById("invoice").style.display = "none";
}