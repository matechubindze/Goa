 const first = Math.random() > 0.5;
 const second = Math.random() > 0.5 ? "hello" : "goodbye";

 const list = (
   <ul>
     {first && <li>goa</li>}
     <li>{second}</li>
   </ul>
);

const interests = ["coding", "music", "gaming"];
const interestsList = (
  <ul>
    {interests.map(item => <li key={item}>{item}</li>)}
  </ul>
);

import React, { useState } from "react";

export default function ExampleComponent() {
  const [showDetails, setShowDetails] = useState(true);

  const items = [
    { id: 1, name: "ერთი" },
    { id: 2, name: "ორი" },
    { id: 3, name: "სამი" },
  ];

  return (
    <div>
      <h2>JSX სინტაქსის მაგალითი</h2>

      <button onClick={() => setShowDetails((s) => !s)}>
        {showDetails ? "დამალე დეტალები" : "აჩვენე დეტალები"}
      </button>

      {showDetails && <p>დეტალები ჩართულია — თქვენ ხედავთ ამ ტექსტს.</p>}

      <p>{items.length > 0 ? "აქ არის თქვენი სია:" : "სია ცარიელია"}</p>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.id === 2 ? " — ეს არის ნუმერ 2" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
