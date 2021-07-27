import React, { FormEvent, useState, useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';
import { ChangeEvent } from "react";
import {Video} from './VideoInterface';
import * as videoService from './VideoService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//types and interfaces of inputs and params
type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Params{
  id: string;
}
const VideoForm = () => {
  
    const history =useHistory(); //to reroot
    const params= useParams<Params>(); //to catch the id

    const initialState= 
        {
            title:"",
            description:"",
            url: ""
        } 
    
    const [video, setvideo] = useState<Video>(initialState);

    //setting array with input values
    const handleInputChange= (e: InputChange)=>{
        setvideo({...video, [e.target.name]: e.target.value})

    }
    //manage the create and update functions
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if(!params.id){
          await videoService.createVideo(video);
        toast.success('Video Saved');
        setvideo(initialState);
        }
        else{
          await videoService.updateVideo(params.id, video)
        }
        history.push('/');
    }

      const getVideo= async (id:string)=>{
        const res = await videoService.getVideo(id);
        const {title, description, url}= res.data;
        setvideo({title,description, url});
      }
    useEffect(() => {
      if(params.id)
        getVideo(params.id);
      
     
    }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a title"
                  autoFocus
                  onChange={handleInputChange}
                  value={video.title}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  onChange={handleInputChange}
                  value={video.url}     
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                 name="description" 
                 rows={3}
                 className="form-control"
                 onChange={handleInputChange}
                 value = {video.description}
                 placeholder="Enter a description"
                 ></textarea>
              </div>

              { //a dinamic button about the existence of a params  id
                params.id ? (<button className="btn btn-info">Update Video</button>): (<button className="btn btn-primary">Create Video</button>)
              }
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
