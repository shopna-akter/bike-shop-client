import { useEffect, useState } from 'react';
import { Card, Badge, Tooltip, Typography, Space, Flex, Tag, Divider, Button, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const { Title, Text } = Typography;

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  bikeModel: string;
  price: number;
  quantity: number;
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: 16 }}>
      {/* Search and Category Filter */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <Input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1 }}
        />
        <Select
          placeholder="Select Category"
          onChange={(value) => setCategory(value)}
          style={{ width: 200 }}
          allowClear
        >
          <Select.Option value="Mountain">Mountain</Select.Option>
          <Select.Option value="Road">Road</Select.Option>
          <Select.Option value="Hybrid">Hybrid</Select.Option>
          <Select.Option value="Electric">Electric</Select.Option>
        </Select>
      </div>

      {/* Product List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {filteredProducts.map(({ id, name, image, category, bikeModel, price, quantity }) => (
          <Card
            key={id}
            cover={
              <Badge.Ribbon color={quantity ? 'default' : 'red'} text={quantity ? 'Available' : 'Out of Stock'}>
                <Link to={`/products/${id}`}>
                  <figure style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0', height: 280 }}>
                    <img
                      alt={name}
                      src={image}
                      style={{ height: 280, objectFit: 'cover', width: '100%', borderRadius: '8px 8px 0 0' }}
                    />
                  </figure>
                </Link>
              </Badge.Ribbon>
            }
            style={{ borderRadius: 8, boxShadow: '4px 8px 8px rgba(0, 0, 0, 0.5)' }}
          >
            <Tooltip title={name}>
              <Title level={5}>
                <Link to={`/products/${id}`}>{name}</Link>
              </Title>
            </Tooltip>
            <Space direction="vertical">
              <Flex align="center" justify="space-between">
                <Tag>{category}</Tag>
                <Tag>{bikeModel}</Tag>
              </Flex>
              <Divider />
              <Flex align="center" justify="space-between">
                <Text strong style={{ fontSize: '1.1rem' }}>BDT {price.toFixed(2)}</Text>
                <Button
                  type="primary"
                  danger={quantity <= 0}
                  icon={<Icon icon="ant-design:shopping-cart-outlined" />}
                >
                  Add to Cart
                </Button>
              </Flex>
            </Space>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
