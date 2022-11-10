import axios from "axios";
import { useRef } from "react";

function Upload() {
  const inputFileRef = useRef();
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", inputFileRef.current.files[0]);
    axios({
      method: "post",
      url: "http://103.237.147.34:8888/api/v1/users/1/files",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    }).then((data) => {
      console.log(data.data);
    });
  };

  return (
    <>
      <input
        type="file"
        multiple
        ref={inputFileRef}
        // onChange={handleChangeInputFile}
      />
      <button onClick={handleUpload}>upload</button>
    </>
  );
}
export default Upload;
