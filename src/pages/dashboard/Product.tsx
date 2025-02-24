/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../redux/features/product/productSlice";
import { Button, Table, Modal, Input, Form, message, Select } from "antd";

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  category: "Mountain" | "Road" | "Hybrid" | "Electric";
  bikeModel: string;
  description: string;
  quantity: number;
  inStock: boolean;
}

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("Redux State Products:", products); 
  const handleAdd = () => {
    setEditingProduct(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (productId: string) => {
    await dispatch(deleteProduct(productId));
    message.success("Product deleted successfully");
  };
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editingProduct) {
        await dispatch(updateProduct({ ...editingProduct, ...values }));
        message.success("Product updated successfully");
      } else {
        await dispatch(addProduct(values));
        message.success("Product added successfully");
      }
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to submit form");
    }
  };

  // Table columns
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Model", dataIndex: "bikeModel", key: "bikeModel" },
    { title: "Stock", dataIndex: "quantity", key: "quantity" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, product: Product) => (
        <>
          <Button onClick={() => handleEdit(product)} type="link">
            Edit
          </Button>
          <Button onClick={() => handleDelete(product._id)} type="link" danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>Manage Products</h2>
      <Button type="primary" onClick={handleAdd}>
        Add Product
      </Button>
      <Table columns={columns} dataSource={products} loading={loading} rowKey="_id" />

      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="inStock" label="In Stock" rules={[{ required: true }]}>
            <Select>
              <Select.Option value={true}>Yes</Select.Option>
              <Select.Option value={false}>No</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="category" label="Category" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="Mountain">Mountain</Select.Option>
              <Select.Option value="Road">Road</Select.Option>
              <Select.Option value="Hybrid">Hybrid</Select.Option>
              <Select.Option value="Electric">Electric</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="bikeModel" label="Bike Model" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="quantity" label="Stock" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductsPage;
