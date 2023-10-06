import React, { FC, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { grid } from 'styled-system'
import { Box, Button, ConfigIcon, EUR, GBP, PlusIcon, Rus, Text, USA } from 'ui'
import { Theme } from 'ui/theme/types'

import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StylesBundle } from './MainPageStyles'
import { Rocket } from 'ui/icons/Rocket'
import { articlesAPI, SingleArticle } from 'src/api/articles'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticlesSelector } from 'src/redux/reducers/selectors/articles-selector'
type MainPageProps = {

}

const MainPage: FC<MainPageProps> = () => {

    const articles = useSelector(getArticlesSelector);
    const [singleArticle,setSingleArticle] = useState<SingleArticle>()

    const {
        MainPageWrapper,
        LeftSide,
        Currency,
        RightSide,
        Card } = StylesBundle()

    const theme = useTheme() as Theme

    const [thumbsSwiper, setThumbsSwiper] = useState<any>();

    function selectArticleHandler(article: SingleArticle) {
        setSingleArticle(article)
        
    }

    return (
        <MainPageWrapper className='container f-400-14'>
            <LeftSide>
                 
                <li>
                    <Button bgColor={theme.colorList.brand[1]} pd="8px" fullWidth={true} width="150px" text='Добавить стаью' fontWeight={700}  icon={<PlusIcon color={theme.colorList.white[0]} />} ></Button>
                </li>
                <li>
                    <div>
                        <Button text={'Избранные'} bgColor={theme.colorList.white[0]} color={theme.colorList.text[0]} fullWidth={true} />
                        <Button text={'Все'} bgColor={theme.colorList.white[0]} color={theme.colorList.text[0]} fullWidth={true} />
                    </div>

                </li>
            </LeftSide>
            <RightSide>
                <li>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        onSlideChange={() => console.log('slide change')}
                        scrollbar={{ draggable: true }}
                        modules={[Pagination, Scrollbar]}
                        className="card-slider"
                    >
                        {articles?.data!?.length && articles.data.map((article,idx) => (
                            <SwiperSlide key={idx}>
                                <Card onClick={(ev) => selectArticleHandler(article)} bg={theme.colorList.element[idx % 2 == 0 ? 2 : 3]}>
                                
                                    <div>
                                        <h1>{article.attributes.title}</h1>
                                        <p className='truncate'>{article.attributes.content}</p>
                                    </div>
                                    <h1>Дата</h1>
                                    <div>
                                        <h3>{article.attributes.createdAt}</h3>
                                    </div>
                                    <ul>
                                    </ul>
                                </Card>
                            </SwiperSlide>
                            ))}
                        <SwiperSlide style={{width: '224px'}}>
                            <Button 
                                height="100%"
                                color={theme.colorList.text[2]}
                                bgColor={theme.colorList.white[0]}
                                width="211px;"
                                text='Добавить статью'
                                borderRadius={theme.borderRadius.s}
                                icon={<PlusIcon color={theme.colorList.brand[1]} />}></Button>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Card bg={theme.colorList.element[3]}>
                                <div>
                                    <h1>Название статьи</h1>
                                    <h3>Контент</h3>
                                </div>
                                <h1>Дата</h1>
                                <div>
                                    <h3>12 <em>/</em> 12<em>/</em> 23</h3>
                                </div>
                                <ul>
                                    <li>TET</li>
                                    <li>YER</li>
                                </ul>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </li>
                <li>
                    <Box>
                        {singleArticle && <Text as="h1" className="f-14-18 bg-white">
                            {singleArticle.attributes.content}
                       </Text>}
                    </Box>
                </li>
            </RightSide>
        </MainPageWrapper >
    )
}

export default MainPage