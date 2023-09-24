import axios from "axios";

const client = axios.create({ baseURL: "https://backend.getlinked.ai/" });
export const request = async ({ ...options }): Promise<object> => {
	client.defaults.headers.common.Authorization = `Bearer token`;
	client.defaults.headers.common["Content-Type"] = "application/json";
	const onSuccess = (response: object): object => response;
	const onError = (error: object): object => error;

	return await client(options).then(onSuccess).catch(onError);
};
