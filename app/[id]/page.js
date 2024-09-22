import { notFound } from 'next/navigation';
import client from '../libs/contentful'; // Updated import path
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import ImageSwiper from '../components/ImageSwiper'; // Import the new component
import Image from 'next/image';

// Fetch the entry from Contentful
const fetchContentfulEntry = async (id) => {
  try {
    const entry = await client.getEntry(id);
    return entry;
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
};

// Custom render options to handle different types of nodes
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      const mimeType = file.contentType;

      if (mimeType.includes('image')) {
        return (
          <div className="mb-4 text-center">
            <Image
              src={`https:${file.url}`}
              width={file.details.image.width}
              height={file.details.image.height}
              alt={title}
              className="img-fluid mx-auto"
            />
          </div>
        );
      } else if (mimeType.includes('pdf')) {
        return (
          <div className="mb-4 text-center">
            <a href={`https:${file.url}`} target="_blank" rel="noopener noreferrer">
              {title || 'Download PDF'}
            </a>
          </div>
        );
      } else if (mimeType.includes('video')) {
        return (
          <div className="mb-4 text-center">
            <video controls width="100%">
              <source src={`https:${file.url}`} type={mimeType} />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }
      return null;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = node.data.target.fields;
      const images = entry.image || []; // Use default empty array if images field is missing

      return <ImageSwiper images={images} />;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mb-4 text-justify">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="display-4 mb-4 text-center">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="display-5 mb-4 text-center">{children}</h2>;
    },
    [BLOCKS.TABLE]: (node, children) => {
      return <table className="table table-borderless table-responsive mb-4">{children}</table>;
    },
    [BLOCKS.TABLE_ROW]: (node, children) => {
      return <tr>{children}</tr>;
    },
    [BLOCKS.TABLE_CELL]: (node, children) => {
      return <td className="p-2 text-justify">{children}</td>;
    },
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => {
      return <th className="p-2 font-weight-bold text-justify">{children}</th>;
    },
    // Add more custom renderers as needed
  },
};

const EntryPage = async ({ params }) => {
  const { id } = params;
  const data = await fetchContentfulEntry(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="container my-4"> 
      <div className="rich-text-content">
        {documentToReactComponents(data.fields.content, renderOptions)}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .table-responsive {
              display: inline-table !important;
            }
            h1, h2, h3, h4, h5, h6 {
              text-align: center;
            }
          `,
        }}
      />
    </div>
  );
};

export default EntryPage;
