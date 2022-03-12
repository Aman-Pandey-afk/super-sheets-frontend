import React from "react";
import Card from "react-bootstrap/Card";

export interface CardProps {
  title: string;
}

const CardComponent: React.FC<CardProps> = (props) => {
  var { title } = props;
  return (
    <div className="custom-card">
      {title && <p className="custom-card-title">{title}</p>}
    </div>
  );
};

export default CardComponent;
