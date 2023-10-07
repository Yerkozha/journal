import styled from "styled-components"

interface CardStyleProps {
    bg?: string
}
const MainPageWrapper = styled.div`
display: grid;
grid-template-columns: 25% 75%;
grid-gap: 60px;
padding-top: 39px;
`
const LeftSide = styled.ul`
display: flex;
flex-direction: column;
gap: 40px;
li {
    border-radius: ${props => props.theme.borderRadius.m};
    
    & + div:first-child {
        margin-bottom: 10px;
    }
    & div:last-child{
        & > div {
            display: flex;
            justify-content: space-between;
            button {
                flex: 0 2 105px;
            }
        }
    }
    
}
li:first-child {
    padding: 32px 24px;
    & > div > h1, & > div > div > h1 {
        font-size: 24px;
        line-height: 40px;
        font-weight: ${props => props.theme.fontWeight.bold};
    }
}
ul > li {
    background-color: #fff;
}
& > li:nth-child(3) {
    display: flex;
    flex-direction: column;
    & > h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        margin: 20px 0;
    }
    & > div {
        display: flex;
        & > button:focus {
            border-bottom: 4px solid ${props => props.theme.colorList.text[2]};
            & span{
                color: ${props => props.theme.colorList.text[2]};
            }
        }
    } 
}

// Products 
li:nth-child(2) > ul{
    margin: 24px 0;
    li {
        align-items: center;
        box-sizing: border-box;
        max-height: 64px;
        padding: 22px 16px;
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
    li:last-child > div:nth-child(2){
        text-align: right;
    }
    & ~ button > span:first-child{
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    }
}
li:nth-child(2) > div {
    display: flex;
    justify-content: space-between;
    & > h1 {
        font-size: 18px;
        line-height: 24px;
    }
}
// Currency

`
const Currency = styled.ul.attrs((props) => ({}))`
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(20px,auto));
    & > li:first-child {
    font-size: 12px;
    padding: 9px;
    line-height:16px;
    background-color: transparent;
    grid-auto-rows: 1fr;
    grid-template-columns: 1.25fr .5fr .5fr;
    color: ${props => props.theme.colorList.text[0]};
    h3 {
        text-align: left;
    }
    }
    & > li {
    color: ${props => props.theme.colorList.text[3]};
    display: grid;
    grid-template-columns: .6fr 1.5fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 16px 8px;
    border-radius: 0;
    border-bottom: 1px solid #E4E9F2;
    font-size: 16px;
    line-height: 20px;
    h3:nth-child(1){
        text-align: left;
    }
    h3 {
        text-align: center;
    }
}
& > li:last-child{
    border-bottom: 0;
}
`
const RightSide = styled.ul`
display: flex;
flex-direction: column;
gap: 40px;

`
const Card = styled.div.attrs<CardStyleProps>((props) => ({

}))<CardStyleProps>`
    position: relative;
    max-width: 304px;
    width: 100%;
    height: 100%;
    background: ${props => props.bg};
    border-radius: ${props => props.theme.borderRadius.m};
    padding: 15px;
    color: #fff;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: flex-end;
    &:hover {
        cursor: help;
    }
    *:not(svg){
        z-index: 2;
    }
    & div:nth-child(1){
        justify-self: flex-start;
    }
    & .card-slider__icon{
        position: absolute;
        right: -8px;
        top: -8px;
    }
    h1{
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
    }
    & > h1 {
        font-size: 24px;
        line-height: 32px;
    }
    div > h3{
        font-size: 12px;
        line-height: 16px;
    }
    h3 {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
    em{
        
        margin-right: 5px;
        opacity: 0.5;
    }
    & > ul{
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        & > li {
        background: transparent;
        background: rgba(0, 0, 0, 0.15);
        border-radius: 234px;
        padding: 0 9px;
        font-size: 10px;
        line-height: 12px;
        }
    }
    
`

export const StylesBundle = () => ({
    MainPageWrapper,
    LeftSide,
    Currency,
    RightSide,
    Card
})