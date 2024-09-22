// app/page.js
import client from '../libs/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Import the rich-text renderer

const fetchContentfulData = async () => {
  const res = await client.getEntries({
    content_type: 'artPost'
  });
  return res.items;
};

const HomePage = async () => {
  const data = await fetchContentfulData(); 

  return (
    <>
      <h2 className='container m-10' style={{ textAlign: 'center' }}>Art Exhibitions</h2>
      <div id="homepp" className="max-w-screen-xl mx-auto px-4">
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[3em] mb-3">
            {data.map((item, index) => {
              const marginClass = index % 2 === 0
                ? 'mr-0 md:mr-[5em]'
                : 'ml-0 md:ml-[5em]';

              return (
                <div key={item.sys.id} className={`text-center ${marginClass} sm:mx-0`}>
                  <div>
                    <img
                      src={item.fields.image.fields.file.url}
                      alt={item.fields.title}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full mx-auto p-4">
                    <b className="text-xl text-center" style={{ fontSize: "30px" }}>
                      {documentToReactComponents(item.fields.title)} {/* Render title as rich text */}
                    </b>
                    <div
                      className="mt-4 text-justify"
                      style={{
                        textTransform: 'lowercase',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 4,
                        lineClamp: 4,
                      }}
                    >
                      {documentToReactComponents(item.fields.subtitle)} {/* Render subtitle as rich text */}
                    </div>
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
              );
            })}
          </div>
        ) : (
          <div className="text-center mt-5 mb-5">
            <h2 className="text-black text-xl font-bold">No data available</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
