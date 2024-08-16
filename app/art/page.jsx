// app/page.js
import client from '../libs/contentful';

const fetchContentfulData = async () => {
  const res = await client.getEntries({
    content_type: 'post'
  });
  return res.items;
};

const HomePage = async () => {
  const data = await fetchContentfulData();

  console.log("data: ", data);

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
                index % 2 === 0 && (
                  <div
                    key={index}
                    className={`text-center ${marginClass} sm:mx-0`} // Apply margins conditionally
                  >
                    <div>
                      <img
                        src={item.fields.cover.fields.file.url}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="w-full  mx-auto p-4">
                      <b className="text-xl text-center" style={{ fontSize: "30px" }}>
                        {item.fields.title}
                      </b>
                      <p
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
                        {item.fields.summary}
                      </p>
                      <div className="btn-box mt-4">
                        <a
                          href={`/${item.sys.id}`}
                          className="thm-btn btn-style-one px-4 py-2 text-white bg-blue-500 rounded"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                    {data[index + 1] && (
                      <div className="text-center sm:mx-0">
                        <div className="w-full  mx-auto mb-4">
                          <img
                            src={data[index + 1].fields.cover.fields.file.url}
                            alt=""
                            className="w-full  object-cover"
                          />
                        </div>
                        <div className="w-full  mx-auto p-4">
                          <b className="text-xl text-center" style={{ fontSize: "30px" }}>
                            {data[index + 1].fields.title}
                          </b>
                          <p
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
                            {data[index + 1].fields.summary}
                          </p>
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
