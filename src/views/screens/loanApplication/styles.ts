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
        max-width: 640px;
        h2 {
            color: ${props => props.theme.primaryColor};
            font-size: 35px;
            line-height: 45px;
            font-weight: 700;
            margin-bottom: 35px;

            @media screen and (min-width: 880px) {
                font-size: 35px;
                line-height: 45px;
            }
        }
        span {
            display: block;
            color: #3C3B3B;
            font-size: 20px;
            font-weight: 300;
            margin-bottom: 40px;
            line-height: 25px;
        }
    }

    .form-wrapper {
        display: flex;
        flex-direction: column-reverse;
        gap: 40px;

        img {
            width: 100px;
        }

        @media screen and (min-width: 880px) {
            font-size: 30px;
            line-height: 45px;
            flex-direction: row;
            align-items: flex-end;
            gap: 100px;

            img {
                display: block;
                width: 200px;
            }
        }
    }

    .form-sec {
        display: flex;
        flex-direction: column;
        flex: 1;
        /* max-width: 480px; */

        h3 {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 400;
            color: ${props => props.theme.primaryColor};
        }

        .category-row {
            display: flex;
            margin-bottom: 30px;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                width: 160px;
                background-color: #D9D9D9;
                font-size: 15px;
                cursor: pointer;
                color: ${props => props.theme.primaryColor};

                :first-child {
                    margin-right: 20px;
                    width: 180px;
                }
            }
            span.selected {
                background-color: ${props => props.theme.secondaryColor};
                color: #fff;
            }
        }

        label {
            font-size: 14px;
            font-weight: 400;
            color: #000;
            margin-bottom: 2px;
        }
        
        input {
            height: 45px;
            background-color: #F4F4F4;
            border-radius: 8px;
            margin-bottom: 20px;
            border: none;
            padding: 0px 20px;
            font-size: 13px;
        }

        .meta-row {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            cursor: pointer;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 18px;
                width: 18px;
                border-radius: 3px;
                background-color: #D9D9D9;
                margin-right: 20px;
                font-size: 10px;
            }

            b {
                font-size: 16px;
                font-weight: 400;
                color: ${props => props.theme.primaryColor};
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 13px;
            font-weight: 600;
            height: 50px;
            width: 160px;
            color: #fff;
            background-color: ${props => props.theme.secondaryColor};
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }


        @media screen and (min-width: 880px) {
            margin-bottom: 60px;
        }
    }
`;
export const RangeSlider = styled.div<{percentage: string}>`
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
        width: ${props => props.percentage}%;
        height: 100%;
        background-color: ${props => props.theme.secondaryColor};
    }

    .drag-circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${props => props.theme.secondaryColor};
        position: absolute;
        left: calc(${props => props.percentage}% - 5px);
        cursor: pointer;
    }
    .slide-value {
        display: ${props => parseInt(props.percentage) > 0 ? "flex" : "none"};
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
        left: calc(${props => props.percentage}% - 30px);
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
            font-size: 30px;
            margin-bottom: 10px;
            font-weight: 600;
        }
        h3 {
            color: ${props => props.theme.cyanColor};
            font-size: 30px;
            margin-bottom: 30px;
            font-weight: 600;
        }
        p {
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 35px;
            line-height: 25px;
        }
        h4 {
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 16px;
            line-height: 25px;
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
                border-radius: 3px;
                color: ${props => props.theme.primaryColor};
                background-color: #D9D9D9;
                cursor: pointer;
            }
            
            a.selected {
                color: #fff;
                background-color: ${props => props.theme.secondaryColor};
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
                width: 50px;
            }
            p {
                color: #FBF9FE;
                font-size: 15px;
                font-weight: 300;
                margin-left: 20px;
                line-height: 18px;
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
                    display: block;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                h2 {
                    color: ${props => props.theme.cyanColor};
                    font-size: 50px;
                    font-weight: 600;
                    margin-bottom: 10px;
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
                    display: block;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    margin-bottom: 10px;
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