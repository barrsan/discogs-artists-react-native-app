import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../types';

const SvgDiscogsLogo: React.FC<ISvgProps> = props => (
  <Svg viewBox="0 0 88 32" {...props}>
    <Path d="M53.585 6.242c-.039 0-.058 0-.097-.019a.214.214 0 0 0 .097.019zM5.275 0H0v26.415h6.203c3.246 0 5.507-.966 6.802-2.879s1.932-5.411 1.932-10.454c0-4.966-.638-8.386-1.932-10.261S9.14 0 5.276 0zm3.479 22.222c-.464.889-1.295 1.314-2.493 1.314h-.947V2.898h.947c1.217 0 2.048.754 2.512 2.242s.696 4.232.696 8.213c-.019 5.024-.251 7.981-.715 8.87zM15.961.019h4.986v4.618h-4.986V.019zM15.961 6.184h4.986v20.232h-4.986V6.184zM29.314 14.995c-1.585-1.391-2.531-2.338-2.841-2.86s-.464-1.043-.464-1.604c0-.464.135-.812.406-1.063s.599-.367 1.005-.367c.483 0 .85.193 1.121.56s.406.87.406 1.469h3.981c0-1.662-.483-2.957-1.43-3.865s-2.319-1.353-4.116-1.353c-1.681 0-3.034.444-4.058 1.314-1.024.889-1.546 2.068-1.546 3.556 0 1.43.213 2.628.618 3.594s1.372 2.106 2.899 3.44c1.198 1.024 2.068 1.836 2.589 2.396s.792 1.082.792 1.565c0 .522-.116.908-.367 1.179s-.618.386-1.121.386c-.522 0-.908-.174-1.179-.502s-.406-.87-.406-1.604h-4.039c0 1.778.483 3.13 1.449 4.019s2.396 1.333 4.309 1.333c1.778 0 3.169-.483 4.193-1.43s1.527-2.28 1.527-4c0-1.101-.271-2.106-.812-2.995s-1.507-1.932-2.918-3.169zM87.459 18.184c-.541-.889-1.507-1.952-2.899-3.169-1.585-1.391-2.531-2.338-2.841-2.86s-.464-1.043-.464-1.604c0-.464.135-.812.406-1.063s.599-.367 1.005-.367c.483 0 .85.193 1.121.56s.406.87.406 1.469h3.981c0-1.662-.483-2.957-1.43-3.865s-2.319-1.353-4.116-1.353c-1.681 0-3.034.444-4.058 1.314-1.024.889-1.546 2.068-1.546 3.556 0 1.43.213 2.628.618 3.594s1.372 2.106 2.899 3.44c1.198 1.024 2.068 1.836 2.589 2.396s.792 1.082.792 1.565c0 .522-.116.908-.386 1.179-.251.271-.618.386-1.121.386-.522 0-.908-.174-1.179-.502s-.406-.87-.406-1.604h-4.039c0 1.778.483 3.13 1.449 4.019s2.396 1.333 4.309 1.333c1.778 0 3.169-.483 4.193-1.43s1.527-2.28 1.527-4c-.019-1.121-.29-2.106-.812-2.995zM50.628 16.696a2.977 2.977 0 0 1 2.976-2.976 2.977 2.977 0 0 1 2.976 2.976 2.977 2.977 0 0 1-2.976 2.976 2.977 2.977 0 0 1-2.976-2.976zm.135 0a2.846 2.846 0 0 0 2.841 2.841 2.846 2.846 0 0 0 2.841-2.841 2.846 2.846 0 0 0-2.841-2.841 2.833 2.833 0 0 0-2.841 2.841z" />
    <Path d="M54.068 16.696c0 .251-.213.464-.464.464s-.464-.213-.464-.464.213-.464.464-.464.464.213.464.464zM43.478 21.391h-1.874c-.077.87-.213 1.43-.425 1.7s-.541.386-.986.386c-.715 0-1.179-.425-1.372-1.256-.213-.831-.309-2.821-.309-5.971 0-2.725.097-4.599.271-5.643s.638-1.565 1.353-1.565c.425 0 .734.174.908.541s.271 1.159.271 2.396h2.184c.483-1.005 1.082-1.932 1.836-2.744a4.705 4.705 0 0 0-1.063-1.816c-.966-1.005-2.358-1.507-4.155-1.507-2.261 0-3.961.87-5.082 2.609s-1.681 4.309-1.681 7.729c0 3.44.541 6.029 1.623 7.749 1.082 1.739 2.667 2.609 4.773 2.609 1.855 0 3.246-.425 4.174-1.275.464-.425.792-.947 1.024-1.604a12.196 12.196 0 0 1-1.469-2.338zM64.715 16.715a10.9 10.9 0 0 1-1.411 5.411c.309 1.14.754 2.01 1.333 2.628.792.812 1.894 1.217 3.304 1.217.831 0 1.565-.116 2.184-.329s1.043-.502 1.256-.85c.019.193.039.386.039.541.019.155.019.309.019.444 0 1.063-.232 1.855-.715 2.396s-1.217.831-2.222.831c-.657 0-1.391-.077-2.184-.232s-1.449-.329-1.952-.56l-.618 2.763c.754.348 1.585.599 2.512.773s1.836.251 2.725.251c2.164 0 3.865-.541 5.14-1.623 1.256-1.082 1.894-2.609 1.894-4.58V6.182h-4.966v.483c-.444-.271-.889-.464-1.333-.58s-.966-.174-1.565-.174c-1.217 0-2.242.367-3.072 1.121-.85.754-1.449 1.797-1.816 3.111-.058.232-.135.502-.193.831 1.043 1.681 1.623 3.633 1.642 5.739zm6.377 5.952c-.213.174-.425.29-.638.367s-.502.116-.85.116c-.464 0-.812-.135-1.063-.406s-.406-.715-.464-1.333c-.058-.638-.116-1.449-.155-2.415s-.058-1.99-.058-3.072c0-.696.019-1.469.058-2.377.039-.889.097-1.72.174-2.493.077-.754.232-1.256.502-1.527s.676-.406 1.217-.406c.193 0 .425.039.676.077.251.058.464.135.599.213v13.256z" />
    <Path d="M48.232 16.696c0 1.527.638 2.879 1.642 3.865l1.005-1.101.019.019a3.805 3.805 0 0 1-1.179-2.783 3.884 3.884 0 0 1 3.884-3.884c.715 0 1.372.193 1.932.522l.715-1.314a5.36 5.36 0 0 0-2.647-.696 5.385 5.385 0 0 0-5.372 5.372zM57.469 16.696c0 2.145-1.739 3.884-3.865 3.884a3.76 3.76 0 0 1-1.797-.444l-.734 1.295a5.345 5.345 0 0 0 2.531.638 5.385 5.385 0 0 0 5.372-5.372 5.38 5.38 0 0 0-1.546-3.768l-1.024 1.101a3.854 3.854 0 0 1 1.063 2.667z" />
    <Path d="M46.531 16.696c0 2.01.85 3.826 2.203 5.121l1.024-1.101a5.5 5.5 0 0 1-1.72-4 5.567 5.567 0 0 1 5.565-5.565c1.005 0 1.932.271 2.744.734l.734-1.314a7.01 7.01 0 0 0-3.478-.908c-3.903-.039-7.072 3.13-7.072 7.034zM59.15 16.696a5.567 5.567 0 0 1-8.193 4.908l-.734 1.314a7.076 7.076 0 0 0 10.434-6.222 7.006 7.006 0 0 0-2.087-5.005l-1.024 1.101a5.474 5.474 0 0 1 1.604 3.903z" />
    <Path d="M60.85 16.696c0 4-3.266 7.266-7.266 7.266a7.17 7.17 0 0 1-3.459-.87l-.754 1.333a8.866 8.866 0 0 0 4.213 1.082c4.85 0 8.773-3.942 8.773-8.773a8.726 8.726 0 0 0-2.628-6.261l-1.024 1.121c1.333 1.256 2.145 3.092 2.145 5.101zM44.812 16.696a8.796 8.796 0 0 0 2.744 6.377l1.024-1.121a7.219 7.219 0 0 1-2.261-5.256c0-4 3.266-7.266 7.266-7.266 1.295 0 2.512.348 3.556.947l.734-1.333a8.76 8.76 0 0 0-4.29-1.121c-4.831-.019-8.773 3.923-8.773 8.773z" />
    <Path d="M60.889 9.198l-1.005 1.082a8.947 8.947 0 0 1 2.705 6.396c0 4.947-4.019 8.966-8.966 8.966a8.913 8.913 0 0 1-4.29-1.101l-.754 1.333a10.495 10.495 0 0 0 5.024 1.295c5.778 0 10.473-4.696 10.473-10.473a10.562 10.562 0 0 0-3.188-7.498zM44.618 16.696c0-4.947 4.019-8.966 8.966-8.966 1.585 0 3.092.425 4.386 1.159l.715-1.295a10.225 10.225 0 0 0-4.947-1.333h-.174c-5.758 0-10.415 4.638-10.473 10.377v.097c0 2.995 1.275 5.7 3.304 7.614l1.043-1.121c-1.739-1.662-2.821-3.961-2.821-6.531zM85.43 4.251c.077-.155.174-.29.29-.406s.271-.193.425-.271c.155-.058.329-.097.502-.097s.348.039.502.097c.155.058.309.155.425.271s.213.251.29.406c.077.155.116.348.116.541s-.039.386-.116.541c-.077.155-.174.29-.29.406s-.271.193-.425.251c-.155.058-.329.097-.502.097s-.348-.039-.502-.097c-.155-.058-.309-.155-.425-.251s-.213-.251-.29-.406a1.24 1.24 0 0 1-.116-.541 2.03 2.03 0 0 1 .116-.541zm.328.947c.058.116.116.232.213.329s.193.155.309.213c.116.058.251.077.386.077s.271-.019.386-.077c.116-.058.232-.116.309-.213a.959.959 0 0 0 .213-.329c.058-.116.077-.271.077-.406s-.019-.29-.077-.406c-.058-.116-.116-.232-.213-.329s-.193-.155-.309-.213c-.116-.058-.251-.077-.386-.077s-.271.019-.386.077c-.116.058-.232.116-.309.213a.959.959 0 0 0-.213.329c-.058.116-.077.251-.077.406s.019.271.077.406zm.928-1.14c.174 0 .329.039.425.097s.155.174.155.329a.547.547 0 0 1-.039.174c-.019.039-.039.077-.077.116s-.077.058-.116.077c-.039.019-.097.019-.155.039l.386.638h-.309l-.348-.618h-.174v.618h-.29V4.059h.541zm0 .599c.077 0 .155-.019.213-.039s.077-.077.077-.174c0-.039 0-.077-.019-.097s-.039-.039-.077-.058c-.019-.019-.058-.019-.097-.019h-.348v.386h.251z" />
  </Svg>
);

export default SvgDiscogsLogo;