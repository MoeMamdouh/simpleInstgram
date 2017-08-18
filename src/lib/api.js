
import { config } from '../config/'

class API {
	/*   Private Methods */
	parseJsonToFormData(object) {
		var data = [];
		for (var property in object) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(object[property]);
			data.push(encodedKey + "=" + encodedValue);
		}
		return data.join("&");
	}

	async _request(route, method, params = null, isAuthorized = false) {
		try {
			let url = `${config.server_url}/${route}`
			let body = method == 'POST' ? JSON.stringify(params) : null;
			console.log('request url: ', url,' with params: ', params)
			// let body = method == 'POST' ? this.parseJsonToFormData(params) : null;
			let response = await fetch(url, {
				method: method,
				headers: this._headerWithToken(isAuthorized),
				body: body
			})

			return response.json();
		} catch (e) {
			console.log(e);
		}
	}

	_headerWithToken(requireToken) {
		let headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		};

		if (requireToken) {
			//headers['Authorization'] = `Bearer${user.token}`;
		}

		return headers;
	}

	/* END OF PRIVATE METHODS */

	async get(route) {
		return this._request(route, 'GET');
	}

	async post(route, params, isAuthorized = true) {
		return this._request(route, 'POST', params, isAuthorized);
	}
}

export const api = new API();