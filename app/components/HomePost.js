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
<div id="homepp">
  {exhibitionChunks.length > 0 ? (
    exhibitionChunks.map((chunk, index) => (
      <div key={index} className="row justify-content-between mb-5">
        {chunk.map((item, subIndex) => {
          // Calculate the index of the current item
          const currentIndex = index * chunk.length + subIndex;
          // Determine if the current item is one of the last two
          const hideTitle = exhibitionChunks.flat().length - currentIndex <= 2;

          return (
            <div key={subIndex} className="col-12 col-md-5 col-lg-5 text-center mb-4">
              {!hideTitle && (
                <h3 className="h4 font-weight-bold mb-3">{item.fields.title}</h3>
              )}
              <div className="mb-3">
                <img
                  src={item.fields.image.fields.file.url}
                  className="w-full h-[200px] mb-3"
                  alt={item.fields.title}
                />
              </div>
              <div className="p-3">
                <p className="h6 mb-2">{item.fields.subTitle}</p>
                <div className="text-justify">
                  <p>{item.fields.description.content[0].value}</p>
                </div>
              </div>
            </div>
          );
        })}
        {chunk.length % 2 === 1 && <div className="col-1"></div>} {/* Empty column for spacing if odd number of items */}
      </div>
    ))
  ) : (
    <div className="text-center mt-5 mb-5">
      <h2 className="text-dark h5 font-weight-bold">No Exhibitions Available</h2>
    </div>
  )}
</div>



      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n#homepp {\n  margin-left: 15em;\n  margin-right: 15em;\n}\n\n/* Mobile styles */\n@media only screen and (max-width: 768px) {\n  #homepp {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n"
        }}
      />

    </>

  );
};

export default HomePost;
