# Key Auth

เราจะมาป้องกัน API ของเรากัน
โดยเงื่อนไขคือถ้าอยากเข้ามาที่ /api จะต้องมี API Key ติดมาด้วยใน Header

## Use Key Authentication plugin for route

![29](/29.png)

![30](/30.png)

เลือก plugin Key Authentication
![31](/31.png)

เลื่อนลงมาด้านล่าง
ถ้าอยากแก้ key name ก็แก้ตรงนี้ได้เลย
ในที่นี้จะใช้ apikey นี่แหละ

![32](/32.png)

ทีนี้ลองเข้าไปที่
[localhost:8000/api](http://localhost:8000/api)

จะเจอว่ามันเข้าไม่ได้แล้ว

![33](/33.png)

นั่นเป็นเพราะว่ามันโดน plugin Key Authentication ป้องกันไว้

## Create consumer for Key Authentication

เราจะต้องมาสร้าง consumer ที่มี key auth ก่อน แล้วเอา key ที่ได้ไปใช้เพื่อเข้าถึง API ของเรา

ในที่นี้จะสร้าง consumer ใหม่เลย ชื่อว่า backend2

![34](/34.png)

จิ้มไปเลย
![35](/35.png)

เปิดมาที่ tab credential
จะเห็นว่ามี menu Key Authentication เพิ่มขึ้นมาแล้ว

![36](/36.png)

จากนั้นก็ใส่ key
หรือถ้าไม่ใส่ Kong ก็จะ random มาให้
แล้วกด save ได้เลย

![37](/37.png)

![38](/38.png)

## Use API key in Header

ทีนี้เราจะเรียกผ่าน browser ไม่ได้ละ เพราะต้องใส่ apikey

ก็จะมาเรียกผ่าน Hoppscotch แทน
แล้วใส่ Header แบบนี้

![39](/39.png)

## Use API key in Query

ถ้าย้อนกลับไปดูที่ key auth plugin setting

จะเห็นว่าเราอนุญาตให้ใส่ key ที่ Header และ Query ได้

![40](/40.png)

ฉนั้นจริงๆแล้วเราสามารถเปิดผ่าน browser ได้ด้วย

ลองแก้ url ให้เป็นแบบนี้

[localhost:8000/api?apikey=12345678](http://localhost:8000/api?apikey=12345678)

จะเข้าได้แบบนี้

![41](/41.png)
