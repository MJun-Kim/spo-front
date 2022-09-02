# grida-nextjs-boilerplate

Antd 컴포넌트를 Grida 컴포넌트로 래핑해서 next.js에서 사용하기 위한 boilerplate 입니다.

향후 **grida design system**을 위해 모든 antd 컴포넌트는 @zipida/grida로 import해서 사용합니다.

src/components/grida 경로는 @zipida/grida로 alias 되어 있습니다.
```
// import { Button } from 'antd' 
import { Button } from '@zipida/grida'
```

## grida 컴포넌트 추가 (antd wrapping)
컴포넌트 커스텀을 위해서는 `src/components/grida`에 파일 추가 후 `src/components/grida/index.js`에 `export { default as Table } from './Table'` 과 같이 추가합니다.
```
// default antd components
export * from 'antd';
export * as Icon from '@ant-design/icons';

// overloading components
export { default as Button } from './Button';
export { default as ConfigProvider } from './ConfigProvider';
export { default as Layout } from './Layout';
export { default as Table } from './Table';
```

컴포넌트는 테스트를 위해 `src/stories/` 폴더에 storybook 파일을 추가합니다.

## Antd Customize 요소

### ConfigProvider
`src/components/grida/ConfigProvider.jsx`
```
// https://ant.design/components/config-provider/
import { ConfigProvider as AntdCfgProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default function ConfigProvider({ children }) {
  const configProviderProps = {
    locale: koKR,
  };

  return <AntdCfgProvider {...configProviderProps}>{children}</AntdCfgProvider>;
}

```

### antd less 변수 설정
`styles/variables.less`
```
@import '~antd/dist/antd.less';

// Antd theme customize (https://ant.design/docs/react/customize-theme)

@theme: default;

// The prefix to use on all css classes from ant.
@ant-prefix: ant;

// An override for the html selector for theme prefixes
@html-selector: html;

// [CSS-VARIABLE-REPLACE-BEGIN: html-variables]
// [CSS-VARIABLE-REPLACE-END: html-variables]

// -------- Colors -----------
// >>> Primary
// @primary-color: @blue-6;
@primary-color: #4913fa;
@primary-color-hover: color(~`colorPalette('@{primary-color}', 5) `);
@primary-color-active: color(~`colorPalette('@{primary-color}', 7) `);
@primary-color-outline: fade(@primary-color, @outline-fade);

@processing-color: #4913fa;

// ...

```

## 
