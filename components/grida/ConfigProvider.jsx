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
