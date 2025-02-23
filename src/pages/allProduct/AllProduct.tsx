import { useEffect, useState } from "react";
import { Input, Select, Slider, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchProducts } from "../../redux/features/product/productSlice";

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

const AllProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState({
    price: [0, 10000],
    brand: "",
    category: "",
    availability: "",
  });

  // Fetch products from Redux store
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on search & filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesBrand = !filters.brand || product.brand === filters.brand;
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesPrice = product.price >= filters.price[0] && product.price <= filters.price[1];
    const matchesAvailability = !filters.availability || (filters.availability === "In Stock" ? product.inStock : !product.inStock);

    return matchesSearch && matchesBrand && matchesCategory && matchesPrice && matchesAvailability;
  });

  return (
    <div className="p-4">
      {/* Search Bar */}
      <Input
        placeholder="Search by name, brand, or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <Slider
          range
          min={0}
          max={10000}
          defaultValue={[0, 10000]}
          onChange={(value) => setFilters({ ...filters, price: value as [number, number] })}
        />
        <Select placeholder="Brand" onChange={(value) => setFilters({ ...filters, brand: value })} className="w-40">
          <Select.Option value="BrandA">Brand A</Select.Option>
          <Select.Option value="BrandB">Brand B</Select.Option>
        </Select>
        <Select placeholder="Category" onChange={(value) => setFilters({ ...filters, category: value })} className="w-40">
          <Select.Option value="Mountain">Mountain</Select.Option>
          <Select.Option value="Road">Road</Select.Option>
          <Select.Option value="Hybrid">Hybrid</Select.Option>
          <Select.Option value="Electric">Electric</Select.Option>
        </Select>
        <Select placeholder="Availability" onChange={(value) => setFilters({ ...filters, availability: value })} className="w-40">
          <Select.Option value="In Stock">In Stock</Select.Option>
          <Select.Option value="Out of Stock">Out of Stock</Select.Option>
        </Select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <Card
              key={product._id}
              title={product.name}
              extra={<Button onClick={() => navigate(`/products/${product._id}`)}>View Details</Button>}
            >
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <p>Model: {product.bikeModel}</p>
              <p>Price: ${product.price}</p>
              <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
            </Card>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
