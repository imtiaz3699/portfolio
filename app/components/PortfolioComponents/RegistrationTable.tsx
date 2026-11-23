import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Student {
  key: string;
  name: string;
  studentNo: string;
  yearSection: string;
  email: string;
  form137: string;
}

const dataSource: Student[] = [
  {
    key: '1',
    name: 'John Doe',
    studentNo: 'STU-001',
    yearSection: 'BSCS - 1A',
    email: 'john@example.com',
    form137: 'Submitted',
  },
  {
    key: '2',
    name: 'Jane Smith',
    studentNo: 'STU-002',
    yearSection: 'BSIT - 2B',
    email: 'jane@example.com',
    form137: 'Pending',
  },
];

const columns: ColumnsType<Student> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Student No.',
    dataIndex: 'studentNo',
    key: 'studentNo',
  },
  {
    title: 'Year/Section',
    dataIndex: 'yearSection',
    key: 'yearSection',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Form 137',
    dataIndex: 'form137',
    key: 'form137',
  },
];

export default function StudentTable() {
  return (
    <Table<Student>
      className="student-table w-full"
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 10 }}
      scroll={{ x: 'max-content' }}
    />
  );
}