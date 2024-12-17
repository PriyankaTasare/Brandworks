import React, { useEffect, useState } from "react";
import { fetchContent } from "E:\Internshala\Images\project1\contentful.js";

const MainContent = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchContent("contentful.js");
      setContent(data);
    };
    getContent();
  }, []);

  return (
    <div className="p-4">
      {content.map((item) => (
        <div key={item.sys.id} className="mb-4">
          <h1 className="text-2xl font-bold">{item.fields.title}</h1>
          <p>{item.fields.description}</p>
          <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} />
        </div>
      ))}
    </div>
  );
};

export default MainContent;
