import React, { useState } from 'react'
import '../styles/New.css'
import SlideBar from './SlideBar'
import Navbar from './Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs,title}) => {

    const [file,setfile] = useState("");

  return (
    <div className='new'>
        <SlideBar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='to'>
            <h4>{title}</h4>
        </div>
        <div className='bo'>
            <div className="le">
            <img className='imm'
            src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
            </div>
            <div className="rig">
                <form >
                <div className="formInput">
                        <label htmlFor='file'>Image: <DriveFolderUploadIcon className='imo' /></label>
                        <input type="file" id='file' onChange={(e)=>setfile(e.target.files[0])} style={{display:"none"}} />
                    </div>
                   {
                    inputs.map((input)=>(
                        <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <input type={input.type} placeholder={input.placeholder} />
                    </div>
                    ))
                   }
                    <button>Send</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default New
