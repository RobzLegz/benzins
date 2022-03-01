import Products from "../models/productModel";

const productCtrl = {
    create: async (req: any, res: any) => {
        try {
            const {name, sku, description, price, sold, images, size, weight, dimensions} = req.body;
            if(!name || !price || !sku){
                return res.status(400).json({err: "Please enter all fields"});
            }

            const newProduct = new Products({
                name, sku, description, price, sold, images, size, weight, dimensions
            });

            await newProduct.save();

            res.json({msg: "Create Success"});
        } catch (err: any) {
            return res.status(500).json({err: err.message});
        }
    },
    get: async (req: any, res: any) => {
        try {
            const products = await Products.find();

            const popularProducts = products.sort((a, b) => a.sold - b.sold);

            res.json({products: products, popular: popularProducts});
        } catch (err: any) {
            return res.status(500).json({err: err.message});
        }
    },
    update: async (req: any, res: any) => {
        try {
            const {name, description, price, stock, category, images} = req.body;

            const productId = req.params.id;
            if(!productId){
                return res.status(500).json({err: "Something went wrong"});
            }

            await Products.findByIdAndUpdate({_id: productId}, {
                name, description, price, stock, category, images
            });

            res.json({msg: "Update Success"});
        } catch (err: any) {
            return res.status(500).json({err: err.message});
        }
    },
    delete: async (req: any, res: any) => {
        try {
            const productId = req.params.id;
            if(!productId){
                return res.status(500).json({err: "Something went wrong"});
            }

            await Products.findByIdAndDelete({_id: productId});

            res.json({msg: "Delete Success"});
        } catch (err: any) {
            return res.status(500).json({err: err.message});
        }
    },
    getOne: async (req: any, res: any) => {
        try {
            const productId = req.params.id;
            if(!productId){
                return res.status(500).json({err: "Something went wrong"});
            }

            const product = await Products.findById({_id: productId});

            res.json(product);
        } catch (err: any) {
            return res.status(500).json({err: err.message});
        }
    },
};

export default productCtrl;