import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <>
 
 
 <div className="flex flex-col items-center mx-auto max-w-4xl px-4">
      <table className="w-full max-w-3xl mb-4">
        <tbody>
          <tr>
            <td
              className="bg-red-800 text-white text-center py-2"
              style={{
                fontFamily:
                  'Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif',
                fontSize: '1.125rem'
              }}
            >
              <strong>Traveling Exhibition Available</strong>
            </td>
          </tr>
        </tbody>
      </table>
      
      <p className="text-center">
        <Image
          src="/manzggcover5.jpg"
          width={393}
          height={557}
          alt="Exhibition Image"
          className="mb-4"
        />
        <br />
        <span
          className="text-red-800"
          style={{
            fontFamily:
              'Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif',
            fontSize: '0.875rem'
          }}
        >
          <strong>
            - <a href="#intro">Introduction</a> -{' '}
            <a href="https://p-t-e.org/manzanar/Manzgalguide2014.pdf">
              Gallery Guide
            </a>{' '}
            - <a href="text.pdf">Text Panels -</a>{' '}
            <a href="https://p-t-e.org/manzanar/images/index.htm">
              <br />
            </a>{' '}
            - <a href="https://p-t-e.org/manzanar/xtras">Additional Works Images</a>{' '}
            -<br />
            <a href="#info">- Exhibition Info</a> - <a href="#sched">Schedule</a> -{' '}
            <a href="#con">Contact</a> -<br />
            <a
              href="https://p-t-e.org/manzanar"
            >
              <strong>- Exhibition Web Site: p-t-e.org/manzanar-</strong>
            </a>
          </strong>
        </span>
        <br />
      </p>
      
      <table className="w-full max-w-3xl mb-4">
        <tbody>
          <tr>
            <td className="text-center">
              <strong className="text-red-800">
                Exhibition Opens at Fullerton Museum Center, Fullerton, CA, January
                2023
                <br />
                with Emotional Reception. Former Detainees in Attendance <br />
                including Joyce Kilmer, one of Adams subjects, &amp; <br />
                Mary Nomura, "Songbird of Manzanar"{" "}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>

      <a
        href="https://fullertonobserver.com/2023/01/24/fullerton-museum-center/"
        className="text-center block mb-4"
      >
        <strong>PRESS- FULLERTON OBSERVER</strong>
        <br />
        <strong>https://fullertonobserver.com/2023/01/24/fullerton-museum-center/</strong>
      </a>

      <p className="text-center">
        <Image
          src="/all4cr.jpg"
          width={478}
          height={371}
          alt="All4CR"
          className="mb-4"
        />
      </p>

      <p className="text-center">
        <Image
          src="https://p-t-e.org/manzanar/IMG_2241.jpg"
          width={294}
          height={396}
          alt="Additional Image"
          className="mb-4"
        />
        <br />
        <a name="intro" id="intro" />
        <br />
      </p>
    </div>




 





 <div className="flex flex-col items-center p-4">
    <table className="w-full max-w-md mx-auto">
      <tbody>
        <tr>
          <td>
            <table className="w-full flex">
              <tbody>
                <tr>
                  <td className="w-1/4 flex justify-end">
                    <Image
                      src="https://p-t-e.org/manzanar/Manzlogo1.jpg"
                      width={81}
                      height={133}
                      alt="Manzanar logo"
                    />
                  </td>
                  <td className="w-3/4">
                    <div className="text-left">
                      <span className="style551">
                        <span className="style66">MANZANAR</span>
                        <br />
                        <span className="style76">THE WARTIME PHOTOGRAPHS OF </span>
                        <br />
                        <span className="style67">ANSEL ADAMS</span>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <div className="w-full max-w-lg mx-auto mt-4">
      <Image
        src="https://p-t-e.org/manzanar/manz16_001bff.jpg"
        width={498}
        height={335}
        alt="Manzanar photograph"
        className="w-full"
      />
    </div>

    <p className="text-justify p-4">
      <strong>MANZANAR: THE WARTIME PHOTOGRAPHS OF ANSEL ADAMS</strong> features fifty photographs by Ansel Adams of the Japanese American relocation camp in Manzanar, California, during World War II. These photographs were the subject of his controversial book <em>Born Free and Equal</em>, published in 1944 while the war was still on, protesting the treatment of these American citizens. Also included in the exhibition are more than twenty-five various photographs, documents, and works of art that further record this era.
    </p>
    <p className="text-left p-4">
      Adams's Manzanar work is a departure from his signature style of landscape photography. Although a majority of the photographs are portraits, the images also include views of daily life, agricultural scenes, and sports and leisure activities.
    </p>

    <div className="w-full max-w-lg mx-auto mt-4">
      <Image
        src="https://p-t-e.org/manzanar/image3 45.jpg"
        width={450}
        height={296}
        alt="Manzanar photograph"
        className="w-full"
      />
    </div>

    <p className="text-left p-4">
      Robert Flynn Johnson, Curator Emeritus, Achenbach Foundation for Graphic Arts, Fine Arts Museums of San Francisco, in his essay for the exhibition writes, “This exhibition recounts one of the darkest moments in the history of the United States, one that the distinguished author John Hersey referred to as ‘a mistake of terrifyingly horrible proportions.’ It is a story of ignorance and prejudice, but also a story of perseverance and nobility. What happened should never be forgotten so that it should never happen again.” Johnson continues, “This is not only an art exhibition, a history lesson, or a study in race relations; it is all three. My hope is that it educates us about an unfortunate moment in our country’s history that must be better understood. It also should serve as a warning as to what can occur when emotion and fear overwhelm clarity and courage.”
    </p>

    <div className="w-full max-w-lg mx-auto mt-4">
      <Image
        src="/eIMG_4454.jpg"
        width={450}
        height={330}
        alt="Manzanar photograph"
        className="w-full"
      />
    </div>

    <div className="w-full max-w-lg mx-auto mt-4">
      <Image
        src="/wall.jpg"
        width={448}
        height={241}
        alt="Manzanar photograph"
        className="w-full"
      />
    </div>

    <p className="text-left p-4">
      These Adams Manzanar photographs from 1943 were shown in the exhibition <em>BORN FREE AND EQUAL: An Exhibition of Ansel Adams Photographs</em>, organized by the Fresno Metropolitan Museum of Art, History and Science in 1984 and are later prints from the original negatives in the Library of Congress.
    </p>

    <div className="w-full max-w-xl mx-auto mt-4">
      <div className="grid grid-cols-2 gap-2">
        <Image
          src="https://p-t-e.org/manzanar/manz10_001.jpg"
          width={250}
          height={196}
          alt="Manzanar photograph"
          className="w-full"
        />
        <Image
          src="https://p-t-e.org/manzanar/manz43_001.jpg"
          width={250}
          height={195}
          alt="Manzanar photograph"
          className="w-full"
        />
        <Image
          src="/manz01_001.jpg"
          width={250}
          height={197}
          alt="Manzanar photograph"
          className="w-full"
        />
        <Image
          src="https://p-t-e.org/manzanar/manz29_001.jpg"
          width={250}
          height={197}
          alt="Manzanar photograph"
          className="w-full"
        />
        <Image
          src="https://p-t-e.org/manzanar/manz33_001.jpg"
          width={250}
          height={319}
          alt="Manzanar photograph"
          className="w-full"
        />
        <Image
          src="https://p-t-e.org/manzanar/manz50_001.jpg"
          width={250}
          height={319}
          alt="Manzanar photograph"
          className="w-full"
        />
        <Image
          src="/manz40_001.jpg"
          width={250}
          height={317}
          alt="Manzanar photograph"
          className="w-full"
        />
        <Image
          src="/manz28_001.jpg"
          width={250}
          height={317}
          alt="Manzanar photograph"
          className="w-full"
        />
      </div>
    </div>

    <p className="text-left p-4">
      An eight page brochure has been designed for the exhibition.
    </p>
    <p className="text-left p-4">
      The exhibition is available for circulation through 2026. The exhibition is presented in Memory of Shizuo Tsujihara, and organized by Photographic Traveling Exhibitions, Los Angeles, CA.
    </p>

    <table className="w-full max-w-3xl mx-auto bg-white p-4">
      <tbody>
        <tr>
          <td>
            <blockquote className="text-center">
              <p></p>
              <p>
                <span style={{ fontSize: 18 }}>
                  <em>
                    <strong>
                      To further enhance the subject, the following additional photographs, documents, and works of art are also included:
                    </strong>
                  </em>
                </span>
              </p>
              <table className="w-full max-w-xl mx-auto bg-white">
                <tbody>
                  <tr className="flex justify-around">
                    <td>
                      <div className="text-center">
                        <Image
                          src="https://p-t-e.org/manzanar/hsb.jpg"
                          height={190}
                          width={146}
                          alt="Manzanar photograph"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Image
                          src="https://p-t-e.org/manzanar/ph.jpg"
                          height={151}
                          width={182}
                          alt="Manzanar photograph"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Image
                          src="https://p-t-e.org/manzanar/eap.jpg"
                          height={195}
                          width={137}
                          alt="Manzanar photograph"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="flex justify-around mt-4">
                    <td>
                      <div className="text-center">
                        <Image
                          src="https://p-t-e.org/manzanar/photo3.jpg"
                          height={146}
                          width={118}
                          alt="Manzanar photograph"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Image
                          src="https://p-t-e.org/manzanar/vanity1.jpg"
                          height={162}
                          width={124}
                          alt="Manzanar photograph"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Image
                          src="https://p-t-e.org/manzanar/lange.jpg"
                          height={190}
                          width={149}
                          alt="Manzanar photograph"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p></p>
            </blockquote>
          </td>
        </tr>
      </tbody>
    </table>
  </div>













  <a name="info" id="info"></a>
