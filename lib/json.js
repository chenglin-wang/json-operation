var o_json = o_json || {};

o_json.merge = function(json1, json2){
	Object.keys(json2).forEach(function(key){
		json1[key] = json2[key];
	})
	return json1;
}

module.exports = o_json;