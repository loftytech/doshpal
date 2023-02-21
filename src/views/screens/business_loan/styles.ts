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
    flex-direction: column-reverse;
    padding: 80px 8% 100px 8%;
    gap: 40px;

    .text-wrapper {
        flex: 1;
        margin-bottom: 40px;
        max-width: 520px;
        h3 {
            color: ${props => props.theme.primaryColor};
            font-size: 33px;
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
            background-color: ${props => props.theme.secondaryColor};
            color: #fff;
            font-size: 13px;
            font-weight: 600;
            height: 50px;
            width: 200px;
            border-radius: 4px;
            margin-bottom: 20px;
        }
    }

    .img-sec {
        display: flex;
        position: relative;
        justify-content: center;
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
        img {
            max-width: 100%;
            position: relative;
        }
    }

    @media screen and (min-width: 880px) {
        padding: 80px 8% 100px 8%;
        /* height: 400px; */
        position: relative;
        flex-direction: row;
        justify-content: space-between;

        .text-wrapper {
            margin: 40px 0px 0px 0px;
        }
        .img-sec {
            position: relative;
            max-height: 100%;

            img {
                width: 480px;
                object-fit: contain;
            }
        }
    }
`;

export const SectionTwo = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding: 100px 8%;
    gap: 60px;
    background: rgba(113, 213, 228, 0.4);
    box-shadow: 5.8408px 5.8408px 3.3376px rgba(0, 0, 0, 0.04);

    .text-content {
        max-width: 480px;
        h2 {
            color: ${props => props.theme.primaryColor};
            font-size: 27px;
            line-height: 32px;
            margin-bottom: 30px;
        }
        ul {
            li {
                list-style: disc;
                color: #1A1818;
                font-size: 12px;
                line-height: 20px;
                margin-bottom: 4px;
                font-weight: 400;
                margin-left: 20px;
            }
            margin-bottom: 20px;
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
            border-radius: 8px;
            background-color: ${props => props.theme.secondaryColor};
        }
    }

    .img-wrapper {
        margin: 0px auto;
        img {
            max-height: 200px;
        }
    }

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;

        .img-wrapper {
            margin: unset;
        }
    }
`;
export const SectionThree = styled.div`
    padding: 100px 8%;
    background-color: #fff;
`;