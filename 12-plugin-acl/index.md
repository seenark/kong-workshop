# Access control level

ปกติแล้วเราจะมี services หลายๆตัว
และมี api หลายๆเส้น

ถ้าเราให้ user ที่ผ่านการ Authen มาแล้ว เข้ามาใช้งาน API เส้นไหนก็ได้ มันก็คงจะไม่ดีนัก ปกติเราก็มักจะจำกัดการใช้งานในบาง user ไว้ ให้ใช้ได้ในบาง service หรือบาง api

ACL จะมาช่วยเราทำตรงนี้แหละ

เราจะสร้าง Group ขึ้นมา แล้วเอา User ไปใส่ใน Group อีกที
แล้วก็จะจำกัดการใช้งานระดับ Group แทน

## Goal

มาตั้งเป้าหมายกันก่อน
ตอนนี้เรามี services อยู่ 3 ตัว

1. React
2. Backend
3. Next

เราจะสร้าง Group มา 2 Groups

| No  | Group Name | Access to `/admin` | Access to `/api` | Access to `/` |
| --- | ---------- | ------------------ | ---------------- | ------------- |
| 1   | Admin      | ✅                 | ✅               | ❌            |
| 2   | User       | ❌                 | ❌               | ✅            |

โดย **Admin** group จะเข้า `/admin` ได้ เข้า `/api` ได้

ส่วน **User** group จะเข้า `/` ได้อย่างเดียว

## Admin group for `/admin` & `/api`

เราจะมาทำ admin group กันก่อน

### 01. Path `/admin`

เราจะปกป้อง `/admin` ก็มาที่ตรงนี้

![54](/54.png)

เราต้องมี Basic Auth ด้วย
ใครยังไม่มีก็ใส่ก่อนนะ
![55](/55.png)

จากนั้นก็เพิ่ม Plugin ACL

![56](/56.png)

จากนั้นก็ใส่ group name ที่อนุญาตให้เข้ามาได้ ใส่ชื่อไปก่อน เดี๋ยวมาสร้าง group ทีหลัง
สามารถใส่ได้หลาย group เลยนะ
ในที่นี้ใส่แค่ `admin`
<br>
อย่าลืมกด Save

![57](/57.png)

แล้วจะได้แบบนี้

![58](/58.png)

## Admin consumer

ต่อมาก็เพิ่ม Consumer ที่ชื่อ Admin

![59](/59.png)

เพิ่ม Admin consumer ได้เลย ไม่ทำให้ดูละ

จากนั้นก็เข้ามาเพิ่ม Basic Auth ก่อน เอาง่ายๆที่ Basic Auth นี่แหละ
ถ้าใครชอบวิธีอื่นก็ไม่ติด ลองเล่นๆกันดูได้

![60](/60.png)

จากนั้นก็ใส่ Username + Password

![61](/61.png)

จะได้แบบนี้

![62](/62.png)

ต่อมาเราจะให้ Admin consumer เข้าไปอยู่ใน ACL group ที่ชื่อว่า `admin`

![63](/63.png)

![64](/64.png)

แล้วลองเข้าไปที่ [admin.myweb.com:8000/](http://admin.myweb.com:8000/)

ถ้าอยาก [logout](http://log:out@admin.myweb.com:8000/) จิ้มเลย
แล้วต้องปิด tab นะ tab นี้ใช้ไม่ได้ละ

### 02. Path `/api`

ทีนี้ก็มาทำ API

ทุกคนก็ลองไปทำกันดูนะ

[เฉลย](/12-plugin-acl/admin-for-api)

## User Group for `/`

มาใส่ ACL plugin ให้กับ route `/`
กันก่อน

![76](/76.png)

![77](/77.png)

![78](/78.png)

![79](/79.png)

จะได้แบบนี้

![80](/80.png)

ลองเปิดไปที่
[localhost:8000](http://localhost:8000/)
จะเข้าไม่ได้ละ

จะเจอหน้าแบบนี้

![81](/81.png)

เราก็ต้องเพิ่ม Basic Auth ด้วย
เพราะไม่งั้นก็จะไม่มีทาง login ได้เลย

<video controls src="/82.mov" />

ลองเปิดไปที่
[localhost:8000](http://localhost:8000/)

แต่ก็ยังไม่มี username + password เลย
ไปขั้นตอนต่อไป

## User Consumer

มาสร้าง User group กัน

![66](/66.png)

![67](/67.png)

จะได้แบบนี้

![68](/68.png)

จากนั้นก็ใส่ credential ให้กับ User consumer

![69](/69.png)

![70](/70.png)

![71](/71.png)

จะได้แบบนี้

![72](/72.png)

ทีนี้ก็เพิ่ม ACL User Group ให้กับ Consumer User

![73](/73.png)

![74](/74.png)

จะได้แบบนี้
![75](/75.png)

ลองเปิดไปที่
[localhost:8000](http://localhost:8000/)

## Logout

### React

เผื่อใครอยาก logout [click](http://log:out@localhost:8000) เลย เสร็จแล้วจะต้องปิด tab นะ tab นั้นจะใช้ไม่ได้ละ

### Admin

ถ้าอยาก [logout](http://log:out@admin.myweb.com:8000/) จิ้มเลย
