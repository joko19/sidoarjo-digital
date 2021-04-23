import axios from 'axios'

const instance = axios.create({ baseURL: "https://onwisata.com:8443" });
export const baseURL = "https://onwisata.com"

export default instance