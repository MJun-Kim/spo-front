import { Table as AtndTable } from 'antd';
// AtndTable.defaultProps = {
//   pagination: {
//     position: ['none', 'bottomCenter'],
//   },
// };

const Table = ({ ...props }) => {
  return <AtndTable rowKey="id" {...props} />;
};

export default Table;
