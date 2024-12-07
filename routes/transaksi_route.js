import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   usageReport,
   borrowAnalysis
} from '../controllers/transaksi_controllers.js'

import {authorize} from '../controllers/auth_controllers.js'
import {IsMember, IsAdmin} from '../middleware/role_validation.js'

const app = express()


app.get('/borrow', getAllPeminjaman)
app.get('/borrow/:id', authorize, [IsMember, IsAdmin], getPeminjamanById)
app.post('/borrow',authorize, addPeminjaman);
app.post('/return', authorize, pengembalianBarang)
app.post('/usage-report', authorize, usageReport)
app.post('/borrow-analysis', authorize, borrowAnalysis)

export default app