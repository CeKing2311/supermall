import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000,
  })
  // 2.axios 的拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    return Promise.reject(error);
  });
  // 2.2响应拦截
  instance.interceptors.response.use(response => {
    return response.data;
  }, error => {
    return Promise.reject(error);
  });
  // 3.发送网络请求
  return instance(config)
}
