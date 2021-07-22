import React from "react";

export default function Exercise() {
  const date = new Date();
  const currentDate = date.toDateString();

  console.log(date.getDate());

  const dateFinder = () => {
     if (date.getMonth() === 2 && date.getDate() === 9) {
        return <p>Happy Birthday</p>;
       } else {
        return <p>Hello</p>;
       }
  }
  
  return (
    <div>
      <h1>{currentDate}</h1>
      {dateFinder()}
    </div>
  );
}
