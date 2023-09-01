import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    name: String,
    description: String,
    brand: String,
    price: Number,
    discount: Number,
    category: { type: [String] },
    color: [String],
    size: [String],
    isAvailable: {
        type: Boolean,
        default: true
    },
    availableStock: Number,
    rating: Number,
    totalSoldUnit: Number,


}, { timestamps: true })


export default mongoose.model("product", productSchema)

