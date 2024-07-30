"use client"

import client from '../libs/contentful'; 
import { useEffect, useState } from 'react';

 

const YourComponent = () => {
  const [exhibitions, setExhibitions] = useState([]);

  const fetchExhibitions = async () => {
    try {
      const response = await client.getEntries({ content_type: 'homePost',include: 10  });
      const items = response.items.map(item => ({
        title: item.fields.title,
        subTitle: item.fields.subTitle,
        description: item.fields.description.content[0].content[0].value,
        img: item.fields.image.fields.file.url,
      }));
      setExhibitions(items);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  useEffect(() => {
    fetchExhibitions();
  }, []);

  return (
    <div>
      {exhibitions.length > 0 ? (
        exhibitions.map((item, index) => (
          index % 2 === 0 && (
            <div key={index} className="flex flex-wrap justify-center mt-8">
              <div className="flex-item-projectsecound flex flex-col items-center text-center">
                <h3 className="text-lg">{item.title}</h3>
                <div className="exhibition-one__image grid grid-cols-1">
                  <img src={item.img} alt="" className="w-full" />
                </div>
                <div className="exhibition-one__content flex flex-col items-center text-xs p-2">
                  <b className="text-lg">{item.subTitle}</b>
                  <div className="w-[230px] md:w-[400px] text-justify text-sm md:text-base">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>

              {exhibitions[index + 1] && (
                <div className="flex-item-project flex flex-col items-center text-center">
                  <h3 className="text-lg">{exhibitions[index + 1].title}</h3>
                  <div className="exhibition-one__image grid grid-cols-1">
                    <img src={exhibitions[index + 1].img} alt="" className="w-full" />
                  </div>
                  <div className="exhibition-one__content flex flex-col items-center text-xs p-2">
                    <b className="text-lg">{exhibitions[index + 1].subTitle}</b>
                    <div className="w-[230px] md:w-[400px] text-justify text-sm md:text-base">
                      <p>{exhibitions[index + 1].description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        ))
      ) : (
        <div className='home___error-container'>
          <h2 className='text-black text-xl font-bold'>No Exhibitions Available</h2>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
