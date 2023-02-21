import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content, TopSection, Hero, Wrapper, SectionTwo, SectionThree, SectionOne } from "./styles";

const InvestScreen = () => {
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
                            <h3>Investments</h3>
                            <span>Wondering how to start investing your cash? Need to make extra money for the future? For an effortless cash flow, you need a proper investment plan.

                            <br /> Not to worry. We have you covered too. You can get up to 24% on our investment package with us! Now you can put your money to work with our flexible investment options and earn higher returns per annum.
                            <br />Our investment plan is an important tool to help you reach your financial milestones.
                            </span>
                        </div>

                        <div className="img-sec">
                            <img src="/img/invest-hero.png" alt="banner" />
                        </div>
                    </Hero>
                </TopSection>
                <Footer />
            </Content>
        </Wrapper>
    );
}
 
export default InvestScreen;