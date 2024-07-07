# Gateway service

## Overview

มาดูภาพใหญ่ของการใช้ Kong API Gateway กันก่อน

![103](/103.gif)

## Create service

Gateway service เป็นเหมือนการสร้างทางเข้าก่อนไปที่ App ของเรา
หลังจากนี้ถ้าจะทำอะไรเราจะอ้างอิงมาที่ service นี้นี่แหละ

สิ่งที่เราจะสร้างจะเป็นส่วนนี้

![104](/104.gif)

ใส่

1. name
2. url

![gw service1 image](/2.png)

จะได้แบบนี้

![gw service2 image](/3.png)

- name คือ ชื่อของ service นะ ชอบอะไรก็ใส่ไป ให้มันสื่อถึง service นั้นๆละกันนะ
- tag ก็เอาไว้ใส่ tag อะ ใส่ได้หลาย tags เลย
- URL ส่วนนี้จะใส่แบบ full เลยก็ได้ หรือใส่แยกกันก็ได้
  - Full URL ตัวอย่าง `http://hono:3333/`
  - แบบแยก
    - Protocal ก็เป็น HTTP หรือ HTTPS ก็เลือกไป
    - Host เป็น domain ของ service เราอะนะ ถ้ารันใน docker ก็ใช้ชื่อ service ได้เลย มันมี DNS อยู่ในตัวละ
    - Path ก็เป็น path ทางเข้าของ service เรา ไม่ต้องใส่ก็ได้
    - Port ก็เป็น port ที่ทำให้เราเข้าถึง service ได้ ในที่นี้ก็ต้องเป็น 3333 เพราะ backend เราปล่อยออกทาง port นี้
