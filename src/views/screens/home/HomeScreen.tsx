import { useEffect, useRef, useState } from 'react';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content, TopSection, Hero, Wrapper, SectionOne, FeatureWrapper, FeatureCard, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, RangeSlider } from "./styles";



const Range = ({onMove = (value: any) => {}, value=0}) => {
    const firstSliderRef = useRef<HTMLDivElement>(null);
    const capSliderRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [slidePercentage, setSlidePercentage] = useState<string>("0")

    let dragValue: HTMLDivElement | null;
    
    const start = () => {
        capSliderRef!.current!.onpointerdown = () => {
            dragValue = firstSliderRef.current
            document.onpointermove = (e) => {
                if (dragValue != null) {
                    const xOffset = dragValue!.offsetLeft;
                    const percentage = Math.floor(((e.clientX - xOffset)/firstSliderRef.current!.clientWidth)*100);
                    if (percentage >= 0 && percentage <= 100) {
                        setSlidePercentage(percentage.toString())
                        onMove(percentage)
                    }

                    const mouseOffsetY = Math.floor(Math.abs((capSliderRef!.current!.getBoundingClientRect().top + window.scrollY) - e.pageY))

                    if (mouseOffsetY > 20) {
                        dragValue = null
                    }
                    firstSliderRef!.current!.onpointerup = () => {
                        dragValue = null
                    }
                }
            }
        }

    }

    useEffect(() => {
        start()
    }, [])

    return <RangeSlider percentage={slidePercentage} ref={firstSliderRef}>
        <span ref={capSliderRef} className="drag-circle"></span>
        <span ref={sliderRef} className="slide-value">{value}</span>
    </RangeSlider>
}

const LoanCalculator = () => {
    const [isPersonal, setIsPersonal] = useState<boolean>(true);
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [interestRate, setInterestRate] = useState<number>(0);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
    const [repaymentMonths, setRepaymentMonths] = useState<number>(1);
    const [percentageLoanSlider, setPercentageLoanSlider] = useState<number>(0);
    const [percentageMonthSlider, setPercentageMonthSlider] = useState<number>(0);

    const getAmount = (percentage: number) : number => {
        return ((1900000 * (percentage/100))+100000)
    }

    const getInterestRate = (percentage: number) => {
        const amount = Math.floor(getAmount(percentage));
        setLoanAmount(amount)
        let rate = 0;

        if (isPersonal) {
            if (amount < 151000) {
                rate = 6.1;
            } else if (amount < 200000) {
                rate = 5.6;
            } else if (amount < 501000) {
                rate = 5.1;
            } else {
                rate = 4.5;
            }
            setInterestRate(rate)
        } else {
            rate = 6;
            setInterestRate(rate)
        }

        return rate;
    }

    const getPaymentDuration = (percentage: number) => {
        const num_months = Math.floor(((23 * (percentage/100))+1))

        console.log("months: ", num_months);
        
        setRepaymentMonths(num_months)
        return num_months
    }

    const getRepaymentAmount = (percentage: number) => {
        const amount = getAmount(percentage)
        const rate = getInterestRate(percentage)
        const repayment = (amount * (rate/100)) + amount

        return repayment
    }
    const getMonthlyRepayment = (percentage: number, monthPercentage: number) => {
        const repaymentAmount = Math.floor(getRepaymentAmount(percentage) / getPaymentDuration(monthPercentage))
        setMonthlyPayment(repaymentAmount)
        return repaymentAmount
    }

    useEffect(() => {
        getMonthlyRepayment(percentageLoanSlider, percentageMonthSlider)
    }, [isPersonal, percentageLoanSlider, percentageMonthSlider])
    return (
        <SectionThree>
            <div className="calc-sec">
                <h2>Your Loan</h2>
                <h3>Calculator</h3>
                <p>Calculate your potential loanable amount below. To calculate your loanable amount you need to slide across the bar. <br /> <br /> FOR COLLATERAL LOAN you must tap on “Collateral loan” on the loan type</p>

                <h4>Loan Amount</h4>
                <Range value={loanAmount} onMove={(value) => { setPercentageLoanSlider(value); }} />
                <div className="loan-calc-row">
                    <span>NGN 100,000</span>
                    <span>NGN 2,000,000</span>
                </div>

                <h4>Loan Period <br /> (Months)</h4>
                <Range value={repaymentMonths} onMove={(value) => { setPercentageMonthSlider(value); }} />
                <div className="loan-calc-row">
                    <span>1 Month</span>
                    <span>24 Months</span>
                </div>

                <h4>Loan Type</h4>
                <div className="load-action-row">
                    <a className={isPersonal ? 'selected' :''} onClick={(e) => {
                        e.preventDefault();
                        setIsPersonal(true);
                    }} >Personal Loan</a>
                    <a className={!isPersonal ? 'selected' :''} onClick={(e) => {
                        e.preventDefault();
                        setIsPersonal(false);
                    }} >Business Loan</a>
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
                        <h2>{loanAmount}</h2>
                        <div className="row">
                            <span>{interestRate}%</span>
                            <span>Interest rate</span>
                        </div>
                    </div>
                    <div className="repayment">
                        <b>MONTHLY REPAYMENT</b>
                        <h2>{monthlyPayment}</h2>
                    </div>
                </div>
            </div>
        </SectionThree>
    );
}


