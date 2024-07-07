# Response transformation

เราสามารถให้ Kong ดัดแปลงแก้ไข response ที่มาจาก api ได้แทบทั้งหมดเลย
เช่น
เพิ่ม ลบ แก้ไข Header
เพิ่ม ลบ แก้ไข Json

จากตัวอย่างก่อนหน้า
เราได้ response header ที่มี key `ratelimit-limit` บอกว่า มี rate limit กี่ครั้ง
ซึ่งเราไม่ได้ต้องการบอกให้คนอื่นรู้ว่าเรากำหนดไว้เท่าไร
ก็อยากจะลบมันออกไปจาก response header

## Enable Response transformation

![99](/99.png)

![100](/100.png)

![101](/101.png)

ลองยิง api ดูอีกรอบ

จะเห็นว่า Response header key = `ratelimit-limit` มันหายไปแล้ว

![102](/102.png)
