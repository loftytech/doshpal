import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content, TopSection, Hero, Wrapper, SectionOne, FeatureWrapper, FeatureCard, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from "./styles";

const HomeScreen = () => {
    return (
        <Wrapper>
            <Content>
                <TopSection>
                    <Header />
                    <Hero>
                        <div className="text-wrapper">
                            <h6>LOANS</h6>
                            <h2>Quick credit solutions are available for you today!</h2>
                            <span>It takes a supportive partner like Doshpal to grow your business!  Now you can get up to 3 million on loans for as low as 3.5% to help you meet your needs, quickly and conveniently.</span>
                            <a href="#">Get Started</a>
                        </div>

                        <div className="img-sec">
                            <img src="/img/home-hero-img.png" alt="banner" />
                        </div>
                    </Hero>
                </TopSection>
                <SectionOne>
                    <h2>Securing capital for individuals and SMEs in Nigeria may be tough, but there are options available.</h2>
                    <div className="row">
                        <span>At Doshpal, we cater to the bespoke needs of self-employed business owners: SMEs, self-employed professionals, entertainers, start-ups, and tech entrepreneurs.</span>
                        <div className="slide-control-wrapper">
                            <div className="box">
                                <BsChevronLeft />
                            </div>
                            <div className="box">
                                <BsChevronRight />
                            </div>
                        </div>
                    </div>

                    <FeatureWrapper>
                        <FeatureCard>
                            <div className="head-row">
                                <img src="/svg/personal-loan-icon.svg" alt="" />
                                <BsArrowRight />
                            </div>

                            <h3>Personal <br /> Loans</h3>

                            <p>When you run into an emergency, it's possible not to have the funds to take care ...</p>
                        </FeatureCard>
                        <FeatureCard>
                            <div className="head-row">
                                <img src="/svg/sme-load-icon.svg" alt="" />
                                <BsArrowRight />
                            </div>

                            <h3>SME <br /> Loans</h3>

                            <p>At Doshpal, we understand the needs of SME businesses and...</p>
                        </FeatureCard>
                        <FeatureCard>
                            <div className="head-row">
                                <img src="/svg/investment-plan-icon.svg" alt="" />
                                <BsArrowRight />
                            </div>

                            <h3>Investment <br /> Plans</h3>

                            <p>For an effortless cash-flow, you need a proper investment plan, and Doshpal is your...</p>
                        </FeatureCard>
                    </FeatureWrapper>
                </SectionOne>

                <SectionTwo>
                    <div className="text-content">
                        <h3>We are the best in the</h3>
                        <b>Credit world</b>
                        <a href="#">Apply for loan</a>
                    </div>

                    <div className="stats-box">
                        <b>QUICK <br />DISBUSRE</b>
                        <h2>200m</h2>
                        <h3>Over 200m <br /> disbursed in funds</h3>
                        <p>Doshpal was founded based on the need to fill a gap in the way financial services are offered to individuals and Small and Medium Enterprises.</p>
                    </div>
                    <div className="stats-box">
                        <b>INVESTMENT</b>
                        <h2>24%</h2>
                        <h3>Interest rate on all investment plan</h3>
                        <p>Generate interest on your idle funds with our competitive investment packages. With up to 24% interest rate; you’re sure to find a fitted investment package.</p>
                    </div>
                </SectionTwo>

                <SectionThree>
                    <div className="calc-sec">
                        <h2>Your Loan</h2>
                        <h3>Calculator</h3>
                        <p>Calculate your potential loanable amount below. To calculate your loanable amount you need to slide across the bar. <br /> <br /> FOR COLLATERAL LOAN you must tap on “Collateral loan” on the loan type</p>

                        <h4>Loan Amount</h4>
                        <div className="slider-box">
                            <span className="drag-circle"></span>
                        </div>
                        <div className="loan-calc-row">
                            <span>NGN 50,000</span>
                            <span>NGN 2,000,000</span>
                        </div>

                        <h4>Loan Period <br /> (Months)</h4>
                        <div className="slider-box">
                            <span className="drag-circle"></span>
                        </div>
                        <div className="loan-calc-row">
                            <span>1 Month</span>
                            <span>24 Months</span>
                        </div>

                        <h4>Loan Type</h4>
                        <div className="load-action-row">
                            <Link to="/loan">Personal Loan</Link>
                            <Link to="/business-loan">Business Loan</Link>
                        </div>
                    </div>
                    <div className="info-sec">
                        <div className="cal-stmt">
                            <img src="/img/coin-icon.png" alt="coin icon" />
                            <p>The figure you see below are estimate based on the information you provided which might be subject to change.</p>
                        </div>
                        <div className="loan-cal-result">
                            <div className="loadable">
                                <b>LOANABLE <br /> AMOUNT</b>
                                <h2>1.45m</h2>
                                <div className="row">
                                    <span>14%</span>
                                    <span>Interest rate</span>
                                </div>
                            </div>
                            <div className="repayment">
                                <b>MONTHLY REPAYMENT</b>
                                <h2>150k</h2>
                            </div>
                        </div>
                    </div>
                </SectionThree>
                <SectionFour>
                    <img src="/img/section-img.png" alt="" />
                </SectionFour>
                <SectionFive>
                    <div className="text-content">
                        <h2>Earn more on your money with our high yield investment products</h2>
                        <p>Let your money work for you. <br /> <br /> Fix your money for specific periods and get high interest rates with our secure fixed deposits.</p>
                        <a href="#">Invest Now</a>
                    </div>
                    <div className="img-wrapper">
                        <img src="/svg/personal-loan-icon.svg" alt="" />
                    </div>
                </SectionFive>
                <SectionSix />
                <Footer />
            </Content>
        </Wrapper>
    );
}
 
export default HomeScreen;