import { useRef, useState } from "react";
import axios from "axios";

function Upload() {
  const [image, setImage] = useState([]);
  const inputFileRef = useRef();
  const handleImageChange = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", inputFileRef.current.files[0]);
    console.log(inputFileRef.current.files[0]);
    axios({
      method: "post",
      url: "http://103.237.147.34:8888/api/v1/users/1/files/sd",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    }).then((data) => {
      console.log(data.data);
    });
  };

  const handleChangeInputFile = async (e) => {
    const imageUrl = await handleImageChange(e.target.files[0]);
    setImage(imageUrl);
  };

  return (
    <>
      <img src={image} alt="" />
      <input
        type="file"
        multiple
        ref={inputFileRef}
        onChange={handleChangeInputFile}
      />
      <button onClick={handleUpload}>upload</button>
    </>
  );
}
export default Upload;
