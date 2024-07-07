# Route

เรามี service แล้วก็ต้องมาสร้าง Route ด้วยเพื่อบอก Kong API Gateway ว่าถ้า client เรียกมาที่ route นี้ให้พาไปที่ service นั้นของเรา

![route1 gif](/5.gif)

เข้ามา set route ของเราตามนี้

![route2 gif](/6.gif)

- name ก็ตั้งชื่อไป
- protocal เขาใส่มาให้แล้วละ
- paths อันนี้สำคัญ อยากให้ client เรียกมาที่ไหนก็ใส่ไปเช่น [localhost:8000/api](http://localhost:8000/api) Kong ก็จะพาไปที่ `http://hono:3333/`
- methods ก็เปิดให้รับ Methods ต่างๆตามภาพ
- Hots ถ้าเรามีการใช้ Virtual host ก็ใส่ domain เข้าไปได้นะ

เสร็จแล้วกด save ได้เลย

แล้วทดสอบเปิด web ไปที่

- [localhost:8000/api](http://localhost:8000/api)
- [localhost:8000/api/healthz](http://localhost:8000/api/healthz)
- [localhost:8000/api/users](http://localhost:8000/api/users)
