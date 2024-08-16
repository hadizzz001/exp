"use client"

const chunkArray = (arr, n) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += n) {
    chunkedArr.push(arr.slice(i, i + n));
  }
  return chunkedArr;
};

const HomePost = ({ exhibitions }) => {

  const exhibitionChunks = chunkArray(exhibitions, 2);


  return (
    <> 
<div id="homepp" className="max-w-screen-xl mx-auto px-4">
  {exhibitionChunks.length > 0 ? (
    exhibitionChunks.map((chunk, index) => (
      <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 mb-[3em] place-items-center " >
        {chunk.map((item, subIndex) => {
          const currentIndex = index * chunk.length + subIndex;
          const hideTitle = exhibitionChunks.flat().length - currentIndex <= 2;

          // Determine margin based on even/odd index
          const marginStyle = currentIndex % 2 === 0 
            ? { marginLeft: '5em' }
            : { marginRight: '5em' };

          return (
            <div 
              key={subIndex} 
              className="text-center sm:mx-0" // Remove margins on small screens
              style={window.innerWidth >= 640 ? marginStyle : {}}
            >
              {!hideTitle && (
                <h3 className="text-lg font-bold mb-1">{item.fields.title}</h3>
              )}
              <div className="mb-1">
                <img
                  src={item.fields.image.fields.file.url}
                  className="fixed-dimensions mx-auto"
                  alt={item.fields.title}
                />
              </div>
              <div className="p-2 text-center">
                <p className="text-base mb-1">{item.fields.subTitle}</p>
                <div className="text-justify">
                  <p>{item.fields.description.content[0].value}</p>
                </div>
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
