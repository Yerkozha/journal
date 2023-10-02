import {FC} from 'react'
import { Box } from 'ui/layout';
import { Text } from 'ui/text';
import theme from 'ui/theme';
import { Icon, IconProps } from "../Icon";

export type PlayMarketProps = IconProps

const PlayMarket: FC<PlayMarketProps> = ({
    originalHeight,
    originalWidth,
    color,
    ...props
}) => (
    <Box width="169.8px" height="50px" display="flex" justifyContent="space-between" bg="#2d3841" borderRadius="6px" p="10px 20px 10px 20px">
    <Icon 
    originalHeight={originalHeight}
    originalWidth={originalWidth}
    fill='none'
    {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M0.76001 1.91821V26.0846C0.76001 26.9257 1.23576 27.653 1.92686 28L15.6076 13.9973L1.93236 0C1.23829 0.345949 0.76001 1.07491 0.76001 1.91821ZM4.99306 27.2742L19.946 18.4379L16.7861 15.2036L4.99306 27.2742ZM24.5941 12.3074C25.0914 12.6971 25.4123 13.311 25.4123 14.0016C25.4123 14.6818 25.1012 15.2876 24.6166 15.6779L21.4404 17.5549L17.9647 13.9975L21.4381 10.4423L24.5941 12.3074ZM19.9437 9.55907L5.00182 0.729309L16.7861 12.7909L19.9437 9.55907Z" fill="white"/>
    </Icon>
    <Icon width={91} height={28} viewBox="0 0 91 28" >
    <path d="M5.18805 1.7671C5.18805 2.23443 5.03784 2.61414 4.73741 2.90622C4.44025 3.1983 4.02879 3.38329 3.50304 3.46118V3.50012C4.10063 3.58126 4.55291 3.76786 4.85987 4.05995C5.17009 4.35203 5.3252 4.73336 5.3252 5.20394C5.3252 5.86924 5.07539 6.38849 4.57577 6.76171C4.07614 7.13168 3.37079 7.31667 2.45971 7.31667C1.627 7.31667 0.944511 7.18847 0.412231 6.93209V6.16294C0.725721 6.31223 1.0637 6.42744 1.42617 6.50857C1.79191 6.58971 2.14296 6.63027 2.4793 6.63027C3.12588 6.63027 3.61407 6.50857 3.94389 6.26517C4.27697 6.02177 4.44351 5.67127 4.44351 5.21367C4.44351 4.77879 4.25901 4.44939 3.89001 4.22546C3.52427 4.00153 2.9773 3.88956 2.24909 3.88956H1.18126V3.19344H2.205C2.87443 3.19344 3.39202 3.07498 3.75775 2.83807C4.12676 2.59791 4.31126 2.26364 4.31126 1.83525C4.31126 1.488 4.17901 1.21052 3.9145 1.00282C3.64999 0.795113 3.29405 0.691262 2.84668 0.691262C2.48747 0.691262 2.16255 0.731829 1.87192 0.812963C1.58129 0.894097 1.24494 1.05474 0.862873 1.2949L0.451418 0.739942C0.781235 0.49654 1.15024 0.313177 1.55843 0.189854C1.96988 0.0632845 2.39603 0 2.83688 0C3.57162 0 4.14635 0.160645 4.56107 0.481936C4.97906 0.799981 5.18805 1.22837 5.18805 1.7671Z" fill="white"/>
<path d="M10.0422 7.21931L9.8806 6.45989H9.84141C9.57364 6.79416 9.30587 7.02134 9.0381 7.14142C8.77359 7.25825 8.44214 7.31667 8.04375 7.31667C7.51147 7.31667 7.09348 7.18036 6.78979 6.90775C6.48936 6.63514 6.33915 6.24732 6.33915 5.74429C6.33915 4.66683 7.20614 4.10214 8.94013 4.05021L9.85121 4.021V3.68998C9.85121 3.27132 9.75978 2.96301 9.57691 2.76505C9.3973 2.56384 9.10831 2.46323 8.70991 2.46323C8.26254 2.46323 7.75638 2.59953 7.19145 2.87214L6.94163 2.2539C7.20614 2.11111 7.49514 1.99914 7.80863 1.91801C8.12539 1.83687 8.44214 1.79631 8.7589 1.79631C9.39894 1.79631 9.87244 1.93748 10.1794 2.21983C10.4896 2.50217 10.6447 2.9549 10.6447 3.57801V7.21931H10.0422ZM8.20539 6.64974C8.71155 6.64974 9.10831 6.51182 9.39567 6.23596C9.6863 5.96011 9.83162 5.57391 9.83162 5.07737V4.59543L9.0185 4.62951C8.37193 4.65223 7.90496 4.75283 7.6176 4.93133C7.3335 5.10658 7.19145 5.38081 7.19145 5.75402C7.19145 6.04611 7.27962 6.26841 7.45595 6.42095C7.63556 6.57348 7.88537 6.64974 8.20539 6.64974Z" fill="white"/>
<path d="M15.5577 2.57519H13.138V7.21931H12.3248V1.88393H15.5577V2.57519Z" fill="white"/>
<path d="M19.1236 7.31667C18.7742 7.31667 18.4542 7.25338 18.1636 7.12681C17.8762 6.997 17.6346 6.79903 17.4386 6.53291H17.3799C17.4191 6.84447 17.4386 7.13979 17.4386 7.4189V9.61438H16.6255V1.88393H17.2868L17.3995 2.61414H17.4386C17.6476 2.32206 17.8909 2.11111 18.1685 1.98129C18.4461 1.85148 18.7644 1.78657 19.1236 1.78657C19.8355 1.78657 20.3841 2.02835 20.7695 2.51191C21.1581 2.99547 21.3524 3.67375 21.3524 4.54675C21.3524 5.423 21.1548 6.10452 20.7597 6.59133C20.3678 7.07489 19.8225 7.31667 19.1236 7.31667ZM19.0061 2.47297C18.4575 2.47297 18.0607 2.62387 17.8158 2.92569C17.5709 3.22751 17.4452 3.70782 17.4386 4.36663V4.54675C17.4386 5.29643 17.5644 5.83354 17.8158 6.15807C18.0673 6.47936 18.4705 6.64001 19.0257 6.64001C19.4894 6.64001 19.8519 6.4534 20.1131 6.08018C20.3776 5.70697 20.5099 5.19258 20.5099 4.53701C20.5099 3.87172 20.3776 3.36219 20.1131 3.00845C19.8519 2.65146 19.4829 2.47297 19.0061 2.47297Z" fill="white"/>
<path d="M21.9255 1.88393H22.7974L23.9729 4.92646C24.2309 5.62097 24.3909 6.12237 24.453 6.43068H24.4922C24.5346 6.26517 24.6228 5.98282 24.7567 5.58364C24.8938 5.18122 25.3379 3.94798 26.089 1.88393H26.9609L24.6538 7.95925C24.4252 8.55964 24.1574 8.98478 23.8505 9.23467C23.5468 9.48781 23.1729 9.61438 22.7288 9.61438C22.4806 9.61438 22.2357 9.5868 21.994 9.53162V8.88418C22.1736 8.92312 22.3745 8.94259 22.5965 8.94259C23.1549 8.94259 23.5533 8.63104 23.7917 8.00793L24.0905 7.24851L21.9255 1.88393Z" fill="white"/>
<path d="M28.8565 4.09889C29.8721 4.09889 30.3799 3.81979 30.3799 3.26159C30.3799 2.73584 29.9684 2.47297 29.1455 2.47297C28.8941 2.47297 28.6655 2.49568 28.4598 2.54112C28.254 2.58655 27.9846 2.67742 27.6516 2.81373L27.3626 2.15654C27.9177 1.90989 28.5234 1.78657 29.1798 1.78657C29.797 1.78657 30.2836 1.91314 30.6395 2.16628C30.9954 2.41617 31.1734 2.75856 31.1734 3.19344C31.1734 3.79058 30.8387 4.18165 30.1693 4.36663V4.40558C30.5807 4.52566 30.8811 4.69766 31.0705 4.92159C31.2599 5.14227 31.3546 5.41975 31.3546 5.75402C31.3546 6.24732 31.1538 6.6319 30.7522 6.90775C30.3538 7.18036 29.8019 7.31667 29.0965 7.31667C28.3226 7.31667 27.725 7.20146 27.3038 6.97104V6.23109C27.9014 6.51019 28.5055 6.64974 29.1161 6.64974C29.5864 6.64974 29.9407 6.57023 30.1791 6.41121C30.4207 6.24894 30.5415 6.0169 30.5415 5.71508C30.5415 5.09522 30.0337 4.78528 29.0182 4.78528H28.2736V4.09889H28.8565Z" fill="white"/>
<path d="M33.4462 1.88393V5.26722L33.4119 6.1532L33.3972 6.43068L36.3019 1.88393H37.3158V7.21931H36.5566V3.95772L36.5713 3.31514L36.5958 2.68229L33.696 7.21931H32.6821V1.88393H33.4462Z" fill="white"/>
<path d="M42.6599 2.57519H40.9161V7.21931H40.103V2.57519H38.3788V1.88393H42.6599V2.57519Z" fill="white"/>
<path d="M45.9907 7.31667C45.1972 7.31667 44.5702 7.07651 44.1098 6.5962C43.6526 6.11588 43.424 5.44896 43.424 4.59543C43.424 3.73541 43.6363 3.05226 44.0608 2.54599C44.4886 2.03971 45.0617 1.78657 45.7801 1.78657C46.4528 1.78657 46.9851 2.00726 47.3769 2.44862C47.7688 2.88675 47.9647 3.46605 47.9647 4.18652V4.69766H44.2665C44.2828 5.32401 44.4412 5.79946 44.7416 6.124C45.0453 6.44853 45.4715 6.6108 46.0201 6.6108C46.5981 6.6108 47.1696 6.49072 47.7345 6.25057V6.97104C47.4471 7.09436 47.1744 7.18198 46.9165 7.23391C46.6618 7.28908 46.3532 7.31667 45.9907 7.31667ZM45.7703 2.46323C45.3392 2.46323 44.9947 2.60278 44.7367 2.88188C44.482 3.16098 44.3318 3.54718 44.2861 4.04047H47.0928C47.0928 3.53095 46.9785 3.14151 46.7499 2.87214C46.5213 2.59953 46.1948 2.46323 45.7703 2.46323Z" fill="white"/>
<path d="M56.3163 3.22264C56.3163 3.5699 56.215 3.83439 56.0126 4.01613C55.8134 4.19463 55.5325 4.31471 55.1701 4.37637V4.42018C55.6272 4.48184 55.9603 4.6149 56.1693 4.81936C56.3816 5.02382 56.4877 5.30617 56.4877 5.6664C56.4877 6.16294 56.3032 6.54589 55.9342 6.81526C55.5685 7.08462 55.0329 7.21931 54.3276 7.21931H51.9617V1.88393H54.3178C55.6501 1.88393 56.3163 2.33017 56.3163 3.22264ZM55.6746 5.61285C55.6746 5.32401 55.5636 5.11469 55.3415 4.98487C55.1227 4.85181 54.7586 4.78528 54.2492 4.78528H52.7748V6.54265H54.2688C55.206 6.54265 55.6746 6.23272 55.6746 5.61285ZM55.5227 3.30053C55.5227 3.0409 55.4215 2.85754 55.2191 2.75044C55.0199 2.6401 54.7162 2.58493 54.308 2.58493H52.7748V4.08915H54.1512C54.6541 4.08915 55.0084 4.02749 55.2142 3.90417C55.4199 3.78085 55.5227 3.57963 55.5227 3.30053Z" fill="white"/>
<path d="M6.24902 17.9913H10.4655V23.7083C9.77578 23.9316 9.11222 24.09 8.4748 24.1835C7.84259 24.2769 7.15814 24.3237 6.42144 24.3237C4.68679 24.3237 3.34924 23.8148 2.40877 22.797C1.4683 21.7741 0.998065 20.3332 0.998065 18.4742C0.998065 16.6412 1.52839 15.2081 2.58903 14.1748C3.64967 13.1362 5.11001 12.617 6.97004 12.617C8.16653 12.617 9.30032 12.8455 10.3714 13.3024L9.71308 14.8524C8.78306 14.4266 7.85304 14.2137 6.92302 14.2137C5.70041 14.2137 4.73382 14.5954 4.02324 15.3587C3.31266 16.122 2.95738 17.1657 2.95738 18.4898C2.95738 19.8814 3.27609 20.9407 3.91352 21.6677C4.55617 22.3894 5.47836 22.7503 6.68007 22.7503C7.28615 22.7503 7.93403 22.675 8.6237 22.5244V19.588H6.24902V17.9913Z" fill="white"/>
<path d="M20.7166 19.8451C20.7166 21.2522 20.3534 22.3505 19.6272 23.1397C18.9009 23.929 17.8899 24.3237 16.5942 24.3237C15.7843 24.3237 15.0685 24.1419 14.4468 23.7784C13.825 23.415 13.3469 22.8931 13.0126 22.2129C12.6782 21.5326 12.511 20.7434 12.511 19.8451C12.511 18.4483 12.8715 17.3578 13.5925 16.5737C14.3135 15.7897 15.3298 15.3976 16.6412 15.3976C17.8952 15.3976 18.8879 15.8 19.6194 16.6049C20.3508 17.4045 20.7166 18.4846 20.7166 19.8451ZM14.4076 19.8451C14.4076 21.8338 15.1469 22.8282 16.6255 22.8282C18.0885 22.8282 18.82 21.8338 18.82 19.8451C18.82 17.8771 18.0833 16.8931 16.6099 16.8931C15.8366 16.8931 15.2749 17.1475 14.9248 17.6564C14.58 18.1653 14.4076 18.8948 14.4076 19.8451Z" fill="white"/>
<path d="M30.5288 19.8451C30.5288 21.2522 30.1657 22.3505 29.4394 23.1397C28.7132 23.929 27.7022 24.3237 26.4064 24.3237C25.5966 24.3237 24.8808 24.1419 24.259 23.7784C23.6372 23.415 23.1592 22.8931 22.8248 22.2129C22.4904 21.5326 22.3232 20.7434 22.3232 19.8451C22.3232 18.4483 22.6837 17.3578 23.4047 16.5737C24.1258 15.7897 25.142 15.3976 26.4534 15.3976C27.7074 15.3976 28.7001 15.8 29.4316 16.6049C30.1631 17.4045 30.5288 18.4846 30.5288 19.8451ZM24.2198 19.8451C24.2198 21.8338 24.9591 22.8282 26.4378 22.8282C27.9007 22.8282 28.6322 21.8338 28.6322 19.8451C28.6322 17.8771 27.8955 16.8931 26.4221 16.8931C25.6488 16.8931 25.0871 17.1475 24.7371 17.6564C24.3922 18.1653 24.2198 18.8948 24.2198 19.8451Z" fill="white"/>
<path d="M39.9727 15.5534V16.5582L38.4914 16.8308C38.6273 17.0125 38.7396 17.2358 38.8284 17.5006C38.9173 17.7654 38.9617 18.0458 38.9617 18.3418C38.9617 19.2297 38.6534 19.9281 38.0369 20.437C37.4203 20.9459 36.5713 21.2003 35.4898 21.2003C35.2129 21.2003 34.9621 21.1796 34.7374 21.138C34.3403 21.3821 34.1418 21.6677 34.1418 21.9948C34.1418 22.1921 34.2332 22.3401 34.4161 22.4387C34.6042 22.5374 34.9464 22.5867 35.4427 22.5867H36.9553C37.9115 22.5867 38.6377 22.7892 39.1341 23.1943C39.6305 23.5993 39.8786 24.1835 39.8786 24.9468C39.8786 25.923 39.4737 26.6759 38.6639 27.2055C37.854 27.7352 36.6836 28 35.1528 28C33.972 28 33.0707 27.7923 32.4489 27.3769C31.8272 26.9615 31.5163 26.3695 31.5163 25.601C31.5163 25.0714 31.6835 24.6248 32.0179 24.2613C32.3575 23.9031 32.8303 23.6538 33.4364 23.5136C33.1908 23.4098 32.9871 23.2436 32.8251 23.0151C32.6684 22.7815 32.59 22.5374 32.59 22.283C32.59 21.961 32.6814 21.6884 32.8643 21.4651C33.0472 21.2419 33.3189 21.0212 33.6794 20.8031C33.23 20.611 32.8643 20.2994 32.5822 19.8684C32.3052 19.4322 32.1668 18.9234 32.1668 18.3418C32.1668 17.4071 32.462 16.6828 33.0524 16.1687C33.648 15.6546 34.4944 15.3976 35.5917 15.3976C35.8372 15.3976 36.0932 15.4158 36.3597 15.4521C36.6314 15.4833 36.8352 15.517 36.971 15.5534H39.9727ZM33.1621 25.5076C33.1621 25.9022 33.3398 26.206 33.695 26.4189C34.0556 26.6318 34.5598 26.7382 35.2076 26.7382C36.2108 26.7382 36.958 26.5954 37.4491 26.3098C37.9402 26.0242 38.1858 25.6452 38.1858 25.1726C38.1858 24.7988 38.0499 24.5314 37.7782 24.3704C37.5118 24.2146 37.0128 24.1367 36.2813 24.1367H34.8863C34.3586 24.1367 33.938 24.2587 33.6245 24.5028C33.3162 24.752 33.1621 25.087 33.1621 25.5076ZM33.9537 18.3418C33.9537 18.8818 34.0921 19.2972 34.369 19.588C34.6512 19.8788 35.0535 20.0242 35.576 20.0242C36.6418 20.0242 37.1748 19.4582 37.1748 18.3262C37.1748 17.7654 37.0415 17.3344 36.7751 17.0333C36.5138 16.7269 36.1141 16.5737 35.576 16.5737C35.043 16.5737 34.6381 16.7243 34.3612 17.0255C34.0895 17.3267 33.9537 17.7654 33.9537 18.3418Z" fill="white"/>
<path d="M43.4289 24.1679H41.5872V12.0484H43.4289V24.1679Z" fill="white"/>
<path d="M49.8554 24.3237C48.5074 24.3237 47.452 23.9342 46.6892 23.1553C45.9316 22.3712 45.5528 21.2938 45.5528 19.9229C45.5528 18.5158 45.9055 17.4097 46.6108 16.6049C47.3162 15.8 48.2854 15.3976 49.5184 15.3976C50.6627 15.3976 51.5666 15.7429 52.2301 16.4335C52.8937 17.1241 53.2255 18.0744 53.2255 19.2843V20.2734H47.4494C47.4755 21.1095 47.7028 21.7533 48.1312 22.2051C48.5597 22.6516 49.1632 22.8749 49.9417 22.8749C50.4537 22.8749 50.9291 22.8282 51.368 22.7347C51.8121 22.6361 52.2876 22.4751 52.7944 22.2518V23.7395C52.3451 23.9524 51.8905 24.103 51.4307 24.1912C50.9709 24.2795 50.4458 24.3237 49.8554 24.3237ZM49.5184 16.784C48.9333 16.784 48.463 16.9684 48.1077 17.337C47.7577 17.7057 47.5487 18.2431 47.4808 18.9493H51.4151C51.4046 18.238 51.2322 17.7005 50.8978 17.337C50.5634 16.9684 50.1036 16.784 49.5184 16.784Z" fill="white"/>
<path d="M67.2698 16.2232C67.2698 17.4123 66.8779 18.3236 66.0942 18.9571C65.3105 19.5906 64.195 19.9074 62.7477 19.9074H61.5564V24.1679H59.6833V12.7806H62.9828C64.4144 12.7806 65.4855 13.0713 66.1961 13.6529C66.9119 14.2345 67.2698 15.0913 67.2698 16.2232ZM61.5564 18.3418H62.5518C63.5131 18.3418 64.2185 18.1756 64.6678 17.8433C65.1172 17.511 65.3418 16.9917 65.3418 16.2855C65.3418 15.6313 65.1407 15.1432 64.7384 14.8212C64.3361 14.4993 63.7091 14.3383 62.8574 14.3383H61.5564V18.3418Z" fill="white"/>
<path d="M71.2041 24.1679H69.3623V12.0484H71.2041V24.1679Z" fill="white"/>
<path d="M79.2686 24.1679L78.9003 22.9684H78.8376C78.4196 23.4928 77.999 23.8511 77.5758 24.0433C77.1526 24.2302 76.6092 24.3237 75.9456 24.3237C75.094 24.3237 74.4278 24.0952 73.9471 23.6382C73.4717 23.1813 73.2339 22.5348 73.2339 21.6988C73.2339 20.8109 73.5657 20.141 74.2293 19.6893C74.8928 19.2375 75.9038 18.9909 77.2623 18.9493L78.7592 18.9026V18.4431C78.7592 17.8926 78.6286 17.4824 78.3673 17.2124C78.1113 16.9372 77.7116 16.7996 77.1682 16.7996C76.7241 16.7996 76.2983 16.8645 75.8908 16.9943C75.4832 17.1241 75.0914 17.2773 74.7152 17.4539L74.1195 16.1453C74.5898 15.9013 75.1044 15.717 75.6635 15.5923C76.2225 15.4625 76.7502 15.3976 77.2466 15.3976C78.349 15.3976 79.1798 15.6365 79.7388 16.1142C80.3031 16.5919 80.5853 17.3422 80.5853 18.3652V24.1679H79.2686ZM76.5256 22.9217C77.1944 22.9217 77.7299 22.7373 78.1322 22.3687C78.5397 21.9948 78.7435 21.4729 78.7435 20.8031V20.0554L77.6306 20.1021C76.7633 20.1332 76.1311 20.2786 75.734 20.5383C75.3422 20.7927 75.1462 21.1847 75.1462 21.7144C75.1462 22.0986 75.2612 22.3972 75.4911 22.6101C75.721 22.8178 76.0658 22.9217 76.5256 22.9217Z" fill="white"/>
<path d="M81.8392 15.5534H83.8456L85.6089 20.437C85.8754 21.1328 86.0531 21.7871 86.1419 22.3998H86.2046C86.2516 22.1142 86.3378 21.7689 86.4632 21.3639C86.5886 20.9537 87.2522 19.0168 88.4539 15.5534H90.4445L86.7375 25.3128C86.0635 27.1043 84.9402 28 83.3675 28C82.96 28 82.5629 27.9559 82.1762 27.8676V26.4189C82.4531 26.4812 82.7692 26.5123 83.1245 26.5123C84.0128 26.5123 84.6371 26.0009 84.9976 24.9779L85.319 24.1679L81.8392 15.5534Z" fill="white"/>
    </Icon>
    </Box>
)
PlayMarket.defaultProps ={
    originalHeight: 28,
    originalWidth: 26,
    width: 26,
    height: 28,
    color: theme.colorList.white[0]
}
export default PlayMarket