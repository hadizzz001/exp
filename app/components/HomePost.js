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
<div className="container mt-20">
  {exhibitionChunks.length > 0 ? (
    exhibitionChunks.map((chunk, index) => (
      <div key={index} className="row justify-content mt-4">
        {chunk.map((item, subIndex) => (
          <div key={subIndex} className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center text-center mb-4">
            <h3 className="h4 font-weight-bold">{item.fields.title}</h3>
            <div className="mb-2">
              <img src={item.fields.image.fields.file.url} className="img-fluid"   alt={item.fields.title} />
            </div>
            <div className="p-2">
              <p className="h6">{item.fields.subTitle}</p>
              <div className="text-justify">
                <p>{item.fields.description.content[0].value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))
  ) : (
    <div className="text-center">
      <h2 className="text-dark h5 font-weight-bold">No Exhibitions Available</h2>
    </div>
  )}
</div>


  );
};

export default HomePost;
