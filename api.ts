import { record } from './api';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { ElMessage } from "element-plus";
export interface ResponseData {
  code: number;
  data?: string;
}

// console.log('import.meta.env: ', import.meta.env);

// 创建 axios 实例
let service: AxiosInstance | any;

service = axios.create({
  baseURL: "/api",
  timeout: 50000,
});

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // Some example codes here:
    // code == 1: success
    if (res.status === 200) {
      const data: ResponseData = res.data;
      if (data.code === 1) {
        return data.data;
      } else {
        ElMessage({
          message: "请检查你的输入是否合法！",
          type: "info",
        });
      }
    } else {
      ElMessage({
        message: "网络错误!",
        type: "error",
      });
      return Promise.reject(new Error(res.data.message || "Error"));
    }
  },
  (error: any) => Promise.reject(error)
);

// 获取输入数据

export async function postInput(input: string |any) {
    const form = new FormData()
    form.append('input', input)
    const data = await service.post(`/api/transform`, form)
    return data
}

export type Record={
  input:string
  output:string
}

export function intoStorage(record: Record) {
  const oldItemsJson = localStorage.getItem('records')
  if (oldItemsJson) {
    const oldItems = JSON.parse(oldItemsJson)
    if ((oldItems as record[]).length > 5) {
      (oldItems as record[]).pop()
      (oldItems as record[]).push(record)
    }
    localStorage.removeItem('records')
    localStorage.setItem('records',JSON.stringify(oldItems))
  }
}

export function readStorage():Record[] {
  const recordsJson = localStorage.getItem('records')
  const records = recordsJson ? JSON.parse(recordsJson) : null
  return records
}