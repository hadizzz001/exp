import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const page = () => {
  return (
    <>

      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n<!--\n.style1 {color: #FFFFFF}\n.style2 {color: #000000}\n.style4 {font-family: "Times New Roman", Times, serif}\nbody,td,th {\n\tcolor: #000000;\n\tfont-family: Times New Roman, Times, serif;\n}\na:link {\n\tcolor: #000000;\n}\na:visited {\n\tcolor: #000000;\n}\na:active {\n\tcolor: #000000;\n}\n.style10 {\n\tfont-size: 12px;\n\tfont-weight: bold;\n}\n.style17 {\n\tfont-size: 12px;\n\tcolor: #000000;\n\tfont-family: "Times New Roman", Times, serif;\n}\n.style27 {font-size: 16px; color: #000000; font-family: Arial, Helvetica, sans-serif; }\n.style28 {font-family: Arial, Helvetica, sans-serif}\n.style31 {font-size: 10px; color: #333333; }\n.style32 {font-family: "Times New Roman", Times, serif; font-size: 12px; }\n.style34 {font-size: 16px}\n.style36 {font-size: 32px}\nbody {\n\tbackground-color: #000000;\n}\n.style40 {font-size: 22px}\n.style41 {\n\tfont-family: "Times New Roman", Times, serif;\n\tcolor: #000000;\n\tfont-size: 18px;\n}\n.style43 {font-family: Arial, Helvetica, sans-serif; color: #000000;}\n.style44 {\n\tfont-size: 14px;\n\tcolor: #000000;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-weight: bold;\n}\n.style45 {\n\tfont-size: 14px;\n\tcolor: #000000;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n.style46 {font-size: 14px; }\n.style47 {font-family: "Times New Roman", Times, serif; font-size: 12px; font-weight: bold; }\n.style50 {font-family: Arial, Helvetica, sans-serif; font-size: 10px; }\n.style51 {font-family: Verdana, Arial, Helvetica, sans-serif}\n.style53 {\n\tfont-size: 24px;\n\tfont-weight: bold;\n}\n.style56 {font-family: Arial, Helvetica, sans-serif; font-size: 16px;}\n.style57 {font-size: 18px; color: #000000;}\n.style59 {font-family: "Times New Roman", Times, serif; font-size: 11px; }\n-->\n  '
        }}
      /> 
 
        <center>

        <div align="conainter mt-20"> 

          <div className="container my-4">
            <div className="row align-items-center">
              <div className="col-1"></div>
              <div className="col-10 text-center">
                <p className="font-weight-bold">
                  <span className="h4">
                    <strong>
                      <span className="text-uppercase">Museum Tour&nbsp;</span>
                      <span className="text-uppercase">Services</span>
                    </strong>
                  </span>
                </p>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row align-items-center justify-content-center bg-white text-center my-4 py-4">
              <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  src="https://a-r-t.com/lachinst.gif"
                  alt="Gaston Lachaise"
                  className="img-fluid border"
                  style={{ width: '170px', height: '120px', objectFit: 'cover' }}
                />
                <p className="mt-2 font-weight-bold">
                  <span className="d-block">GASTON LACHAISE:</span>
                  SCULPTURE &amp; DRAWINGS
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <p className="my-4">
                  LTE Will Work With You
                  <br />
                  to Plan, Organize, Market &amp; <br />
                  Manage a Museum Tour for
                  <br />
                  <span className="h5">Your Exhibition or Collection</span>
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  src="https://a-r-t.com/pritzge.jpg"
                  alt="Pritzker Architecture Prize Exhibition"
                  className="img-fluid border"
                  style={{ width: '170px', height: '120px', objectFit: 'cover' }}
                />
                <p className="mt-2 font-weight-bold">
                  PRITZKER ARCHITECTURE PRIZE EXHIBITION
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center bg-white text-center my-4 py-4">
              <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  src="deginst.jpg"
                  alt="Edgar Degas"
                  className="img-fluid border"
                  style={{ width: '170px', height: '120px', objectFit: 'cover' }}
                />
                <p className="mt-2 font-weight-bold">
                  EDGAR DEGAS:
                  <br />
                  THE PRIVATE IMPRESSIONIST
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <p className="my-4">
                  <strong>
                    <a href="/service#intro">Introduction&nbsp;</a>
                  </strong>
                  <br />
                  <strong>
                    <a href="/service#2">
                      Museum Tour <br />
                      Organization Services
                    </a>
                  </strong>
                  <br />
                  <a href="/service#3">
                    Museum Tour <br />
                    Management Services
                  </a>
                  <br />
                  <strong>
                    <a href="/service#4">About Landau</a>
                  </strong>
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  src="picetchin.jpg"
                  alt="Pablo Picasso"
                  className="img-fluid border"
                  style={{ width: '170px', height: '120px', objectFit: 'cover' }}
                />
                <p className="mt-2 font-weight-bold">
                  PABLO PICASSO:
                  <br />
                  ETCHINGS 1966-1971
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center bg-white text-center my-4 py-4">
              <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  src="goyain.jpg"
                  alt="Francisco Goya"
                  className="img-fluid border"
                  style={{ width: '170px', height: '120px', objectFit: 'cover' }}
                />
                <p className="mt-2 font-weight-bold">
                  FRANCISCO GOYA:
                  <br />
                  LOS CAPRICHOS
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <p className="my-4">
                  <strong>
                    <a href="/service#5">
                      Selected Exhibitions LTE <br />
                      has Circulated &amp; Organized
                    </a>
                  </strong>
                  <br />
                  <strong>
                    <a href="/service#6">Selected Client List</a>
                  </strong>
                  <br />
                  <strong>
                    <a href="/service#7">Contact Info</a>
                  </strong>
                  <br />
                  <strong>
                    <a href="https://a-r-t.com" target="_parent">
                      RETURN TO LTE WEB SITE
                    </a>
                  </strong>
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  src="Adams201inst.jpg"
                  alt="Ansel Adams"
                  className="img-fluid border"
                  style={{ width: '170px', height: '120px', objectFit: 'cover' }}
                />
                <p className="mt-2 font-weight-bold">
                  ANSEL ADAMS:
                  <br />
                  MASTERWORKS
                </p>
              </div>
            </div>
          </div>




























          <div className="container my-4">
            <div className="row">
              <div className="col text-center">
                <a name="intro" />
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="h4 text-center my-4">
                  <strong>Introduction</strong>
                </p>
                <div className="px-3">
                  <p className="font-weight-bold h5">
                    <b>LANDAU TRAVELING EXHIBITIONS</b>
                  </p>
                  <p className="text-muted">
                    organizes and circulates high quality exhibitions to and for museums, universities, and other arts and cultural institutions, organizations, and foundations. Over the past 50 years, we have presented more than 900 exhibitions at museums throughout the United States and the world. Our exhibitions cover a wide variety of subject matter and time periods from the fields of fine art - (sculpture, painting, works on paper, mixed-media, ceramics), photography, architecture, anthropology, cultural history, crafts, multi-media, and science.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="h5 font-weight-bold">SERVICES</p>
                <p className="text-muted">
                  Our services take care of the myriad details involved in the development, organization, planning, marketing, and management of traveling museum exhibition tours. Our offices become the center for all business and communications related to each exhibition.
                </p>
                <p className="h5 font-weight-bold">STRATEGIC PLANNING</p>
                <p className="text-muted">
                  Special arrangements are tailored to the specific goals, objectives, conditions, and requirements of each exhibition. We consult with clients to develop an overall strategy and a marketing program designed to maximize the potential for results.
                </p>
                <p className="h5 font-weight-bold">MUSEUM NETWORK</p>
                <p className="text-muted">
                  LTE utilizes its worldwide network of museums, professional contacts, and arts resources to promote our clients’ exhibitions to both a national and international audience. We maintain an extensive, customized, up-to-date database of museums and museum personnel developed over the past 25 years. This enables us to offer our clients access to the best and most appropriate institutions and decision makers in the museum world.
                </p>
                <p className="h5 font-weight-bold">FEES &amp; INCOME</p>
                <p className="text-muted">
                  LTE's fees are determined according to the extent of services required, and by the economic potential of each exhibition. Certain fees are charged for exhibition organization, tour organization, development and marketing services, and other fees are charged for the management and administration of the exhibition tour, plus expenses. Exhibition Loan Fees paid by museums are shared between LTE and clients depending on the specific economic parameters of each situation. Please contact us for details.
                </p>
                <p className="text-muted">
                  We look forward to further discussing with you the details of planning, organizing, and implementing a museum tour for your exhibition or collection.
                </p>
                <p className="font-weight-bold">Mitzi Landau, Director</p>
                <p className="font-weight-bold">Jeffrey Landau, Managing Director</p>
              </div>
            </div>
          </div>
 
              <b><font size="+2"><br />Museum Tour&nbsp;</font></b> <br />
              <b><font size="+2">Organization&nbsp;</font></b> <br />
              <b><font size="+2">Services</font></b>
            
            <p></p>
            <ul>
              <li>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  <b>Tour Development &amp; Exhibition Organization</b>
                </font>
              </li>
            </ul>
            <blockquote>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  1. Consultation with Client to define goals, objectives, requirements, resources&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  2. Preparation of&nbsp; Plan of Action&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  3. Management of exhibition design, organization and production&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  4. Manage preparation, crating and packing of exhibition components for traveling&nbsp; <br />&nbsp;
                </font>
              </p>
            </blockquote>
            <ul>
              <li>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  <b>Development of Exhibition Data &amp; Marketing Materials&nbsp;</b>
                </font>
              </li>
            </ul>
            <blockquote>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  1. Compilation and registration of exhibition data including list of works/contents, images, shipping, installation &amp; insurance requirements, etc.&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  2. Preparation, design and production of publications, brochures, marketing and PR materials and Web Site.<br />&nbsp;
                </font>
              </p>
            </blockquote>
            <ul>
              <li>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  <b>Venue Research</b>
                </font>
              </li>
            </ul>
            <blockquote>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  Research, develop and compile a custom list of potential museum venues from extensive LTE Database - includes Client "museum wish list"&nbsp; <br />&nbsp;
                </font>
              </p>
            </blockquote>
            <ul>
              <li>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  <b>Exhibition Marketing&nbsp;</b>
                </font>
              </li>
            </ul>
            <blockquote>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  1. Custom mailing of marketing materials to preferred, selected museums with follow-up calls&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  2. Listing in LTE Exhibition Marketing Brochures mailed to thousands of museums twice annually&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  3. Creation of an exhibition marketing web site &amp; posting on Landau&nbsp; <br />Traveling Exhibitions Web Site&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  4. Phone calls to LTE personal contacts&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  5. Ads placed in Museum and Arts Magazines and Newsletters&nbsp; <br />&nbsp;
                </font>
              </p>
            </blockquote>
            <ul>
              <li>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  <b>Follow Up to Marketing Efforts</b>
                </font>
              </li>
            </ul>
            <blockquote>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  1. Respond to inquiries - phone, mail, fax, e-mail&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  2. Compile list of interested museums for approval of Client&nbsp; <br />&nbsp;
                </font>
              </p>
            </blockquote>
            <ul>
              <li>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  <b> Tour Scheduling &amp; Contract Negotiation</b>
                </font>
              </li>
            </ul>
            <blockquote>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  1. Plan tour routing&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  2. Negotiate, coordinate and confirm dates&nbsp;
                </font>
              </p>
              <p>
                <font face="Arial, Helvetica, sans-serif" size="2">
                  3. Negotiate, write, send and complete contracts&nbsp;
                </font>
                <br />
                <br />
                <a name="3"></a>
              </p>
            </blockquote>
             
            <p></p>
            <center>
              <b><font size="+2"><br />Museum Tour&nbsp;</font></b> <br />
              <b><font size="+2">Management&nbsp;</font></b> <br />
              <b><font size="+2">Services</font></b>
            </center>
            <p></p>
            <div align="left">
              <blockquote>
                <center>
                  <b>
                    <font size="3" face="Arial, Helvetica, sans-serif">
                      LTE manages all details of exhibition tours including:
                    </font>
                  </b>
                </center>
              </blockquote>
            </div>
            <ul>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>
                    Exhibition Coordination<br />&nbsp;
                  </b>
                  <br />
                  LTE remains in close contact with exhibitors to supervise and monitor all procedures and operations.&nbsp;
                </font>
                <br />
                <br />
              </li>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>Shipping&nbsp;</b>
                  <br />
                  <br />
                  LTE arranges, coordinates and monitors all shipping.<br />&nbsp;
                </font>
              </li>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>Exhibition Installation &amp; Presentation&nbsp;</b>
                  <br />
                  <br />
                  LTE compiles and distributes Instruction Kits which include: packing, handling and installation instructions; press materials; brochures; condition report forms; lists of works.&nbsp;
                  <br />
                  <br />
                </font>
              </li>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>Sales of Publications and Works</b>
                  <br />
                  <br />
                  LTE coordinates the distribution and sales of catalogues books and other publications, works of art, and other merchandise.&nbsp;
                  <br />
                  <br />
                </font>
              </li>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>Insurance</b>
                  <br />
                  <br />
                  LTE verifies insurance documents and all other requirements as specified&nbsp; <br />in the Exhibitor’s contract.<br />&nbsp;
                </font>
              </li>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>Special Events/Lectures</b>
                  <br />
                  <br />
                  LTE coordinates, with exhibitors and lenders, related special events, lectures and other activities.&nbsp;
                  <br />
                  <br />
                </font>
              </li>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>Administration<br /></b>
                  <br />
                  LTE accounts for all costs, fees, sales, and other revenues.&nbsp;<br /><br />
                </font>
              </li>
              <li>
                <font size="2" face="Arial, Helvetica, sans-serif">
                  <b>Condition Reports</b>
                  <br />
                  <br />
                  LTE distributes and reviews Condition Reports.&nbsp;
                </font>
              </li>
            </ul> 
           
        </div> 
        </center>
        <style
  dangerouslySetInnerHTML={{
    __html: "\n\n  .col { \n    background: transparent !important;\n}\n"
  }}
/>




    </>

  )
}

export default page