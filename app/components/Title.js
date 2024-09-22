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
       
        {exhibitionChunks.length > 0 ? (
          exhibitionChunks.map((chunk, index) => (
  
               chunk.map((item, subIndex) => {

                return ( 
                    <p className="about-one__highlighted-text text-center mb-[-30px] text-sm md:text-base p-20"  >
                      {documentToReactComponents(item.fields.title)}
                    </p> 
                );
              }) 
          ))
        ) : (
          <div className="text-center mt-5 mb-5">
            <h2 className="text-dark text-xl font-bold">No Title Available</h2>
          </div>
        )}
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n  h1, h2, h3, h4, h5, h6 {\n    font-family: '__Inter_36bd41', '__Inter_Fallback_36bd41' !important;\n    font-style: normal !important;\n}\n"
  }}
/>


    </>
  );
};

export default HomePost;
