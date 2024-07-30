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
    <div>
    {exhibitionChunks.length > 0 ? (
      exhibitionChunks.map((chunk, index) => (
        <div key={index} className="flex flex-wrap justify-center mt-8">
          {chunk.map((item, subIndex) => (
            <div key={subIndex} className="flex-item-project flex flex-col items-center text-center">
              <h3 className="text-lg">{item.fields.title}</h3>
              <div className="exhibition-one__image grid grid-cols-1">
                <img src={item.fields.image.fields.file.url} alt="" className="w-full" />
              </div>
              <div className="exhibition-one__content flex flex-col items-center text-xs p-2">
                <b className="text-lg">{item.fields.subTitle}</b>
                <div className="w-[230px] md:w-[400px] text-justify text-sm md:text-base">
                  <p>{item.fields.description.content[0].value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))
    ) : (
      <div className='home___error-container'>
        <h2 className='text-black text-xl font-bold'>No Exhibitions Available</h2>
      </div>
    )}
  </div>

  );
};

export default HomePost;
