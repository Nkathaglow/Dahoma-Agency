import React from 'react'

function Numbers() {
  return (
    <>
    {/* Section 1*/}
     <div className="w-[618px] h-[529px]">
      <div className="w-[171px] h-[54px]">
       <div className="w-[171px] h-[54px] absolute left-[319.5px] top-[750.5px] rounded-[27px] bg-[#f58a07]" />
         <p className="absolute left-[352px] top-[770px] text-base font-semibold text-left capitalize text-white">
           Work With Us
         </p>
       </div>
          <p className="w-[510px] h-[59px] absolute left-80 top-[660px] text-lg font-medium text-left text-[#5b5b5b]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare
           quis.
          </p>
          <p className="w-[618px] absolute left-80 top-[166px] text-[64px] font-semibold text-left text-[#1d3444]">
           We value human, organizational, and operational intelligence, not just artificial
          </p>
      </div>;
 

      {/* The Image to the left together with the badge*/}
      <div className="w-[674px] h-[699px]">
         <img
          src="image.png"
          className="w-[616px] h-[650px] absolute left-[983.5px] top-[175.5px] rounded-[20px] object-cover"
         />
        <div className="w-[180px] h-[650px] absolute left-[983.5px] top-[175.5px] rounded-tr-[19px] rounded-br-[20px] bg-[#f58a07] mix-blend-multiply" />
           <svg
            width={116}
            height={113}
            viewBox="0 0 116 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[116px] h-[113.01px]"
            preserveAspectRatio="none"
           >
            <path
              d="M50.5061 101.944L48.4736 113L44.358 112.253C43.5451 112.104 42.9353 111.855 42.4272 111.506C41.9699 111.157 41.6143 110.759 41.4618 110.261C41.2586 109.763 41.2586 109.265 41.3602 108.717C41.4618 108.269 41.6143 107.87 41.8175 107.621C42.0207 107.372 42.3256 107.123 42.6305 106.974C42.9353 106.825 43.291 106.775 43.6467 106.725V106.625C43.291 106.526 42.9353 106.376 42.6305 106.078C42.3256 105.779 42.0716 105.43 41.9191 104.982C41.7667 104.534 41.7159 104.036 41.8175 103.488C41.9191 102.94 42.1732 102.442 42.478 102.044C42.8337 101.645 43.291 101.346 43.9007 101.197C44.5104 101.048 45.2726 101.048 46.1364 101.197L50.5061 101.944ZM47.6607 107.92L45.3742 107.522C44.9677 107.472 44.6121 107.472 44.3072 107.572C44.0023 107.671 43.6975 107.821 43.4434 108.07C43.1894 108.319 43.0878 108.568 42.9861 108.966C42.8845 109.414 42.9861 109.813 43.291 110.211C43.5959 110.61 44.0532 110.809 44.7137 110.958L47.051 111.357L47.6607 107.92ZM48.5245 103.04L46.0856 102.591C45.2726 102.442 44.6629 102.492 44.2564 102.741C43.8499 102.99 43.5959 103.338 43.4942 103.787C43.4434 104.135 43.4434 104.484 43.5959 104.783C43.6975 105.082 43.9515 105.38 44.2564 105.629C44.5613 105.878 44.9169 106.028 45.3742 106.078L47.9147 106.526L48.5245 103.04Z"
              fill="#F58A07"
            />
            <path
              d="M36.7359 98.1592C37.4981 98.458 38.1078 98.9062 38.5143 99.5038C38.9208 100.052 39.1748 100.699 39.2256 101.446C39.2764 102.193 39.124 102.94 38.7683 103.737C38.4127 104.534 37.9554 105.181 37.3965 105.629C36.8375 106.127 36.177 106.426 35.5165 106.526C34.8051 106.625 34.0938 106.526 33.3824 106.227C32.9251 106.028 32.5186 105.779 32.163 105.48C31.8073 105.181 31.5533 104.783 31.35 104.335C31.1468 103.886 31.0451 103.388 31.096 102.791C31.096 102.193 31.2992 101.595 31.6041 100.898L31.8581 100.35L38.1586 102.94L37.6505 104.086L32.8743 102.093C32.7219 102.492 32.6203 102.89 32.6711 103.239C32.7219 103.637 32.8235 103.936 33.0268 104.235C33.23 104.534 33.5349 104.783 33.9413 104.932C34.3986 105.131 34.8051 105.181 35.2116 105.082C35.6181 105.032 35.9738 104.833 36.2786 104.584C36.5835 104.335 36.8375 103.986 36.99 103.637L37.3965 102.741C37.5997 102.243 37.7013 101.745 37.7013 101.297C37.6505 100.848 37.5489 100.45 37.2948 100.151C37.0408 99.8524 36.6851 99.5536 36.2278 99.3544C35.923 99.2548 35.6689 99.1552 35.364 99.1552C35.11 99.1552 34.8051 99.1552 34.6019 99.2548C34.3986 99.3544 34.1446 99.5038 33.9413 99.703L32.5695 98.8564C32.8743 98.5078 33.23 98.209 33.6873 98.0097C34.1446 97.8105 34.6019 97.7109 35.11 97.7607C35.6181 97.8105 36.177 97.9101 36.7359 98.1592Z"
              fill="#F58A07"
            />
            <path
              d="M22.2549 97.3622L23.6776 98.0096C23.6268 98.2088 23.576 98.408 23.6268 98.6072C23.6268 98.8064 23.7284 99.0554 23.8301 99.2546C23.9825 99.4538 24.1857 99.7028 24.4398 99.8522C24.8463 100.101 25.2019 100.251 25.6084 100.251C25.9641 100.251 26.269 100.101 26.4722 99.8522C26.6246 99.6032 26.6754 99.3542 26.6246 99.1052C26.5738 98.8562 26.3706 98.5574 26.0149 98.2088L25.0495 97.2127C24.4906 96.6151 24.1857 96.0673 24.0841 95.5693C23.9825 95.0713 24.0841 94.5235 24.4398 94.0255C24.7446 93.627 25.1003 93.3282 25.6084 93.1788C26.0657 93.0294 26.5738 92.9796 27.1835 93.129C27.7425 93.2286 28.3014 93.4776 28.9111 93.876C29.7241 94.4239 30.2322 95.0215 30.4862 95.6689C30.7403 96.3163 30.7403 97.0135 30.3846 97.7108L28.9111 97.0135C29.0635 96.6151 29.0635 96.2665 28.9619 95.9179C28.8095 95.5693 28.5554 95.2705 28.1489 94.9717C27.6916 94.6729 27.2852 94.5235 26.8787 94.5235C26.4722 94.5235 26.1673 94.6729 26.0149 94.9219C25.8625 95.1211 25.8117 95.3701 25.8625 95.6191C25.9133 95.8681 26.1165 96.1669 26.3706 96.4657L27.3868 97.5116C27.9457 98.1092 28.2506 98.657 28.3522 99.2048C28.4538 99.7526 28.3014 100.251 27.9457 100.749C27.6408 101.147 27.2852 101.446 26.8279 101.595C26.3706 101.745 25.8625 101.745 25.3544 101.645C24.8463 101.545 24.2873 101.296 23.7792 100.948C23.0171 100.45 22.509 99.8522 22.3057 99.2546C22.0009 98.657 22.0009 98.0096 22.2549 97.3622Z"
              fill="#F58A07"
            />
            <path
              d="M16.1574 97.5111L14.938 96.3657L20.5779 90.6385C20.7812 90.3895 20.9336 90.1903 20.9844 90.0409C21.0352 89.8417 21.0352 89.6923 20.9336 89.5429C20.8828 89.3934 20.7812 89.244 20.6287 89.1444C20.5271 89.0448 20.4255 88.995 20.3747 88.9452C20.3239 88.8954 20.2223 88.8456 20.1714 88.7958L20.9336 87.6006C21.0352 87.6504 21.1368 87.7002 21.2893 87.7998C21.4417 87.8994 21.6449 88.0488 21.7974 88.1982C22.1022 88.497 22.3563 88.8456 22.5087 89.1942C22.6612 89.5429 22.712 89.9413 22.6612 90.3397C22.6103 90.7381 22.3563 91.1365 22.0006 91.4851L16.1574 97.5111ZM15.0904 93.7262L16.005 92.78L19.3585 95.9673L18.4439 96.9135L15.0904 93.7262Z"
              fill="#F58A07"
            />
           <path
              d="M15.3449 79.8316C15.5989 80.2798 15.7514 80.7778 15.8022 81.226C15.853 81.724 15.7514 82.1224 15.5481 82.5208C15.3449 82.9193 14.9892 83.2679 14.4811 83.5667C14.0746 83.8157 13.6681 83.9153 13.3125 83.9153C12.9568 83.9153 12.6011 83.8157 12.2963 83.6165C11.9914 83.4173 11.6865 83.2181 11.4325 82.9193C11.1784 82.6204 10.8736 82.3216 10.6703 82.0228C10.3655 81.6244 10.1114 81.2758 9.90817 81.0268C9.70493 80.7778 9.5525 80.6284 9.40007 80.5288C9.24764 80.4292 9.09521 80.479 8.89196 80.5786H8.84115C8.43467 80.8276 8.18062 81.1264 8.079 81.475C7.97738 81.8236 8.079 82.2718 8.33305 82.7201C8.63791 83.2181 8.94277 83.5169 9.29845 83.6663C9.65412 83.8157 10.0098 83.8655 10.3655 83.8157L10.8228 85.3097C10.2638 85.4093 9.75574 85.3595 9.29845 85.2101C8.84115 85.0607 8.43467 84.8117 8.079 84.5129C7.72333 84.1643 7.41846 83.8157 7.16441 83.3675C7.01198 83.0687 6.85955 82.7699 6.70712 82.3714C6.6055 82.0228 6.55469 81.6244 6.55469 81.226C6.55469 80.8276 6.70712 80.4292 6.91036 80.0806C7.1136 79.732 7.52008 79.3833 8.079 79.0347L13.0076 76.2458L13.8206 77.6403L12.8044 78.2379L12.8552 78.2877C13.1092 78.2877 13.3633 78.2877 13.6681 78.3873C13.973 78.4869 14.2271 78.6363 14.5319 78.8355C14.8368 79.1343 15.0908 79.4331 15.3449 79.8316ZM13.973 80.1802C13.7189 79.7818 13.4649 79.4829 13.16 79.2837C12.8552 79.0845 12.4995 78.9849 12.1438 78.9849C11.7882 78.9849 11.4833 79.0845 11.1784 79.2339L10.213 79.7818C10.3147 79.7818 10.4163 79.8814 10.5179 79.981C10.6195 80.0806 10.7719 80.23 10.9244 80.4292C11.0768 80.5786 11.1784 80.7778 11.3309 80.9272C11.4325 81.0766 11.5849 81.226 11.6357 81.3256C11.839 81.5746 12.0422 81.8236 12.2454 81.973C12.4487 82.1722 12.7027 82.2718 12.906 82.3216C13.16 82.3714 13.4141 82.3216 13.6681 82.1722C14.0238 81.973 14.2271 81.6742 14.2271 81.3256C14.3287 80.977 14.2271 80.5786 13.973 80.1802Z"
              fill="#F58A07"
           />
           <path
             d="M14.0746 69.5226C14.2779 70.1701 14.3795 70.7179 14.3287 71.2657C14.3287 71.7637 14.2271 72.2119 14.0238 72.6103C13.8206 73.0088 13.6173 73.3076 13.3125 73.5566L12.2963 72.4111C12.3979 72.2617 12.5503 72.1123 12.6519 71.8633C12.7536 71.6641 12.8552 71.3653 12.906 71.0665C12.9568 70.7677 12.906 70.3693 12.7536 69.9709C12.5503 69.3732 12.2455 68.925 11.839 68.6262C11.4325 68.3274 10.8736 68.2776 10.2639 68.4768L8.63792 68.9748L8.68873 69.0744C8.89197 69.1242 9.14602 69.174 9.40007 69.2736C9.65413 69.3732 9.90818 69.5724 10.213 69.8215C10.5179 70.0705 10.6703 70.4689 10.8228 70.9669C11.026 71.6143 11.0768 72.2119 10.9244 72.8095C10.772 73.4072 10.4671 73.955 9.95899 74.453C9.45089 74.951 8.79035 75.2996 7.92657 75.5984C7.0628 75.8474 6.24983 75.947 5.53849 75.8474C4.82714 75.7478 4.21742 75.4988 3.70932 75.1004C3.20121 74.702 2.84554 74.1542 2.6423 73.5068C2.48987 73.0088 2.43906 72.5605 2.48987 72.2119C2.54068 71.8633 2.69311 71.5645 2.84554 71.3155C2.99797 71.0665 3.1504 70.8673 3.30283 70.7179L3.25202 70.6183L1.93095 71.0167L1.42285 69.4728L9.80656 66.8832C10.5179 66.684 11.1276 66.6342 11.6865 66.8334C12.2455 67.0326 12.7027 67.3314 13.1092 67.8294C13.5157 68.3274 13.8714 68.8254 14.0746 69.5226ZM9.40007 70.9669C9.24764 70.5187 9.0444 70.1701 8.68873 69.9211C8.33306 69.672 7.97739 69.5226 7.52009 69.5226C7.0628 69.4728 6.5547 69.5724 5.99578 69.7218C5.43687 69.8713 4.97958 70.1203 4.6239 70.4191C4.26823 70.7179 4.01418 71.0665 3.86175 71.4151C3.70932 71.8135 3.70932 72.2119 3.86175 72.6601C4.01418 73.1084 4.26823 73.5068 4.6239 73.706C4.97958 73.955 5.38606 74.0546 5.84335 74.1044C6.30064 74.1542 6.80875 74.0546 7.31685 73.9052C7.87576 73.7558 8.28225 73.5068 8.63792 73.208C8.99359 72.9092 9.24764 72.5605 9.34926 72.2119C9.55251 71.8633 9.55251 71.4649 9.40007 70.9669Z"
             fill="#F58A07"
           />
          <path
             d="M8.99326 60.6084C9.09488 61.455 8.94245 62.1523 8.63758 62.7997C8.33272 63.4471 7.87543 63.9451 7.21489 64.2937C6.60517 64.6922 5.84301 64.8914 4.92843 64.991C4.06465 65.0906 3.25169 64.991 2.59115 64.6921C1.87981 64.4431 1.3209 64.0447 0.914412 63.4969C0.50793 62.9491 0.253878 62.3017 0.152257 61.5049C0.101447 61.0068 0.152257 60.5586 0.253878 60.1104C0.355499 59.6622 0.60955 59.214 0.914412 58.8654C1.21927 58.467 1.62576 58.1681 2.18467 57.9191C2.69277 57.6701 3.35331 57.5207 4.11546 57.4211L4.72519 57.3713L5.33491 64.0447L4.06465 64.1443L3.60736 59.0646C3.15007 59.1144 2.79439 59.214 2.48953 59.4132C2.18467 59.6124 1.93062 59.9112 1.77819 60.21C1.62576 60.5088 1.52414 60.9072 1.57495 61.3554C1.62576 61.8037 1.77819 62.2021 2.03224 62.5009C2.28629 62.7997 2.59115 63.0487 2.99764 63.1981C3.40412 63.3475 3.8106 63.3973 4.21708 63.3475L5.18248 63.2479C5.74139 63.1981 6.2495 63.0487 6.60517 62.7997C6.96084 62.5507 7.2657 62.2519 7.46895 61.9033C7.62138 61.5049 7.723 61.1064 7.67219 60.6084C7.62138 60.3096 7.57057 60.0108 7.46895 59.7618C7.36732 59.5128 7.21489 59.3136 7.01165 59.1144C6.80841 58.965 6.55436 58.8156 6.30031 58.7658L6.45274 57.1721C6.91003 57.2717 7.36732 57.4211 7.723 57.7199C8.07867 58.0187 8.38353 58.3674 8.63758 58.8654C8.89164 59.3634 8.94245 60.0108 8.99326 60.6084Z"
             fill="#F58A07"
          />
          <path
             d="M3.65834 52.4901L8.73938 53.0878L8.53614 54.7312L0 53.7352L0.203241 52.1913L1.57512 52.3407V52.2411C1.16864 51.9921 0.812965 51.6435 0.609724 51.1953C0.406483 50.7471 0.304862 50.1993 0.406483 49.6017C0.457293 49.0538 0.660534 48.5558 0.965396 48.1574C1.27026 47.759 1.67674 47.4602 2.18484 47.3108C2.69295 47.1116 3.30267 47.0618 4.01402 47.1614L9.45072 47.8088L9.24748 49.4523L3.96321 48.755C3.35348 48.7052 2.84538 48.8048 2.4389 49.0538C2.03241 49.3526 1.82917 49.7511 1.77836 50.2989C1.72755 50.6973 1.77836 50.9961 1.93079 51.3447C2.08322 51.6435 2.28647 51.8925 2.59133 52.1415C2.84538 52.2909 3.20105 52.4403 3.65834 52.4901Z"
            fill="#F58A07"
          />
          <path
            d="M11.3314 41.7832C11.0773 42.5302 10.6708 43.1777 10.1119 43.5761C9.55299 44.0243 8.89246 44.2733 8.18111 44.3729C7.46977 44.4725 6.6568 44.3729 5.84384 44.0741C5.03087 43.7753 4.31953 43.3769 3.81142 42.8788C3.30332 42.3808 2.94765 41.7832 2.79522 41.086C2.64278 40.3888 2.69359 39.6915 2.94765 38.9445C3.15089 38.3469 3.45575 37.8489 3.86223 37.4505C4.26871 37.0521 4.72601 36.7532 5.23411 36.6038C5.74221 36.4544 6.30113 36.4544 6.86004 36.554L6.35194 38.0481C5.94546 37.9983 5.53897 38.0979 5.1833 38.2971C4.82763 38.4963 4.52277 38.8449 4.37034 39.3429C4.2179 39.7911 4.2179 40.1896 4.31953 40.588C4.42115 40.9864 4.6752 41.335 5.03087 41.6836C5.38654 42.0322 5.84384 42.2812 6.45356 42.4804C7.06328 42.6796 7.57139 42.7792 8.07949 42.7294C8.58759 42.6796 8.99408 42.58 9.34975 42.331C9.70542 42.082 9.95947 41.7334 10.1119 41.2852C10.2135 40.9864 10.2643 40.6876 10.2135 40.4386C10.1627 40.1398 10.1119 39.8907 9.95947 39.6915C9.80704 39.4923 9.6038 39.2433 9.34975 39.0939L9.85785 37.5999C10.366 37.8489 10.7724 38.1477 11.0773 38.5959C11.3822 38.9943 11.5854 39.4923 11.6362 40.0402C11.6362 40.588 11.5854 41.1856 11.3314 41.7832Z"
            fill="#F58A07"
          />
          <path
            d="M16.666 37.1519C16.5136 37.3511 16.412 37.5503 16.2595 37.6997C16.1071 37.8491 16.0055 37.9487 15.9039 38.0483L14.9385 37.0025C15.1417 36.8033 15.3449 36.5543 15.4466 36.3551C15.5482 36.1559 15.599 35.9069 15.5482 35.7077C15.4974 35.4587 15.3449 35.2096 15.0909 34.861L14.6844 34.4128L5.58936 32.7196L6.50394 31.2255L13.3633 32.7196L13.4141 32.62L8.79041 27.4406L9.70499 25.9465L16.2595 33.7654C16.5644 34.114 16.7676 34.5124 16.9201 34.861C17.0725 35.2096 17.1233 35.6081 17.0725 35.9567C17.0217 36.3053 16.8693 36.7535 16.666 37.1519Z"
            fill="#F58A07"
          />
          <path
            d="M21.5946 24.9505L20.7816 24.0043L21.0357 18.5261C21.0357 17.9285 21.0865 17.4305 21.0357 17.032C21.0357 16.6336 20.9849 16.2352 20.8833 15.9364C20.7816 15.6376 20.6292 15.3388 20.426 15.0898C20.1719 14.791 19.8671 14.6416 19.5622 14.542C19.2573 14.4424 18.9017 14.4424 18.5968 14.542C18.2919 14.6416 17.9363 14.791 17.6822 15.04C17.3774 15.289 17.1741 15.5878 17.0217 15.9364C16.9201 16.2352 16.8693 16.5838 16.9709 16.9324C17.0725 17.2811 17.2249 17.5799 17.479 17.8787L16.2595 18.9743C15.8022 18.4763 15.4974 17.9285 15.3957 17.3309C15.2941 16.7332 15.3449 16.1356 15.599 15.5878C15.853 14.9902 16.2087 14.4922 16.7676 14.0439C17.3265 13.5957 17.8855 13.2969 18.4952 13.1475C19.1049 12.9981 19.6638 12.9981 20.2227 13.1973C20.7816 13.3467 21.2389 13.6455 21.6454 14.1435C21.9503 14.4424 22.1535 14.791 22.306 15.2392C22.4584 15.6376 22.56 16.1356 22.56 16.783C22.56 17.4305 22.56 18.1775 22.5092 19.1735L22.3568 22.2612L22.4076 22.311L26.2692 18.9743L27.2346 20.0699L21.5946 24.9505Z"
            fill="#F58A07"
          />
          <path
            d="M33.0273 16.9323C32.2652 17.3307 31.4522 17.4801 30.69 17.3805C29.9279 17.2809 29.1657 16.9323 28.4544 16.2849C27.743 15.6873 27.0825 14.8406 26.5236 13.745C25.9139 12.6494 25.5582 11.7031 25.4566 10.7569C25.3549 9.86048 25.4566 9.06365 25.7614 8.36643C26.1171 7.6692 26.6252 7.12138 27.4382 6.72297C28.2003 6.32456 28.9625 6.17515 29.7754 6.27475C30.5884 6.37436 31.2998 6.72297 32.0111 7.32059C32.7225 7.91821 33.383 8.76484 33.9419 9.81067C34.5516 10.9063 34.9073 11.9023 35.0089 12.7988C35.1613 13.6952 35.0597 14.5418 34.7041 15.1893C34.3484 15.9363 33.7895 16.4841 33.0273 16.9323ZM32.316 15.6375C32.9765 15.2889 33.3322 14.6912 33.383 13.7948C33.4338 12.9482 33.0781 11.9023 32.4176 10.6573C31.9603 9.86048 31.503 9.21305 30.9949 8.71504C30.4868 8.21702 30.0295 7.91821 29.5214 7.81861C29.0133 7.719 28.556 7.76881 28.0987 8.01781C27.4382 8.36643 27.0825 8.96405 27.0317 9.86048C26.9809 10.7071 27.3365 11.7529 27.9971 12.998C28.4544 13.8446 28.9117 14.492 29.4198 14.9402C29.9279 15.4383 30.3852 15.6873 30.8933 15.8367C31.3506 15.9363 31.8587 15.8865 32.316 15.6375Z"
            fill="#F58A07"
          />
          <path
            d="M38.9208 13.9443L38.5651 12.7491L41.2072 7.91833C41.5121 7.42032 41.7153 6.9223 41.8678 6.57369C42.0202 6.17528 42.1726 5.82666 42.2234 5.52785C42.2743 5.22904 42.2743 4.88043 42.1726 4.58162C42.071 4.23301 41.9186 3.9342 41.6645 3.73499C41.4105 3.53579 41.1056 3.38638 40.8008 3.33658C40.4451 3.28678 40.0894 3.28678 39.7337 3.38638C39.3273 3.48599 39.0224 3.68519 38.7683 3.8844C38.5143 4.13341 38.3619 4.43222 38.2602 4.73103C38.1586 5.02984 38.2094 5.42825 38.311 5.82666L36.7359 6.27488C36.5327 5.62746 36.5327 4.98004 36.7359 4.43222C36.8884 3.8346 37.244 3.33658 37.7013 2.93817C38.1586 2.53975 38.7175 2.24094 39.4289 2.04174C40.1402 1.84253 40.7499 1.84253 41.3597 1.94213C41.9694 2.04174 42.4775 2.34055 42.9348 2.68916C43.3413 3.08757 43.6461 3.53579 43.8494 4.13341C43.951 4.53182 44.0018 4.93023 43.951 5.37845C43.9002 5.82666 43.7478 6.32468 43.4937 6.8725C43.2397 7.42032 42.884 8.16734 42.4267 9.01397L40.8516 11.8527V11.9523L45.831 10.6076L46.2375 12.0021L38.9208 13.9443Z"
            fill="#F58A07"
          />
          <path
            d="M52.7416 11.5536C51.8778 11.6034 51.1157 11.4042 50.4551 10.956C49.7946 10.5078 49.2865 9.91019 48.9308 9.06356C48.5752 8.21693 48.3719 7.1711 48.2703 5.97586C48.2195 4.78062 48.3211 3.73478 48.626 2.83835C48.9308 1.94192 49.3881 1.2945 49.9978 0.796484C50.6076 0.298468 51.3697 0.0494594 52.2335 -0.00034225C53.0973 -0.0501439 53.8594 0.149063 54.52 0.597278C55.1805 1.04549 55.6886 1.64311 56.0443 2.48974C56.3999 3.33637 56.654 4.38221 56.7048 5.57745C56.7556 6.82249 56.654 7.86832 56.3491 8.71495C56.0443 9.56158 55.587 10.2588 55.0281 10.7568C54.3675 11.2548 53.6562 11.5038 52.7416 11.5536ZM52.6908 10.1094C53.4529 10.0596 54.0627 9.66118 54.4691 8.91416C54.8756 8.16713 55.0281 7.0715 54.9773 5.67705C54.9264 4.73082 54.774 3.98379 54.5708 3.33637C54.3675 2.68895 54.0119 2.24073 53.6562 1.89212C53.2497 1.59331 52.8432 1.44391 52.3351 1.44391C51.573 1.49371 50.9632 1.89212 50.5568 2.63915C50.1503 3.38617 49.9978 4.48181 50.0487 5.87626C50.0995 6.82249 50.2519 7.61931 50.4551 8.21693C50.6584 8.81455 51.014 9.31257 51.3697 9.66118C51.7254 10.0098 52.1827 10.1094 52.6908 10.1094Z"
            fill="#F58A07"
          />
          <path
            d="M70.9318 7.37028L70.5761 8.76473L65.6475 7.46989L66.0031 6.07544L70.9318 7.37028Z"
            fill="#F58A07"
          />
          <path
            d="M76.4189 16.3843L77.0795 15.3384L82.5162 14.0436C83.0751 13.8942 83.5832 13.7448 83.9897 13.6452C84.3962 13.5456 84.7519 13.3464 85.0059 13.197C85.26 13.0476 85.514 12.7985 85.6664 12.4997C85.8697 12.2009 85.9713 11.8523 85.9713 11.5535C85.9713 11.2049 85.8697 10.9061 85.7173 10.6571C85.514 10.3583 85.26 10.1093 84.9551 9.91005C84.5994 9.71084 84.2438 9.56144 83.8881 9.56144C83.5324 9.56144 83.2275 9.61124 82.9227 9.76064C82.6178 9.91005 82.3638 10.1591 82.1605 10.5077L80.7886 9.66104C81.1443 9.06342 81.6016 8.66501 82.1605 8.416C82.7194 8.16699 83.2784 8.06739 83.9389 8.11719C84.5486 8.16699 85.1583 8.3662 85.7681 8.76461C86.3778 9.16302 86.8351 9.61124 87.1399 10.1093C87.4448 10.6571 87.5972 11.2049 87.5972 11.7527C87.5972 12.3005 87.4448 12.8483 87.0891 13.3464C86.8859 13.695 86.581 13.9938 86.2254 14.2428C85.8697 14.4918 85.4124 14.7408 84.8027 14.94C84.1929 15.1392 83.4308 15.3384 82.4654 15.5874L79.2643 16.3843L79.2135 16.4341L83.5832 19.1234L82.7702 20.3684L76.4189 16.3843Z"
            fill="#F58A07"
          />
          <path
            d="M87.4953 24.801C86.8856 24.2034 86.5299 23.5062 86.3775 22.7591C86.2759 22.0121 86.3775 21.2153 86.784 20.3686C87.1904 19.522 87.8002 18.6754 88.7148 17.8288C89.5785 16.9821 90.4423 16.3347 91.3061 15.9861C92.1699 15.5877 92.9828 15.4881 93.745 15.5877C94.5071 15.6873 95.2185 16.0857 95.8282 16.6833C96.4379 17.2809 96.7936 17.9782 96.946 18.7252C97.0476 19.4722 96.946 20.269 96.5395 21.1157C96.1331 21.9623 95.5233 22.8089 94.6596 23.6556C93.7958 24.5022 92.8812 25.1496 92.0682 25.4982C91.2045 25.8966 90.3915 25.9962 89.6293 25.8966C88.8164 25.797 88.105 25.3986 87.4953 24.801ZM88.5623 23.7552C89.1212 24.303 89.7818 24.4524 90.6455 24.2532C91.5093 24.054 92.4239 23.4065 93.4401 22.4603C94.1006 21.8129 94.6087 21.1655 94.9644 20.5679C95.2693 19.9702 95.4217 19.4224 95.4217 18.9244C95.4217 18.4264 95.2185 18.028 94.8628 17.6296C94.3039 17.0817 93.6434 16.9323 92.7796 17.1315C91.9158 17.3307 91.0012 17.9782 89.985 18.9244C89.3245 19.5718 88.8164 20.2192 88.4607 20.8169C88.1558 21.4145 88.0034 21.9623 88.0034 22.4603C88.0034 23.0081 88.2066 23.4065 88.5623 23.7552Z"
            fill="#F58A07"
          />
          <path
            d="M92.0684 29.5317L93.1354 28.8843L98.5721 30.0297C99.1818 30.1293 99.6899 30.2289 100.096 30.2787C100.503 30.3285 100.909 30.3285 101.214 30.2787C101.519 30.2289 101.824 30.1293 102.129 29.9301C102.434 29.7309 102.688 29.4819 102.84 29.1831C102.993 28.8843 103.043 28.5855 102.993 28.2368C102.942 27.8882 102.84 27.5894 102.637 27.2408C102.434 26.8922 102.18 26.6432 101.875 26.4938C101.57 26.3444 101.265 26.2448 100.909 26.2946C100.554 26.2946 100.198 26.444 99.8931 26.6432L99.0294 25.2487C99.6391 24.9001 100.198 24.7009 100.859 24.7009C101.519 24.7009 102.027 24.8503 102.586 25.1491C103.145 25.448 103.602 25.8962 103.958 26.4938C104.364 27.0914 104.568 27.689 104.618 28.2866C104.669 28.8843 104.568 29.4321 104.314 29.9799C104.06 30.5277 103.653 30.9261 103.145 31.2249C102.789 31.4242 102.383 31.5736 101.976 31.6732C101.57 31.7728 101.011 31.7728 100.401 31.6732C99.7915 31.6234 98.9785 31.474 98.0132 31.2747L94.7613 30.6273L94.7105 30.6771L97.4542 34.9601L96.184 35.7071L92.0684 29.5317Z"
            fill="#F58A07"
          />
          <path
            d="M109.445 38.1973L98.7245 42.1814L98.1147 40.5878L107.21 37.2013V37.1515L104.568 35.259L106.092 34.6614L108.836 36.6534L109.445 38.1973Z"
            fill="#F58A07"
          />
          <path
            d="M116 51.2455L97.2511 53.138L97.0986 51.6937L115.848 49.8013L116 51.2455Z"
            fill="#F58A07"
          />
          <path
            d="M112.037 64.2935L100.655 62.9489L100.859 61.3054L112.24 62.6501L112.037 64.2935Z"
            fill="#F58A07"
          />
          <path
            d="M99.1309 69.1242C99.3342 68.3771 99.7407 67.7297 100.249 67.2815C100.757 66.8333 101.417 66.5345 102.129 66.3851C102.84 66.2357 103.653 66.2855 104.517 66.5345C105.381 66.7835 106.092 67.1321 106.651 67.6301C107.21 68.1281 107.565 68.7257 107.769 69.3732C107.972 70.0206 107.921 70.7676 107.718 71.5146C107.515 72.2617 107.108 72.9091 106.6 73.3573C106.092 73.8055 105.431 74.1043 104.72 74.2537C104.009 74.4031 103.196 74.3533 102.332 74.1043C101.468 73.8553 100.757 73.5067 100.249 73.0087C99.6899 72.5107 99.3342 71.9131 99.1309 71.2656C98.9277 70.6182 98.9277 69.8712 99.1309 69.1242ZM100.503 69.5226C100.35 70.0206 100.35 70.4688 100.554 70.8672C100.757 71.2656 101.011 71.6142 101.417 71.8633C101.824 72.1621 102.281 72.3613 102.789 72.5107C103.297 72.6601 103.805 72.7099 104.314 72.7099C104.822 72.6601 105.228 72.5605 105.584 72.3115C105.94 72.0625 106.194 71.7138 106.346 71.2158C106.498 70.7178 106.498 70.2696 106.295 69.8712C106.143 69.4728 105.838 69.1242 105.431 68.8253C105.025 68.5265 104.568 68.3273 104.06 68.1779C103.551 68.0285 103.043 67.9787 102.535 67.9787C102.027 68.0285 101.621 68.1281 101.265 68.4269C100.909 68.6759 100.655 69.0246 100.503 69.5226Z"
            fill="#F58A07"
          />
          <path
            d="M100.96 78.8855L96.4888 76.495L97.3018 75.0508L104.872 79.0349L104.11 80.4294L102.891 79.7819L102.84 79.8816C103.145 80.28 103.297 80.6784 103.348 81.1764C103.399 81.6744 103.247 82.1724 102.942 82.7701C102.688 83.2681 102.332 83.6665 101.875 83.9155C101.468 84.1645 100.96 84.3139 100.452 84.3139C99.8931 84.3139 99.3342 84.1147 98.7244 83.8159L93.8975 81.276L94.7104 79.8318L99.3342 82.272C99.8931 82.5708 100.401 82.6705 100.858 82.521C101.316 82.4214 101.671 82.1226 101.976 81.6246C102.18 81.276 102.23 80.9772 102.23 80.6286C102.23 80.28 102.129 79.9812 101.926 79.6823C101.671 79.3835 101.367 79.1345 100.96 78.8855Z"
            fill="#F58A07"
          />
          <path
            d="M90.0865 85.7578C90.5438 85.2598 91.1027 84.9112 91.7125 84.712C92.3222 84.5626 92.9827 84.5626 93.6941 84.7618C94.4054 84.961 95.1168 85.3594 95.7773 85.957C96.4378 86.5546 96.9967 87.202 97.2508 87.8495C97.5557 88.4969 97.6573 89.1443 97.5557 89.7917C97.454 90.4392 97.2 90.987 96.7427 91.485C96.387 91.8834 96.0313 92.1324 95.6757 92.2818C95.32 92.4312 95.0151 92.481 94.7103 92.4312C94.4054 92.4312 94.1514 92.3814 93.9481 92.3316L93.8973 92.3814L97.0984 95.1205L95.9805 96.3655L87.3428 88.9949L88.4098 87.7997L89.426 88.6463L89.5276 88.5467C89.4768 88.3475 89.3752 88.0985 89.3244 87.7997C89.2736 87.5009 89.2736 87.202 89.3752 86.8534C89.4768 86.5048 89.7309 86.1562 90.0865 85.7578ZM90.8995 86.953C90.5946 87.3017 90.3914 87.7001 90.3914 88.0985C90.3914 88.4969 90.493 88.9451 90.6963 89.3435C90.9503 89.7419 91.2552 90.1901 91.7125 90.5388C92.1698 90.9372 92.6271 91.1862 93.0843 91.3356C93.5416 91.485 93.9481 91.5348 94.3546 91.4352C94.7611 91.3356 95.1168 91.1364 95.4216 90.7878C95.7265 90.4392 95.9297 90.0407 95.9297 89.5925C95.9297 89.1941 95.8281 88.7459 95.6249 88.3475C95.3708 87.9491 95.066 87.5507 94.6595 87.202C94.2022 86.8534 93.7957 86.5546 93.3384 86.4052C92.8811 86.2558 92.4238 86.206 92.0173 86.2558C91.6108 86.3554 91.2552 86.6044 90.8995 86.953Z"
            fill="#F58A07"
          />
         <path
            d="M82.3131 92.9297C82.9737 92.4815 83.6342 92.1827 84.3455 92.1329C85.0569 92.0831 85.7174 92.1827 86.378 92.5313C87.0385 92.8799 87.6482 93.3779 88.1563 94.0751C88.6644 94.7724 89.0201 95.4696 89.1725 96.2166C89.325 96.9138 89.2233 97.6111 88.9693 98.2585C88.7152 98.9059 88.2579 99.4537 87.5974 99.9517C86.9369 100.4 86.2763 100.699 85.565 100.749C84.8536 100.798 84.1931 100.649 83.5326 100.35C82.872 100.002 82.2623 99.5035 81.7542 98.8063C81.2461 98.1091 80.8904 97.4118 80.7888 96.6648C80.6872 95.9178 80.738 95.2704 80.9921 94.623C81.1953 93.9257 81.6526 93.3779 82.3131 92.9297ZM83.1261 94.0253C82.7196 94.3241 82.4656 94.6728 82.3131 95.121C82.1607 95.5692 82.2115 95.9676 82.3639 96.4158C82.5164 96.864 82.7196 97.3122 83.0753 97.7605C83.3801 98.2087 83.7866 98.5573 84.1931 98.8063C84.5996 99.0553 85.0061 99.2047 85.4634 99.2545C85.9207 99.3043 86.3272 99.1549 86.7336 98.8063C87.1401 98.5075 87.445 98.1589 87.5466 97.7107C87.6482 97.2624 87.6482 96.864 87.4958 96.366C87.3434 95.9178 87.1401 95.4696 86.7844 95.0214C86.4796 94.5732 86.0731 94.2245 85.6666 93.9755C85.2601 93.7265 84.8537 93.5771 84.3964 93.5771C83.9899 93.5771 83.5834 93.7265 83.1261 94.0253Z"
            fill="#F58A07"
         />
         <path
            d="M77.6886 101.745L75.6054 97.163L77.1297 96.4658L80.6864 104.135L79.2129 104.783L78.654 103.538L78.5524 103.587C78.5524 104.085 78.4508 104.534 78.1459 104.932C77.8919 105.331 77.4346 105.679 76.8756 105.928C76.3167 106.177 75.8086 106.277 75.3005 106.227C74.7924 106.177 74.3351 105.978 73.9286 105.679C73.5222 105.38 73.1665 104.882 72.8616 104.235L70.626 99.3543L72.1503 98.6571L74.3351 103.338C74.5892 103.886 74.9449 104.285 75.4021 104.434C75.8594 104.633 76.3167 104.583 76.8248 104.384C77.1805 104.235 77.4346 104.036 77.6378 103.737C77.841 103.488 77.9427 103.139 77.9935 102.791C77.9935 102.542 77.8919 102.193 77.6886 101.745Z"
            fill="#F58A07"
         />
       </svg>
      </div>;

      {/* The Numbers */}

      <div className="w-[1279px] h-[388px]">
         <div className="w-[270px] h-48">
            <p className="w-[270px] absolute left-[1310px] top-[1258px] text-base font-medium text-left text-[#5b5b5b]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
            </p>
            <p className="absolute left-[1310px] top-[1216px] text-2xl font-semibold text-left text-[#0d1317]">
              Custom solutions
            </p>
            <p className="absolute left-[1310px] top-[1150px] text-4xl font-bold text-left text-[#f58a07]">
              130+
            </p>
         </div>
         <div className="w-[270px] h-48">
            <p className="w-[270px] absolute left-[980px] top-[1258px] text-base font-medium text-left text-[#5b5b5b]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
            </p>
            <p className="absolute left-[980px] top-[1216px] text-2xl font-semibold text-left text-[#0d1317]">
              Employees
            </p>
            <p className="absolute left-[980px] top-[1150px] text-4xl font-bold text-left text-[#f58a07]">
              34
            </p>
         </div>
         <div className="w-[270px] h-48">
           <p className="w-[270px] absolute left-[650px] top-[1258px] text-base font-medium text-left text-[#5b5b5b]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
           </p>
           <p className="absolute left-[650px] top-[1216px] text-2xl font-semibold text-left text-[#0d1317]">
              Clients served
           </p>
           <p className="absolute left-[650px] top-[1150px] text-4xl font-bold text-left text-[#f58a07]">
              500+
           </p>
         </div>
         <div className="w-[264px] h-48">
           <p className="w-[264px] absolute left-80 top-[1258px] text-base font-medium text-left text-[#5b5b5b]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
           </p>
           <p className="absolute left-80 top-[1216px] text-2xl font-semibold text-left text-[#0d1317]">
              Awards received
           </p>
           <p className="absolute left-80 top-[1150px] text-4xl font-bold text-left text-[#f58a07]">15+</p>
         </div>
         <p className="w-[620px] h-[102px] absolute left-[979px] top-[960px] text-lg font-medium text-left text-[#1d3444]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit,
            hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
         </p>
         <p className="w-[587px] absolute left-80 top-[954px] text-4xl font-semibold text-left text-[#0d1317]">
            The energy of a start-up combined with 30 years of experience
         </p>
      </div>;


    </>
  )
}

export default Numbers