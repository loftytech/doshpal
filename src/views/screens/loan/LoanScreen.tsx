import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content, TopSection, Hero, Wrapper, SectionTwo, SectionThree, SectionOne } from "./styles";

const LoanScreen = () => {
    return (
        <Wrapper>
            <Content>
                <TopSection>
                    <Header />
                    <Hero>
                        <div className="text-wrapper">
                            <h3>With Personal Loan you get up to 3m</h3>
                            <span>When you run into an emergency, it's possible not to have the funds to take care of your urgent needs. Doshpal can come through for you!<br /><br /> With proper planning, a personal loan can fill a void in your budget without risking your home or assets. <br /><br /> We’ve got you covered with our quick loans! Get up to 3 million on loans for as low as 3.5% interest today.</span>
                        </div>

                        <div className="img-sec">
                            <img src="/img/loan-img.png" alt="banner" />
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
                        
                        <a href="#">Apply for loan</a>
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
 
export default LoanScreen;