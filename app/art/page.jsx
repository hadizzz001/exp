// app/page.js
import client from '../libs/contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const fetchContentfulData = async () => {
  const res = await client.getEntries({
    content_type: 'post', // Replace with your actual content type ID
  });
  return res.items;
};

const HomePage = async () => {
  const data = await fetchContentfulData();

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          index % 2 === 0 && (
            <div key={index} className="flex flex-wrap justify-center gap-6">
              <div className="flex-item-projectsecound flex flex-col items-center text-center">
                <div className="exhibition-one__image w-full max-w-[400px]">
                  <img
                    src={item.fields.cover.fields.file.url}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>
                <div className="exhibition-one__content w-full max-w-[400px] p-4">
                  <b className="text-xl text-center">{item.fields.title}</b>
                  <p className="mt-4 text-justify">{item.fields.summary}</p>
                  <div className="btn-box mt-4">
                    <a
                      href={`/${item.sys.id}`}
                      className="thm-btn btn-style-one px-4 py-2 text-white bg-blue-500 rounded"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              {data[index + 1] && (
                <div className="flex-item-projectsecound flex flex-col items-center text-center">
                  <div className="exhibition-one__image w-full max-w-[400px]">
                    <img
                      src={data[index + 1].fields.cover.fields.file.url}
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="exhibition-one__content w-full max-w-[400px] p-4">
                    <b className="text-xl text-center">{data[index + 1].fields.title}</b>
                    <p className="mt-4 text-justify">{data[index + 1].fields.summary}</p>
                    <div className="btn-box mt-4">
                      <a
                        href={`/${data[index + 1].sys.id}`}
                        className="thm-btn btn-style-one px-4 py-2 text-white bg-blue-500 rounded"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        ))
      ) : (
        <div className="home___error-container">
          <h2 className="text-black text-xl font-bold">No data available</h2>
        </div>
      )}
    </div>
  );
};

export default HomePage;
