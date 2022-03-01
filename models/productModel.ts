import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true,
    },
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        required: true,
    },
    size: {
        type: Number,
        default: null
    },
    weight: {
        type: Number,
        default: null
    },
    dimensions: {
        type: String,
        default: null
    },
}, {
    timestamps: true
});

let Dataset = mongoose.models.product || mongoose.model("product", productSchema);
export default Dataset;