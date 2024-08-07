"use client"

const chunkArray = (arr, n) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += n) {
    chunkedArr.push(arr.slice(i, i + n));
  }
  return chunkedArr;
};

const HomePost = ({exhibitions}) => {

  const exhibitionChunks = chunkArray(exhibitions, 2);


  // const [exhibitions, setExhibitions] = useState([]); 
  // const fetchExhibitions = async () => {
  //   try {
  //     const response = await client.getEntries({ content_type: 'homePost',include: 10  });
  //     const items = response.items.map(item => ({
  //       title: item.fields.title,
  //       subTitle: item.fields.subTitle,
  //       description: item.fields.description.content[0].content[0].value,
  //       img: item.fields.image.fields.file.url,
  //     }));
  //     setExhibitions(items);
  //   } catch (error) {
  //     console.error('Error fetching entries:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchExhibitions();
  // }, []);

  return (
    <div className=" ">
    {exhibitionChunks.length > 0 ? (
      exhibitionChunks.map((chunk, index) => (
        <div key={index} className="row justify-content-center mt-4">
          {chunk.map((item, subIndex) => (
            <div key={subIndex} className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center text-center mb-4">
              <h3 className="h5">{item.fields.title}</h3>
              <div className="exhibition-one__image mb-2">
                <img src={item.fields.image.fields.file.url} alt="" className="img-fluid" />
              </div>
              <div className="exhibition-one__content p-2">
                <b className="h6">{item.fields.subTitle}</b>
                <div className="w-100 text-justify text-sm md:text-base">
                  <p>{item.fields.description.content[0].value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))
    ) : (
      <div className='home___error-container text-center'>
        <h2 className='text-black h5 font-bold'>No Exhibitions Available</h2>
      </div>
    )}
  </div>

  );
};

export default HomePost;
