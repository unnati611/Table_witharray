let studentdata = [
  { Name: "unnati", Qualifiacation: "M.com", Age: 25 },
  { Name: "vandan", Qualifiacation: "Software Devloper", Age: 28 },
  { Name: "dhrumil", Qualifiacation: "Chemical Engineer", Age: 29 },
  { Name: "zinal", Qualifiacation: "M.com", Age: 26 },
  { Name: "priyanshi", Qualifiacation: "12th science", Age: 18 },
  { Name: "harshit", Qualifiacation: "10 th board", Age: 16 },
  { Name: "mishree", Qualifiacation: "3rd Std", Age: 10 },
  { Name: "nisarg", Qualifiacation: "Junior K.G", Age: 5 },
  { Name: "sonu", Qualifiacation: "Pailot", Age: 34 },
  { Name: "monu", Qualifiacation: "Driver", Age: 54 },
];
let studentheading = ["Name", "Qualifiacation", "Age"];

function maketable() {
  let table = document.createElement("table");
  let ans = document.getElementById("ans");
  ans.appendChild(table);

  let trhead = document.createElement("tr");
  table.appendChild(trhead);
  studentheading.forEach((element) => {
    let td = document.createElement("td");
    td.innerHTML = `<b> ${element}</b>`;
    trhead.appendChild(td);
  });

  studentdata.forEach((data) => {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    studentheading.forEach((headname) => {
      let td = document.createElement("td");
      td.innerHTML = data[headname];
      tr.appendChild(td);
    });
  });
}
