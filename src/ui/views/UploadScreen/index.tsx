import React, { useState } from "react";
import upload from "../../../service/ApiService/UploadApiService";

const UploadScreen: React.FC = () => {
  const [file, setFile] = useState<File>();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    upload(file!);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log("file changed");
    setFile(event.target.files![0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="csv" id="csv" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UploadScreen;