<div className="flex justify-center">
  <table className="max-w-lg w-full border-0">
    <tbody>
      <tr>
        <td>
          <table className="w-full border-0">
            <tbody>
              <tr>
                <td className="w-1/4 h-36">
                  <div className="flex justify-end">
                    <img
                      src="https://p-t-e.org/manzanar/Manzlogo1.jpg"
                      className="w-20 h-36"
                      alt="Manzlogo"
                    />
                  </div>
                </td>
                <td className="w-3/4">
                  <span className="style551">
                    <span className="style66">MANZANAR</span>
                    <br />
                    <span className="style76">THE WARTIME PHOTOGRAPHS OF</span>
                    <br />
                    <span className="style67">ANSEL ADAMS</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<p className="text-center style3 style60">Exhibition Loan Information</p>
<div className="flex justify-center">
  <table className="max-w-md w-full border-0">
    <tbody>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Contents:</div>
        </td>
        <td className="w-3/4 align-top">
          <p className="text-left">
            80 works in total
            <br />
            <br />
            - 50 Ansel Adams photographs (framed size 16 x 20)
            <br />
            <br />
            - 1 Ansel Adams vintage photograph of Yosemite
            <br />
            <br />- 27 various photographs, documents and works of art
          </p>
          <p className="text-left">- 7 text panels</p>
          <p className="text-left">
            - detailed wall labels
            <br />
            <br />
          </p>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Lecturer:</div>
        </td>
        <td className="w-3/4 align-top">
          <div className="text-left">
            Curater, Robert Flynn Johnson,
            <br />
            Curator Emeritus, Achenbach Foundation,
            <br />
            Fine Arts Museums of San Francisco
          </div>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Publication:</div>
        </td>
        <td className="w-3/4 align-top">
          <div className="text-left">8 page gallery guide</div>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Space Req:</div>
        </td>
        <td className="w-3/4 align-top">
          <div className="text-left">150 – 200 running feet approx.</div>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Loan Fee:</div>
        </td>
        <td className="w-3/4 align-top">
          <div className="text-left">On request</div>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Insurance:</div>
        </td>
        <td className="w-3/4 align-top">
          <div className="text-left">Exhibitor responsible</div>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Shipping:</div>
        </td>
        <td className="w-3/4 align-top">
          <div className="text-left">Exhibitor responsible</div>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Req:</div>
        </td>
        <td className="w-3/4 align-top">
          <div className="text-left">Appropriate security</div>
        </td>
      </tr>
      <tr>
        <td className="w-1/4 align-top">
          <div className="text-left font-bold">Contact:</div>
        </td>
        <td className="w-3/4 align-top">
          <p className="text-left">
            Photographic Traveling Exhibitions
            <br />
            E-mail: info@a-r-t.com
            <br />
            Tel: 310 397 3098
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<a name="sched" id="sched"></a>
<p className="text-center">
  
  <br />
