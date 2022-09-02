import ConfigProvider from '@/grida/ConfigProvider';

import 'styles/variables.less';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
