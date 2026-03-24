const request = require('supertest');
const app = require('../index');

describe('Test API của Nhóm 11', () => {
  it('GET / - API info phải trả về thông tin đề tài', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body.group).toBe('Nhóm 11');
    expect(res.body.status).toBe('success');
  });

  it('POST /api/add - API cộng phải tính toán chính xác', async () => {
    const res = await request(app)
      .post('/api/add')
      .send({ a: 11, b: 22 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(33);
  });

  it('POST /api/add - Trả về lỗi 400 nếu truyền sai kiểu tham số', async () => {
    const res = await request(app)
      .post('/api/add')
      .send({ a: '11', b: 22 });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});
