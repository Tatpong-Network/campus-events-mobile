เรียน อาจารย์ประจำวิชา Mobile Application Development

เรื่อง: ส่งงาน Assignment รวบยอดสัปดาห์ที่ 1–11 (โปรเจกต์ Campus Events Mobile)

กระผมนาย ทัตพงศ์ พงศ์สุวากร ได้นำเนื้อหาและ Assignment ตั้งแต่สัปดาห์ที่ 1 ถึง 11 มารวมและพัฒนาต่อยอดเป็นแอปพลิเคชันระบบเดียว (Single Codebase) เรียบร้อยแล้วครับ

--------------------------------------------------
📌 ข้อมูลผู้จัดทำ
- ชื่อ-นามสกุล: นาย ทัตพงศ์ พงศ์สุวากร
- รหัสนักศึกษา: 663450039-7
- รายวิชา: Mobile Application Development
- ลิงก์ GitHub Repository: https://github.com/Tatpong-Network/campus-events-mobile
--------------------------------------------------

✨ สรุปฟังก์ชันที่ครอบคลุม (Week 1 – 11)
- Week 1–2: Components, Props & State โครงสร้าง TypeScript, หน้า Profile นักศึกษา, Reusable Component EventCard
- Week 3: Responsive UI & FlatList จัดการรายการกิจกรรมด้วย FlatList ออกแบบปุ่มและ Spacing รองรับหลายขนาดหน้าจอ
- Week 4: Expo Router & Navigation แบบ File-based (Tabs: กิจกรรม, รายการโปรด, โปรไฟล์) และ Stack Dynamic Route /events/[id]
- Week 5: Form & State Management บริหารจัดการ State บันทึกรายการโปรดด้วย React Context (FavoritesProvider)
- Week 6–7: Networking & Storage ระบบเก็บข้อมูล Favorite และ Session แบบ Local Storage ในเครื่อง
- Week 8: Authentication & Security ระบบ Session Management, การเข้าสู่ระบบ (Login) และออกจากระบบ (Logout)
- Week 9–10: Device APIs, Location & Maps การแสดงผลแผนที่ (Interactive Map สำหรับ Mobile และ Fallback สำหรับ Web)
- Week 11: Notifications & Platform APIs ระบบแจ้งเตือนกิจกรรมล่วงหน้า (Local Event Reminder)

--------------------------------------------------
🚀 ขั้นตอนการติดตั้งและรันโปรเจกต์ (Getting Started)

1. ติดตั้ง Dependencies
npm install

2. รันแอปพลิเคชันสำหรับพัฒนา (Development Server)
npm start
(เปิดแอป Expo Go บนสมาร์ตโฟน แล้วสแกน QR Code ที่แสดงใน Terminal หรือกด 'w' เพื่อเปิดบน Browser)

3. ตรวจสอบโค้ด (Code Quality Checks)
# ตรวจสอบความถูกต้องของ Type ด้วย TypeScript
npm run typecheck

# ตรวจสอบ Typecheck พร้อมการประมวลผล Config ของ Expo
npm run check

--------------------------------------------------
📦 การเตรียม Build สำหรับ Android Production
โปรเจกต์รองรับการ Deploy ผ่าน EAS Build โดยสามารถระบุ Google Maps API Key ผ่าน Environment Variable:

# กำหนดค่า API Key ในระบบ EAS
npx eas-cli env:create --name GOOGLE_MAPS_ANDROID_API_KEY --environment production --visibility secret

# เริ่มกระบวนการ Build
npx eas-cli build --profile production --platform android

(Package Name: com.campusevents.tatpong)

โครงงานนี้พัฒนาขึ้นเพื่อการศึกษาการพัฒนาแอปพลิเคชันด้วย React Native และ Expo

--------------------------------------------------
ขอแสดงความนับถือ
นาย ทัตพงศ์ พงศ์สุวากร
(รหัสนักศึกษา 663450039-7)