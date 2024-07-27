import React from 'react'
import Image from 'next/image';
const page = () => {
  return (
    <>
     
  
  <a name="top" id="top" />
  <br />








  <div className="container mx-auto px-4">
      {/* Main table */}
      <table className="w-full max-w-screen-md mx-auto bg-white" cellPadding={8}>
        <tbody>
          <tr>
            <td>
              {/* Header table */}
              <table className="w-full mx-auto bg-gray-800 text-white">
                <tbody>
                  <tr>
                    <td className="py-4 px-6 text-center">
                      <span className="text-xl font-semibold">THE ART OF OBSERVATION</span>
                      <br />
                      The Best of Photographer
                      <br />
                      <span className="font-semibold">Elliott Erwitt</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              {/* Image table */}
              <table className="w-full mx-auto bg-white">
                <tbody>
                  <tr>
                    <td className="text-center">
                      <Image src="/NYC. 1974. Dog Legs (PAR42411).jpg" width={220} height={147} alt="" />
                    </td>
                    <td className="text-center">
                      <Image src="/ERE1989029W00002-05.jpg" width={213} height={142} alt="" />
                    </td>
                    <td className="text-center">
                      <Image src="/ca220.jpg" width={220} height={148} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <Image src="/mm220.jpg" width={220} height={148} alt="" />
                    </td>
                    <td className="text-center">
                      <Image src="/jken220.jpg" width={220} height={138} alt="" />
                    </td>
                    <td className="text-center">
                      <Image src="/bw220.jpg" width={220} height={146} alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center mt-4">
                <span className="block text-lg font-bold">A Traveling Exhibition</span>
                <br />
                Organized by <br />
                Photographic Traveling Exhibitions
                <br />
                <br />
                <strong>
                  - <a href="#intro" className="text-blue-600">Introduction</a> -{" "}
                  <a href="/erwitt/image" className="text-blue-600">Images of Works</a> -{" "}
                  <a href="#bio" className="text-blue-600">Erwitt Biography</a> -<br />
                  <a href="erwittlist.pdf" className="text-blue-600">-List of Works</a> -{" "}
                  <a href="#essay" className="text-blue-600">Gallery Guide Text</a> -{" "}
                  <a href="#facts" className="text-blue-600">Exhibition Facts</a> -
                </strong>
                <br />
                <br />
                <span className="block">All images © Elliott Erwitt</span>
                <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      {/* Second table */}
      <table className="w-full max-w-screen-md mx-auto bg-white">
        <tbody>
          <tr>
            <td>
              <table className="w-full mx-auto">
                <tbody>
                  <tr>
                    <td className="text-center">
                      <a href="https://p-t-e.org/erwitt/aa.html">
                        <Image
                          src="https://p-t-e.org/erwitt/eecover.jpg"
                          width={300}
                          height={380}
                          alt=""
                        />
                      </a>
                    </td>
                    <td className="text-center">
                      <Image
                        src="/erwitt fenimore 2022 7 300.jpg"
                        width={300}
                        height={192}
                        alt=""
                      />
                      <Image
                        src="/erwitt fenimore 2022 6 300.jpg"
                        width={300}
                        height={186}
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <strong>
                        <a href="https://p-t-e.org/erwitt/aa.html" className="text-blue-600">
                          Exhibition Featured in
                          <br />
                          Art & Antiques Magazine
                          <br />
                          January 2023
                        </a>
                      </strong>
                    </td>
                    <td className="text-center">
                      <strong>
                        Exhibition Presented at
                        <br />
                        Fenimore Art Museum,
                        <br />
                        Cooperstown, NY, 2021
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a name="intro" id="intro" />
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      {/* Third table */}
      <div className="flex justify-center  py-12 px-4">
      <table
        className="w-full max-w-screen-lg  text-white"
        cellPadding={12}
        cellSpacing={0}
      >
        <tbody>
          <tr>
            <td className="w-full" valign="top">
              <br />
              <table
                className="w-full bg-white text-black"
                cellPadding={16}
                cellSpacing={0}
              >
                <tbody>
                  <tr>
                    <td valign="top">
                      <p className="text-center">
                        <span className="text-xl font-bold block">
                          THE ART OF OBSERVATION
                        </span>
                        <br />
                        The Best of Photographer
                        <br />
                        <span className="text-lg font-semibold block">
                          Elliott Erwitt
                        </span>
                        <br />
                        <br />
                        <br />
                        <Image
                          src="/JAPAn  Elliott ERWITT.jpg"
                          width={435}
                          height={293}
                          alt="Elliott Erwitt"
                          className="mx-auto border border-gray-300"
                        />
                        <br />
                        <span className="text-sm block">Elliott Erwitt, 1970</span>
                        <br />
                      </p>
                      <p className="text-center text-lg font-semibold">
                        Introduction
                      </p>
                      <blockquote className="text-base">
                        <p>
                          Born in 1928, Elliott Erwitt has been a documentarian for
                          more than six decades, longer than any other American
                          photographer. Starting in his twenties, his classic image
                          of a mother and child on a bed was featured in the famous{' '}
                          <strong>
                            <em>Family of Man</em>
                          </strong>{' '}
                          exhibition in 1955. At the time this was considered the
                          greatest photographic exhibition of all time with 503
                          pictures exhibited at the Museum of Modern Art, and curated
                          by Edward Steichen. Erwitt has lived all over the world,
                          speaks three languages, has photographed countless
                          celebrities from Grace Kelly to Clark Gable as well as
                          seven presidents. He has won every award his profession
                          can offer, is a past president of Magnum…the finest photo
                          agency in the world…and recently was honored with a one
                          man exhibition by the International Center of Photography
                          for his lifetime contribution to the medium. This exhibition
                          includes over 90 images hand selected by Erwitt himself.
                        </p>
                        <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3">
                          <div className="w-full">
                            <Image
                              src="/erwitt fenimore 2022 1 580.jpg"
                              width={580}
                              height={396}
                              alt="Exhibition Image 1"
                              className="w-full border border-gray-300"
                            />
                          </div>
                          <div className="w-full">
                            <Image
                              src="/erwitt fenimore 2022 8 600.jpg"
                              width={581}
                              height={327}
                              alt="Exhibition Image 2"
                              className="w-full border border-gray-300"
                            />
                          </div>
                          <div className="w-full">
                            <Image
                              src="/erwitt fenimore 2022 9 600.jpg"
                              width={575}
                              height={323}
                              alt="Exhibition Image 3"
                              className="w-full border border-gray-300"
                            />
                          </div>
                          <div className="w-full">
                            <Image
                              src="/erwitt fenimore 2022 11 580.jpg"
                              width={580}
                              height={326}
                              alt="Exhibition Image 4"
                              className="w-full border border-gray-300"
                            />
                          </div>
                          <div className="w-full">
                            <Image
                              src="/erwitt fenimore 2022 4 600.jpg"
                              width={580}
                              height={303}
                              alt="Exhibition Image 5"
                              className="w-full border border-gray-300"
                            />
                          </div>
                        </div>
                        <p>
                          In his essay for the gallery guide, Steven Hoelscher,
                          Departments of American Studies and Geography, Harry Ransom
                          Center, University of Texas at Austin, writes, "This
                          exhibition offers an enticing window into Elliott Erwitt's
                          oeuvre. It showcases the impressive results of a remarkable
                          career that coincides with two of the most significant
                          developments in photography in the second half of the
                          twentieth century: the rise of mass-circulation picture
                          magazines; and the occasionally contentious relationship
                          between personal work and commercial photography. Elliott
                          Erwitt has been a vital figure in each of these domains,
                          as noted by his colleague, Henri Cartier-Bresson: "Elliott
                          has, to my mind, achieved a miracle working on a chain-gang
                          of commercial campaigns and still offering a bouquet of
                          stolen photographs with a flavor, a smile from his deeper
                          self." This exhibition shows both the miracle of Erwitt's
                          balance between commercial and personal photography, and
                          the memorable flavor that he brings to his work."
                        </p>
                        <p>
                          The exhibition has been exhibited at the Springfield Museums,
                          Springfield, MA, in 2019, at the Boca Raton Museum of Art,
                          FL, in 2015 and at the Fenimore Art Museum, Cooperstown, NY,
                          2022. It is available for scheduling through 2025.
                        </p>
                      </blockquote>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center">
                <a name="images" id="images" />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>













    <div className="max-w-screen-xl mx-auto px-4">
        <table className="w-full max-w-4xl mx-auto bg-white">
          <tbody>
            <tr>
              <td className="w-full bg-white">
                <div className="text-center">
                  <table className="w-full max-w-3xl mx-auto p-4 bg-white">
                    <tbody>
                      <tr>
                        <td className="w-1/3">
                          <Image src="/trainb.jpg" width={220} height={148} alt="Train" />
                        </td>
                        <td className="w-1/3">
                          <Image src="/babybed.jpg" width={220} height={144} alt="Baby Bed" />
                        </td>
                        <td className="w-1/3">
                          <Image src="/Pittsburgh. 1950. (Boy through window)2.jpg" width={220} height={150} alt="Pittsburgh 1950" />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <Image src="/-1000.jpg" width={200} height={291} alt="1000" />
                        </td>
                        <td className="text-center">
                          <p className="text-center">
                            <span className="block">
                              Photographs by <br />
                              <span className="font-bold">Elliott Erwitt</span>
                            </span>
                          </p>
                          <Image src="/gablem1.jpg" width={217} height={183} alt="Gablem1" />
                        </td>
                        <td className="text-center">
                          <Image src="/esb.jpg" width={200} height={301} alt="ESB" />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <Image src="/kidcouples.jpg" width={220} height={147} alt="Kid Couples" />
                        </td>
                        <td className="text-center">
                          <Image src="/USA. Alabama. 1955 b..jpg" width={220} height={146} alt="USA Alabama" />
                        </td>
                        <td className="text-center">
                          <Image src="/USA. Kissimmee Florida. 1997b.jpg" width={220} height={147} alt="USA Kissimmee" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Second Table */}
      <div className="max-w-screen-xl mx-auto px-4">
        <table className="w-full max-w-4xl mx-auto ">
          <tbody>
            <tr>
              <td className="">
                <div className="text-center py-8">
                  <table className="w-full max-w-3xl mx-auto bg-white p-4">
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <span className="block text-lg font-bold">THE ART OF OBSERVATION</span>
                          <p className="text-md">The Best of Photographer</p>
                          <span className="block font-bold">Elliott Erwitt</span>
                          <span className="block text-lg font-bold">Exhibition Facts</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table className="w-full">
                            <tbody>
                              <tr>
                                <td className="font-bold">Dates Available: </td>
                                <td>2023-2025</td>
                              </tr>
                              <tr>
                                <td className="font-bold">Contents: </td>
                                <td>
                                  <p>93 framed gelatin silver print photographs</p>
                                  <p>text panel and label copy</p>
                                </td>
                              </tr>
                              <tr>
                                <td className="font-bold">Lecturer:</td>
                                <td>Steven Hoelscher, Departments of American Studies and Geography, Harry Ransom Center, University of Texas at Austin</td>
                              </tr>
                              <tr>
                                <td className="font-bold">Space Req: </td>
                                <td>200 - 300 running feet</td>
                              </tr>
                              <tr>
                                <td className="font-bold">Loan Fee:</td>
                                <td>On Request</td>
                              </tr>
                              <tr>
                                <td className="font-bold">Req: </td>
                                <td>Appropriate security</td>
                              </tr>
                              <tr>
                                <td className="font-bold">Insurance: </td>
                                <td>Exhibitor responsible</td>
                              </tr>
                              <tr>
                                <td className="font-bold">Shipping:</td>
                                <td>Exhibitor responsible</td>
                              </tr>
                              <tr>
                                <td className="font-bold">Website</td>
                                <td>
                                  <a href="https://www.p-t-e.org/erwitt" className="text-blue-500">www.p-t-e.org/erwitt</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="font-bold">Contact:</td>
                                <td>
                                  <p>
                                    Jeffrey Landau, Director, PTE <br />
                                    Tel: 310-397-3098 <br />
                                    E-mail: <a href="mailto: info@p-t-e.org" className="text-blue-500">info@p-t-e.org</a>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <strong>
                            - <a href="#intro" className="text-blue-500">Introduction</a> -{" "}
                            <a href="/erwitt/image" className="text-blue-500">Images of Works</a> -{" "}
                            <a href="#bio" className="text-blue-500">Erwitt Biography</a> -<br />
                            <a href="erwittlist.pdf" className="text-blue-500">List of Works</a> -{" "}
                            <a href="#essay" className="text-blue-500">Gallery Guide Text</a> -{" "}
                            <a href="#facts" className="text-blue-500">Exhibition Facts</a> -
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Third Table */}
      <div className="max-w-screen-xl mx-auto px-4">
        <table className="w-full max-w-4xl mx-auto ">
          <tbody>
            <tr>
              <td className="">
                <table className="w-full max-w-3xl mx-auto bg-white p-4">
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <p className="text-2xl font-bold">
                          Elliott Erwitt
                          <br />
                          <span className="text-xl font-semibold">Biography</span>
                        </p>
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td>
                                <Image src="/USA. East Hampton  New York  1998  American photographer Elliott ERWITT .jpg" width={200} height={260} alt="Elliott Erwitt 1998" />
                              </td>
                              <td />
                              <td>
                                <Image src="/IRELAND erwittport.jpg" width={168} height={250} alt="Elliott Erwitt 1970" />
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                Elliott Erwitt, 1998
                              </td>
                              <td />
                              <td className="text-center">
                                <span className="text-center">Elliott Erwitt, 1970</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          Elliott Erwitt was born in Paris to Russian émigré parents on July 26th, 1928. His formative years were spent in Milan. At the age of 10 his family moved back to Paris only to immigrate to New York a year later, then transferring to Los Angeles in 1941. While attending Hollywood High School he worked in a commercial darkroom processing “signed” prints for fans of movie stars
                        </p>
                        <p>
                          In 1948 by good fortune while looking for work on exploratory trips to New York City, Erwitt met Edward Steichen, Robert Capa and Roy Stryker who liked his photographs and took a personal guiding interest becoming significant mentors. The following year he returned to Europe traveling and photographing in France and Germany. When he finally got the opportunity to assist Capa and Stryker he decided to continue his education. He attended the New School for Social Research in New York, and studied briefly with Lisette Model, while working as a commercial photographer for the next several years. Erwitt also worked as a director and as a still photographer for the film industry for several years before becoming a freelance photographer.
                        </p>
                        <p>
                          For many years he worked as a staff photographer for magazines including Life, Look, and Holiday. For several decades he has been an acclaimed contributor to Magnum Photos, often exhibiting his work with the agency and throughout the world.
                        </p>
                        <p>
                          Erwitt’s photographs capture an almost surreal quality and wit. Often taken off guard or spontaneous, the subjects in his photographs are often surprising and sometimes quite humorous.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <strong>
                          - <a href="#intro" className="text-blue-500">Introduction</a> -{" "}
                          <a href="/erwitt/image" className="text-blue-500">Images of Works</a> -{" "}
                          <a href="#bio" className="text-blue-500">Erwitt Biography</a> -<br />
                          <a href="erwittlist.pdf" className="text-blue-500">List of Works</a> -{" "}
                          <a href="#essay" className="text-blue-500">Gallery Guide Text</a> -{" "}
                          <a href="#facts" className="text-blue-500">Exhibition Facts</a> -
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>




      <div className="flex flex-col items-center  py-8 px-4">
      <a name="essay" id="essay" />

      <div className="bg-white p-4 md:p-8 lg:p-16 w-full max-w-4xl">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8">
          Elliott Erwitt's <br />
          Art of Observation
        </h1>

        <div className="flex justify-center mb-8">
          <Image
            src="/cracked 500dpi.jpg" // Make sure this path is correct
            width={447}
            height={299}
            alt="Elliott Erwitt's Photograph"
          />
        </div>

        <div className="text-center text-sm md:text-base">
          <p className="mb-4">
            by Steven Hoelscher,<br />
            <span className="italic">
              Departments of American Studies and Geography,<br />
              Harry Ransom Center, University of Texas at Austin
            </span>
          </p>
          <p className="mb-4">© 2015</p>
        </div>

        <div className="text-left text-sm md:text-base">
          <p className="mb-4">
            Few photographers have had a greater impact on American visual culture than Elliott Erwitt. Some of his best-known photographs are icons of photojournalism: Richard Nixon burying his finger in Nikita Krushchev's chest during their so-called Moscow "kitchen debate" in 1959; Jacqueline Kennedy, veiled and in distress at the funeral of her husband in 1963; the unnamed Pittsburgh boy with a pistol to his head. Likewise, his portraits of celebrities like Grace Kelley, Che Guevara, Marilyn Monroe, and Arnold Schwarzenegger have achieved notoriety, but so too have his photographs of everyday life: a couple reflected in the side mirror of a car when they are cuddling; a young mother and her newborn daughter gazing affectionately at each other, much to the approval of a nearby cat. In these and in so many of his photographs, and with a keen visual sense and finely honed wit, Elliott Erwitt illuminates the small moments of life, even when covering major news events. This is how he describes his craft: "To me, photography is an art of observation. It's about finding something interesting in an ordinary place. I've found it has little to do with the things you see and everything to do with the way you see them."
          </p>
          <p className="mb-4">
            This insightful approach to both photography and the human condition more generally has served Erwitt well. A cosmopolitan by both necessity and profession, Elliott Erwitt has practiced his art of observation across the globe. The only child of displaced Russians, Erwitt was born in Paris, spent the first 11 years of his life in Milan, fled Europe as war approached, and, at 16, found himself living on his own in Los Angeles, where he first developed an interest in photography. But it was in New York that Erwitt met Edward Steichen, Roy Stryker, and Robert Capa, three titans of the photography world who took an interest in the young immigrant and helped launch his career. It was Capa who, in 1953, invited him to join Magnum Photos, the distinguished agency, which elected Erwitt three times to serve as its President. In the 1970s, he expanded his work beyond photography and began making films, both documentary and comedy television. While actively working for magazines, and industrial and advertising clients, Erwitt has created books and exhibitions of his photography. To date, he has published more than 25 photography books including Photographs and Anti-Photographs (1973); Dog Dogs (1998); Museum Watching (1999); Personal Best (2010); Sequentially Yours (2011); Kolor (2013); and most recently Regarding Women (2104). His photographs have been featured in exhibits all around the world including the Museum of Modern Art in New York, the Art Institute of Chicago, the Barbican in London, the Kyoto Museum of Contemporary Art, the International Center of Photography, where he was the 2011 recipient of the ICP's Infinity Award for Lifetime Achievement.
          </p>
          <p>
            The smile that Cartier-Bresson describes stems from Erwitt's life-long project to observe, and then comment on, the human comedy. One of the great masters of humor and irony in photography, Erwitt consistently and poetically captures life's comic parade. For this beloved image-maker, the human comedy is not always funny, but sometimes marked by fear-based hatreds, loneliness, and banality. Elliott Erwitt's art of observation-itself imbued with irony and a tendency toward off-kilter juxtaposition-surveys the human comedy in its endless variety. <br />
            <br />
            What emerges from his camera is a complicated world where the ordinary and absurd reside side-by-side. He may be most well known for his offbeat humor, but that's only part of what makes his photographic art so original. Equally important is a highly developed visual sensibility. This photographer's art of observation reaches its full potential when it captures a memorable moment, or, as Erwitt himself describes it, "a synthesis of a situation, an instant when it all comes together." Regardless of whether the photograph came from his work in photojournalism, as part of an advertising campaign, or as a personal "snap," each memorable picture presents a moment worth pondering. For Erwitt, that moment is decisive if the formal elements of the picture come together to create an original and highly personal comment about the subject. Look at the young boy peering out of the Colorado car in 1955 with the shattered window bullet hole located directly before this right eye. It's a haunting picture and it's up to each of us viewers to decide what that comment is; Erwitt won't tell us. But that's exactly what makes looking at photographs so rewarding.
          </p>
        </div>

        <div className="text-center mt-8">
          <a href="#top" className="text-blue-600 hover:underline">
            - Return to Top -
          </a>
        </div>
      </div>

      <div className="text-center text-white mt-8">
        <Image
          src="https://p-t-e.org/erwitt/ptelgo300p.jpg"
          width={215}
          height={42}
          alt="PTE Logo"
        />
        <p className="mt-2">C. 2023 PTE</p>
      </div>
    </div>
 
</>

  )
}

export default page