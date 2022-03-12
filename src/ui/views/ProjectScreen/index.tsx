import React, { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import {
  getFieldData,
  getTableData,
} from "../../../service/ApiService/TableDataApi";

export default function ProjectScreen() {
  const [datas, SetData] = useState<any[]>([]);
  const [fields, SetFields] = useState<any[]>([]);
  const name: Readonly<Params<string>> = useParams();

  const GetData = async () => {
    const data = await getTableData(name.name!);
    console.log(data);
    SetData(data);
  };

  const GetFields = async () => {
    const data = await getFieldData(name.name!);
    console.log(data);
    SetFields(data);
  };

  useEffect(() => {
    console.log(name.name);
    GetData();
    GetFields();
  }, []);

  const fieldArr: string[] = [];

  const TableHead = fields.map((info) => {
    fieldArr.push(info.fieldSlug);
    return (
      <td>
        <th>{info.displayName}</th>
      </td>
    );
  });

  const DisplayData = datas.map((info) => {
    return (
      <tr>
        {fieldArr.map((el) => (
          <td>{info[el]}</td>
        ))}
      </tr>
    );
  });

  return (
    <div className="ProjectScreen">
      <div>
        <table className="table table-striped">
          <thead>{TableHead}</thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
}
