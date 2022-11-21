import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://637364870bb6b698b60aad81.mockapi.io/items'

});