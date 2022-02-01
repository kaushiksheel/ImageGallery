import { Navbar } from "./components/Navbar";
import "./styles/global.css";
import UploadIcon from './assets/uploadIcon.svg';
import "./styles/app.css";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import useFirestore from "./hooks/useFirestore";

function App() {
  const[file,setFile]=useState(null)
  const[error,setError]=useState(null)
  const {docs}=useFirestore('images');



const types=['image/png','image/jpeg']

const handleChange=e=>{
  let selected=e.target.files[0]
  if(selected && types.includes(selected.type)){
    setFile(selected);
    setError(null)
  }else{
    setFile(null)
    setError('Please select image file, only support png/jpeg formats')
  }
}

  return (
   <div className="main">
 <Navbar/>
 <div className="image-container">
   <div className="container">
     <div className="upload-container">
       <label htmlFor="upload">
         <img src={UploadIcon} alt="icon" />
       </label>
       <input type="file" id="upload"  onChange={handleChange}/>
       <p>{file ? file.name:""}</p>
       {error &&error}
       {file && <ProgressBar file={file} setFile={setFile}/>}
     </div>
   </div>
 </div>
 <div className="gallery">
   <div className="image-gallery">
     {docs.map(item=><img key={item.id} src={item.url} alt="wallpaper" />)}
   </div>
 </div>
   </div>
  );
}

export default App;
