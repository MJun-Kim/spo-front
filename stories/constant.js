import dayjs from 'dayjs';
import { Button, Icon, Space } from '@zipida/grida';

export const dummyDataSource = Array(25)
  .fill()
  .map((_, i) => ({
    id: i,
    agency: '기관 ' + i,
    title: '제목 ' + i,
    attachments: i,
    author: 'Author ' + i,
    transmitTime: dayjs().format('YYYY/MM/DD'),
  }));

export const defaultColumns = [
  {
    title: '기관',
    dataIndex: 'agency',
  },
  {
    title: '제목',
    dataIndex: 'title',
  },
  {
    title: '파일개수',
    dataIndex: 'attachments',
    width: 120,
  },
  {
    title: '전송인',
    dataIndex: 'author',
    width: 120,
  },
  {
    title: '전송시간',
    dataIndex: 'transmitTime',
    width: 120,
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 120,
    render: () => {
      return (
        <Space size={0}>
          <Button type="text" size="small" icon={<Icon.ReloadOutlined />} />
          <Button type="text" size="small" icon={<Icon.DeleteOutlined />} />
          <Button type="text" size="small" icon={<Icon.MoreOutlined />} />
        </Space>
      );
    },
  },
];
