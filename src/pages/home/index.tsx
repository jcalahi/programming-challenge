import {
  Divider,
  List,
  Space,
  Typography
} from 'antd';
import { Link } from 'react-router-dom';
import PageContainer from "../../common/PageContainer"
import { TOP_FIVE } from '../../constants';

const { Text, Title } = Typography;

const Home: React.FC = (): JSX.Element => {
  const handleRenderItem = (id: string): React.ReactNode => {
    return (
      <Link to={`/person/${id}`}>
        <List.Item>
          {id}
        </List.Item>
      </Link>
    );
  };

  return (
    <PageContainer>
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>Home</Title>
      </div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Divider orientation="left">
          Top 5 GitHub Users
        </Divider>
        <Text type="secondary">
          Tap the username to see more information
        </Text>
        <List
          bordered
          dataSource={TOP_FIVE}
          renderItem={handleRenderItem}
        />
      </Space>
    </PageContainer>
  );
};

export default Home;
