import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8%;
    height: 90px;
    a {
        display: block;
        img {
            height: 34px;
        }

    }

    .toggle-menu {
        display: block;
        font-size: 30px;
        color: ${props => props.theme.primaryColor};
        cursor: pointer;
     }
    
    @media screen and (min-width: 640px) {
        .toggle-menu {
            display: none;
        }
    }
`;
export const NavigationWrapper = styled.nav<{navigationState: boolean}>`
    visibility: ${props => props.navigationState ? "visible" : "hidden"};
    position: fixed;
    top: 0px;
    left: 0px;
    ul {
        width: 240px;
        height: 100vh;
        background: #fff;
        padding: 20px 0px;
        position: relative;
        z-index: 9999;
        left: ${props => props.navigationState ? "0px" : "-240px"};
        top: 0px;
        transition: all 0.2s ease-in-out;

        display: flex;
        flex-direction: column;

        .nav-logo {
            display: block;
            padding: 20px 20px;
            border-bottom: 1px solid #f7f7f7;
        }
        li {
            padding: 0px 20px;
            a {
                display: block;
                padding: 18px 20px;
                color: #1C1D1F;
                white-space: nowrap;
                font-size: 16px;
                font-weight: 400;
                font-family: 'Lato', sans-serif;
            }
            
            :last-child {
                margin-top: 10px;
                    a {
                        background-color: ${props => props.theme.secondaryColor};
                        padding: 13px 30px;
                        border-radius: 3px;
                        color: #fff;
                        font-size: 13px;
                        font-weight: 600;
                    }
                }
        }
    }

    ::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.navigationState ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.navigationState ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        z-index: 999;
        @media screen and (min-width: 990px) {
            background-color: transparent;
            width: 0px;
            height: unset;
        }
    }

     @media screen and (min-width: 640px) {
        display: block;
        position: unset;
        visibility: visible;
        ul {
            display: flex;
            left: unset;
            top: unset;
            flex-direction: row;
            align-items: center;
            width: unset;
            height: unset;
            background: transparent;
            padding: unset;

            .nav-logo {
                display: none;
            }
            li {
                margin-left: 40px;
                padding: unset;

                a {
                    display: block;
                    color: #1E1E1E;
                    font-size: 16px;
                    font-weight: 400;
                }

                :last-child {
                    a {
                        background-color: ${props => props.theme.secondaryColor};
                        padding: 15px 34px;
                        border-radius: 8px;
                        color: #fff;
                        font-size: 13px;
                        font-weight: 600;
                    }
                }
            }
        }
     }
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