# Jwt

เราสามารถแนบ jwt แล้วให้ Kong API Gateway ตรวจสอบก่อน
ถ้า valid ก็จะผ่านเข้าไปได้

ในที่นี้เราจะ ใช้ Jwt Plugin กับ api ของเราเหมือนเดิม
<br>
ซึ่งเราจะต้องไปปิด Key-Auth plugin สำหรับ api ที่ทำไว้ก่อนหน้านี้ซะก่อน

## Enable plugin

![42](/42.png)

![43](/43.png)

![44](/44.png)

![45](/45.png)

## Create consumer

เราจะต้องมาสร้าง consumer กันเหมือนเดิมเลย

![46](/46.png)

![47](/47.png)

ในส่วนของ key จะปล่อยให้ Kong Generate ให้ก็ได้นะ
ถ้าจะใส่เองก็ไม่ติด
<br/>
ในส่วนของ Secret เราต้องใส่ให้ตรงกับ Secret ที่เราจะใช้ใน App ของเรา
<br/>
แต่ตอนนี้ app เรา ยังไม่ได้ทำ JWT ฉนั้นตรงนี้ก็ให้มัน Auto Gen ไปก่อน

![48](/48.png)

จะได้ Jwt consumer มาแบบในภาพ

![49](/49.png)

ให้กด Edit อีกรอบ

![50](/50.png)

![51](/51.png)

เนื่องจากว่า Backend app ของเรายังสร้าง JWT ไม่ได้ แต่เราอยากจะป้องกันการเข้าถึง Backend app ของเราด้วย Jwt
<br>
เราก็เลยต้องไปสร้าง Jwt เองก่อน เพื่อที่จะได้มี Jwt token ให้ Kong ตรวจสอบ

ก็ไปที่ [jwt.io](https://jwt.io/)

แล้วก็เอา key กับ secret ที่ copy ไว้มาใส่

![52](/52.png)

แล้วก็มาลองเรียกไปที่ /api กัน

![53](/53.png)
