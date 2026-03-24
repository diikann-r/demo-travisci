const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware để parse body dạng JSON
app.use(express.json());

// 1. Một GET endpoint cơ bản để test việc kết nối thành công/thất bại
app.get('/', (req, res) => {
    res.status(200).json({
        group: 'Nhóm 11',
        topic: 'Tìm hiểu và Demo Travis CI',
        team: {
            item: {
                name: 'ho duy khang'
            },
            item: {
                name: 'k to mis '
            },
            item: {
                name: 'tran quang duy'
            },
            item: {
                name: 'le tan duy hieu'
            },
            item: {
                name: 'doan van nghia'
            },
        },
        status: 'success'
    });
});

// 2. Một POST endpoint tính tổng để tiện viết assertion trong test (Jest + Supertest)
app.post('/api/add', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Tham số truyền vào phải là số' });
    }

    res.status(200).json({ result: a + b });
});

// Export app để dễ dàng viết test (bằng Supertest) mà không bị conflict cổng (port).
// Chỉ listen ở port 3000 khi khởi chạy trực tiếp (node index.js)
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server API đang chạy tại http://localhost:${port}`);
    });
}

module.exports = app;