</p>
<div className="flex justify-center">
  <table className="max-w-md w-full border-0">
    <tbody>
      <tr>
        <td className="h-auto">
          <p className="text-center">
            <span className="style3 style60">Exhibition Schedule</span>
            <br />
            as of 01/20/23
          </p>
          <p className="text-center">
            2014
            <br />
            <br />
            Jan 4 – March 29
            <br />
            Jundt Art Gallery, Gonzaga University,
            <br />
            Spokane, WA
          </p>
          <p className="text-center">
            December 15, 2014 – May 3, 2014
            <br />
            Palm Springs Air Museum,
            <br />
            Palm Springs, CA
            <br />
            <br />
            2015
            <br />
            <br />
            May 21 – August 21
            <br />
            Marshall M. Fredericks Sculpture Museum
            <br />
            Saginaw Valley State University
            <br />
            University Center, MI
            <br />
            <br />
            September 15 – January 15, 2016
            <br />
            Skirball Museum
            <br />
            Los Angeles, CA
            <br />
            <br />
            2018
            <br />
            <br />
            February 9 - August 5
            <br />
            The Holocaust Museum
            <br />
            Dallas, TX
            <br />
            <br />
            2019
            <br />
            <br />
            January 11 - March 10
            <br />
            California Center for the Arts
            <br />
            Escondido, CA
            <br />
            <br />
            2020
          </p>
          <p className="text-center">
            February 1 - May 3
            <br />
            Citadelle Art Foundation
            <br />
            Canadian, TX
          </p>
          <p className="text-center">
            May 22 - September 7
            <br />
            Fenimore Museum
            <br />
            Cooperstown, NY
            <br />
            <br />
            2021
          </p>
          <p className="text-center">
            April 5 - July 21
            <br />
            Fenimore Art Museum
            <br />
            Cooperstown, NY
          </p>
          <p className="text-center">
            August 21 – October 31
            <br />
            Upcountry Historical Museum
            <br />
            Furman University
          </p>
          <p className="text-center">2022</p>
          <p className="text-center">
            February - September
            <br />
            Museum of Sonoma County
            <br />
            Santa Rosa, CA
          </p>
          <p className="text-center">2023</p>
          <p className="text-center">
            Jan 15 - April 15
            <br />
            Fullerton Museum Center
            <br />
            Fullerton, CA
          </p>
          <p className="text-center">
            May 1- December 31
            <br />
            OPEN
          </p>
          <p className="text-center">
            2024-2026
            <br />
            <br />
            OPEN
            <span className="style5">
              <a name="con" id="con"></a>
            </span>
            <br />
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

 



