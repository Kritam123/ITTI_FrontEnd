import  { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF","Webp"];

function DragDropUploader() {
    interface UploaderFileProps {
        file:null | string
    }

  const [file, setFile] = useState<UploaderFileProps>();
  const handleChange = (file:UploaderFileProps) => {
    setFile(file);
  };
  console.log(file);
  return (
    <div className="w-full">
        <FileUploader label="Drag and drop images here or click to browse for files(0/1 files selected)
Supported formats: jpeg, png, jpg, webp
Max file size: 5MB" maxSize={4} className="" handleChange={handleChange} name="file" types={fileTypes}/>
    </div>
  );
}

export default DragDropUploader;