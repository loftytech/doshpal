import styled from "styled-components";

export const FooterWrapper = styled.div`    
    background: #FBF8FF;
    padding: 60px 8%;

    .content-sec {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-bottom: 40px;
        gap: 8%;

        img {
            width: 180px;
            margin-bottom: 20px;
        }
    
        p {
            color: #3A393A;
            font-size: 16px;
            font-weight: 300;
            line-height: 25px;
            margin-bottom: 25px;
            max-width: 640px;
        }

        .social {
            display: flex;
            gap: 20px;
            font-size: 30px;
            color: ${props => props.theme.primaryColor};
        }


        @media screen and (min-width: 880px) {
            flex-direction: row;

            img {
                margin-bottom: 0px;
                width: unset;
                height: 60px;
            }

            p {
                margin-bottom: 0px;
            }
        }
    }

    .meta-sec {
        display: flex;
        justify-content: space-between;
        flex-direction: column-reverse;

        span {
            color: ${props => props.theme.primaryColor};
            font-size: 14px;
            font-weight: 600;
        }

        p {
            font-size: 14px;
            font-weight: 600;
            color: #3A393A;
            line-height: 23px;
            margin-bottom: 40px;
        }

        @media screen and (min-width: 880px) {
            flex-direction: row;
            align-items: flex-end;
            
            p {
                margin-bottom: 0px;
            }
        }
    }
`