<div className="flex flex-col items-center justify-center px-4">
      <p>
        <strong>
          - <a href="#intro">Introduction</a> -{" "}
          <a href="https://p-t-e.org/manzanar/Manzgalguide2014.pdf">
            {" "}
            - Gallery Guide
          </a>{" "}
          - <a href="text.pdf">Text Panels -</a>{" "}
          <a href="https://p-t-e.org/manzanar/images/index.htm">
            <br />
          </a>{" "}
          - <a href="https://p-t-e.org/manzanar/xtras">Additional Works Images</a> -
          <br />
          <a href="#info">- Exhibition Info</a> - <a href="#sched">Schedule</a> -{" "}
          <a href="#con">Contact</a> -
        </strong>
        <br />
        <a
          href="https://p-t-e.org/manzanar"
        >
          <strong>- Exhibition Web Site: p-t-e.org/manzanar-</strong>
        </a>
      </p>
      <p
        style={{
          color: "#B7000A",
          fontFamily:
            'Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif'
        }}
      >
        &nbsp;
      </p>
      <p>&nbsp;</p>
      <p
        className="style56"
        style={{
          color: "#B7000A",
          fontFamily:
            'Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif',
          fontSize: 14
        }}
      >
        &nbsp;
      </p>
    </div>
</>

  )
}

export default page