const { db } = require('./dbConnection')

const createProduct = async function (req, res) {
    try {
        const { productName, productquantity } = req.body
        const data = await db.collection("product").insertOne({ productName, productquantity })
        if (!data) {
            return res.send("Product not create!")
        } else {
            return res.send({ msg: "product create successfully", result: data })
        }
    } catch (error) {
        return res.send({ msg: "Something went wrong", err: err })
    }


}
const updateProduct = async function (req, res) {
    try {
        const { productName, productquantity, productId } = req.body
        const data = await db.collection("product").updateOne({ _id: productId }, { $set: { productName, productquantity } })
        if (!data) {
            return res.send("Product not updated!")
        } else {
            return res.send({ msg: "product updated successfully", result: data })
        }
    } catch (error) {
        return res.send({ msg: "Something went wrong", err: err })
    }


}
const getProduct = async function (req, res) {
    try {
        const { productId } = req.query
        var data = await db.collection("product").find({}).toArray()
        if (productId) {
            data = await db.collection("product").findOne({ _id: productId })
        }
        if (!data) {
            return res.send("Product not find!")
        } else {
            return res.send({ msg: "product find successfully", result: data })
        }
    } catch (error) {
        return res.send({ msg: "Something went wrong", err: err })
    }


}

const deleteProduct = async function (req, res) {
    try {
        const { productId } = req.query
        await db.collection("product").deleteOne({ _id: productId })
        return res.send({ msg: "product delete successfully" })

    } catch (error) {
        return res.send({ msg: "Something went wrong", err: err })
    }


}
module.exports = { createProduct, updateProduct, getProduct, deleteProduct }
