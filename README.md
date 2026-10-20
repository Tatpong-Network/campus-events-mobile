# 📱 Campus Events Mobile (Assignment รวมสัปดาห์ที่ 1–11)

[![Expo](https://img.shields.io/badge/Expo-SDK%2052-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Expo Router](https://img.shields.io/badge/Expo_Router-v4-4630EB?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/router/introduction/)
[![React Native](https://img.shields.io/badge/React_Native-0.76-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-green?style=for-the-badge)](https://expo.dev/)

เรียน อาจารย์ประจำวิชา Mobile Application Development

เรื่อง: ส่งงาน Assignment รวบยอดสัปดาห์ที่ 1–11 (โปรเจกต์ Campus Events Mobile)



กระผมนาย ทัตพงศ์ พงศ์สุวากร ได้นำเนื้อหาและ Assignment ตั้งแต่สัปดาห์ที่ 1 ถึง 11 มารวมและพัฒนาต่อยอดเป็นแอปพลิเคชันระบบเดียว (Single Codebase) ตามข้อกำหนดของรายวิชาเรียบร้อยแล้วครับ

--------------------------------------------------
📌 ข้อมูลผู้จัดทำ
- ชื่อ-นามสกุล: นาย ทัตพงศ์ พงศ์สุวากร
- รหัสนักศึกษา: 663450039-7
- รายวิชา: Mobile Application Development
- ลิงก์ GitHub Repository: https://github.com/Tatpong-Network/campus-events-mobile
--------------------------------------------------

🖼️ ภาพตัวอย่างหน้าจอและการทำงานของแอปพลิเคชัน
<img width="2999" height="1611" alt="download" src="https://github.com/user-attachments/assets/65481102-38e9-4b05-8b7a-ebb0339db624" />

--------------------------------------------------
✨ สรุปฟังก์ชันและการประยุกต์ใช้เนื้อหาตาม Milestone (สัปดาห์ที่ 1–11):
- Week 1–2 (UI & Core Components): โครงสร้าง TypeScript, หน้า Profile นักศึกษา, Reusable Component EventCard
- Week 3 (Responsive UI & FlatList): จัดการรายการกิจกรรมด้วย FlatList ออกแบบปุ่มและ Spacing รองรับหลายขนาดหน้าจอ
- Week 4 (Expo Router & Navigation): ออกแบบ File-based Routing ด้วย Stack และ Tabs (/events, /favorites, /profile) พร้อมรองรับ Dynamic Route /events/[id]
- Week 5 (Forms & State Management): บริหารจัดการ State บันทึกรายการโปรดด้วย React Context (FavoritesProvider)
- Week 6–7 (Networking & Storage): จำลองการโหลดข้อมูล และทำระบบบันทึกสถานะ Favorite รวมถึง Session ลงใน Local Storage ในเครื่อง
- Week 8 (Authentication & Security): ระบบ Session Management, การเข้าสู่ระบบ (Login Flow), การออกจากระบบ (Logout) และ Protected Routes
- Week 9–10 (Device APIs, Location & Maps): โครงสร้างรองรับสิทธิ์การเข้าถึง (Permissions), พิกัดสถานที่ และการแสดงผลแผนที่ (Interactive Map สำหรับ Mobile และ Fallback สำหรับ Web)
- Week 11 (Notifications & Platform APIs): ระบบตอบสนองการแจ้งเตือนกิจกรรมล่วงหน้า (Local Event Reminder)

--------------------------------------------------
🧪 รายงานผลการทดสอบ Clean Clone, Install และ Run (Verification Report):
กระผมได้ทำการทดสอบจำลองในฐานะผู้ตรวจงานตามข้อกำหนด โดย Clone โปรเจกต์ลงใน Directory ใหม่ พบว่า:
1. การ Clone: สามารถดาวน์โหลด Source Code จาก GitHub Repository ได้สมบูรณ์ ไม่มีไฟล์สูญหาย
2. การ Install: รันคำสั่ง `npm install` ผ่านโดยไม่มี Dependency Conflict หรือ Error ใดๆ
3. การ Run: รันคำสั่ง `npm start` / `npx expo start -c` สามารถเปิดใช้งานได้สมบูรณ์ทั้งบน Web Browser และสมาร์ตโฟนผ่าน Expo Go
4. การทำงานของ Route & State: หน้า Login นำทางไปยังหน้า Tabs, หน้ารายละเอียดกิจกรรมแสดงผลตาม ID, และระบบบันทึกรายการโปรดทำงานสอดคล้องกับ State จริง

--------------------------------------------------
🎯 ความพร้อมสำหรับการสาธิต (Final Demo):
โปรเจกต์นี้ได้รับการออกแบบให้เป็นแอปพลิเคชันที่มีความต่อเนื่องในตัว (Single Application Workflow) มีข้อมูล Mock Events ครบถ้วน และพร้อมสำหรับการนำเสนอสาธิตการใช้งานจริงในวันสอบ Final ตามที่กำหนดไว้ครับ

--------------------------------------------------
🚀 ขั้นตอนการติดตั้งและรันโปรเจกต์ (Getting Started)

1. ติดตั้ง Dependencies
```bash
npm install
```

2. รันแอปพลิเคชันสำหรับพัฒนา (Development Server)
```bash
npm start
```
(เปิดแอป Expo Go บนสมาร์ตโฟน แล้วสแกน QR Code ที่แสดงใน Terminal หรือกด 'w' เพื่อเปิดบน Browser)

3. ตรวจสอบโค้ด (Code Quality Checks)
# ตรวจสอบความถูกต้องของ Type ด้วย TypeScript
```bash
npm run typecheck
```

# ตรวจสอบ Typecheck พร้อมการประมวลผล Config ของ Expo
```bash
npm run check
```

📦 การเตรียม Build สำหรับ Android Production
โปรเจกต์รองรับการ Deploy ผ่าน EAS Build โดยสามารถระบุ Google Maps API Key ผ่าน Environment Variable:
# กำหนดค่า API Key ในระบบ EAS
```bash
npx eas-cli env:create --name GOOGLE_MAPS_ANDROID_API_KEY --environment production --visibility secret
```

# เริ่มกระบวนการ Build
```bash
npx eas-cli build --profile production --platform android
```

(Package Name: com.campusevents.tatpong)
โครงงานนี้พัฒนาขึ้นเพื่อการศึกษาการพัฒนาแอปพลิเคชันด้วย React Native และ Expo

ขอแสดงความนับถือ
นาย ทัตพงศ์ พงศ์สุวากร
(รหัสนักศึกษา 663450039-7)
