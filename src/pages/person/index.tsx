import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Avatar, Button, Card, Skeleton, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import PageContainer from "../../common/PageContainer"
import useFetchPerson from '../../hooks/useFetchPerson';

const { Title } = Typography;
const { Meta } = Card;

const Person: React.FC = (): JSX.Element => {
  const params = useParams();
  const { data, debouncedFetch, loading } = useFetchPerson();

  useEffect(() => {
    if (params.id) {
      debouncedFetch(params.id);
    }
  }, [params.id]);

  return (
    <PageContainer>
      <Link to="/">
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '5px' }}>
            <LeftOutlined />
            <Button type="link">Back</Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Title level={2}>Person</Title>
          </div>
        </div>
      </Link>
      <Card>
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src={data?.avatar_url} />}
            title={data?.name}
            description={data?.location}
          />
        </Skeleton>
      </Card>
    </PageContainer>
  );
};

export default Person;
