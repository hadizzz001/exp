"use client" 



import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HomePost = ({ exhibitions }) => {
  // Define chunkArray function to split the exhibitions array
  const chunkArray = (arr, n) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += n) {
      chunkedArr.push(arr.slice(i, i + n));
    }
    return chunkedArr;
  };

  const exhibitionChunks = chunkArray(exhibitions, 2);

  return (
    <>
      <div id="homepp" className="max-w-screen-xl mx-auto px-4">
        {exhibitionChunks.length > 0 ? (
          exhibitionChunks.map((chunk, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[1cm] mb-[3em] place-items-center"
            >
              {chunk.map((item, subIndex) => {
                const currentIndex = index * chunk.length + subIndex;
                const hideTitle = exhibitionChunks.flat().length - currentIndex <= 2;

                return (
                  <div
                    key={subIndex}
                    className="text-center sm:mx-0 flex flex-col items-center"
                  >
                    {/* Ensure uniform height for titles */}
                    <h3 className="text-lg font-bold mb-1 min-h-[40px] flex items-center justify-center">
                      {documentToReactComponents(item.fields.title)}
                    </h3>
                    
                    <div className="mb-1">
                      <img
                        src={item.fields.image.fields.file.url}
                        className="fixed-dimensions mx-auto"
                        alt={item.fields.title}
                      />
                    </div>

                    {/* Ensure uniform height for subtitles */}
                    <div className="p-2 text-center min-h-[50px] flex items-center justify-center">
                      <p className="text-base mb-1">
                        {documentToReactComponents(item.fields.subtitle)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <div className="text-center mt-5 mb-5">
            <h2 className="text-dark text-xl font-bold">No Exhibitions Available</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePost;
