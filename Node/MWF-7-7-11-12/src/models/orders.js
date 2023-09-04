import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = mongoose.Schema({
    products: [{
        productId: ObjectId,
        count: Number
    }],
    userId: ObjectId,
    paymentMethod: {
        type: String,
        enum: ["upi", "online_banking", "cod"]
    }
}, { timestamps: true })


export default mongoose.model("order", orderSchema)

