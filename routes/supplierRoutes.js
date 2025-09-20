const express = require('express');
const router = express.Router();
const supplierCtrl = require('../controllers/supplierController');

// Danh sách supplier
router.get('/', supplierCtrl.index);

// Form thêm mới
router.get('/new', supplierCtrl.newForm);
router.post('/new', supplierCtrl.create);

// Form sửa
router.get('/:id/edit', supplierCtrl.editForm);
router.post('/:id/edit', supplierCtrl.update);

// Xóa
router.post('/:id/delete', supplierCtrl.delete);

module.exports = router;
