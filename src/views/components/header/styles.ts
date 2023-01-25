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
            height: 30px;
        }

    }
     nav {
        display: none;
        ul {
            display: flex;
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
        nav {
            display: block;
            ul {
                display: flex;
                align-items: center;
                li {
                    margin-left: 40px;

                    a {
                        display: block;
                        color: #1E1E1E;
                        font-size: 13px;
                        font-weight: 400;
                    }

                    :last-child {
                        a {
                            background-color: ${props => props.theme.secondaryColor};
                            padding: 10px 30px;
                            border-radius: 8px;
                            color: #fff;
                            font-size: 13px;
                            font-weight: 600;
                        }
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