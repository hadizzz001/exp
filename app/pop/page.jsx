import React from 'react'
import Image from 'next/image';

const page = () => {

  const photographers = [
  ["Berenice Abbott", "Ansel Adams", "Robert Adams", "Kristoffer Albrecht", "Eve Arnold", "George Ayres", "David Bailey", "Bruno Barbey", "Lillian Bassman", "Ruth Bernhard", "Samuel Bourne", "Bill Brandt", "Manuel Alvarez Bravo", "Dan Budnik", "Wynn Bullock", "Rene Burri", "Cornell Capa", "Paul Caponigro", "Henri Cartier-Bresson", "Raymond Cauchetier", "William Clift", "Jeffrey Conley", "Ted Croner", "Imogen Cunningham", "Edward Curtis", "Georges Dambier", "Bruce Davidson"],
  ["Martin Elkort", "Elliott Erwitt", "Gianni Berengo Gardin", "Mario Giacomelli", "Ralph Gibson", "René Groebli", "John Gutmann", "Evelyn Hofer", "Martha Holmes", "Judy Glickman Lauder", "Charles Harbutt", "Bert Hardy", "William Heick", "Chester Higgins Jr.", "Thurston Hopkins", "Earlie Hudnall", "Graciela Iturbide", "Colin Jones", "Yousuf Karsh", "Andre Kertész", "William Klein", "Sergio Larrain", "Lisa Law", "Neil Leifer", "Fred Lyon", "Kurt Markus"],
  ["Steve McCurry", "Milton Miller", "Sarah Moon", "Carl Mydans", "Mario Cravo Neto", "Arnold Newman", "Len Prince", "Nancy Rexroth", "Marc Riboud", "Willy Ronis", "Sebastião Salgado", "Pentti Sammallahti", "Jürgen Schadeberg", "Steve Schapiro", "Barry Schneier", "Melvin Sokolsky", "Louis Stettner", "Wolfgang Suschitzky", "John Szarkowski", "George A. Tice", "Sabine Weiss", "Brett Weston", "Minor White", "Max Yavno", "Roman Vishniac", "Weegee"]
];
  return (
    <>  
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,td,th {\n    text-align: center;\n    color: #010000;\n    font-size: 24px;\n    font-family: Baskerville, "Palatino Linotype", Palatino, "Century Schoolbook L", "Times New Roman", serif;\n}\nbody {\n    background-color: #010000;\n    color: #F5EE34;\n    font-size: 9px;\n}\na:link {\n    color: #973CFC;\n}\na:visited {\n    color: #3400E5;\n    font-size: 14px;\n    font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif;\n}\n'
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '\n<!--\np.MsoNormal {\nmargin:0in;\nmargin-bottom:.0001pt;\nfont-size:10.0pt;\nfont-family:"Times New Roman",serif;\n}\n-->\n'
    }}
  />
 
 <div className="container">
      <div className="text-center my-5">
        <h2 className="text-white bg-dark p-4">New Traveling Exhibition Available</h2>
        <img src="/pop/POPS420.jpg" className="img-fluid my-4 mx-auto" alt="Traveling Exhibition" />
        <h3 className="text-white bg-dark p-4">International Museum Tour 2023-2027</h3>
      </div>

      <div className="text-center mb-4">
        <h4 className="font-weight-bold">
          Exhibition Premieres at the <br />
          Bowers Museum, Santa Ana, CA, <br />
          October 2023
        </h4>
        <div className="d-flex justify-content-center">
          <Image 
            src="/pop/Bowers-logo.jpg" 
            alt="Bowers Museum" 
            layout="responsive" 
            width={1600} 
            height={900} 
          />
        </div>
      </div>

      <div className="text-center mb-4">
        <h5><strong>THE POWER OF PHOTOGRAPHY: 19th-20th Century Original Master Prints</strong></h5>
        <p>
          features a selection of 120 iconic images from 120 different photographers which celebrate the photograph’s unique capacity for sensibility. 
          The exhibition premiered recently at the Bowers Museum, Santa Ana, CA, to rave reviews and strong attendance. The exhibition next travels to 
          the Naples Art Institute, Naples, FL, in February 2024.
        </p>
        <blockquote className="blockquote">
          <p>“<em>A sleeper blockbuster.</em>”<br /> - Sean O’ Harrow, Director, Bowers Museum</p>
          <p>“<em>Of all the exhibitions we have had at Bowers Museum, I cannot think of any other that so thoroughly answers the question of what it means to be human. 
            The Power of Photography distills our whole diverse world into an exhibition. What a wonderful thing it is to see visitors get transported halfway across the 
            planet by Henri Cartier-Bresson’s On the Banks of the Marne or Steve McCurry’s The Afghan Girl.</em>”<br /> - Mark Bustamante, Director of Special Exhibition Development</p>
        </blockquote>
      </div>

      <div className="text-center my-4">
        <img src="/pop/POP SA pana 600.jpg" className="img-fluid mx-auto" alt="Photography Exhibition" />
      </div>

      <div className="row text-center mb-4">
        <div className="col-md-4 mb-3">
          <img src="/pop/bowers 600.jpg" className="img-fluid mx-auto" alt="Bowers 600" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/pop/bowersmuseum3 200.jpg" className="img-fluid mx-auto" alt="Bowers Museum 3" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/pop/t13y0etqf.jpg" className="img-fluid mx-auto" alt="T13Y0etqf" />
        </div>
      </div>
      <div className="row text-center mb-4">
        <div className="col-md-4 mb-3">
          <img src="/pop/POPSa entry200B.jpg" className="img-fluid mx-auto" alt="POPSa Entry" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/pop/ab people 600.jpg" className="img-fluid mx-auto" alt="AB People 600" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/pop/ag3.jpg" className="img-fluid mx-auto" alt="AG3" />
        </div>
      </div>

      <div className="text-center my-4">
        <h5 className="font-weight-bold">
          <a href="/pop/popvideo.mp4">- Video Interview with Curator</a> - 
          <a href="#press"> Press -</a>
          <a href="/pop/POP List 120 1023 PTE.pdf">- List of Works with Images and Dimensions -</a>
          <br />
          <span className="text-warning">
            <a href="/pop/POP list with captions.pdf">- Illustrated List with Captions -</a>
          </span>
          <br />
          <a href="#facts">- Facts -</a> 
          <a href="#contact">- Contact -</a> 
          <a href="#sched">- Schedule -</a>
        </h5>
      </div>
    </div>
          <strong>
 



              <div className="container text-center my-4">
      <div className="row">
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/4975ab67a7d1b527cd77c4a381f0770b.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            LEN PRINCE
            <br />
            USA, b.1953
            <br />
            Ford Model VIII bathing cap, New York City, 1991 <br />
            <span role="presentation">© Len Prince Photography & Papers, Collection, Stuart A.</span>
            <br />
            <span role="presentation">Rose Library at Emory University</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/d90b5901a8c8e6d5dbb4b2e8f01d5549.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            SEBASTIÃO SALGADO
            <br />
            Brazil, b.1944
            <br />
            Ashaninka, State of Acre, Brazil, 2016 <br />
            <span role="presentation">© Sebastião Salgado / Amazonas Images</span>, <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/6c3f2d4e9cddb30e5d1d39c636ba6c4d.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            CHESTER HIGGINS JR.
            <br />
            USA, b.1946
            <br />
            Maya Angelou, 1970 <br />
            <span role="presentation">© Chester Higgins Jr., Maya Angelou, 1970.</span> <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/c29bfa3eeebb43741153667a1ba554bd.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            WOLFGANG SUSCHITZKY
            <br />
            Austria, 1912–2016
            <br />
            Charing Cross Road from No. 84 <br />
            (Marks & Co.), 1937 <br />
            <span role="presentation">© Wolfgang Suschitzky / Estate of Wolfgang Suschitzky</span> <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/e93265f30d8f61c52bd74a535edd0ffb.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            ANDRÉ KERTÉSZ
            <br />
            Hungary, 1894–1985
            <br />
            Martinique, 1972 <br />
            <span role="presentation">© Andre Kertész / Estate of Andre Kertész</span> <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/b90d6db8345dddb876c12fc912ace41d.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            SABINE WEISS
            <br />
            Switzerland, 1924-2021
            <br />
            La 2CV, Paris, 1957 <br />
            <span role="presentation">© Sabine Weiss / Estate of Sabine Weiss</span> <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/350893fb99f6361c6e27e2209742c83d.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            ALEXANDER HESLER
            <br />
            Canada, 1823–1895
            <br />
            Portrait of Abraham Lincoln, 3 June 1860 <br />
            <span role="presentation">Public Domain</span> <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/ba05c99324d7ef95a7f9cc51742fbee1.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            RICHARD CORMAN 1954
            <br />
            Basquiat A Portrait III, 1984/ <br />
            <span role="presentation">© Richard Corman, Basquiat III</span> <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/9633113cb0648bae1ee325685fb9f46c.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            YOUSUF KARSH
            <br />
            Turkey, 1908–2002
            <br />
            Winston Churchill, 1941 <br />
            <span role="presentation">© Yousuf Karsh / Estate of Yousuf Karsh</span> <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
      </div>






      <div className="container mt-4">
      <div className="row text-center">
        <div className="col-sm-4 mb-3">
          <img
            src="/pop/netto 160.jpg"
            alt=""
            className="img-fluid"
            width={145}
            height={145}
          />
          <p style={{ fontSize: '9px' }}>
            Mário Cravo Neto (Brazilian, 1947-2009) Odé 1985 Gelatin silver print
            <br />
            <span role="presentation">© Mario Cravo Neto</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="/pop/worth 140.jpg"
            alt=""
            className="img-fluid"
            width={109}
            height={140}
          />
          <p style={{ fontSize: '9px' }}>
            Don Worth (American, 1924-2009) Calathea Vittata, Oahu 1977
            <br />
            <span role="presentation">© Don Worth / Estate of Don Worth</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="/pop/kenna160.jpg"
            alt=""
            className="img-fluid"
            width={142}
            height={142}
          />
          <p style={{ fontSize: '9px' }}>
            Michael Kenna (English, 1953-) Torii Gate, Study 3, Shosanbetsu, Hokkaido 2014, printed 2021
            <br />
            <span role="presentation">© Michael Kenna</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
      </div>
    </div>












    </div>



















    <div className="container mt-4">
      <div className="row text-center">
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/989587a04097207c15568c6f37c01b6a.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            Mário Cravo Neto (Brazilian, 1947-2009) Odé 1985 Gela􀆟n silver print
            <br />
            <span role="presentation">© Mario Cravo Neto</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/007ba2022fc4bb1f8aee893c2dd45299.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            Don Worth (American, 1924-2009) Calathea Vittata, Oahu 1977
            <br />
            <span role="presentation">© Don Worth / Estate of Don Worth</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/6401074ff0c9e184cbf385456ea99a46.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            Michael Kenna (English, 1953-) Torii Gate, Study 3, Shosanbetsu, Hokkaido 2014, printed 2021
            <br />
            <span role="presentation">© Michael Kenna</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/028d3004ee61a6a77d124351433ec0d0.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            NEIL LEIFER
            <br />
            USA, b.1942
            <br />
            Muhammad Ali vs Sonny Liston, 1965
            <br />
            <span role="presentation">© Neil Leifer / Iconic Images</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/406364abb16214732c8e966739ab8bbf.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            STEVE McCURRY
            <br />
            USA, b.1950
            <br />
            The Afghan girl, Sharbat Gula, Pakistan, 1984
            <br />
            <span role="presentation">© Steve McCurry/Magnum Photos</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
        <div className="col-sm-4 mb-3">
          <img
            src="https://staticapp.icpsc.com/icp/resources/mogile/368320/a3e38ec23a12f42e18383fba7e3121e6.jpeg"
            alt=""
            className="img-fluid"
          />
          <p style={{ fontSize: '9px' }}>
            Norman Parkinson
            <br />
            1913-1990
            <br />
            Audrey Hepburn with Flowers, 1955
            <br />
            <span role="presentation">© Norman Parkinson / Iconic Images</span>
            <br />
            <span role="presentation">Courtesy of Peter Fetterman Gallery</span>
          </p>
        </div>
      </div>

 
    </div>



























 
    <div className="container mt-5">
    <h2 className="text-center mb-4"><u>List of Photographers</u></h2>
    <div className="row">
      {photographers.map((column, index) => (
        <div key={index} className="col-md-4">
          <ul className="list-unstyled">
            {column.map((photographer, i) => (
              <li key={i}>{photographer}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>



  <div className="container mt-5">
    <div className="text-center mb-4">
      <Image src="/pop/ca-.jpg" width={600} height={396} alt="The Power of Photography" />
      <h2 className="mt-3">THE POWER OF PHOTOGRAPHY</h2>
      <h4>Traveling Exhibition</h4>
    </div>
    <blockquote className="blockquote text-center mt-4">
      <p className="mb-0">
        <strong>THE POWER OF PHOTOGRAPHY</strong>{" "}
        <span>exhibition features a selection of 120 iconic images by 120 different photographers, which celebrate the photograph’s unique capacity for sensibility. The exhibition was curated by pioneering collector and gallerist Peter Fetterman who has been championing the photographic arts for over 40 years. Fetterman runs one of the leading fine art photography galleries in the world with a special emphasis on humanist photography.</span>
      </p>
      <p className="mb-0">
        <span>During the long months of lockdown, he exhibited one photograph per day, online, accompanied by inspirational text, quotes, and poetry. This digital collection of now over 1100 images struck a chord with followers from around the world. A deluxe book featuring 120 images from the online series has been printed in Italy and published by ACC Art Books. It was a best seller on Amazon upon its release.</span>
      </p>
    </blockquote>
    <div className="text-center mt-4">
      <Image src="/pop/abe g.jpg" width={600} height={348} alt="Sample Image" />
      <Image src="/pop/aaaaaBOWMUS028 dd.jpg" width={600} height={354} alt="Sample Image" />
      <Image src="/pop/BOWFET004IDs.jpg" width={600} height={387} alt="Sample Image" />
    </div>
    <blockquote className="blockquote mt-4">
      <p className="mb-0">
        This exhibition presents a carefully curated selection of 120 outstanding original prints from the series, along with quotes from the photographers, and with Peter’s insightful words. These works offer an inspiring overview of the medium while paying homage to masters of the art. From the bizarre Boschian fantasies of Melvin Sokolsky to the haunting humanity of Ansel Adams’s family portraits; to the joyful everyday scenes of Evelyn Hofer; from rare interior shots by famed nude photographer Ruth Bernhard to Bruce Davidson’s wistful depiction of young men playing ballgames on a street; this exhibition gathers some of the most unique and heartening photographs from the 20th century. Each image is a time capsule, offering us a glimpse into days gone past. Yet, each photograph also speaks of tranquillity, peace, and hope for the future.
      </p>
    </blockquote>
    <div className="text-center mt-4">
      <Image src="/pop/bokkshot2.jpg" width={428} height={387} alt="Sample Image" />
      <p className="mt-3">
        Born in London, Peter Fetterman, initially a filmmaker and collector, has helmed the Peter Fetterman Gallery in Santa Monica, CA, for over 35 years. He is the author of <u>The Power of Photography</u> which was released May 2022, published by ACC Art Books. It reached the top of the photography book bestseller list on Amazon. He is also the author of <u>Woman A Celebration</u> (2003) published by Chronicle Books, and <u>Cornell Capa</u> (2002).
      </p>
      <p>
        The traveling exhibition will be available through 2026. The exhibition and museum tour are being organized and managed by Photographic Traveling Exhibitions. Los Angeles, CA.
      </p>
    </div>
    <div className="text-center mt-4">
  <a href="/pop/popvideo.mp4" className="link mx-2">Video Interview with Curator</a>
  <a href="/pop/POPListdimensions.pdf" className="link mx-2">List of Works with Images and Dimensions</a>
  <a href="/pop/POP list with captions.pdf" className="link mx-2">Illustrated List with Captions</a>
  <a href="#facts" className="link mx-2">Facts</a>
  <a href="#sched" className="link mx-2"><strong>Schedule</strong></a>
  <a href="#contact" className="link mx-2"><strong>Contact</strong></a>
</div>
  </div>

  <div className="container mt-5">
    <h2 className="text-center mb-4">Examples With Label Copy</h2>
    <div className="text-center mb-4">
      <Image src="/pop/awning ed 300.jpg" width={300} height={378} alt="Example Image" />
    </div>
    <div className="row text-center">
      <div className="col-md-6 mb-4">
        <Image src="/pop/girled 300.jpg" width={300} height={352} alt="Example Image" />
      </div>
      <div className="col-md-6">
        <Image src="/pop/girled 300.jpg" width={300} height={352} alt="Example Image" />
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-md-6">
        <table className="table">
          <tbody>
            <tr>
              <td><strong>WILLY RONIS France, 1910–2009</strong></td>
            </tr>
            <tr>
              <td><em>I never went out without my camera, even to buy bread.</em> - Willy Ronis</td>
            </tr>
            <tr>
              <td>Numbered Edition Print on Museum Quality Paper<br />For details and prices: 310.453.6310<br />www.peterfetterman.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <Image src="/pop/girled 300.jpg" width={300} height={352} alt="Example Image" />
      </div>
    </div>
  </div>


  <div className="container mt-5">
    <h2 className="text-center mb-4">Pricing Table</h2>
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>Art Prints</th>
          <th>Color</th>
          <th>Size</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Standard</td>
          <td>Black and White</td>
          <td>12 x 12</td>
          <td>$450</td>
        </tr>
        <tr>
          <td>Deluxe</td>
          <td>Full Color</td>
          <td>24 x 36</td>
          <td>$800</td>
        </tr>
        <tr>
          <td>Premium</td>
          <td>Full Color</td>
          <td>30 x 40</td>
          <td>$1200</td>
        </tr>
      </tbody>
    </table>
    <p className="text-center mt-4">For custom sizes and additional options, please contact us.</p>
  </div>





















  <div className="container text-center my-5">
      <div className="mb-4">
        <hr className="my-4" />
      </div>
      <h2 className="display-4 mb-4">
        <a
          href="imap://jlandau%40a-r-t%2Ecom@outlook.office365.com:993/fetch%3EUID%3E/INBOX%3E347313#press"
          className="text-dark text-decoration-none"
        >
          <u>Press Links</u>
        </a>
      </h2>
      <div className="mb-4">
        <a
          href="https://www.latimes.com/socal/daily-pilot/entertainment/story/2023-10-25/bowers-welcomes-the-power-of-photography-and-the-legacy-of-katsushika-hokusai"
          className="d-block text-dark"
        >
          - LA Times
        </a>
        <span className="mx-2">/</span>
        <a
          href="https://www.ocregister.com/2023/10/23/check-out-these-new-profound-exhibits-at-bowers-this-fall/"
          className="d-block text-dark"
        >
          Orange County Register
        </a>
      </div>
      <div>
        <hr className="my-4" />
      </div>
    </div>






























 





                  <div className="container text-center text-white my-5">
      {/* Section Heading */}
      <div className="mb-4">
        <Image
          src="/pop/POPS380.jpg"
          width={299}
          height={366}
          alt="Exhibition Image"
          className="img-fluid mb-3"
        />
        <h2 className="display-4 mb-4">
          <u>Exhibition Facts</u>
        </h2>
      </div>

      {/* Contents Section */}
      <div className="text-start mx-auto mb-5">
        <p className="lead">
          <strong>Contents:</strong>
        </p>
        <ul className="list-unstyled">
          <li>80 framed original vintage photographs</li>
          <li>120 photograph version also available</li>
          <li>(additional images are available for larger venues)</li>
          <li>Introductory text panel and labels to print</li>
          <li>
            <strong>
              <a
                href="/pop/POPListdimensions.pdf"
                className="text-white"
              >
                - List of Works with Images and Dimensions -
              </a>
            </strong>
          </li>
        </ul>
      </div>

      {/* Space Requirements Section */}
      <div className="text-start mx-auto mb-5">
        <p className="lead">
          <strong>Space Req:</strong>
        </p>
        <p>250-350 running feet approx</p>
      </div>

      {/* Loan Fee Section */}
      <div className="text-start mx-auto mb-5">
        <p className="lead">
          <strong>Loan Fee:</strong>
        </p>
        <p>Upon request</p>
      </div>

      {/* Lecturer Section */}
      <div className="text-start mx-auto mb-5">
        <p className="lead">
          <strong>Lecturer:</strong>
        </p>
        <p>
          Curator, Peter Fetterman is available to present a slide lecture, gallery talk, and for press events
        </p>
        <p>
          <a
            href="/pop/POP List 120 1023 PTE.pdf"
            className="btn btn-outline-light btn-sm"
          >
            List of Works with Images and Dimensions
          </a>
        </p>
        <p>
          <a href="/pop/popvideo.mp4" className="text-white">
            - Video Interview with Curator -
          </a>
        </p>
      </div>

      {/* Shipping & Insurance Section */}
      <div className="text-start mx-auto mb-5">
        <p className="lead">
          <strong>Shipping &amp; Insurance:</strong>
        </p>
        <p>Exhibitor responsible</p>
        <p>Requirements: Appropriate security, environmental controls</p>
      </div>

      {/* Publication Section */}
      <div className="text-start mx-auto mb-5">
        <p className="lead">
          <strong>Publication:</strong>
        </p>
        <p>
          130 p Hardcover book (120 images plus text)
          <br />
          Published by ACC Art Books
        </p>
      </div>

      {/* Exhibition Website Section */}
      <div className="text-start mx-auto mb-5">
        <p className="lead">
          <strong>Exhibition Website:</strong>
        </p>
        <p>
          <a href="/pop.html" className="text-white">
            www.p-t-e.org/pop
          </a>
        </p>
      </div>
    </div>



















    <div className="container my-4">
      <div className="text-center mb-4">
        <h1 className="display-4 text-white">Schedule</h1>
        <hr className="my-4" />
      </div>

      <div className="text-white">
        <div className="mb-3">
          <strong className="d-block fs-5">Dates Available</strong>
          <small className="d-block mb-2">as of 09/27/23</small>
          <strong className="d-block fs-4">2023</strong>
          <p className="fs-5 mb-2">October 7, 2023 - January 14, 2024</p>
          <p className="fs-5 mb-2">Bowers Museum</p>
        </div>

        <div className="mb-3">
          <strong className="d-block fs-4">2024</strong>
          <p className="fs-5 mb-2">February 9 - April 7</p>
          <p className="fs-5 mb-2">Naples Art Institute, Naples, FL</p>
          <p className="fs-5 mb-2">May 1 - August 1</p>
          <p className="fs-5 mb-2">OPEN</p>
          <p className="fs-5 mb-2">August 27 – November 17</p>
          <p className="fs-5 mb-2">Lauren Rogers Museum, Laurel, MS</p>
        </div>

        <div className="mb-3">
          <strong className="d-block fs-4">2025</strong>
          <p className="fs-5 mb-2">January 1 - April 30</p>
          <p className="fs-5 mb-2">OPEN</p>
        </div>

        <div className="mb-3">
          <strong className="d-block fs-4">2026</strong>
          <p className="fs-5 mb-2">May 24 - September 1</p>
          <p className="fs-5 mb-2">Fenimore Art Museum, Cooperstown, NY</p>
          <p className="fs-5 mb-2">September 21 - December 31</p>
          <p className="fs-5 mb-2">OPEN</p>
        </div>

        <div className="mb-3">
          <strong className="d-block fs-4">2027</strong>
          <p className="fs-5 mb-2">OPEN</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <h2 className="fs-3 text-white">Contact:</h2>
        <a href="index.html">
          <Image
            src="/pop/ptelogo300p.jpg"
            width={228}
            height={53}
            alt="PTE Logo"
            className="mx-auto mb-4"
          />
        </a>
        <p className="fs-5 text-white">
          <strong>Tel: 310 397 3098</strong>
        </p>
        <p className="fs-5 text-white">
          <strong>
            <a href="mailto:info@p-t-e.org" className="text-white">
              Email: info@p-t-e.org
            </a>
          </strong>
        </p>
        <p className="fs-5 text-white">
          <a href="index.html" className="text-white">
            www.p-t-e.org
          </a>
        </p>
      </div>
    </div>














 











          </strong>
 
  <center>
  <p>
    <strong>
      Copyright 2023
      <br />
    </strong>
    <strong> PTE</strong>
  </p>
  <p>&nbsp;</p>
  </center> 
</>

  )
}

export default page