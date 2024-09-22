import styles from '../public/CustomCarousel.module.css';
import Carousel from './components/Carousel';
import Title from './components/Title';
import HomePost from './components/HomePost';
import client from './libs/contentful';

export default async function Home() {
  const fetchContentfulData = async () => {
    const res = await client.getEntries({
      content_type: 'homeBanner',
    });
    return res.items;
  };

  const fetchContentfulData1 = async () => {
    const res = await client.getEntries({
      content_type: 'homeTitle',
    });
    return res.items;
  };

  const fetchContentfulData2 = async () => {
    const res = await client.getEntries({
      content_type: 'homePost',
      include: 10,
    });
    return res.items;
  };

  const data = await fetchContentfulData();
  const title = await fetchContentfulData1();
  const postss = await fetchContentfulData2();


  console.log(postss);
  
 
  

  return (
    <>
      <div className={styles.carouselContainer}>
        <Carousel data={data} />
      </div>

      <Title exhibitions={title} />
      <HomePost exhibitions={postss} />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n  @media(min-width: 1200px){\n    .container{\n      max-width:850px !important;\n    }\n  }\n",
        }}
      />
    </>
  );
}
