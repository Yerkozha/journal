import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { AppleIcon, Box, EyeCloseIcon, EyeIcon, Facebook, Input, Instagram, LogoIcon, Text, Twitter, VK } from "ui";
import { PlayMarket } from "ui/icons/PlayMarket";
import { Theme } from "ui/theme/types";
import { Controller, useForm } from 'react-hook-form';

import Phone from "../../../assets/images/phone-login.png";

import { Header } from "../components";
import { Button } from "ui/btn";
import { useDispatch } from "react-redux";
import {login} from '../../../redux/reducers/auth-reducer'
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "src/redux/reducers/selectors/auth-selector";

const WrapperLeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 80px;
  background-color: ${props => props.theme.colorList.brand[0]};
`
const WrapperRightSide = styled.div`
  display: flex;
  flex-direction: column;
  
`
const ListSocials = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`
const FormSide = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
`
const InnerForm = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 400px;
  width: 100%;
  transform: translate(-50%, -50%);
  input {
    padding: 9px 15px;
    border: none;
    outline: 1px solid #E4E9F2;
    border-radius: 6px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    button {
      margin-top: 20px;
    }
  }
  
`
type FormData = {
  username: string;
  password: string;
};

export const Login: React.FC = () => {
  const theme = useTheme() as Theme
  const [showPass, setShowPass] = useState(true)
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>();
  const dispatch = useDispatch()
  const history = useHistory();

  const isAuth = useSelector(selectIsAuth)
  
  const onSubmit = ({username,password} : {username: string,password: string}) => {
    setLoading(true)
    // @ts-ignore
    dispatch(login(username,password))
    
  }
  useEffect(() => {
    if(isAuth){
      history.push('/')
    }
  },[isAuth])

  return (
    <Box display="grid" gridTemplateColumns="1fr 1.5fr" height="100vh">

      <WrapperLeftSide>
        <LogoIcon></LogoIcon>
        <Box display="flex" flexDirection="column" gap='20px'>
          <Text
            as="h1"
            textAlign="left"
            fontSize="18px"
            fontWeight="700"
            lineHeight="24px"
            maxWidth="350px"
            color={theme.colorList.white[0]}
          >Больше возможностей в мобильном приложении RBK Online</Text>
          <Box display="flex" justifyContent="space-between" width="400px">
            <AppleIcon color={theme.colorList.white[0]}></AppleIcon>
            <PlayMarket color={theme.colorList.white[0]}></PlayMarket>
          </Box>
          <img src={Phone} alt="Phone" style={{ width: '69%' }} />
          <ListSocials>
            <li><Facebook></Facebook></li>
            <li><VK></VK></li>
            <li><Instagram></Instagram></li>
            <li><Twitter></Twitter></li>
          </ListSocials>
        </Box>
      </WrapperLeftSide>

      <WrapperRightSide>
        <div className="login-header__border">
          <Header />
        </div>
        <FormSide>
          <InnerForm>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Text as="h1"
                mb={24}
                textAlign="center"
                fontSize="24px"
                fontWeight="700"
                lineHeight="32px">Вход</Text>
              <Box><Controller
                name="username"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Логин"
                    required
                    errorMsg={errors.username ? 'Введите логин' : undefined}
                    onChange={(data) => onChange(data)}
                  />
                )}
              /></Box>
              <Text className="forget">Забыли пароль?</Text>
              <Box position="relative">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field: { onChange } }) => (
                    <Input
                      type={!showPass ? 'text' : 'password'}
                      placeholder="Пароль"
                      required
                      icon={!showPass ? <EyeIcon /> : <EyeCloseIcon />}
                      onIconClick={() => setShowPass((prev) => !prev)}
                      errorMsg={errors.username ? 'Введите пароль' : undefined}
                      onChange={(data) => onChange(data)}
                    />
                  )}
                />
              </Box>
              <Button
                type="submit"
                text="Войти"
                bgColor={theme.colorList.brand[1]}
                loader={loading}
              />
              <Text mt={2} textAlign="center" fontSize="14px" fontWeight="400" color="#8F9BB3">
              Нажимая кнопку “Войти” вы соглашаетесь с <Link style={{color: "#3DBCCC"}} to='/'>пользовательским соглашением</Link> 
              </Text>
            </form>
          </InnerForm>
        </FormSide>
      </WrapperRightSide>
    </Box>
  )
}

