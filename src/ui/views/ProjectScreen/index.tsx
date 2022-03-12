import React from "react";

const ProjectScreen: React.FC = () => {
  return (
    <div className="project-container">
      <th>
        <td className="header-row">name</td>
        <td className="header-row">enrollment no</td>
        <td className="header-row">github id</td>
      </th>
      <tr>
        <td className="data-row">Anand Kumar</td>
        <td className="data-row">20114009</td>
        <td className="data-row">anand817</td>
      </tr>
    </div>
  );
};

export default ProjectScreen;
