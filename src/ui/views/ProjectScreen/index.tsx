import React, { useState, useEffect } from "react";
import { Field } from "../../../models/Field";

export default function ProjectScreen() {
  const[datas, SetData] = useState<any[]>([]);
  const[fields, SetFields] = useState<any[]>([]);

  const GetData = async() => {
    const response = await fetch(
      "https://f66b-103-37-201-178.ngrok.io/table/soc"
    );
    const data = await response.json();
    console.log(data)
    SetData(data);
  };

  const GetFields = async() => {
    const response = await fetch(
      "https://f66b-103-37-201-178.ngrok.io/fields/soc"
    );
    const data = await response.json();
    SetFields(data);
  };

  useEffect(() => {
    GetData();
    GetFields();
  }, []);

  const fieldArr:string[] = [];

  const TableHead = fields.map((info)=>{
    fieldArr.push(info.fieldSlug);
    return(
      <td>
          <th>{info.displayName}</th>
      </td>
  )});

  const DisplayData = datas.map((info)=>{
    return(
      <tr>
      {fieldArr.map((el)=><td>{info[el]}</td>)}
      </tr>
  )});

  return (
    <div className="ProjectScreen">
       <div>
          <table className="table table-striped">
              <thead>
                  {TableHead}
              </thead>
              <tbody>    
                  {DisplayData}                  
              </tbody>
          </table>
           
      </div>
    </div>
  );
}
