import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content, TopSection, Hero, Wrapper, SectionTwo, SectionThree } from "./styles";

const BusinessLoanScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Wrapper>
            <Content>
                <TopSection>
                    <Header />
                    <Hero>
                        <div className="text-wrapper">
                            <h3>SME Loans</h3>
                            <span>Do you need working capital for your business? SME loans are available for individuals or corporate bodies looking to set up new businesses or expand established ones.<br /> <br />At Doshpal, we understand the needs of SME businesses and therefore have developed tailor-made loan products on a fast-track platform to help business owners meet their cash-flow needs and expand their businesses.</span>
                        </div>

                        <div className="img-sec">
                            <img src="/img/business-loan-img.png" alt="banner" />
                        </div>
                    </Hero>
                </TopSection>
                <SectionTwo>
                    <div className="text-content">
                        <h2>What you stand to <br /> get with Us</h2>
        
                        <ul>
                            <li>Financial and business growth for customers.</li>
                            <li>Bridging short-term financial needs.</li>
                            <li>Availability of short-term working capital to customers.</li>
                            <li>Quick credit with our numerous loan products.</li>
                        </ul>
                        
                        <Link to="/loan-apply">Apply for loan</Link>
                    </div>
                    <div className="img-wrapper">
                        <img src="/img/stand-with-us-img.png" alt="" />
                    </div>
                </SectionTwo>
                <SectionThree />
                <Footer />
            </Content>
        </Wrapper>
    );
}
 
export default BusinessLoanScreen;