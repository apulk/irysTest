// Test

let input = ["1233454356\tGET /index.html\t10.10.10.1",
"1233454356\tGET /index.html\t10.10.10.1",
"1233454356\tGET /index.html\t10.10.10.1",
"1233454323\tGET /index.htm\t10.13.10.1",
"1233454356\tGET /browse.html\t10.14.10.1",
"1232343356\tGET /index.html\t10.14.10.1",
"1233454356\tGET /index.html\t10.14.10.1",
"1233654906\tGET /index.html\t123.14.10.1",
"1233454316\tGET /index.html\t10.14.10.1",
"1233887346\tGET /index.html\t10.14.10.1",
"1233454356\tGET /list.html\t10.14.10.1",
"1233454356\tPOST /update.php\t10.14.11.1",
"1233454356\tGET /index.html\t10.14.11.1",
"1233454356\tGET /index.html\t10.14.11.1",
"1233452356\tGET /index.html\t10.14.11.1",
"1233454356\tGET /index.html\t10.14.11.1",
"1233754356\tGET /index.html\t10.14.10.1",
"1233454356\tGET /index.html\t123.14.10.1"];

var counter = 0 
var k = ''
var dataset = []
var ipArr = []
for(var i=0;i< input.length;i++) {
  let ip = input[i].substr(input[i].lastIndexOf('/') + 1);
  ip = ip.split('\t')
  dataset.push(ip[1])
}
var occurrences = {};
for (var i = 0, j = dataset.length; i < j; i++) {
   occurrences[dataset[i]] = (occurrences[dataset[i]] || 0) + 1;
}
let json = JSON.stringify(occurrences)
var obj = JSON.parse(json);
MyArr = []
var inc = 1;
for (var key in obj) {
    MyArr.push({"ip":key, "count":obj[key]})
 
}
MyArr.sort(function(a, b) {
    return parseFloat(b.count) - parseFloat(a.count);
});
console.log(MyArr.map((d,i)=> ({"rank": ++i,...d})))
