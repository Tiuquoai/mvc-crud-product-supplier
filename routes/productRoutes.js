const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

// Danh sách product
router.get('/', productCtrl.index);

// Form thêm mới
router.get('/new', productCtrl.newForm);
router.post('/new', productCtrl.create);

// Form sửa
router.get('/:id/edit', productCtrl.editForm);
router.post('/:id/edit', productCtrl.update);

// Xóa
router.post('/:id/delete', productCtrl.delete);

module.exports = router;
