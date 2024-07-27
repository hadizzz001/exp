import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Page = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>PICTURING AMERICA'S PASTIME Exhibition</title>
      <div className=" text-white text-center min-h-screen"> 
        <div className="container mx-auto p-4">
          <div className="bg-white text-blue-900 p-4">
            <img
              src="baseballhof/PAP Poster bb 360.jpg"
              width={360}
              height={501}
              alt="Exhibition Poster"
              className="mx-auto"
            />
            <div className="mt-4">
              <strong>A NEW TRAVELING EXHIBITION</strong>
              <p className="text-lg">
                <strong>
                  Organized by <br />
                  The National Baseball Hall of Fame and Museum
                  <br />
                  Cooperstown, NY
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <p className="text-lg">
            <strong>
              - <a href="baseballhof.html#intro">Introduction</a> -{" "}
              <a href="baseballhof/paplow0422.pdf">List of Works</a> -{" "}
              <a href="baseballhof/papinstallguide.pdf">Installation Guide</a> -
              {" "}
              <a href="baseballhof.html#facts">Facts</a> -
              {" "}
              <a href="baseballhof.html#dates">Schedule</a> -{" "}
              <a href="baseballhof.html#contact">Contact</a> -
            </strong>
          </p>
        </div>

        <div className="container mx-auto p-4">
          <div className="bg-white text-blue-900 p-4">
            <img
              src="baseballhof/Introductionedefinalr.jpg"
              width={600}
              height={386}
              alt="Introduction Image"
              className="mx-auto"
            />
            <div className="mt-4">
              <img
                src="baseballhof/PAP with ball250.jpg"
                width={250}
                height={167}
                alt="Exhibition Image"
                className="mx-auto"
              />
              <p className="text-lg mt-4">
                <strong>
                  Traveling Exhibition Now Available <br />
                  2022 - 2026
                </strong>
              </p>
            </div>
            <div className="text-left mt-4">
              <p>
                As baseball became our “National Pastime” in mid-19th century America, a new art— photography—was there to document the sport. From the grandeur of the early game to the vibrancy of today’s big league action, almost every facet of baseball has been captured in sepia, black-and-white and color.
              </p>
              <p>
                Preserving the historic link between baseball and photography, the National Baseball Hall of Fame and Museum’s collection of approximately 350,000 unique images is the world’s premiere repository of baseball photos, spanning well over 150 years of the sport’s history. The Museum’s Picturing America’s Pastime exhibition features a variety of these timeless pictures, many by distinguished photographers and each accompanied by an enriching and historic quote. Now the exhibit embarks on a national road trip, commemorating and celebrating the inextricably entwined worlds of baseball and photography by picturing America’s pastime.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="bg-white text-blue-900 p-4">
            <div className="text-center mb-4">
              <span className="text-2xl font-bold">CURATOR'S STATEMENT</span>
            </div>
            <div className="text-left">
              <p>
                While it may be cliché to say that a picture is worth a thousand words, it is also an understatement. They are really worth much more. Images tell stories that go well beyond words. And the honesty and immediacy of a very special type of image — the photograph — makes for a unique relationship between the picture and the history it records.
              </p>
              <p>
                Baseball and photography grew up together, each becoming more refined and gaining in popularity during the mid-19th century. As the repository of our national pastime’s long history, it is only fitting that the National Baseball Hall of Fame and Museum should tour an exhibit highlighting its expansive photographic archives.
              </p>
            </div>
            <img
              src="baseballhof/PAP gallery 5 500.jpg"
              width={485}
              height={326}
              alt="Gallery Image"
              className="mx-auto mt-4"
            />
            <img
              src="baseballhof/bhofinst3.jpg"
              width={487}
              height={341}
              alt="Installation Image"
              className="mx-auto mt-4"
            />
            <div className="text-left mt-4">
              <p>
                When preparations for the exhibit began in 2012, the Hall of Fame’s curatorial team faced the daunting task of choosing around 50 photographs from a collection of over 350,000 images. The team embraced the challenge, worked diligently for a number of months, and culled down the vast possibilities to a selection of a few hundred pictures. Further cuts proved grueling, as each photo seemed to beg for inclusion. The difficult process reinforced just how impressive the Hall’s photo archive is and ultimately resulted in a great exhibit, both on the wall and on “the cutting room floor.”
              </p>
              <p>
                <img
                  src="baseballhof/South wall 2.jpg"
                  width={480}
                  height={322}
                  alt="South Wall Image"
                  className="mx-auto"
                />
                <img
                  src="baseballhof/PAP gallery 2 500.jpg"
                  width={477}
                  height={306}
                  alt="Gallery Image"
                  className="mx-auto mt-4"
                />
                In 1924, American photographer Alfred Stieglitz wrote to novelist Sherwood Anderson:
              </p>
              <div className="text-left border-t border-blue-900 mt-4 pt-4">
                <p>
                  “Yesterday afternoon as I went for the mail, the drugstore was filled with villagers listening to the Radio. Baseball. ... I was wondering, would a crowd of Americans ever stand before a picture of real value with a fraction of the enthusiasm spent on baseball?”
                </p>
                <p>
                  Perhaps they would, if the pictures were of baseball.
                </p>
              </div>
              <img
                src="baseballhof/SW corner 480.jpg"
                width={480}
                height={358}
                alt="SW Corner Image"
                className="mx-auto mt-4"
              />
            </div>
          </div>
        </div>
 
      </div>
    </>
  );
}

export default Page;
