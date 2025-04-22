import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Input, message, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Product = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  category: "Mountain" | "Road" | "Hybrid" | "Electric";
  bikeModel: string;
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  image?: string;
};

const CheckoutPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!id) return;
    fetch(`https://bike-shop-server-jade.vercel.app/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product", err);
        setLoading(false);
      });
  }, [id]);

  const handleOrder = async () => {
    if (!product) return;
    if (!address) return message.warning("Please provide a shipping address.");
    if (quantity > product.quantity) {
      return message.error("Quantity exceeds available stock.");
    }
  
    const orderData = {
      email: user?.email,
      product: product._id,
      quantity,
      totalPrice: quantity * product.price,
      address,
      paymentMethod: "SurjoPay",
    };
  
    try {
      const res = await fetch(`https://bike-shop-server-jade.vercel.app/api/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
  
      const result = await res.json();
      if (res.ok && result.paymentUrl) {
        window.location.href = result.paymentUrl; // Redirect to SurjoPay gateway
      } else {
        message.error(result.message || "Failed to initiate payment.");
      }
    } catch (err) {
      console.error("Payment initiation error", err);
      message.error("Something went wrong while initiating payment.");
    }
  };
  

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <Skeleton active />
      </div>
    );
  }

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6 bg-white shadow-xl rounded-2xl p-6">
        {/* Product Info */}
        <div>
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
          )}
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-1">Brand: {product.brand}</p>
          <p className="text-gray-600 mb-1">Model: {product.bikeModel}</p>
          <p className="text-gray-600 mb-1">Category: {product.category}</p>
          <p className="text-lg font-medium mt-2 text-blue-600">
            Price: ${product.price}
          </p>
          <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
        </div>

        {/* Order Form */}
        <div className="flex flex-col gap-4">
          <Input
            type="number"
            min={1}
            max={product.quantity}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Quantity"
            className="rounded"
          />

          <Input.TextArea
            placeholder="Enter shipping address"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="rounded"
          />

          {/* Payment Method (Future: dropdown/SurjoPay) */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1">Payment Method</span>
            <Input value="Cash on Delivery" disabled />
          </div>

          <Button
            type="primary"
            size="large"
            onClick={handleOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white mt-2"
          >
            Order Now (${quantity * product.price})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
