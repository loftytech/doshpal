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



const InvestmentApplicationScreen = () => {
    const [isPersonalLoan, setIspersonalLoan] = useState<boolean>(true);
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
    const [selectedAgeRange, setSelectedAgeRange] = useState<string>('none');
    const [selectedGender, setSelectedGender] = useState<string>('none');

    const investTypeRef = useRef<HTMLSelectElement>(null)
    const investAmountRef = useRef<HTMLInputElement>(null)
    const investDurationRef = useRef<HTMLSelectElement>(null)
    const investDateRef = useRef<HTMLInputElement>(null)
    const investRepaymentTypeRef = useRef<HTMLSelectElement>(null)
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneNumberRef = useRef<HTMLInputElement>(null)
    const stateRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


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
            if (investTypeRef.current?.value == "none") {
                return Message.error("Please select investment type");
            }
            if (investAmountRef.current?.value == "") {
                return Message.error("Please enter investment amount");
            }
            if (investDurationRef.current?.value == "none") {
                return Message.error("Please select duration");
            }
            if (investRepaymentTypeRef.current?.value == "none") {
                return Message.error("Please select repayment type");
            }
            if (investDateRef.current?.value == "") {
                return Message.error("Please select the date you want to pay for your investment");
            }

            if (selectedGender == "none") {
                return Message.error("Please select a gender");
            }
            if (selectedAgeRange == "none") {
                return Message.error("Please select your age range");
            }

            setIsSendingLoanData(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/v1/invest/email/send",
                data: {
                    firstName: firstNameRef.current?.value,
                    lastName: lastNameRef.current?.value,
                    investType: investTypeRef.current?.value,
                    investAmount: investAmountRef.current?.value,
                    duration: investDurationRef.current?.value,
                    investDate: investDateRef.current?.value,
                    investRepayment: investRepaymentTypeRef.current?.value,
                    email: emailRef.current?.value,
                    phone: phoneNumberRef.current?.value,
                    state: stateRef.current?.value,
                    gender: selectedGender,
                    ageRange: selectedAgeRange,
                }
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsSendingLoanData(false)
                Message.success("Investment application sent successfuly");
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
                                <span>Fill the form below to for your investment, an agent would place a call through to you within 2 working hours.</span>
                            </div>

                                <label htmlFor="first-name">First Name</label>
                                <input ref={firstNameRef} type="text" name="" id="first-name" />
                                <label htmlFor="last-name">Last Name</label>
                                <input ref={lastNameRef} type="text" name="" id="last-name" />
                                <label htmlFor="invest-type">Investment Type</label>
                                <select ref={investTypeRef} id="invest-type" name="">
                                    <option value="none">Select investment type</option>
                                    <option value="flexible">Flexible</option>
                                    <option value="fixed">Fixed</option>
                                    <option value="dollar">Dollar</option>
                                </select>
                                <label htmlFor="invest-amount">Amount</label>
                                <input ref={investAmountRef} type="text" name="" id="invest-amount" />
                                <label htmlFor="invest-duration">Duration</label>
                                <select ref={investDurationRef} id="invest-duration" name="">
                                    <option value="none">Select duration of investment</option>
                                    <option value="90 days">90 days</option>
                                    <option value="180 days">180 days</option>
                                    <option value="270 days">270 days</option>
                                    <option value="365 days">365 days</option>
                                </select>
                                <label htmlFor="invest-repayment">Interest repayment type</label>
                                <select ref={investRepaymentTypeRef} id="invest-repayment" name="">
                                    <option value="none">Select repayment type</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="at maturity">At Maturity</option>
                                    <option value="upfront">Upfront</option>
                                </select>
                                <label htmlFor="repayment-date">Kindly select the date the funds will be transferred to our account</label>
                                <input ref={investDateRef}  type="date" name="" id="repayment-date" />
                                <label htmlFor="phone-number">Phone Number</label>
                                <input ref={phoneNumberRef}  type="text" name="" id="phone-number" />
                                <label htmlFor="email-address">Email Address</label>
                                <input ref={emailRef}  type="text" name="" id="email-address" />
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

                <Footer />
            </Content>
        </Wrapper>
    );
}
 
export default InvestmentApplicationScreen;