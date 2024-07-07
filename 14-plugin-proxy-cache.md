# Proxy Cache

เราสามารถให้ Kong API Gateway ช่วยทำ caching ได้ด้วยนะ แต่จะใช้ได้แค่ memory เท่านั้น
ถ้าอยากใช้ redis จะต้องเป็น Kong Enterprise ละ

แต่จริงๆเราควรทำที่ Backend เองมากกว่า จะควบคุมได้ดีกว่า และไม่ต้องเสียเงินด้วย
จะให้ Kong ช่วยก็ต่อเมื่อมันทำที่ Backend ไม่ได้แล้วจะดีกว่า

เราจะมาทำที่ API กัน

![88](/88.png)

เลือก proxy caching
![89](/89.png)

เลื่อนลงมาด้านล่างหน่อย
จะเจอ Content type เราอยาก cache api ที่ response เป็นอะไรบ้างก็ใส่ไปตรงนี้ได้
จากตัวอย่าง ถ้า response เป็น text/plain หรือ application/json ก็จะสามารถ cache ได้

ส่วน Method ไหนที่จะให้ cache ก็ใส่ไป ปกติก็ GET น่ะแหละ

ส่วน strategy ก็จะมีแค่ memory อย่างเดียว เพราะเราใช้ตัว Open source

![90](/90.png)

ส่วน ContentType ที่เป็น json ต้องใส่แบบนี้

`application/json; charset=UTF-8`

![92](/92.png)

พอเปิด Advance parameters เพิ่ม
ก็จะเห็นช่อง Cache TTL ก็คือเวลาเก็บ cache หน่วยเป็นวินาที อยากได้เท่าไรก็ใส่ไปได้

![91](/91.png)

ลองเอา Hoppscotch ยิงดู
จะได้แบบนี้

![93](/93.png)

จะเห็นว่าที่ Response Header มี x-cache-key อันนี้เป็น key ที่ Kong ใช้เก็บ Cache
และมี x-cache-status มี value เป็น `Miss` มันคือ

x-cache-status จะมี value 3 แบบ

1. **Bypass** คือ api route นี้จะไม่ cache เพราะว่าไม่เข้าเงื่อนไขที่เรา setup ให้กับ Proxy caching plugin
2. **Miss** คือเข้าเงื่อนไข แต่ว่าไม่มี Cache อยู่ก่อนหน้า อาจจะเป็นเพราะพึ่งถูกเรียกครั้งแรก หรือ cache ตัวเก่ามันหมดอายุไปแล้ว
3. **Hit** คือมี cache อยู่และ response รอบนี้ก็เป็น data ใน cache
