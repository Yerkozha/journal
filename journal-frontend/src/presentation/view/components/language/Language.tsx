
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArrowDown, Text } from 'ui'

interface HeaderProps {
    maxHeight?: string
}
interface LanguageStyleProps {
    dataLang?: string
    maxHeight?: string
}

const LanguageSC = styled.div.attrs<LanguageStyleProps>(({maxHeight,dataLang}) => ({'data-lang': dataLang}))<LanguageStyleProps>`
    position: relative;
    border: 1px solid #E4E9F2;
    border-radius: 6px;
    padding: 5px 2px 5px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    height: ${({maxHeight}) => maxHeight};
    span {
        width: 30px;
        pointer-events: none;
    }
    svg {
        pointer-events: none;
    }
`
const LanguageList = styled.ul`
    position: absolute;
    left: 0;
    top: 36px;
    cursor: pointer;
    box-shadow: 0px 16px 30px rgba(34, 43, 69, 0.2);
    z-index:10;
    background: #ffffff;
    li {
        transition: all 0.2s ease;
        padding: 1px 21px;
        border-radius: 8px;
    }
    li:hover {
        color: #3DBCCC;
    }
    .active {
        color: #3DBCCC;
    }
`


const Language: FC<HeaderProps> = ( {maxHeight} ) => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [language, setLanguage] = useState<string>('RU')

    const languageSelectedHandle = (ev: any) => {
        setLanguage(ev.target.dataset.value)
    }
    const outEffectHandler = (ev: any) => {

        if(ev.target.dataset.lang !== 'language'){
            setShowModal(false)
        }

    }
    useEffect(() => {
        window.addEventListener( 'click', outEffectHandler )
        return () => {
            removeEventListener( 'click', outEffectHandler )
        }
    })

    return (
        <LanguageSC maxHeight={maxHeight} dataLang="language" onClick={() => setShowModal(!showModal)}>
            <Text>{language}</Text>
            <ArrowDown color="#8F9BB3" />
            {
                showModal && <LanguageList onClick={(event: React.MouseEvent<HTMLElement>) => languageSelectedHandle(event)}>
                    <li data-value="RU">RU</li>
                    <li data-value="KZ">KZ</li>
                    <li data-value="EN">EN</li>
                </LanguageList>
            }
        </LanguageSC>
    )
}

export default Language