const Supplier = require('../models/Supplier');

// Hiển thị danh sách suppliers
exports.index = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render('suppliers/index', { suppliers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Hiển thị form thêm mới
exports.newForm = (req, res) => {
  res.render('suppliers/new');
};

// Tạo supplier mới
exports.create = async (req, res) => {
  try {
    await Supplier.create(req.body);
    res.redirect('/suppliers');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Hiển thị form sửa
exports.editForm = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.render('suppliers/edit', { supplier });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Cập nhật supplier
exports.update = async (req, res) => {
  try {
    await Supplier.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/suppliers');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Xóa supplier
exports.delete = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.redirect('/suppliers');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
