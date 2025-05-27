const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  "Nama Pemesan": String,
  "Nomor Telepon": String,
  "Kota": String,
  "Alamat": String,
  "Longitude": Number,
  "Latitude": Number,
  "Jenis Produk": String,
  "Jumlah Produk": Number,
  deadline: Date,
  status: String,
  extras: Array,
  "Extra Price": Number,
  ukuran_s: Number,
  ukuran_m: Number,
  ukuran_l: Number,
  ukuran_xl: Number,
  ukuran_xxl: Number,
  ukuran_lainnya: String,
  "Total Harga": Number,
  xendit_ref: String,
  "Payment Url": String
})

module.exports = mongoose.model('Order', orderSchema)
