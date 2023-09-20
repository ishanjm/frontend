import axios from "axios";


//axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Authorization'] =localStorage.getItem('userInfo')?  `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`:'';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(reps => reps, async error => {
	
	if (error.response.status === 401) {
		const response = await axios.post('http://localhost:5000/api/refresh', {}, { withCredentials: true });
		
		if (response.status === 200) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;
			return axios(error.config);
		}
	}

});

//axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userInfo').token}`;

