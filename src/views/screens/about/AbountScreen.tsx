import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content, TopSection, Hero, Wrapper, SectionTwo, SectionThree, SectionOne } from "./styles";

const AbountScreen = () => {
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
                            <h2>Doshpal for you;</h2>
                            <h3>Credit for all</h3>
                            <span>Doshpal, a subsidiary of Kredify, is derived from two words, 'Dosh' and 'Pal', meaning 'Cash' and 'Friend'.<br /><br /> Kredify is a registered financial service company and your one-stop to getting short to medium-term financing. <br /><br /> This opportunity applies to individuals and small and medium-sized enterprises in Nigeria.</span>
                        </div>

                        <div className="img-sec">
                            <img src="/img/about-hero-img.png" alt="banner" />
                        </div>
                    </Hero>
                </TopSection>

                <SectionOne>
                    <div className="text-content">
                        <h2>MISSION</h2>
                        <p>Our vision is to be the most preferred financial solution provider for personal credit and small and medium enterprises across Africa. <br /> <br />Come with us on this journey, and enjoy easy solutions to your basic financial needs.</p>
                    </div>
                    <div className="img-wrapper">
                        <img src="/img/globe-img.png" alt="" />
                    </div>
                </SectionOne>
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
 
export default AbountScreen;