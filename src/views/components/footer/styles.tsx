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
            width: 150px;
            margin-bottom: 20px;
        }
    
        p {
            color: #3A393A;
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
            margin-bottom: 20px;
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
            font-size: 12px;
            font-weight: 600;
        }

        p {
            font-size: 12px;
            font-weight: 600;
            color: #3A393A;
            line-height: 20px;
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