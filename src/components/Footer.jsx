import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { SocialIcon } from 'react-social-icons'
import { BiCurrentLocation, BiLocationPlus, BiPhoneCall, BiSolidLocationPlus} from 'react-icons/bi';


export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted bg-primaryColor text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div >
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div> */}
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3 flex'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 w-1/3 text-left'>
              <h6 className='text-uppercase fw-bold mb-4 text-[30px] font-bold'>
                get<span className='text-textColor'>linked</span>
              </h6>
              <p>
              Getlinked Tech Hackathon is a technology innovation program 
              established by a group of organizations with the aim of showcasing 
              young and talented individuals in the field of technology
              </p>

              <div className='flex my-[50px]'>
                <div>Terms of Use</div>
                <div className="border-x border-textColor h-[25px] w-0 mx-[10px]"></div>
                <div>Privacy Policy</div>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-left'>
              <h6 className='text-uppercase fw-bold mb-4 text-textColor font-bold'>Useful links</h6>
              <p className='mt-3'>
                <a href='/overview' className='text-reset'>
                  Overview
                </a>
              </p>
              <p className='mt-3'>
                <a href='/timeline' className='text-reset'>
                  Timeline
                </a>
              </p>
              <p className='mt-3'>
                <a href='/faqs' className='text-reset'>
                  FAQs
                </a>
              </p>
              <p className='mt-3'>
                <a href='/register' className='text-reset'>
                  Register
                </a>
              </p>
              <p className='mt-3'>
                <a href='#' className='text-reset text-textColor'>
                  Follow us
                </a>

                {/* social media */}
                <SocialIcon bgColor="none" url="https://instagram.com" />
                <SocialIcon bgColor="none" url="https://x.com" />
                <SocialIcon bgColor="none" url="https://facebook.com" />
                <SocialIcon bgColor="none" url="https://linkedin.com" />

              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-left'>
              <h6 className='text-uppercase fw-bold mb-4 text-textColor font-bold'>Contact Us</h6>
              <div className='mt-3 flex justify-center items-center'>
                <BiPhoneCall />
                <p className='ml-2'>
                  +234 679 81819
                </p>
              </div>
              
              <div className='mt-3 flex justify-center items-center'>
                <BiLocationPlus />
                <p className='ml-3'> 
                      27,Alara Street <br />
                      Yaba 100012 <br />
                      Lagos State
                </p>
              </div>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p className='m-5'>All Rights Reserved. © getlinked Ltd. </p> 
      </div>
    </MDBFooter>
  );
}