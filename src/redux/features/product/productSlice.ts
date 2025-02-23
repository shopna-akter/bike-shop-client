import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload.filter((product) => !product.isDeleted); // Exclude deleted products
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default productsSlice.reducer;
