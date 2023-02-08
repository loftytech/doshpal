import { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import AxiosCall from '../../../utils/axios';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/message/Message';
import { Content, TopSection, Hero, Wrapper, SectionThree, RangeSlider, Verticalspace } from "./styles";


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


const LoanApplicationScreen = () => {
    const [isPersonalLoan, setIspersonalLoan] = useState<boolean>(true);
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
    const [selectedAgeRange, setSelectedAgeRange] = useState<string>('none');
    const [selectedBusinessSector, setSelectedBusinessSector] = useState<string>('none');
    const [selectedGender, setSelectedGender] = useState<string>('none');

    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const loanAmountRef = useRef<HTMLInputElement>(null)
    const phoneNumberRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const stateRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const businessSectorList = [
        "Oil and Gas",
        "Healthcare",
        "Agribusiness",
        "Import and Export Trade",
        "School Administrators",
        "SME Business",
        "Other"
    ]

    const ageRangeList = [
        "20 - 29",
        "30 - 39",
        "40 - 49",
        "50 - 59",
        "60 and above"
    ]
    const genderList = [
        "Male",
        "Female"
    ]

    const [isSendingLoanData, setIsSendingLoanData] = useState(false);

    const submitLoan = async (e: any) => {
        e.preventDefault();
        try {
            if (!acceptedTerms) {
                return Message.error("Please accept our terms and conditions");
            }
            if (selectedGender == "none") {
                return Message.error("Please select a gender");
            }
            if (selectedAgeRange == "none") {
                return Message.error("Please select your age range");
            }
            if (!isPersonalLoan && selectedBusinessSector == "none") {
                return Message.error("Please select business sector");
            }
            setIsSendingLoanData(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/v1/loan/email/send",
                data: {
                    firstName: firstNameRef.current?.value,
                    lastName: lastNameRef.current?.value,
                    email: emailRef.current?.value,
                    phone: phoneNumberRef.current?.value,
                    state: stateRef.current?.value,
                    loanAmount: loanAmountRef.current?.value,
                    gender: selectedGender,
                    ageRange: selectedAgeRange,
                    businessSector: selectedBusinessSector,
                    isPersonal: isPersonalLoan
                }
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsSendingLoanData(false)
                Message.success("Loan application sent successfuly");
                navigate("/")
            } else {
                setIsSendingLoanData(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSendingLoanData(false)
            Message.error(err?.response.data.message)
        }
    }
    return (
        <Wrapper>
            <Content>
                <TopSection>
                    <Header />
                    <Hero>
                        <div className="form-wrapper">
                            <div className="form-sec">
                            <div className="text-wrapper">
                                <h2>Fill the form below to apply</h2>
                                <span>Fill the form below to for your loan, an agent would place a call through to you within 2 working hours.</span>
                            </div>
                                <h3>Select Loaning Category</h3>
                                <div className="category-row">
                                    <span onClick={() => setIspersonalLoan(true)} className={isPersonalLoan ? 'selected' : ''}>Personal Loan</span>
                                    <span onClick={() => setIspersonalLoan(false)} className={!isPersonalLoan ? 'selected' : ''}>SME Loan</span>
                                </div>

                                <label htmlFor="first-name">First Name</label>
                                <input ref={firstNameRef} type="text" name="" id="first-name" />
                                <label htmlFor="last-name">Last Name</label>
                                <input ref={lastNameRef} type="text" name="" id="last-name" />
                                <label htmlFor="email-address">Email Address</label>
                                <input ref={emailRef}  type="text" name="" id="email-address" />
                                <label htmlFor="loam-amount">Loan Amount</label>
                                <input ref={loanAmountRef}  type="text" name="" id="loam-amount" />
                                <label htmlFor="phone-number">Phone Number</label>
                                <input ref={phoneNumberRef}  type="text" name="" id="phone-number" />
                                <label htmlFor="state-of-residence">State of residence</label>
                                <input ref={stateRef}  type="text" name="" id="state-of-residence" />
                                <label>Gender</label>
                                <div className="radio-selection">
                                    {genderList.map(item => <li className={selectedGender == item ? 'active' : ''} onClick={() => setSelectedGender(item)}><span></span> <b>{item}</b></li>)}
                                </div>
                                <Verticalspace />
                                <label>Age Range</label>
                                <div className="radio-selection">
                                    {ageRangeList.map(item => <li className={selectedAgeRange == item ? 'active' : ''} onClick={() => setSelectedAgeRange(item)}><span></span> <b>{item}</b></li>)}
                                </div>
                                <Verticalspace />
                                {!isPersonalLoan && <><label>Business Sector</label>
                                <div className="radio-selection">
                                    {businessSectorList.map(item => <li className={selectedBusinessSector == item ? 'active' : ''} onClick={() => setSelectedBusinessSector(item)}><span></span> <b>{item}</b></li>)}
                                </div>
                                <Verticalspace /></>}
                                <div className="meta-row" onClick={() => setAcceptedTerms(!acceptedTerms)}>
                                    <span className={!acceptedTerms ? 'accepted' : ''}>{acceptedTerms && <AiOutlineCheck />}</span>
                                    <b>I agree to the terms and conditions </b>
                                </div>
                                <button onClick={submitLoan}>{isSendingLoanData ? <Loader /> : "Submit"}</button>
                            </div>
                            <img src="/img/person-3d.png" alt="3d person icon" />
                        </div>
                    </Hero>
                </TopSection>

                <LoanCalculator />
                <Footer />
            </Content>
        </Wrapper>
    );
}
 
export default LoanApplicationScreen;