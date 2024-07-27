import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <>
     
 
 
 <div className="container my-5">
      <div className="text-center mb-4">
        <h2>ABOUT LTE</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <p className="text-left">
            Over the past 50 years Landau Traveling Exhibitions has presented more than 1,000 exhibitions at museums throughout the United States, Canada, and the world.
          </p>
          <p className="text-left">
            The Landau family has been active in the international art world since the early 1950's. The highly-acclaimed Felix Landau Gallery in Los Angeles during the 50’s & 60’s introduced, represented, and exhibited the best of the 20th century’s American, European, and international modern master and contemporary artists.
          </p>
          <div className="text-center my-4">
            <Image
              src="https://a-r-t.com/instshots/lachin198bw2.jpg"
              width={300}
              height={195}
              alt="Landau Exhibition"
              className="img-fluid"
            />
          </div>
          <p className="text-left">
            In 1967 Mitzi Landau began circulating the GASTON LACHAISE: SCULPTURE & DRAWINGS exhibition for the Lachaise Foundation and Landau Traveling Exhibitions was launched. The Lachaise exhibition has been presented at more than 140 museums.
          </p>
          <p className="text-left">
            Jeffrey Landau joined the business in 1989 as Managing Director taking LTE into the 21st Century.
          </p>
          <p className="text-left">
            We continue to represent museum exhibitions, universities, arts organizations, corporations, estates, foundations, private collections, 20th Century masterworks, and contemporary artists.
          </p>

          <hr className="my-4" />

          <div className="text-center mb-4">
            <h4>Selected Exhibitions LTE has Circulated, Managed, or Organized</h4>
          </div>

          <ul className="list-unstyled">
            <li><strong>GASTON LACHAISE: SCULPTURE AND DRAWINGS</strong> - for the Lachaise Foundation</li>
            <li><strong>FRANCISCO GOYA: LOS CAPRICHOS</strong> - Private Collection</li>
            <li><strong>PICASSO: SUITE VOLLARD</strong> - for the Fort Worth Museum</li>
            <li><strong>PICASSO: 25 YEARS OF EDITION CERAMICS</strong> - Private Collection</li>
            <li><strong>TWO SCULPTORS, TWO ERAS: RICHMOND BARTHE – RICHARD HUNT</strong> - for the Arts America Program of the United States Information Agency</li>
            <li><strong>THE ART OF ARCHITECTURE: WORKS BY LAUREATES OF THE PRITZKER ARCHITECTURE PRIZE</strong> - for the Hyatt Foundation</li>
            <li><strong>RAUSCHENBERG AT GEMINI</strong> - Organized by the Armory Center for the Arts, Pasadena, CA</li>
            <li><strong>FROM PROCESS TO PRINT: ROMARE BEARDEN</strong> - for the Bearden Foundation</li>
            <li><strong>EDWEARD MUYBRIDGE: PHOTOGRAPHY</strong> - for Stanford University</li>
            <li><strong>THE BEGGARS IN REMBRANDT'S ETCHINGS</strong> - Private Collection</li>
            <li><strong>NKAME: A RETROSPECTIVE OF CUBAN PRINTMAKER BELKIS AYON</strong> - for the Belkis Ayon Estate</li>
            <li><strong>HEROES: THE ART OF CHARLES WHITE</strong> - Private Collection</li>
            <li><strong>WILLIAM KING: SCULPTURE</strong> - for the Terry Dintenfass Gallery, New York</li>
            <li><strong>MARGARET BOURKE-WHITE: PHOTOGRAPHY</strong> - for Cornell University</li>
            <li><strong>JOHN ALTOON: PAINTINGS AND DRAWINGS</strong> - for the Whitney Museum</li>
            <li><strong>MARTIN LUTHER KING JR. REMEMBERED: PHOTOGRAPHS BY FLIP SCHULKE</strong> - Private Collection</li>
            <li><strong>ART BEYOND BORDERS</strong> - for the United Nations and Unesco</li>
            <li><strong>UNISON WITH NATURE: LOUIS H. SULLIVAN</strong> - for Southern Illinois University Edwardsville</li>
            <li><strong>A HERITAGE PRESERVED: THE ARCHITECTURAL ORNAMENT OF LOUIS H. SULLIVAN</strong> - for Southern Illinois University Edwardsville, IL</li>
            <li><strong>RAIN FOREST VISIONS: THE USKO-AYAR AMAZONIAN SCHOOL OF PAINTING</strong> - for the Capitol Children’s Museum, Wash., DC</li>
            <li><strong>TEXTILES FROM VANISHING CULTURES</strong> - Flat Woven Textiles of the World - Private Collection</li>
            <li><strong>CENTURIES OF SUNSHINE: THE HISTORY OF CITRUS</strong> - for the Riverside Municipal Museum and Sunkist Growers Cooperative</li>
            <li><strong>THE HISTORY OF CITRUS LABELS</strong> - for the Riverside Municipal Museum</li>
            <li><strong>FROM EARTH AND SOUL: THE EVANS COLLECTION OF ASIAN CERAMICS</strong> - for California State University, San Bernardino</li>
            <li><strong>THE KARNOFF COLLECTION OF ANCIENT ETRUSCAN & SOUTH ITALIAN VASES</strong> - for California State University, San Bernardino</li>
            <li><strong>FORMULATION: ARTICULATION: SERIGRAPHS BY JOSEF ALBERS</strong> - Private Collection</li>
          </ul>

          <hr className="my-4" />

          <div className="text-center mb-4">
            <h4>Selected Museum Clients</h4>
            <p>Museum of Modern Art, NY; Nelson A. Rockefeller Museum, NY; Boston Museum of Fine Arts, MA; National Portrait Gallery, Washington, DC; Smithsonian Institution, Washington, DC; Los Angeles County Museum of Art, CA; UCLA Art Gallery, Los Angeles, CA; Chicago Museum of Contemporary Art, Il; San Francisco Museum of Modern Art, CA; Hirshhorn Museum, Washington, DC; Saint Louis Art Museum, MO; Montreal Museum of Art, Canada; Seattle Art Museum, WA; Walker Art Center, Minneapolis, MN; Texas A & M University, College Station, TX; National Building Museum, Washington, DC; Terra Museum of American Art, Chicago, IL; Sheldon Memorial Art Gallery, Lincoln, NB; Hampton University Museum, Hampton, VA; University Museum, SIU Edwardsville, IL; Museum of Art, WSU, Pullman, WA; Dixon Gallery and Gardens, Memphis, TN; McKissick Museum, Columbia, SC; Cornell Fine Arts Center, Winter Park, FL; Tucson Museum Art, Tucson, AZ; Hunter Museum of Art, Chattanooga, TN; Putnam Museum, Davenport, IA; Newcomb College Art Gallery, New Orleans, LA; Lauren Rogers Museum of Art, Laurel, MS; Purdue University Galleries, West Lafayette, IN; Sesnon Gallery, UC, Santa Cruz, CA; Reed College Art Gallery, Portland, OR; Arkansas Art Center, Little Rock, AR; Canton Art Institute, Canton. OH; Parrish Art Museum, Southampton, NY; University of Scranton Art Gallery, Scranton, PA; Flint Institute of Arts, Flint, MI, & 100's of others.</p>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default page