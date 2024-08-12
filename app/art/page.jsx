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
    <h2 className='container m-10' style={{textAlign:'center'}}>Art Exhibitions</h2>
    <div id="homepp">
      {data && data.length > 0 ? (
        data.map((item, index) => (
          index % 2 === 0 && (
            <div key={index} className="flex flex-wrap justify-center gap-6">
              <div className="flex-item-projectsecound flex flex-col items-center text-center mb-10">
                <div className="exhibition-one__image w-full max-w-[400px]">
                  <img
                    src={item.fields.cover.fields.file.url}
                    alt=""
                    className="w-full h-[200px]  "
                  />
                </div>
                <div className="exhibition-one__content w-full max-w-[400px] p-4">
                  <b className="text-xl text-center" style={{ fontSize: "30px" }}>{item.fields.title}</b>
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
              </div>
              {data[index + 1] && (
                <div className="flex-item-projectsecound flex flex-col items-center text-center mb-10">
                  <div className="exhibition-one__image w-full max-w-[400px]">
                    <img
                      src={data[index + 1].fields.cover.fields.file.url}
                      alt=""
                      className="w-full h-[200px]  "
                    />
                  </div>
                  <div className="exhibition-one__content w-full max-w-[400px] p-4">
                    <b className="text-xl text-center" style={{ fontSize: "30px" }}>{data[index + 1].fields.title}</b>
                    <p className="mt-4 text-justify"
                      style={{
                        textTransform: 'lowercase',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 4,
                        lineClamp: 4,
                      }}>{data[index + 1].fields.summary}</p>
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
            <style
  dangerouslySetInnerHTML={{
    __html:
      "\n\n  @media(min-width: 1200px){\n    .container{\n      max-width:850px !important;\n    }\n  }\n"
  }}
/>

<style
  dangerouslySetInnerHTML={{
    __html: "\n  .flex-item-projectsecound{ \n    padding:0 !important;\n}\n"
  }}
/>

<style
  dangerouslySetInnerHTML={{
    __html:
      "\n\n  @media(min-width: 1200px){\n    .container{\n      max-width:850px !important;\n    }\n  }\n"
  }}
/>

    </div>
    </>
  );
};

export default HomePage;
