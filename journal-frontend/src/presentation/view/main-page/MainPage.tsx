import React, { FC, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { grid } from 'styled-system'
import { Box, Button, ConfigIcon, EUR, GBP, PlusIcon, Rus, Text, Tiger, USA } from 'ui'
import { Theme } from 'ui/theme/types'

import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StylesBundle } from './MainPageStyles'
import { Rocket } from 'ui/icons/Rocket'
import { BlueTiger } from 'ui/icons/BlueTiger'

type MainPageProps = {

}

const MainPage: FC<MainPageProps> = () => {

    const {
        MainPageWrapper,
        LeftSide,
        Currency,
        RightSide,
        Card } = StylesBundle()

    const theme = useTheme() as Theme

    const [thumbsSwiper, setThumbsSwiper] = useState<any>();

    return (
        <MainPageWrapper className='container f-400-14'>
            <LeftSide>
                <li className='bg-white'>
                    <div>
                        <p>Общий баланс</p>
                        <h1>100 250 139.70 ₸</h1>
                    </div>
                    <div>
                        <p>Общий кэшбэк за январь</p>
                        <div>
                            <h1>1 543.32 ₸ </h1>
                            <Button color={theme.colorList.text[2]} fontSize='12px' fontWeight={700} text="Увеличить" lineHeight="16px" bgColor="transparent" border={"1px solid" + theme.colorList.brand[1]}></Button>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <h1 className='f-700-14'>Мои продукты</h1>
                        <ConfigIcon></ConfigIcon>
                    </div>
                    <ul>
                        <li>
                            <h1>Депозит multi</h1>
                            <h1>675 000.52 ₸</h1>
                        </li>
                        <li>
                            <h1>Депозит multi</h1>
                            <h1>346 000.00 ₸</h1>
                        </li>
                        <li>
                            <h1>Счет *4434</h1>
                            <h1>45 000.52 ₸</h1>
                        </li>
                        <li>
                            <div>
                                <h1>Кредит *4434</h1>
                                <p className='grey-decor'>Платёж 05.10.2021</p>
                            </div>
                            <div>
                                <h1>700 000.00 ₸</h1>
                                <p className='grey-decor'>30 000.00 ₸</p>
                            </div>
                        </li>
                    </ul>
                    <Button bgColor={theme.colorList.brand[1]} pd="8px" fullWidth={true} width="150px" text='Открыть онлайн' fontWeight={700} extText="Кредит, депозит, счет, карту" icon={<PlusIcon color={theme.colorList.white[0]} />} ></Button>
                </li>
                <li>
                    <h1>Курс валют</h1>
                    <div>
                        <Button text={'Все курсы'} bgColor={theme.colorList.white[0]} color={theme.colorList.text[0]} fullWidth={true} />
                        <Button text={'Калькулятор'} bgColor={theme.colorList.white[0]} color={theme.colorList.text[0]} fullWidth={true} />
                    </div>

                    <Currency>
                        <li>
                            <h3>Валюта</h3>
                            <h3>Покупка</h3>
                            <h3>Продажа</h3>
                        </li>
                        <li>
                            <USA />
                            <h3>Доллар (USD)</h3>
                            <h3>566</h3>
                            <h3>576</h3>
                        </li>
                        <li>
                            <EUR />
                            <h3>Евро (EUR)</h3>
                            <h3>511,5</h3>
                            <h3>514</h3>
                        </li>
                        <li>
                            <Rus />
                            <h3>Рубль (RUB)</h3>
                            <h3>5,56</h3>
                            <h3>5,61</h3>
                        </li>
                        <li>
                            <GBP />
                            <h3>Фунт (GBP)</h3>
                            <h3>566</h3>
                            <h3>576</h3>
                        </li>
                    </Currency>
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
                        <SwiperSlide>
                            <Card bg={theme.colorList.element[2]}>
                                <Tiger className='card-slider__icon' />
                                <div>
                                    <h1>Prisma Infinite</h1>
                                    <h3>Visa *4454  03/23</h3>
                                </div>
                                <h1>100 250 139.70₸</h1>
                                <div>
                                    <h3 className='f-14-18'>1 250 139.70 <em>₸</em> 120.32<em>$</em>0<em>€</em>73 400.32<em>₽</em></h3>
                                    <h3>Кэшбэк: 220.56 <em>₸</em></h3>
                                </div>
                                <ul>
                                    <li>MiramaX STUD</li>
                                    <li>SVETLANA O.</li>
                                    <li><Rocket /></li>
                                </ul>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Card bg={theme.colorList.element[3]}>
                                <BlueTiger className='card-slider__icon'/>
                                <div>
                                    <h1>Prisma Infinite</h1>
                                    <h3>Visa *4454  03/23</h3>
                                </div>
                                <h1>100 250 139.70₸</h1>
                                <div>
                                    <h3>Кэшбэк: 220.56 <em>₸</em></h3>
                                </div>
                                <ul>
                                    <li>MiramaX STUD</li>
                                    <li>SVETLANA O.</li>
                                </ul>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{width: '224px'}}>
                            <Button 
                            height="100%"
                            color={theme.colorList.text[2]}
                            bgColor={theme.colorList.white[0]}
                            width="211px;"
                            text='Открыть карту'
                            borderRadius={theme.borderRadius.s}
                            icon={<PlusIcon color={theme.colorList.brand[1]} />}></Button>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Card bg={theme.colorList.element[3]}>
                                <BlueTiger className='card-slider__icon'/>
                                <div>
                                    <h1>Prisma Infinite</h1>
                                    <h3>Visa *4454  03/23</h3>
                                </div>
                                <h1>100 250 139.70₸</h1>
                                <div>
                                    <h3>Кэшбэк: 220.56 <em>₸</em></h3>
                                </div>
                                <ul>
                                    <li>MiramaX STUD</li>
                                    <li>SVETLANA O.</li>
                                </ul>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </li>
                <li>
                <Text as="h1" className="f-14-18">
                      Последние операции
                </Text>
                <Box>
                    
                </Box>
                </li>
            </RightSide>
        </MainPageWrapper >
    )
}

export default MainPage