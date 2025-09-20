const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding');

    // Xóa dữ liệu cũ
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    // Thêm suppliers
    const suppliers = await Supplier.insertMany([
      { name: 'Supplier A', address: '123 Street, City A', phone: '0123456789' },
      { name: 'Supplier B', address: '456 Avenue, City B', phone: '0987654321' }
    ]);

    // Thêm products (tham chiếu supplierId)
    await Product.insertMany([
      { name: 'Product 1', address: 'Warehouse A', phone: '1111111111', supplierId: suppliers[0]._id },
      { name: 'Product 2', address: 'Warehouse B', phone: '2222222222', supplierId: suppliers[1]._id },
      { name: 'Product 3', address: 'Warehouse A', phone: '3333333333', supplierId: suppliers[0]._id }
    ]);

    console.log('Data seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seed();
