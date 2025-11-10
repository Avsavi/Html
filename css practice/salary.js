var salary = [15000, 35000, 45000, 65000, 90000];
var newsalary = [];
var tax = [];
var grandSalry = [];
for (var i = 0; i < salary.length; i++) {
    var hikesalary = salary[i] * 5 / 100;
    var totalsalary = hikesalary + salary[i];
    newsalary.push(totalsalary);
    var totaltax = newsalary[i] * 2 / 100;
    var cutSalry = newsalary[i] - totaltax;
    tax.push(totaltax);
    grandSalry.push(cutSalry)
}
console.log(salary);
console.log(newsalary);
console.log(tax);
console.log(grandSalry);

var a=10;
var b=20;
[a,b]=[b,a];
console.log(a,b)



