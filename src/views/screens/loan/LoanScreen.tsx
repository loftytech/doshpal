import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content, TopSection, Hero, Wrapper, SectionTwo, SectionThree, SectionOne } from "./styles";

const LoanScreen = () => {
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
                            <h3>With Personal Loan you get up to 3m</h3>
                            <span>When you run into an emergency, it's possible not to have the funds to take care of your urgent needs. Doshpal can come through for you!<br /><br /> With proper planning, a personal loan can fill a void in your budget without risking your home or assets. <br /><br /> We’ve got you covered with our quick loans! Get up to 3 million on loans for as low as 3.5% interest today.</span>
                        </div>

                        <div className="img-sec">
                            <img src="/img/loan-img.png" alt="banner" />
                        </div>
                    </Hero>
                </TopSection>
                <Footer />
            </Content>
        </Wrapper>
    );
}
 
export default LoanScreen;