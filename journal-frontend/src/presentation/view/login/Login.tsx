import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { AppleIcon, Box, EyeCloseIcon, EyeIcon, Facebook, Input, Instagram , Text, Twitter, VK } from "ui";
import { PlayMarket } from "ui/icons/PlayMarket";
import { Theme } from "ui/theme/types";
import { Controller, useForm } from 'react-hook-form';

import { Header } from "../components";
import { Button } from "ui/btn";
import { login } from '../../../redux/reducers/auth-reducer'
import { getArticles } from '../../../redux/reducers/articles-reducer'
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getJWT } from "src/redux/reducers/selectors/auth-selector";
import {
  WrapperLeftSide,
  WrapperRightSide,
  ListSocials,
  FormSide,
  InnerForm
} from "./styles";
import { useAppDispatch } from "src/redux/redux-store";
import { toast } from "react-toastify";
import { useInterceptors } from "src/utils/helpers";




type FormData = {
  username: string;
  password: string;
};

export const Login: React.FC = () => {
  const theme = useTheme() as Theme
  const [showPass, setShowPass] = useState(true)
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>();

  const history = useHistory();

  const dispatch = useAppDispatch();
  useInterceptors();

  const JWT = useSelector(getJWT)

  const onSubmit = ({ username, password }: { username: string, password: string }) => {

    setLoading(true);

    dispatch(login(username, password)).then((data) => {
      toast.success("Success!", {
          position: toast.POSITION.TOP_RIGHT
        });
      history.push('/');
    }).catch((err) => {
      if( err.response.status == 400 ) {
        return toast.error('Invalid credentials!')
      }
      toast.error('Error')
    }).finally(() => {
      setLoading(false);
    })

  }

  useEffect(() => {

    dispatch(getArticles()).then((articles) => {
      if( JWT ) {
        history.push('/');
      }
      
    }).catch(() => {})
    
  },[JWT])


  return (
    <Box display="grid" gridTemplateColumns="1fr 1.5fr" height="100vh">

      <WrapperLeftSide>
        <Box display="flex" flexDirection="column" gap='20px'>
          <Text
            as="h1"
            textAlign="left"
            fontSize="18px"
            fontWeight="700"
            lineHeight="24px"
            maxWidth="350px"
            color={theme.colorList.white[0]}
          >Welcome to Journal</Text>
          <Box display="flex" justifyContent="space-between" width="400px">
            <AppleIcon color={theme.colorList.white[0]}></AppleIcon>
            <PlayMarket color={theme.colorList.white[0]}></PlayMarket>
          </Box>
          <Box display='flex' flexDirection='column' color='#fff'>
            Test 
            <Text
              color={theme.colorList.white[0]}>login: tet@gmail.com</Text>
            <Text 
                color={theme.colorList.white[0]}>password: Qwerty123</Text>
          </Box>
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
                Нажимая кнопку “Войти” вы соглашаетесь с <Link style={{ color: "#3DBCCC" }} to='/'>пользовательским соглашением</Link>
              </Text>
            </form>
          </InnerForm>
        </FormSide>
      </WrapperRightSide>
    </Box>
  )
}

