import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <>  
  <div className="flex flex-col items-center">
      <table className="w-full max-w-2xl border-0 p-3">
        <tbody>
          <tr>
            <td className="bg-black text-white text-center p-4">
              <p className="text-lg font-bold mb-2">
                New Major Exhibition<br />
                IMOGEN CUNNINGHAM RETROSPECTIVE<br />
                to Getty Center &amp; Seattle Art Museum
              </p>
              <Image
                src="https://www.p-t-e.org/cunningham/abowers%20ic%20entry%201116c%20finalrbbb.jpg"
                alt="Exhibition Banner"
                width={600}
                height={600}
                className="w-full max-w-full"
              />
              <p className="text-white text-sm mt-4">
                <strong>
                  <span className="text-xl">SEEN &amp; UNSEEN:</span><br />
                  PHOTOGRAPHS BY IMOGEN CUNNINGHAM<br />
                  Organized by Photographic Traveling Exhibitions<br />
                  <span className="text-base">
                    Continues Museum Tour – Dates Still Available thru 2026
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td className="bg-white text-left p-4 text-sm">
              <blockquote>
                <p>
                  <strong>From the LA Times, April 14. 2022:</strong><br /><br />
                  “IMOGEN CUNNINGHAM: A RETROSPECTIVE, now at the Getty Center,
                  represents a major effort at revitalizing interest in the
                  photographer, who was once famous enough to appear as a guest on
                  "The Tonight Show with Johnny Carson", not long before she died.
                  A smaller survey exhibition, SEEN AND UNSEEN PHOTOGRAPHS BY
                  IMOGEN CUNNINGHAM, has been touring for several years and
                  arrives in May at the Sonoma Valley Museum of Art in Northern
                  California. Together, these shows secure her top tier in the
                  ranks of 20th century photography.”
                </p>
                <p>
                  <strong>The Getty writes:</strong><br /><br />
                  ” In a career that spanned seventy years, Imogen Cunningham created a
                  large and diverse body of work — from portraits, to nudes, to
                  florals, and to street photographs. In a field dominated by men, she
                  was one of a handful of women who helped to shape early modernist
                  photography in America. This exhibition seeks to acknowledge her
                  stature as equivalent to that of her male peers and to reevaluate her
                  enormous contribution to twentieth century photographic history.”
                </p>
                <p>
                  SEEN &amp; UNSEEN features 60 photographs including Cunningham's
                  most iconic works as well as a selection of images that have never
                  or rarely been seen before. The exhibition is curated by Celina
                  Lunsford, Artistic Director, Fotografie Forum Frankfurt, Germany.
                  Based upon new research by Lunsford, biographical and aesthetic
                  topics are explored throughout the exhibition.
                </p>
              </blockquote>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div className="flex flex-col items-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/ic PDF_SIngle_1jpg.jpg"
          alt="Exhibition PDF"
          width={362}
          height={583}
          className="w-full max-w-full"
        />
      </div>
      
      <div className="text-center mb-4">
        <p className="font-sans text-base">
          <span className="font-bold">Traveling Exhibition</span><br />
          <span className="text-base">
            <br />
            Curator: Celina Lunsford <br />
            Artistic Director, Fotografie Forum Frankfurt, Germany
          </span>
          <br />
          <strong>
            Organized by<br />
            The Imogen Cunningham Trust<br />
            <span className="text-base">in association with</span><br />
            Photographic Traveling Exhibitions
          </strong>
        </p>
      </div>
      
      <div className="text-center mb-4">
        <p>
          <span className="font-sans text-base">
            <span className="font-bold">Website</span><br />
            <a href="https://www.p-t-e.org/cunningham" className="text-blue-500">www.p-t-e.org/cunningham</a>
            <br /><br />
            <span className="font-bold">Email: </span>
            <a href="mailto: info@p-t-e.org" className="text-blue-500">
              <strong>info</strong>@p-t-e.org
            </a>
          </span>
        </p>
      </div>
      
      <div className="text-center mb-4">
        <a href="#intro" className="text-blue-500">Introduction</a> - 
        <a href="#about" className="text-blue-500">About Imogen Cunningham</a> - 
        <a href="https://www.p-t-e.org/cunningham/texts.htm" className="text-blue-500">Exhibition Texts</a> -<br />
        <a href="https://www.p-t-e.org/cunningham/instbowers.htm" className="text-blue-500">
          Exhibition Installation Views Bowers Museum Santa Ana, CA, 11/16
        </a><br />
        <a href="https://www.p-t-e.org/cunningham/iclist.pdf" className="text-blue-500">Exhibition List</a> - 
        <a href="https://www.p-t-e.org/cunningham/icimages.html" className="text-blue-500">Images of Works</a> -<br />
        <a href="#facts" className="text-blue-500">Exhibition Facts</a> - 
        <a href="#sched" className="text-blue-500">Schedule</a> - 
        <a href="#contact" className="text-blue-500">Contact</a>
      </div>
      
      <div className="text-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/abowers%20ic%20entry%201116c%20finalrbbb.jpg"
          alt="Image 1"
          width={600}
          height={600}
          className="w-full max-w-full"
        />
      </div>
      
      <div className="text-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/CUNNING003cr698.jpg"
          alt="Image 2"
          width={600}
          height={600}
          className="w-full max-w-full"
        />
      </div>
      
      <div className="text-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/CUNNING010cr.jpg"
          alt="Image 3"
          width={600}
          height={600}
          className="w-full max-w-full"
        />
      </div>
      
      <div className="text-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/CUNNING006b%20698.jpg"
          alt="Image 4"
          width={600}
          height={600}
          className="w-full max-w-full"
        />
      </div>
      
      <div className="text-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/CUNNING011cr.jpg"
          alt="Image 5"
          width={600}
          height={600}
          className="w-full max-w-full"
        />
      </div>
      
      <div className="text-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/CUNNING018crrr.jpg"
          alt="Image 6"
          width={600}
          height={600}
          className="w-full max-w-full"
        />
      </div>
      
      <div className="text-center mb-4">
        <Image
          src="https://www.p-t-e.org/cunningham/CUNNING017cr.jpg"
          alt="Image 7"
          width={600}
          height={600}
          className="w-full max-w-full"
        />
      </div>
      
      <table className="w-full max-w-3xl border-4 border-gray-600 bg-gray-600 p-4">
        <tbody>
          <tr>
            <td className="text-center p-4">
              <p className="text-lg font-bold">
                SEEN &amp; UNSEEN<br />
                PHOTOGRAPHS BY IMOGEN CUNNINGHAM
              </p>
              <Image
                src="https://www.p-t-e.org/cunningham/Self Portrait with Camera late 1920s sm.jpg"
                alt="Self Portrait"
                width={230}
                height={299}
                className="mx-auto"
              />
              <p className="mt-4">
                This new exhibition presents iconographic works<br />
                alongside images rarely exhibited from this<br />
                great American artist.<br />
                <br />
                It is the first exhibition tour of Cunningham’s<br />
                photographs in the USA in twenty years, giving<br />
                new generations an in-depth view of her work.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>












    <div className="flex justify-center my-8 px-4">
      <table className="w-full max-w-4xl  ">
        <tbody>
          <tr>
            <td className="p-4 bg-white text-center">
              <p className="text-center mb-8">
                <span className="font-sans font-bold">
                  <span className="text-xl text-gray-800">
                    SEEN &amp; UNSEEN
                  </span>
                  <br />
                  <span className="text-lg text-gray-600">
                    PHOTOGRAPHS BY <br />
                    IMOGEN CUNNINGHAM
                  </span>
                  <br />
                  ____________________________
                  <br />
                  <br />
                  Exhibition Facts
                </span>
              </p>
              <p className="text-center mb-8">
                <strong>CONTENTS </strong>
                <br />
                60 framed photographs <br />
                Text panels and wall labels
              </p>
              <p className="text-center mb-8">
                <strong>DATES AVAILABLE</strong>
                <br />
                Through 2026
                <br />
                <br />
                <strong>LECTURERS</strong>
                <br />
                Meg Partridge, Director
                <br />
                Imogen Cunningham Trust
                <br />
                <br />
                Curator, Celina Lunsford
                <br />
                Artistic Director
                <br />
                Fotografie Forum Frankfurt, Germany
                <br />
                <br />
                <strong>PUBLICATIONS </strong>
                <br />
                Exhibition brochure <br />
                A poster is available
                <br />
                Various books by Cunningham for sale
              </p>
              <blockquote className="text-center mb-8">
                <strong>
                  MEDIA
                  <br />
                </strong>
                <span>
                  28 minute film, "Portrait of Imogen". <br />
                  In this very personal film, Imogen Cunningham presents
                  more than 250 of her photographs during archival
                  interviews recorded by her son Rondal Partridge. Based
                  on 8 hours of <u>black and white</u> audiotapes,
                  "Portrait of Imogen" was directed by Meg Partridge,
                  produced by Meg Partridge and Nancy Hale, and edited by
                  Claude Ibrahimoff. Released in 1988, it was nominated
                  for an Academy Award in the documentary category.
                </span>
                <br />
                <br />
                <strong>SPACE REQUIRED</strong> <br />
                200-300 running feet approx.
                <br />
                <br />
                <strong>LOAN FEE</strong> <br />
                On request
                <br />
                <br />
                <strong>
                  INSURANCE &amp; SHIPPING
                </strong>
                <br />
                Exhibitor responsible
                <br />
                <br />
                <strong>EXHIBITION WEBSITE </strong>
                <br />
                <a href="https://www.p-t-e.org/cunningham" className="text-blue-600 underline">
                  www.p-t-e.org/cunningham
                </a>
              </blockquote>
              <p className="text-center mb-8">
                <span className="font-sans text-lg font-bold">
                  CONTACT
                  <br />
                </span>
                <span className="text-lg">
                  <br />
                  <strong>
                    <img src="ptelgo300p.jpg" alt="" className="mx-auto" />
                    <br />
                    <br />
                    Tel: 310 397 3098
                    <br />
                    <br />
                    Email:{" "}
                  </strong>
                </span>
                <span>
                  <a href="mailto: info@p-t-e.org" className="text-blue-600 underline">
                    <strong>info</strong>@p-t-e.org
                  </a>
                  <br />
                  <span>
                    <br />
                    PTE Website: <a href="https://p-t-e.org" className="text-blue-600 underline">www.p-t-e.org</a>
                  </span>
                </span>
              </p>
              <p className="text-center mb-8">
                ________________________________________________
                <br />
                <br />
                <br />
                <strong>
                  <span className="text-xl text-gray-800">
                    SEEN &amp; UNSEEN
                  </span>
                  <br />
                  <span className="text-lg text-gray-600">
                    PHOTOGRAPHS BY <br />
                    IMOGEN CUNNINGHAM
                  </span>
                  <br />
                  <br />
                  ________________________________________________
                  <br />
                  <br />
                </strong>
              </p>
              <p className="text-center mb-4 text-xl font-bold">
                Exhibition Schedule
                <br />
                as of 10/04/22
              </p>
              <p className="text-center mb-4 font-bold">2016</p>
              <p className="text-center mb-4">
                November 19, 2016 - February 26, 2017
                <br />
                Bowers Museum
                <br />
                Santa Ana, CA
              </p>
              <p className="text-center mb-4 font-bold">2018</p>
              <p className="text-center mb-4">
                February 2 - April 29
                <br />
                Columbia Museum of Art
                <br />
                Columbia, SC
              </p>
              <p className="text-center mb-4">
                August 11 - October 15
                <br />
                Fenimore Art Museum
                <br />
                Cooperstown, NY
              </p>
              <p className="text-center mb-4 font-bold">2019</p>
              <p className="text-center mb-4">
                January 11 - March 16
                <br />
                Historic City Hall
                <br />
                Lake Charles, LA
              </p>
              <p className="text-center mb-4">
                June 16 - September 9
                <br />
                Ft. Wayne MOA
                <br />
                Ft. Wayne, IN
              </p>
              <p className="text-center mb-4">
                October 18 - December 29
                <br />
                Long Island Museum of Contemporary Art
                <br />
                Stony Brook, NY
              </p>
              <p className="text-center mb-4 font-bold">2022</p>
              <p className="text-center mb-4">
                May 4 - August 28
                <br />
                Sonoma Valley Museum of Art
                <br />
                Sonoma, CA
              </p>
              <p className="text-center mb-4 font-bold">
                September 21 - December 31
                <br />
                OPEN
              </p>
              <p className="text-center mb-4 font-bold">2023</p>
              <p className="text-center mb-4">
                January 1 - March 15
                <br />
                OPEN
              </p>
              <p className="text-center mb-4">
                April 8 - July 16
                <br />
                Polk Museum of Art
                <br />
                Lakeland, FL
              </p>
              <p className="text-center mb-4">
                August 7 - December 31
                <br />
                OPEN
              </p>
              <p className="text-center mb-4 font-bold">2024</p>
              <p className="text-center mb-4">
                January 1 - 21
                <br />
                OPEN
              </p>
              <p className="text-center mb-4">
                February 15 - May 19
                <br />
                Reynolda House Museum,
                <br />
                Winston-Salem, NC
              </p>
              <p className="text-center mb-4">
                June 15 - December 31
                <br />
                OPEN
              </p>
              <p className="text-center mb-4 font-bold">2025</p>
              <p className="text-center mb-4 font-bold">OPEN</p>
              <p className="text-center mb-4 font-bold">2026</p>
              <p className="text-center mb-4 font-bold">OPEN</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</>

  )
}

export default page