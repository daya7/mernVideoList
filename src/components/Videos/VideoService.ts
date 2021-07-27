import axios from 'axios';
import {Video} from './VideoInterface'

//service of axios petitions
const API= 'http://localhost:5000'

export const getVideos = async ()=>{
   return await axios.get<Video[]>(`${API}`);
}
export const getVideo = async (id:string)=>{
   return await axios.get<Video>(`${API}/${id}`);
}
export const updateVideo = async (id:string, video: Video)=>{
   return await axios.put<Video>(`${API}/${id}`, video);
}

export const deleteVideo = async (id:string)=>{
   return await axios.delete<Video>(`${API}/${id}`);
}
export const createVideo = async (video: Video)=>{
   return await axios.post(`${API}`, video);

}
