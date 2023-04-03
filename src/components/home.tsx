import { Row, Col, Card, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Article = {
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
};

const baseURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3647619299fd423186b15f4f919fd9f4";

const Home = () => {
  const [dataSource, setDataSource] = useState<Article[]>([]);

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(baseURL);
      setDataSource(response.data.articles);
    };
    fetchArticles();
  }, []);

  return (
    <>
        <div style={{ }}>
        <h1 style={{ textAlign:'center' }}>Top Headlines</h1>
        <div style={centerStyle}>
            <Row gutter={[20, 24]} style={{ maxWidth: '1500px', }}>
                {dataSource.map((data, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                    <Link style={{textDecoration:"none"}}
                        to={data.url}>
                        <Card 
                            style={{ width: '100%', height: '100%', background: '#E9E9F0', borderRadius:'5px' }}
                            hoverable
                            cover={<img alt={data.title} src={data.urlToImage} />}
                            title={data.title}
                        >
                            <h4>Published At : {new Date(data.publishedAt).toLocaleString()}</h4>
                            <p>{data.content}</p>
                            <p style={{marginTop:'5px'}}>{data.description}</p>
                            
                        </Card>
                        </Link>
                        
                    </Col>
                ))}
            </Row>
        </div>
        </div>
    </>
  );
};

export default Home;
