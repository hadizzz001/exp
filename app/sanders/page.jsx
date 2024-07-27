import React from 'react'; 

const Page = () => {
  return (
    <>
      <div className="bg-black text-gray-300 min-h-screen flex flex-col items-center"> 
        <main className="flex flex-col items-center px-4 py-8">
          <img
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            src="cover.jpg"
            alt="Cover"
          />
          <p className="text-yellow-300 text-lg font-bold mt-4">
            NATIONAL TRAVELING EXHIBITION
          </p>
          <nav className="text-gray-400 text-sm mt-2">
            <a href="#top" className="block hover:text-white">Introduction</a>
            <a href="/sanders/texts.html" className="block hover:text-white">Excerpts from Book</a>
            <a href="#info" className="block hover:text-white">Exhibition Facts & Loan Info</a>
            <a href="http://www.welcomebooks.com/lastgoodwar" className="block hover:text-white">On Welcome Books Website</a>
            <a href="http://www.welcomebooks.com/lastgoodwar/press.html" className="block hover:text-white">Press</a>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white my-4">
            THE LAST GOOD WAR
          </h1>
          <img
            className="w-full max-w-lg"
            src="TS composite for web.jpg"
            alt="Thomas Sanders Composite"
          />
          <p className="text-xl text-gray-400 mt-2">
            The Faces and Voices of WWII
          </p>
          <div className="max-w-3xl mt-4 text-gray-300">
            <p className="text-lg mb-4">
              Photographs by Thomas Sanders
            </p>
            <p className="mb-4">
              World War II remains one of the most galvanizing and defining events in the history of America. Seemingly overnight, the entire nation unified behind a singular cause. An entire generation’s identity was forged, in part, by what many still refer to as the “last good war.”
            </p>
            <p className="mb-4">
              Sixty years later, a young photographer named Thomas Sanders began traveling the country photographing and interviewing hundreds of World War II veterans. The more he shot, the more he listened, and the more captivated he became by their memories of the war.
            </p>
            <p className="mb-4">
              Veronica Kavass, a writer and interviewer with StoryCorps, joined the project and spent countless hours with these men and women, recording their vivid accounts as Tom recorded their storied faces. The images and memories of these men and women preserve a profound piece of America’s history.
            </p>
            <p>
              A traveling exhibition of Sanders' extraordinary photographs has been organized by Photographic Traveling Exhibitions. Featured are 40 photographs along with the texts of the veterans' accounts.{' '}
              <a href="http://www.welcomebooks.com/lastgoodwar" className="text-yellow-300 hover:text-white">
                The book, <em>THE LAST GOOD WAR</em>, published by Welcome Books
              </a>
              , and a gallery guide accompany the exhibition. The exhibition was presented at the Ponte Vedra Cultural Center, Ponte Vedra Beach, FL, in 2014.
            </p>
          </div>
          <img
            className="w-full max-w-lg mt-4"
            src="LGW inst 600 pix.jpg"
            alt="LGW Installation"
          />
          <div className="text-center mt-4">
            <a
              id="top"
              name="top"
            />
            <p className="text-sm text-gray-400 mb-4">
              Images copyright Thomas Sanders
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img className="w-full max-w-xs sm:max-w-sm mx-auto" src="bombersm.jpg" alt="Bombers" />
              <img className="w-full max-w-xs sm:max-w-sm mx-auto" src="LGW_psekism.jpg" alt="LGW Psekism" />
              <img className="w-full max-w-xs sm:max-w-sm mx-auto" src="LGWsailor page.jpg" alt="LGWsailor" />
              <img className="w-full max-w-xs sm:max-w-sm mx-auto" src="image004.jpg" alt="Image 004" />
              <img className="w-full max-w-xs sm:max-w-sm mx-auto" src="image007.jpg" alt="Image 007" />
              <p className="text-gray-400 text-sm">
                Thomas Sanders being interviewed on TV for his book THE LAST GOOD WAR.
              </p>
            </div>
            <img
              className="w-full max-w-sm mx-auto mt-4"
              src="LastGoodWar_pressrelease sm2.jpg"
              alt="Press Release"
            />
            <p className="text-sm text-gray-400 mt-2">
              <a href="https://www.p-t-e.org/sanders/sanderspr.htm" className="hover:text-white">
                View Enlargement
              </a>
            </p>
            <p className="text-sm text-gray-400">
              <a id="info" name="info" />
            </p>
            <p className="text-lg text-gray-300 mt-4">
              <u>Exhibition Facts</u>
            </p>
            <div className="text-gray-300">
              <p className="mb-2">
                <strong>Dates Available:</strong> Fall 2011 - 2014
              </p>
              <p className="mb-2">
                <strong>Contents:</strong> 40 framed 16 x 20" framed prints or 40 large prints 36 x 48" mounted on board, text panels and label copy
              </p>
              <p className="mb-2">
                <strong>Publications:</strong> Book published by Welcome Books, 4 page gallery guide
              </p>
              <p className="mb-2">
                <strong>Space Req:</strong> 120 - 180 running feet
              </p>
              <p className="mb-2">
                <strong>Loan Fee:</strong> On Request
              </p>
              <p className="mb-2">
                <strong>Req:</strong> Appropriate security
              </p>
              <p className="mb-2">
                <strong>Insurance:</strong> Exhibitor responsible
              </p>
              <p className="mb-2">
                <strong>Shipping:</strong> Exhibitor responsible
              </p>
              <p className="mb-2">
                <strong>Website:</strong> <a href="https://www.p-t-e.org/sanders" className="text-yellow-300 hover:text-white">www.p-t-e.org/sanders</a>
              </p>
              <p className="mb-2">
                <strong>Contact:</strong> Jeffrey Landau, Director, Tel: 310-397-3098, E-mail: <a href="mailto:jlandau@a-r-t.com" className="text-yellow-300 hover:text-white">jlandau@a-r-t.com</a>
              </p>
            </div>
          </div>
        </main> 
      </div>
    </>
  );
};

export default Page;
