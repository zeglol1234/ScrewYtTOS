/*
Installation steps: 
make a new bookmark on any page
copy this code
right clicm the bookmark you made, name it whatever
paste the code in the url section
save it
profit
*/

javascript:if (typeof queryString == undefined) {let queryString; let urlParams; let ytvid;};queryString = window.location.search;urlParams = new URLSearchParams(queryString);ytid = urlParams.get('v');window.open(`https://www.youtube-nocookie.com/embed/${ytid}`);
