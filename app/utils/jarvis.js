var API_BASE_URL = 'http://localhost:5000';

function ajaxJSON(url, data, method) {
	return $.ajax({
		type: method,
		url: url,
		contentType: 'application/json',
		data: JSON.stringify(data)
	});
}

function postJSON(url, data) {
	return ajaxJSON(url, data, 'POST');
}

function putJSON(url, data) {
	return ajaxJSON(url, data, 'PUT');
}

export default {
	find: function(entity, entity_id) {
		if (entity_id) {
			if (typeof entity_id === 'object') {
				return $.getJSON(API_BASE_URL+'/'+entity, entity_id);
			} else {
				return $.getJSON(API_BASE_URL+'/'+entity+'/'+entity_id);
			}
		} else {
			return $.getJSON(API_BASE_URL+'/'+entity);
		}
	},
	create: function(entity, entity_data) {
		return postJSON(API_BASE_URL+'/'+entity, entity_data);
	},
	update: function(entity, entity_id, entity_data) {
		return putJSON(API_BASE_URL+'/'+entity+'/'+entity_id, entity_data);
	}
}
