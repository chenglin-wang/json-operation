var json = require('./index');

var j = json.merge({
	qq: 123,
	ww: 456
},{
	qq: 9890987,
	ee: 809809089809890
});
console.log(j);