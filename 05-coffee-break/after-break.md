# Lets create servies

## React

![react1 image](/7.png)

![react2 route image](/8.png)

เข้าไปที่ [localhost:8000](http://localhost:8000)

จะได้แบบนี้

![react3 image](/9.png)

## Next

อันนี้จะเป็นตัวอย่างที่จะเอา service เรามาใช้กับ Kong API Gateway ได้สองแบบ

1. ใช้ path
2. ใช้ subdomain

ทั้งสองแบบจะ setup service เหมือนกันแบบนี้

![next1 image](/10.png)

### 01. ใช้ URL Path

ในที่นี้จะให้เข้าถึง Next ผ่าน path [localhost:8000/admin](http://localhost:8000/admin)
ฉนั้น
ใน next.config.mjs จะต้องไป set `basePath` ด้วย

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: "/admin", // [!code ++]
};

export default nextConfig;
```

แล้วก็ build image ใหม่อีกรอบ
แล้ว run docker compose ใหม่อีกรอบนึง

![next2 image](/11.png)

![next3 image](/12.png)

ลองตรวจสอบดู
เข้าไปที่ [localhost:8000/admin](http://localhost:8000/admin)

### 02. ใช้ Subdomain

อันนี้ไม่ต้องแก้ code อะไร

แต่เราตอนนี้เราทำบนเครื่องเราเอง ไม่ได้มี domain
ก็เลยต้องไปแก้ <span style="color: dodgerblue;">hostsfile</span> บนเครื่องเรา

ในเครื่อง linux/mac จะอยู่ที่ folder _`/etc/hosts`_

ก็ให้ใส่บรรทัดนี้เพิ่มไปที่ด้านล่างสุด

```
127.0.0.1 admin.myweb.com
```

ตรงนี้จะทำให้เราใช้ domain [admin.myweb.com](http://admin.myweb.com) แทน localhost ปกติได้เลย เหมือนกับว่าเราจดโดเมนที่ใช้แค่บนเครื่องเราคนเดียว

ที่ Route ก็จะ setup แบบนี้

![next4 image](/13.png)

จะเห็นว่ามี Hosts เพิ่มเข้ามาด้วย และค่าที่ใส่ก็คือ domain ที่เราพึ่งจะเพิ่มเข้าไปนั่นแหละ

จะได้แบบนี้

[admin.myweb.com:8000](http://admin.myweb.com:8000)

![next5 image](/14.png)