const HomeScreen = () => {
    const navigate = useNavigate()

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
                            <h6>LOANS</h6>
                            <h2>Quick credit solutions are available for you today!</h2>
                            {/* <span>It takes a supportive partner like Doshpal to grow your business!  Now you can get up to 3 million on loans for as low as 3.5% to help you meet your needs, quickly and conveniently.</span> */}
                            <a href="/loan-apply">Get Started</a>
                        </div>

                        <div className="img-sec">
                            <img src="/img/home-hero-img.png" alt="banner" />
                        </div>
                    </Hero>
                </TopSection>
                <SectionOne>
                    <h2>Securing capital for individuals and SMEs in Nigeria may be tough, but there are options available.</h2>
                    <div className="row">
                        {/* <span>At Doshpal, we cater to the bespoke needs of self-employed business owners: SMEs, self-employed professionals, entertainers, start-ups, and tech entrepreneurs.</span> */}
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
                        <FeatureCard onClick={() => navigate("/loan")}>
                            <div className="head-row">
                                <img src="/svg/personal-loan-icon.svg" alt="" />
                                <BsArrowRight />
                            </div>

                            <h3>Personal <br /> Loans</h3>

                            {/* <p>When you run into an emergency, it's possible not to have the funds to take care ...</p> */}
                        </FeatureCard>
                        <FeatureCard onClick={() => navigate('/business-loan')}>
                            <div className="head-row">
                                <img src="/svg/sme-load-icon.svg" alt="" />
                                <BsArrowRight />
                            </div>

                            <h3>SME <br /> Loans</h3>

                            {/* <p>At Doshpal, we understand the needs of SME businesses and...</p> */}
                        </FeatureCard>
                        <FeatureCard onClick={() => navigate("/invest")}>
                            <div className="head-row">
                                <img src="/svg/investment-plan-icon.svg" alt="" />
                                <BsArrowRight />
                            </div>

                            <h3>Investment <br /> Plans</h3>

                            {/* <p>For an effortless cash-flow, you need a proper investment plan, and Doshpal is your...</p> */}
                        </FeatureCard>
                    </FeatureWrapper>
                </SectionOne>

                <SectionTwo>
                    <div className="text-content">
                        <h3>We are the best in the</h3>
                        <b>Credit world</b>
                        <a href="/loan-apply">Apply for loan</a>
                    </div>

                    <div className="stats-box" onClick={() => navigate("/loan-apply")}>
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

                <LoanCalculator />
                <SectionFour>
                    <img src="/img/section-img.png" alt="" />
                </SectionFour>
                <SectionFive>
                    <div className="text-content">
                        <h2>Earn more on your money with our high yield investment products</h2>
                        <p>Let your money work for you. <br /> <br /> Fix your money for specific periods and get high interest rates with our secure fixed deposits.</p>
                        <Link to="/invest-apply">Invest Now</Link>
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