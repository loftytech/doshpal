import styled from "styled-components";

export const Wrapper = styled.div`

`;
export const Content = styled.div`
    
`;
export const TopSection = styled.div`
    background: #FBF8FF;
`;
export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 8%;

    .text-wrapper {
        flex: 1;
        margin-bottom: 40px;
        max-width: 520px;
        h6 {
            color: ${props => props.theme.secondaryColor};
            letter-spacing: 2px;
            font-size: 17px;
            font-weight: 400;
            margin-bottom: 20px;
        }
        h2 {
            color: ${props => props.theme.primaryColor};
            font-size: 35px;
            line-height: 45px;
            font-weight: 700;
            margin-bottom: 40px;

            @media screen and (min-width: 880px) {
                font-size: 40px;
                line-height: 50px;
            }
        }
        span {
            display: block;
            color: #3C3B3B;
            font-size: 15px;
            font-weight: 400;
            margin-bottom: 40px;
            line-height: 21px;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme.cyanColor};
            color: #fff;
            font-size: 13px;
            font-weight: 600;
            height: 40px;
            width: 150px;
            border-radius: 4px;
        }
    }

    .img-sec {
        display: none;
    }

    @media screen and (min-width: 880px) {
        padding: 40px 8% 0px 8%;
        /* height: 400px; */
        position: relative;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        .text-wrapper {
            margin: 40px 0px 80px 0px;
        }
        .img-sec {
            display: flex;
            align-items: flex-end;
            position: relative;
            max-height: 100%;
            height: 400px;

            img {
                max-height: 100%;
                max-width: 100%;
                object-fit: contain;
            }
        }
    }
`;
export const SectionOne = styled.div`
    padding: 100px 8%;
    background-color: #fff;
    h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 40px;
        line-height: 30px;
        color: ${props => props.theme.primaryColor};
        max-width: 500px;
    }

    .row {
        display: flex;
        justify-content: flex-end;
        @media screen and (min-width: 880px) {
            justify-content: space-between;
        }

        span {
            display: none;
            max-width: 500px;
            line-height: 20px;
            font-size: 13px;
            font-weight: 400;
            color: #1A1818;

            @media screen and (min-width: 880px) {
                display: block;
            }
        }

        .slide-control-wrapper {
            display: flex;
            gap: 30px;

        

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 35px;
                height: 35px;
                font-size: 13px;
                border-radius: 4px;
                cursor: pointer;
                background-color: ${props => props.theme.lightPrimaryColor};
                color: rgba(48, 48, 48, 0.51);

                svg {
                    stroke-width: 1px;
                }
            }
        }

    }
`;
export const FeatureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 80px 0px 30px 0px;
    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const FeatureCard = styled.div`
    width: 100%;
    max-width: 260px;
    padding: 35px 35px;
    background-color: ${props => props.theme.fadedPrimaryColor};
    .head-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    h3 {
        color: ${props => props.theme.primaryColor};
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
        line-height: 20px;
    }

    p {
        font-size: 12px;
        color: #141414;
        line-height: 18px;
    }
`;

export const SectionTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 8%;
    gap: 40px;
    background-color: ${props => props.theme.fadedPrimaryColor};

    .text-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* flex: 1; */
        h3 {
            color: #424142;
            font-size: 30px;
            font-weight: 600;
            line-height: 24px;
            margin-bottom: 4px;
            text-align: center;
        }
        b {
            font-size: 30px;
            font-weight: 600;
            color: ${props => props.theme.primaryColor};
            text-align: center;
        }
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme.primaryColor};
            padding: 10px 20px;
            border-radius: 4px;
            margin-top: 20px;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            width: 150px;
        }
    }

    .stats-box {
        flex: 1;
        background-color: #fff;
        padding: 40px 30px;
        border-radius: 6px;
        max-width: 320px;

        b {
            display: block;
            font-size: 11px;
            font-weight: 600;
            color: ${props => props.theme.cyanColor};
            margin-bottom: 10px;

            text-align: center;
        }
        h2 {
            font-size: 50px;
            font-weight: 600;
            color: ${props => props.theme.primaryColor};
            margin-bottom: 10px;
            text-align: center;
        }
        h3 {
            font-size: 17px;
            font-weight: 600;
            color: ${props => props.theme.cyanColor};
            margin-bottom: 10px;
            line-height: 20px;
            text-align: center;
        }

        p {
            color: #1A1818;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            text-align: center;
        }
    }


    @media screen and (min-width: 1080px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 6%;

        .text-content {
            align-items: flex-start;
        }

        .stats-box {
            b {
                text-align: start;
            }
            h2 {
                text-align: start;
            }
            h3 {
                text-align: start;
            }
            p {
                text-align: start;
            }
        }
    }
`;

