import * as React from 'react';

const defaultStyle = {
  width: 192,
  height: 192,
} as React.CSSProperties;

type Props = {
  style?: React.CSSProperties;
  circuitColor?: string;
  circuitShadowColor?: string;
  outlineColor?: string;
  candleColor?: string;
};

const PoonjiLogo = ({
  style = {},
  circuitColor = 'var(--poonji-circuit-color)',
  circuitShadowColor = 'var(--poonji-shadow-color)',
  outlineColor = 'var(--poonji-outline-color)',
  candleColor = 'var(--poonji-candle-color)',
}: Props = {}) => (
  <div style={{ ...defaultStyle, ...style }}>
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="64" cy="121" rx="16" ry="2" fill={outlineColor} />
      <path
        d="M38.5 47.5C37 49.4881 38 51.5 37 54.5L41.5 55.5C43.1319 55.5 46.465 61.6858 46.5822 59.4546C47 51.5 49 54.5 51 51.5C50 50 47.8946 46.1958 47 45.5C42.5 42 40 45.5119 38.5 47.5Z"
        fill="#FEECEC"
      />
      <path
        d="M78.014 53.458L78 53.5L82.5 54.5C84.1319 54.5 87.465 60.6858 87.5822 58.4546C88 50.5 90.4802 50.4248 92 50.5C89.6017 48.2945 90 45.5665 88 44.5C84.99 42.895 82.5 45.0119 81 47C79.507 48.9789 79.0047 50.4859 78.014 53.458Z"
        fill="#FEECEC"
      />
      <path
        d="M102.747 95.9417C103.057 98.9295 101.089 99.0369 96.5 97C91.9112 94.9631 89.6706 95.2782 91.1629 91.4119C92.5414 87.8407 95.0284 88.0432 99.5001 90.2194C103.972 92.3956 104.868 93.1947 102.747 95.9417Z"
        fill="#FEF3EC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100.937 96.6187C100.917 95.914 101.155 95.1554 101.585 94.5577C101.66 94.4539 101.723 94.3619 101.778 94.2812C101.665 94.1889 101.524 94.0848 101.347 93.9678C100.826 93.6241 100.105 93.2391 99.1283 92.7496C97.158 91.762 94.2202 90.3936 93.4729 90.5028C93.172 90.5468 93.0596 90.6472 93.013 90.6938C92.9481 90.7587 92.7735 90.9665 92.5428 91.5644C92.4069 91.9165 92.3397 92.1565 92.3078 92.3108C92.2923 92.3856 92.2861 92.4356 92.2836 92.4654C92.2816 92.4889 92.2818 92.5016 92.2819 92.5061C92.283 92.5091 92.2852 92.5153 92.2895 92.5246C92.3049 92.5578 92.3491 92.6359 92.4611 92.7496C92.7055 92.9974 94.856 94.3206 95.563 94.6699C96.0268 94.899 96.54 95.1262 97.1346 95.3894C97.4452 95.5269 97.7781 95.6743 98.1376 95.8369C99.0784 96.2622 99.8292 96.4912 100.407 96.578C100.623 96.6106 100.798 96.6206 100.937 96.6187ZM97.1736 98.1424C101.19 99.9584 102.956 98.8909 102.803 95.9632C104.811 93.1726 104.043 92.423 100.137 90.4652C94.5 87.4592 91.6474 87.1226 90.269 90.6938C88.9011 94.2377 92.8464 96.2231 96.2116 97.7133C96.5177 97.8489 96.8387 97.991 97.1736 98.1424Z"
        fill={outlineColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M102.269 94.2251C102.268 94.2253 102.268 94.2255 101.633 93.1487C100.999 92.0718 100.998 92.072 100.998 92.0722L100.996 92.0736L100.992 92.0756L100.984 92.0803L100.964 92.0927C100.949 92.1022 100.93 92.1142 100.907 92.1287C100.863 92.1578 100.805 92.1973 100.736 92.2473C100.6 92.3468 100.42 92.4905 100.223 92.6793C99.8345 93.0523 99.3514 93.6321 99.046 94.4277C98.7865 95.1038 98.6303 95.7972 98.5389 96.3035C98.4925 96.5608 98.4611 96.7791 98.4411 96.9354C98.4311 97.0137 98.4239 97.0768 98.4191 97.122L98.4135 97.176L98.4119 97.1924L98.4114 97.1978L98.4113 97.1998L98.4112 97.201C98.4111 97.2011 98.4111 97.2013 99.6561 97.3129C100.901 97.4245 100.901 97.4246 100.901 97.4248L100.902 97.4202L100.905 97.3887C100.908 97.359 100.913 97.3126 100.921 97.2522C100.936 97.1312 100.962 96.9559 100.999 96.7476C101.076 96.3229 101.198 95.7977 101.38 95.3236C101.516 94.9691 101.743 94.6855 101.955 94.4825C102.058 94.3833 102.15 94.3108 102.211 94.2662C102.241 94.2442 102.263 94.2296 102.273 94.2226C102.278 94.2196 102.28 94.2181 102.28 94.2181L102.277 94.2203L102.273 94.2226L102.271 94.224L102.269 94.2251ZM100.901 97.4259C100.901 97.4261 100.901 97.4263 100.901 97.4259Z"
        fill={outlineColor}
      />
      <path
        d="M25.7095 95.9417C25.3999 98.9295 27.4112 99.0369 32 97C36.5888 94.9631 38.7858 95.2782 37.2935 91.4119C35.9151 87.8407 33.4281 88.0432 28.9564 90.2194C24.4847 92.3956 23.5883 93.1947 25.7095 95.9417Z"
        fill="#FEF3EC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.519 96.6187C27.5392 95.914 27.3017 95.1554 26.8716 94.5577C26.7969 94.4539 26.7331 94.3619 26.6789 94.2812C26.7911 94.1889 26.9326 94.0848 27.1099 93.9678C27.6309 93.6241 28.3516 93.2391 29.3281 92.7496C31.2984 91.762 34.2362 90.3936 34.9835 90.5028C35.2844 90.5468 35.3968 90.6472 35.4434 90.6938C35.5083 90.7587 35.6829 90.9665 35.9137 91.5644C36.0496 91.9165 36.1168 92.1565 36.1487 92.3108C36.1642 92.3856 36.1704 92.4356 36.1729 92.4654C36.1748 92.4889 36.1746 92.5016 36.1745 92.5061C36.1735 92.5091 36.1712 92.5153 36.1669 92.5246C36.1515 92.5578 36.1073 92.6359 35.9953 92.7496C35.751 92.9974 33.6004 94.3206 32.8934 94.6699C32.4297 94.899 31.9164 95.1262 31.3219 95.3894C31.0112 95.5269 30.6783 95.6743 30.3188 95.8369C29.378 96.2622 28.6272 96.4912 28.0499 96.578C27.8335 96.6106 27.6579 96.6206 27.519 96.6187ZM31.2828 98.1424C27.2666 99.9584 25.5001 98.8909 25.6538 95.9632C23.6456 93.1726 24.4137 92.423 28.3195 90.4652C33.9564 87.4592 36.809 87.1226 38.1874 90.6938C39.5553 94.2377 35.6101 96.2231 32.2448 97.7133C31.9387 97.8489 31.6177 97.991 31.2828 98.1424Z"
        fill={outlineColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.1877 94.2251C26.188 94.2253 26.1884 94.2255 26.8231 93.1487C27.4578 92.0718 27.4581 92.072 27.4585 92.0722L27.4608 92.0736L27.4642 92.0756L27.4721 92.0803L27.4923 92.0927C27.5076 92.1022 27.5266 92.1142 27.5489 92.1287C27.5935 92.1578 27.6517 92.1973 27.7201 92.2473C27.8564 92.3468 28.0369 92.4905 28.2335 92.6793C28.6219 93.0523 29.105 93.6321 29.4104 94.4277C29.6699 95.1038 29.8261 95.7972 29.9175 96.3035C29.964 96.5608 29.9953 96.7791 30.0153 96.9354C30.0253 97.0137 30.0325 97.0768 30.0373 97.122L30.0429 97.176L30.0445 97.1924L30.045 97.1978L30.0452 97.1998L30.0453 97.201C30.0453 97.2011 30.0453 97.2013 28.8003 97.3129C27.5553 97.4245 27.5553 97.4246 27.5553 97.4248L27.5549 97.4202L27.5516 97.3887C27.5484 97.359 27.5431 97.3126 27.5354 97.2522C27.52 97.1312 27.4949 96.9559 27.4573 96.7476C27.3806 96.3229 27.2584 95.7977 27.0765 95.3236C26.9404 94.9691 26.7133 94.6855 26.5019 94.4825C26.3986 94.3833 26.3068 94.3108 26.2457 94.2662C26.2155 94.2442 26.1937 94.2296 26.1831 94.2226C26.1784 94.2196 26.176 94.2181 26.176 94.2181L26.1797 94.2203L26.1831 94.2226L26.1857 94.224L26.1877 94.2251ZM27.5554 97.4259C27.5554 97.4261 27.5554 97.4263 27.5554 97.4259Z"
        fill={outlineColor}
      />
      <path
        d="M64 57.5816C60.1967 57.5816 61.623 49.8567 60.6721 49C46.2232 49.9684 35 57.4902 35 75.4455C35 83.0547 36.7407 90.2144 41.6557 95.5625C46.5708 100.911 56.2937 102 64 102C71.9759 102 80.2488 100.854 86.3443 94.7579C91.5738 89.5274 93 82.8079 93 75.4455C93 57.2476 82.3753 50.2437 68.4922 49.0731C66.8525 49.8567 68.7541 57.5816 64 57.5816Z"
        fill="#FEECEC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.4862 56.2092C39.6672 60.029 36.5 66.1228 36.5 75.5C36.5 83.0302 38.2511 89.7241 42.8276 94.6275C44.9266 96.8765 48.219 98.3849 52.2121 99.3078C56.1691 100.222 60.5417 100.5 64.5 100.5C72.7516 100.5 80.5745 99.3041 86.2458 93.7188C91.06 88.9776 92.5 82.8193 92.5 75.5C92.5 65.6762 89.3143 59.6115 84.5368 55.9147C80.5668 52.8428 75.227 51.1929 69 50.6783C67 50.5131 71.5 58 64.5 58C57.5 58 62.1726 50.5 60 50.6988C53.8096 51.2651 48.4678 53.0531 44.4862 56.2092ZM34 75.5C34 56.4994 46.3247 48.7808 62 48.0568C64.5 47.9413 61.5 55.5 64.5 55.5C68 55.5 64.5 48 67 48.0509C82.6753 48.7016 95 55.7077 95 75.5C95 83.1245 93.5 90.0833 88 95.5C81.5892 101.814 72.8884 103 64.5 103C56.3951 103 46.1693 101.872 41 96.3333C35.8307 90.7948 34 83.3801 34 75.5Z"
        fill={outlineColor}
      />
      <path
        d="M36.4585 50C38.8568 47.7945 41.0119 42.1672 41.9585 46C42.2937 47.3571 43.8965 55.7455 43.9585 57C44.0278 58.4004 42.4784 63.9248 40.9585 64C39.4387 64.0752 38.7768 61.876 36.4585 59.5C35.2605 58.2721 30.2813 55.7562 30.9585 54.5C31.6358 53.2438 35.092 51.2567 36.4585 50Z"
        fill="#FEECEC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.1327 45.2888C44.9542 45.5306 45.7796 46.0889 46.5747 46.8839C46.9576 47.2668 47.5142 48.0267 48.0413 49.0224C48.5624 50.0066 49.0121 51.1416 49.2328 52.2451L51.6843 51.7549C51.405 50.3584 50.8547 48.9934 50.2508 47.8526C49.6529 46.7233 48.9595 45.7332 48.3424 45.1161C47.3764 44.1501 46.2018 43.2918 44.8386 42.8906C43.4342 42.4772 41.9113 42.5753 40.3704 43.397C39.0895 44.0801 38.4225 44.9953 37.8261 45.8672C37.7758 45.9408 37.7258 46.0144 37.6756 46.0882C37.1413 46.8741 36.5976 47.6739 35.6124 48.5799C35.3838 48.7902 34.9889 49.0464 34.4003 49.3897C34.248 49.4785 34.0831 49.573 33.9104 49.6719C33.4686 49.925 32.9752 50.2076 32.508 50.5017C31.2687 51.282 29.683 52.4483 29.2458 54.1968C28.9991 55.1837 29.3624 56.0563 29.8124 56.698C30.2594 57.3353 30.8896 57.893 31.4977 58.3574C32.1165 58.83 32.787 59.261 33.3613 59.6231C33.4546 59.682 33.5442 59.7383 33.6302 59.7923C34.1025 60.0892 34.4629 60.3158 34.7085 60.5C35.0894 60.7856 35.4835 61.2014 35.9179 61.7256C36.1318 61.9837 36.3445 62.2544 36.5655 62.5371C36.5867 62.5643 36.6081 62.5916 36.6295 62.619C36.8274 62.8724 37.033 63.1355 37.2391 63.3888C37.6876 63.9397 38.2012 64.5233 38.7768 64.9639C39.3589 65.4096 40.1144 65.7933 41.0203 65.7485C41.8598 65.7069 42.5198 65.2217 42.9743 64.7437C43.4465 64.2471 43.8418 63.6099 44.1574 62.946C44.7859 61.6238 45.2085 59.9601 45.2085 58.5C45.2085 55.2352 45.2054 53.8141 44.1604 50.1566L41.7566 50.8434C42.7085 54.1751 42.7085 55.3402 42.7085 58.4694L42.7085 58.5C42.7085 59.5399 42.391 60.8386 41.8995 61.8726C41.6551 62.3868 41.3954 62.7761 41.1626 63.021C40.9963 63.1959 40.8985 63.2419 40.8749 63.2519C40.7756 63.2508 40.5972 63.2091 40.2965 62.9789C39.9658 62.7257 39.6044 62.3344 39.1779 61.8105C38.9886 61.5779 38.7988 61.3349 38.5982 61.0782C38.5773 61.0515 38.5563 61.0246 38.5352 60.9975C38.3147 60.7155 38.0821 60.4191 37.8429 60.1304C37.371 59.561 36.8277 58.9644 36.2085 58.5C35.8722 58.2478 35.403 57.9533 34.9396 57.6624C34.8575 57.6108 34.7756 57.5594 34.6947 57.5084C34.1247 57.149 33.5372 56.7693 33.0151 56.3706C32.4822 55.9637 32.0885 55.5894 31.8593 55.2625C31.6356 54.9437 31.6672 54.8192 31.6711 54.8037L31.6712 54.8032C31.8419 54.1204 32.5729 53.4151 33.84 52.6173C34.2607 52.3525 34.6798 52.1124 35.1039 51.8696C35.2881 51.7641 35.4732 51.6581 35.6597 51.5493C36.2292 51.2171 36.85 50.8382 37.3046 50.4201C38.5098 49.3118 39.1986 48.2966 39.7383 47.5011C39.79 47.4249 39.8403 47.3506 39.8896 47.2786C40.4437 46.4685 40.8276 45.9864 41.5467 45.603C42.5058 45.0916 43.3524 45.0592 44.1327 45.2888Z"
        fill={outlineColor}
      />
      <path
        d="M92.5 50C90.1017 47.7945 87.9466 42.1672 87 46C86.6648 47.3571 85.062 55.7455 85 57C84.9307 58.4004 86.4801 63.9248 88 64C89.5198 64.0752 90.1817 61.876 92.5 59.5C93.698 58.2721 98.6772 55.7562 98 54.5C97.3227 53.2438 93.8665 51.2567 92.5 50Z"
        fill="#FEECEC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.8258 45.2888C84.0043 45.5306 83.1789 46.0889 82.3838 46.8839C82.0009 47.2668 81.4443 48.0267 80.9172 49.0224C80.3961 50.0066 79.9464 51.1416 79.7257 52.2451L77.2742 51.7549C77.5535 50.3584 78.1038 48.9934 78.7077 47.8526C79.3056 46.7233 79.999 45.7332 80.6161 45.1161C81.5821 44.1501 82.7567 43.2918 84.1199 42.8906C85.5243 42.4772 87.0472 42.5753 88.5881 43.397C89.869 44.0801 90.536 44.9953 91.1324 45.8672C91.1827 45.9408 91.2327 46.0144 91.2829 46.0882C91.8172 46.8741 92.3609 47.6739 93.3461 48.5799C93.5747 48.7902 93.9696 49.0464 94.5582 49.3897C94.7105 49.4785 94.8754 49.573 95.0481 49.6719C95.4899 49.925 95.9833 50.2076 96.4505 50.5017C97.6898 51.282 99.2755 52.4483 99.7126 54.1968C99.9594 55.1837 99.5961 56.0563 99.1461 56.698C98.6991 57.3353 98.0689 57.893 97.4608 58.3574C96.842 58.83 96.1715 59.261 95.5972 59.6231C95.5039 59.682 95.4143 59.7383 95.3283 59.7923C94.856 60.0892 94.4956 60.3158 94.25 60.5C93.8691 60.7856 93.475 61.2014 93.0406 61.7256C92.8267 61.9837 92.614 62.2544 92.393 62.5371C92.3718 62.5643 92.3504 62.5916 92.329 62.619C92.1311 62.8724 91.9255 63.1355 91.7194 63.3888C91.2709 63.9397 90.7573 64.5233 90.1817 64.9639C89.5996 65.4096 88.8441 65.7933 87.9382 65.7485C87.0987 65.7069 86.4387 65.2217 85.9842 64.7437C85.512 64.2471 85.1167 63.6099 84.8011 62.946C84.1726 61.6238 83.75 59.9601 83.75 58.5C83.75 55.2352 83.7531 53.8141 84.7981 50.1566L87.2019 50.8434C86.25 54.1751 86.25 55.3402 86.25 58.4694L86.25 58.5C86.25 59.5399 86.5675 60.8386 87.059 61.8726C87.3034 62.3868 87.5631 62.7761 87.7959 63.021C87.9622 63.1959 88.06 63.2419 88.0836 63.2519C88.1829 63.2508 88.3613 63.2091 88.662 62.9789C88.9927 62.7257 89.3541 62.3344 89.7806 61.8105C89.9699 61.5779 90.1597 61.3349 90.3603 61.0782C90.3812 61.0515 90.4022 61.0246 90.4233 60.9975C90.6438 60.7155 90.8764 60.4191 91.1156 60.1304C91.5875 59.561 92.1308 58.9644 92.75 58.5C93.0863 58.2478 93.5555 57.9533 94.0189 57.6624C94.101 57.6108 94.1829 57.5594 94.2638 57.5084C94.8338 57.149 95.4213 56.7693 95.9434 56.3706C96.4763 55.9637 96.87 55.5894 97.0992 55.2625C97.3229 54.9437 97.2913 54.8192 97.2874 54.8037L97.2873 54.8032C97.1166 54.1204 96.3856 53.4151 95.1185 52.6173C94.6978 52.3525 94.2787 52.1124 93.8546 51.8696C93.6704 51.7641 93.4853 51.6581 93.2988 51.5493C92.7292 51.2171 92.1085 50.8382 91.6538 50.4201C90.4487 49.3118 89.7599 48.2966 89.2202 47.5011C89.1685 47.4249 89.1182 47.3506 89.0689 47.2786C88.5148 46.4685 88.1309 45.9864 87.4118 45.603C86.4527 45.0916 85.6061 45.0592 84.8258 45.2888Z"
        fill={outlineColor}
      />
      <path
        d="M76.6364 75.9319C77.0297 80.2163 74.1457 83.9834 65.7121 84.7576C57.2786 85.5317 53.757 82.3525 53.3637 78.0681C52.9704 73.7837 55.8544 70.0166 64.288 69.2424C72.7215 68.4683 76.2431 71.6475 76.6364 75.9319Z"
        fill="#FF98B9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.7997 79.8139C73.8781 78.8304 74.2809 77.6209 74.1469 76.1604C74.0128 74.6999 73.3965 73.5839 72.1571 72.8132C70.8127 71.9772 68.4433 71.3715 64.5165 71.732C60.5897 72.0924 58.3701 73.1194 57.2004 74.1861C56.122 75.1695 55.7192 76.3791 55.8532 77.8396C55.9873 79.3001 56.6036 80.4161 57.843 81.1868C59.1874 82.0228 61.5568 82.6285 65.4836 82.268C69.4104 81.9076 71.63 80.8806 72.7997 79.8139ZM65.7121 84.7576C74.1457 83.9834 77.0297 80.2163 76.6364 75.9319C76.2431 71.6475 72.7215 68.4683 64.288 69.2424C55.8544 70.0166 52.9704 73.7837 53.3637 78.0681C53.757 82.3525 57.2786 85.5317 65.7121 84.7576Z"
        fill={outlineColor}
      />
      <path
        d="M63.5 76.95C63.5 77.9165 62.9404 78.7 62.25 78.7C61.5596 78.7 61 77.9165 61 76.95C61 75.9835 61.5596 75.2 62.25 75.2C62.9404 75.2 63.5 75.9835 63.5 76.95Z"
        fill={outlineColor}
      />
      <path
        d="M69.5 76.95C69.5 77.9165 68.9404 78.7 68.25 78.7C67.5596 78.7 67 77.9165 67 76.95C67 75.9835 67.5596 75.2 68.25 75.2C68.9404 75.2 69.5 75.9835 69.5 76.95Z"
        fill={outlineColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.4147 69.9809C47.9107 69.1529 47.6243 68.2245 47.5077 67.6042L49.4029 67.248C49.4865 67.6932 49.7042 68.3908 50.0618 68.9782C50.4301 69.5833 50.831 69.8921 51.2245 69.946C51.618 69.9998 52.0871 69.81 52.6045 69.3262C53.1068 68.8564 53.5039 68.2429 53.704 67.8367L55.4338 68.6889C55.1549 69.255 54.6296 70.0724 53.9217 70.7345C53.2288 71.3826 52.1999 72.0258 50.9631 71.8565C49.7262 71.6872 48.908 70.7912 48.4147 69.9809Z"
        fill={outlineColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.5947 69.7342C74.8868 69.0721 74.3616 68.2547 74.0827 67.6885L75.8125 66.8364C76.0126 67.2427 76.4097 67.8561 76.912 68.3259C77.4293 68.8098 77.8985 68.9997 78.2919 68.9458C78.6854 68.892 79.0863 68.5832 79.4547 67.9781C79.8123 67.3907 80.03 66.6931 80.1137 66.248L82.0088 66.6042C81.8922 67.2245 81.6058 68.1529 81.1018 68.9808C80.6084 69.7912 79.7901 70.6871 78.5533 70.8564C77.3164 71.0256 76.2876 70.3823 75.5947 69.7342Z"
        fill={outlineColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.3107 85.9061C70.8422 85.3991 70.0514 85.3679 69.5443 85.8364C69.1707 86.1817 69.0924 86.1985 69.0549 86.2065C69.0541 86.2067 69.0533 86.2069 69.0525 86.207C68.9679 86.2255 68.7161 86.2438 67.9238 86.0364C67.256 85.8615 66.5728 86.2611 66.398 86.929C66.2231 87.5968 66.6227 88.28 67.2906 88.4548C68.1245 88.6732 68.8779 88.804 69.5857 88.6495C70.3416 88.4845 70.8479 88.0357 71.241 87.6725C71.748 87.204 71.7792 86.4132 71.3107 85.9061Z"
        fill={outlineColor}
      />
      <path
        d="M68.7601 105.858C67.7583 108.851 62.6496 110.897 53.7621 109.05C44.8746 107.202 41.39 104.394 42.3918 101.4C43.3935 98.4067 48.6843 96.1523 57.3898 98.2084C66.0953 100.264 69.7619 102.864 68.7601 105.858Z"
        fill="#FEF3EC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.8475 106.956C65.7816 106.452 66.2037 105.714 66.2951 105.441L66.2964 105.437C66.3373 105.316 66.534 104.732 65.0062 103.69C63.4641 102.639 60.702 101.554 56.439 100.547C52.3528 99.5822 49.333 99.6972 47.3942 100.218C45.4335 100.744 44.9518 101.533 44.8568 101.817C44.7994 101.989 44.6227 102.622 46.1037 103.664C47.5979 104.716 50.3283 105.798 54.6478 106.696C58.8641 107.573 61.9091 107.461 63.8475 106.956ZM53.7621 109.05C62.6496 110.897 71.9132 112.534 73.2945 108.281C75.1643 102.523 66.0953 100.264 57.3898 98.2084C48.6843 96.1523 43.3935 98.4067 42.3918 101.4C41.39 104.394 44.8746 107.202 53.7621 109.05Z"
        fill={outlineColor}
      />
      <path
        d="M61.3096 107.592C58.5914 104.529 62.2783 100.954 71.0765 98.9354C79.8748 96.9169 84.8914 97.8711 86.3075 100.781C87.7237 103.69 85.0084 107.701 76.2049 109.472C67.4013 111.242 60.5223 112.44 61.3096 107.592Z"
        fill="#FEF3EC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.9738 107.627C57.8853 103.724 62.2783 100.954 71.0765 98.9354C79.8748 96.917 84.8914 97.8711 86.3075 100.781C87.7237 103.69 85.0084 107.701 76.2049 109.472C74.9034 109.734 73.6313 110.016 72.4118 110.287C65.3824 111.847 60.098 113.02 60.9738 107.627ZM65.7389 108.864C67.4108 108.981 69.5317 108.487 72.0071 107.91C73.0376 107.67 74.1295 107.416 75.276 107.185C79.3882 106.358 81.7938 105.06 83.0018 103.862C84.2116 102.664 84.0679 101.79 83.8941 101.433C83.7714 101.181 83.3867 100.593 81.4235 100.322C79.4103 100.043 76.341 100.228 72.0747 101.207C67.9257 102.159 65.3932 102.744 63.9992 103.901C64.5826 104.214 65.0705 105.026 65.5926 106.523C65.9214 107.465 65.9345 108.26 65.7389 108.864Z"
        fill={outlineColor}
      />
      <g clipPath="url(#clip0_1641_132)">
        <path
          d="M46.5721 27.8686L46.5681 33.0734L42.2039 33.0777L42.2115 23.2146L42.2133 20.9067L42.2181 14.6857L46.5823 14.6814L46.5744 24.8521L46.5721 27.8686Z"
          fill="#52D998"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.1182 13.2175C39.1186 12.7097 39.5265 12.2977 40.0293 12.2972L46.584 12.2908C47.0868 12.2903 47.4941 12.7016 47.4937 13.2094L47.4788 32.3341C47.4784 32.8419 47.0705 33.2539 46.5677 33.2544L40.0129 33.2607C39.5101 33.2612 39.1029 32.85 39.1033 32.3422L39.1182 13.2175ZM40.9383 14.1352L40.9247 31.4209L45.6587 31.4164L45.6722 14.1306L40.9383 14.1352Z"
          fill={candleColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.9877 3.64372L85.9839 8.42096L83.7961 8.42303L83.7999 3.64579L85.9877 3.64372ZM58.2746 4.76098L58.2704 9.91733L56.0826 9.91941L56.0867 4.76307L58.2746 4.76098ZM44.4166 6.9907L44.4116 13.2379L42.2238 13.24L42.2288 6.99279L44.4166 6.9907ZM72.1271 9.16913L72.121 16.8862L69.9332 16.8883L69.9393 9.17122L72.1271 9.16913ZM85.9722 23.1085L85.9646 32.6746L83.7768 32.6767L83.7843 23.1106L85.9722 23.1085ZM58.259 24.249L58.2523 32.7011L56.0645 32.7032L56.0712 24.2511L58.259 24.249ZM44.3961 32.7143L44.3929 36.7566L42.2051 36.7587L42.2083 32.7164L44.3961 32.7143ZM72.106 35.6277L72.104 38.2001L69.9162 38.2022L69.9182 35.6298L72.106 35.6277Z"
          fill={candleColor}
        />
        <path
          d="M60.3448 20.533L60.3422 23.8637L55.973 23.8679L55.9779 17.5564L55.979 16.0795L55.9821 12.0986L60.3513 12.0943L60.3463 18.6027L60.3448 20.533Z"
          fill="#52D998"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.8828 10.6302C52.8832 10.1225 53.2913 9.71052 53.7944 9.71003L60.3526 9.70371C60.8557 9.70322 61.2632 10.1144 61.2628 10.6221L61.2524 23.8603C61.252 24.3681 60.8438 24.78 60.3408 24.7805L53.7825 24.7869C53.2794 24.7873 52.8719 24.3761 52.8723 23.8684L52.8828 10.6302ZM54.7038 11.5478L54.6948 22.9473L59.4314 22.9428L59.4403 11.5432L54.7038 11.5478Z"
          fill={candleColor}
        />
        <path
          d="M74.3022 31.0202L74.2983 36.0168L69.9336 36.0211L69.9409 26.5526L69.9426 24.337L69.9472 18.3649L74.312 18.3607L74.3044 28.1244L74.3022 31.0202Z"
          fill="#52D998"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.8473 16.8967C66.8477 16.3889 67.2557 15.9769 67.7585 15.9764L74.3137 15.9701C74.8165 15.9696 75.2238 16.3808 75.2234 16.8886L75.209 35.2775C75.2086 35.7853 74.8007 36.1973 74.2979 36.1978L67.7427 36.2041C67.2398 36.2046 66.8325 35.7934 66.8329 35.2856L66.8473 16.8967ZM68.6675 17.8144L68.6546 34.3644L73.3888 34.3598L73.4018 17.8098L68.6675 17.8144Z"
          fill={candleColor}
        />
        <path
          d="M88.167 22.9248L88.1668 23.1871L83.7984 23.1913L83.8021 18.4575L83.8039 16.2421L83.8085 10.2706L88.1768 10.2663L88.1692 20.0292L88.167 22.9248Z"
          fill="#52D998"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80.7094 8.80229C80.7098 8.29454 81.1178 7.88253 81.6208 7.88205L88.1782 7.87571C88.6812 7.87523 89.0887 8.28645 89.0883 8.7942L89.0767 23.4924C89.0763 24.0001 88.6682 24.4121 88.1652 24.4126L81.6078 24.4189C81.1049 24.4194 80.6974 24.0082 80.6978 23.5004L80.7094 8.80229ZM82.5301 9.71989L82.52 22.5793L87.2559 22.5748L87.266 9.71532L82.5301 9.71989Z"
          fill={candleColor}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M126 38L126 66.3089L112 86.8089L112 101.5L110 101.5L110 86.1911L124 65.6911L124 38L126 38ZM119 30.5401L119 62.5L117 62.5L117 31.4599L110.349 25.7593L111.651 24.2407L119 30.5401ZM112 36.5194L112 46.5L110 46.5L110 38.4806L102.5 32.4806L102.5 20.5L104.5 20.5L104.5 30.5194L112 36.5194ZM112 57.5L112 66.3085L104.326 77.5633L102.674 76.4367L110 65.6915L110 57.5L112 57.5Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108 103.125C108 101.675 109.175 100.5 110.625 100.5H111.375C112.825 100.5 114 101.675 114 103.125V103.875C114 105.325 112.825 106.5 111.375 106.5H110.625C109.175 106.5 108 105.325 108 103.875V103.125ZM110.625 102.75C110.418 102.75 110.25 102.918 110.25 103.125V103.875C110.25 104.082 110.418 104.25 110.625 104.25H111.375C111.582 104.25 111.75 104.082 111.75 103.875V103.125C111.75 102.918 111.582 102.75 111.375 102.75H110.625Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100.5 18.125C100.5 16.6753 101.675 15.5 103.125 15.5H103.875C105.325 15.5 106.5 16.6753 106.5 18.125V18.875C106.5 20.3247 105.325 21.5 103.875 21.5H103.125C101.675 21.5 100.5 20.3247 100.5 18.875V18.125ZM103.125 17.75C102.918 17.75 102.75 17.9179 102.75 18.125V18.875C102.75 19.0821 102.918 19.25 103.125 19.25H103.875C104.082 19.25 104.25 19.0821 104.25 18.875V18.125C104.25 17.9179 104.082 17.75 103.875 17.75H103.125Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108 55.125C108 53.6753 109.175 52.5 110.625 52.5H111.375C112.825 52.5 114 53.6753 114 55.125V55.875C114 57.3247 112.825 58.5 111.375 58.5H110.625C109.175 58.5 108 57.3247 108 55.875V55.125ZM110.625 54.75C110.418 54.75 110.25 54.9179 110.25 55.125V55.875C110.25 56.0821 110.418 56.25 110.625 56.25H111.375C111.582 56.25 111.75 56.0821 111.75 55.875V55.125C111.75 54.9179 111.582 54.75 111.375 54.75H110.625Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125 37.5L125 65.8089L111 86.3089L111 101L109 101L109 85.6911L123 65.1911L123 37.5L125 37.5ZM118 31.0401L118 62L116 62L116 31.9599L109.349 26.2593L110.651 24.7407L118 31.0401ZM111 37.0194L111 46L109 46L109 37.9806L101.5 31.9806L101.5 20L103.5 20L103.5 31.0194L111 37.0194ZM111 57L111 65.8085L103.326 77.0633L101.674 75.9367L109 65.1915L109 57L111 57Z"
        fill={circuitColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M107 102.625C107 101.175 108.175 100 109.625 100H110.375C111.825 100 113 101.175 113 102.625V103.375C113 104.825 111.825 106 110.375 106H109.625C108.175 106 107 104.825 107 103.375V102.625ZM109.625 102.25C109.418 102.25 109.25 102.418 109.25 102.625V103.375C109.25 103.582 109.418 103.75 109.625 103.75H110.375C110.582 103.75 110.75 103.582 110.75 103.375V102.625C110.75 102.418 110.582 102.25 110.375 102.25H109.625Z"
        fill={circuitColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M99.5 17.625C99.5 16.1753 100.675 15 102.125 15H102.875C104.325 15 105.5 16.1753 105.5 17.625V18.375C105.5 19.8247 104.325 21 102.875 21H102.125C100.675 21 99.5 19.8247 99.5 18.375V17.625ZM102.125 17.25C101.918 17.25 101.75 17.4179 101.75 17.625V18.375C101.75 18.5821 101.918 18.75 102.125 18.75H102.875C103.082 18.75 103.25 18.5821 103.25 18.375V17.625C103.25 17.4179 103.082 17.25 102.875 17.25H102.125Z"
        fill={circuitColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M107 54.625C107 53.1753 108.175 52 109.625 52H110.375C111.825 52 113 53.1753 113 54.625V55.375C113 56.8247 111.825 58 110.375 58H109.625C108.175 58 107 56.8247 107 55.375V54.625ZM109.625 54.25C109.418 54.25 109.25 54.4179 109.25 54.625V55.375C109.25 55.5821 109.418 55.75 109.625 55.75H110.375C110.582 55.75 110.75 55.5821 110.75 55.375V54.625C110.75 54.4179 110.582 54.25 110.375 54.25H109.625Z"
        fill={circuitColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 38L1.5 66.3089L15.5 86.8089L15.5 101.5L17.5 101.5L17.5 86.1911L3.5 65.6911L3.5 38L1.5 38ZM8.5 30.5401L8.5 62.5L10.5 62.5L10.5 31.4599L17.1508 25.7593L15.8492 24.2407L8.5 30.5401ZM15.5 36.5194L15.5 46.5L17.5 46.5L17.5 38.4806L25 32.4806L25 20.5L23 20.5L23 30.5194L15.5 36.5194ZM15.5 57.5L15.5 66.3085L23.1738 77.5633L24.8262 76.4367L17.5 65.6915L17.5 57.5L15.5 57.5Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 103.125C19.5 101.675 18.3247 100.5 16.875 100.5H16.125C14.6753 100.5 13.5 101.675 13.5 103.125V103.875C13.5 105.325 14.6753 106.5 16.125 106.5H16.875C18.3247 106.5 19.5 105.325 19.5 103.875V103.125ZM16.875 102.75C17.0821 102.75 17.25 102.918 17.25 103.125V103.875C17.25 104.082 17.0821 104.25 16.875 104.25H16.125C15.9179 104.25 15.75 104.082 15.75 103.875V103.125C15.75 102.918 15.9179 102.75 16.125 102.75H16.875Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 18.125C27 16.6753 25.8247 15.5 24.375 15.5H23.625C22.1753 15.5 21 16.6753 21 18.125V18.875C21 20.3247 22.1753 21.5 23.625 21.5H24.375C25.8247 21.5 27 20.3247 27 18.875V18.125ZM24.375 17.75C24.5821 17.75 24.75 17.9179 24.75 18.125V18.875C24.75 19.0821 24.5821 19.25 24.375 19.25H23.625C23.4179 19.25 23.25 19.0821 23.25 18.875V18.125C23.25 17.9179 23.4179 17.75 23.625 17.75H24.375Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 55.125C19.5 53.6753 18.3247 52.5 16.875 52.5H16.125C14.6753 52.5 13.5 53.6753 13.5 55.125V55.875C13.5 57.3247 14.6753 58.5 16.125 58.5H16.875C18.3247 58.5 19.5 57.3247 19.5 55.875V55.125ZM16.875 54.75C17.0821 54.75 17.25 54.9179 17.25 55.125V55.875C17.25 56.0821 17.0821 56.25 16.875 56.25H16.125C15.9179 56.25 15.75 56.0821 15.75 55.875V55.125C15.75 54.9179 15.9179 54.75 16.125 54.75H16.875Z"
        fill={circuitShadowColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 37.5L2.5 65.8089L16.5 86.3089L16.5 101L18.5 101L18.5 85.6911L4.5 65.1911L4.5 37.5L2.5 37.5ZM9.5 31.0401L9.5 62L11.5 62L11.5 31.9599L18.1508 26.2593L16.8492 24.7407L9.5 31.0401ZM16.5 37.0194L16.5 46L18.5 46L18.5 37.9806L26 31.9806L26 20L24 20L24 31.0194L16.5 37.0194ZM16.5 57L16.5 65.8085L24.1738 77.0633L25.8262 75.9367L18.5 65.1915L18.5 57L16.5 57Z"
        fill={circuitColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 102.625C20.5 101.175 19.3247 100 17.875 100H17.125C15.6753 100 14.5 101.175 14.5 102.625V103.375C14.5 104.825 15.6753 106 17.125 106H17.875C19.3247 106 20.5 104.825 20.5 103.375V102.625ZM17.875 102.25C18.0821 102.25 18.25 102.418 18.25 102.625V103.375C18.25 103.582 18.0821 103.75 17.875 103.75H17.125C16.9179 103.75 16.75 103.582 16.75 103.375V102.625C16.75 102.418 16.9179 102.25 17.125 102.25H17.875Z"
        fill={circuitColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 17.625C28 16.1753 26.8247 15 25.375 15H24.625C23.1753 15 22 16.1753 22 17.625V18.375C22 19.8247 23.1753 21 24.625 21H25.375C26.8247 21 28 19.8247 28 18.375V17.625ZM25.375 17.25C25.5821 17.25 25.75 17.4179 25.75 17.625V18.375C25.75 18.5821 25.5821 18.75 25.375 18.75H24.625C24.4179 18.75 24.25 18.5821 24.25 18.375V17.625C24.25 17.4179 24.4179 17.25 24.625 17.25H25.375Z"
        fill={circuitColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 54.625C20.5 53.1753 19.3247 52 17.875 52H17.125C15.6753 52 14.5 53.1753 14.5 54.625V55.375C14.5 56.8247 15.6753 58 17.125 58H17.875C19.3247 58 20.5 56.8247 20.5 55.375V54.625ZM17.875 54.25C18.0821 54.25 18.25 54.4179 18.25 54.625V55.375C18.25 55.5821 18.0821 55.75 17.875 55.75H17.125C16.9179 55.75 16.75 55.5821 16.75 55.375V54.625C16.75 54.4179 16.9179 54.25 17.125 54.25H17.875Z"
        fill={circuitColor}
      />
      <defs>
        <clipPath id="clip0_1641_132">
          <rect width="54" height="39" fill="white" transform="translate(37 4)" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export default React.memo(PoonjiLogo);
