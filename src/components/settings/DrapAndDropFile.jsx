import { useState } from 'react';

const DragAndDropFile = () => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div 
      className={`border-2 border-dashed h-[150px] cursor-pointer transition-all :hover:text-[#222]  ease-in-out duration-200 relative flex justify-center items-center ${dragging ? 'border-blue-500' : 'border-gray-300'} p-4 rounded-lg`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        id="photo" 
        className="hidden"
        onChange={handleChange}
      />
      <label htmlFor="photo" className='w-full h-[50px] bg-[#F1F1F1] p-2 flex items-center justify-center cursor-pointer'>
        {file ? file.name : 'Drag & Drop a photo or click to select'}
      </label>
    </div>
  );
};

export default DragAndDropFile;
