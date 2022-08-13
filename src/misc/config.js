const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {


    const data = await fetch(`${API_BASE_URL}${queryString}`).then(res => res.json());
    console.log(data);
    return data;






}