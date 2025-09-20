const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// Hiển thị danh sách products
exports.index = async (req, res) => {
  try {
    const products = await Product.find().populate('supplierId');
    res.render('products/index', { products });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Hiển thị form thêm mới
exports.newForm = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render('products/new', { suppliers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Tạo product mới
exports.create = async (req, res) => {
  try {
    await Product.create(req.body);
    res.redirect('/products');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Hiển thị form sửa
exports.editForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const suppliers = await Supplier.find();
    res.render('products/edit', { product, suppliers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Cập nhật product
exports.update = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Xóa product
exports.delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