export const SectionThree = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 8%;
    background-color: ${props => props.theme.primaryColor};

    .calc-sec {
        margin-bottom: 40px;
        h2 {
            color: #fff;
            font-size: 23px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        h3 {
            color: ${props => props.theme.cyanColor};
            font-size: 23px;
            margin-bottom: 30px;
            font-weight: 600;
        }
        p {
            color: #fff;
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 30px;
            line-height: 18px;
        }
        h4 {
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 16px;
            line-height: 20px;
        }

        .slider-box {
            display: flex;
            align-items: center;
            width: 100%;
            height: 3px;
            background-color: #D9D9D9;
            margin-bottom: 10px;
            position: relative;

            ::before {
                content: "";
                position: absolute;
                left: 0px;
                width: 60%;
                height: 100%;
                background-color: ${props => props.theme.secondaryColor};
            }

            .drag-circle {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: ${props => props.theme.secondaryColor};
                position: absolute;
                left: calc(60% - 5px);
            }
            ::after {
                content: "1.4M";
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 13px;
                font-weight: 600;
                color: #fff;
                width: 60px;
                height: 25px;
                border-radius: 12.5px;
                margin-bottom: 40px;
                background-color: ${props => props.theme.secondaryColor};
                position: absolute;
                left: calc(60% - 30px);
            }
        }

        .loan-calc-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;

            span {
                color: #fff;
                font-size: 12px;
                font-weight: 400;
            }
        }

        .load-action-row {
            display: flex;
            gap: 20px;
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                width: 180px;
                background-color: ${props => props.theme.secondaryColor};
                color: #fff;
                border-radius: 3px;

                :last-child {
                    color: ${props => props.theme.primaryColor};
                    background-color: #D9D9D9;
                }
            }
        }
    }

    .info-sec {
        max-width: 480px;
        .cal-stmt {
            display: flex;
            align-items: center;
            background: #5B30BE;
            border: 3px solid rgba(113, 213, 228, 0.26);
            border-radius: 22px;
            padding: 20px 20px;
            margin-bottom: 30px;
            img {
                width: 40px;
            }
            p {
                color: #FBF9FE;
                font-size: 12px;
                font-weight: 400;
                margin-left: 20px;
                line-height: 16px;
            }
        }

        .loan-cal-result {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background: #5B30BE;
            border-radius: 22px;
            padding: 25px 40px;

            .loadable {
                b {
                    color: #fff;
                    font-size: 10px;
                    font-weight: 600;
                    margin-bottom: 4px;
                }
                h2 {
                    color: ${props => props.theme.cyanColor};
                    font-size: 50px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                .row {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    span {
                        color: rgba(255, 248, 235, 0.71);
                        margin-right: 15px;
                        font-size: 17px;
                        font-weight: 600;

                        :last-child {
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(255, 248, 235, 0.71);
                        }
                    }
                }
            }

            .repayment {
                border-top: 0.5px solid #D9D9D9;
                padding-top: 30px;
                b {
                    color: #fff;
                    font-size: 10px;
                    font-weight: 600;
                    margin-bottom: 4px;
                }
                h2  {
                    color: ${props => props.theme.cyanColor};
                    font-size: 50px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
            }
        }
    }

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 8%;

        .calc-sec {
            margin-bottom: 40px;
        }
    }
`;

export const SectionFour = styled.div`
`;
export const SectionFive = styled.div`
    display: flex;
    padding: 100px 8%;
    background-color: ${props => props.theme.fadedPrimaryColor};

    .text-content {
        max-width: 480px;
        h2 {
            color: ${props => props.theme.primaryColor};
            font-size: 27px;
            line-height: 30px;
            margin-bottom: 30px;
        }
        p {
            color: #1A1818;
            font-size: 12px;
            line-height: 20px;
            margin-bottom: 30px;
            font-weight: 400;
        }
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 12px;
            font-weight: 600;
            width: 140px;
            height: 36px;
            border-radius: 18px;
            background-color: ${props => props.theme.secondaryColor};
        }
    }

    .img-wrapper {
        display: none;
        flex: 1;
        align-items: flex-end;
        justify-content: flex-end;
        img {
            width: 100px;
            margin-right: 30px;
        }
    }

    @media screen and (min-width: 880px) {
        .img-wrapper {
            display: flex;
        }
    }
`;
export const SectionSix = styled.div`
    padding: 100px 8%;
    background-color: #fff;
`;