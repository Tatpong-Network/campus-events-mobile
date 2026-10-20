# 📱 Campus Events Mobile (Assignment รวมสัปดาห์ที่ 1–11)

[![Expo](https://img.shields.io/badge/Expo-SDK%2052-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Expo Router](https://img.shields.io/badge/Expo_Router-v4-4630EB?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/router/introduction/)
[![React Native](https://img.shields.io/badge/React_Native-0.76-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-green?style=for-the-badge)](https://expo.dev/)

แอปพลิเคชันค้นหา บันทึก และลงทะเบียนกิจกรรมมหาวิทยาลัย พัฒนาด้วย **React Native + Expo Router + TypeScript** โดยรวบรวมและต่อยอดเนื้อหาการเรียนรู้ตั้งแต่สัปดาห์ที่ 1 ถึง 11 ไว้ใน Codebase เดียว

---

## 👤 ข้อมูลผู้จัดทำ
- **ชื่อ-นามสกุล:** นาย ทัตพงศ์ พงศ์สุวากร
- **รหัสนักศึกษา:** 663450039-7
- **รายวิชา:** Mobile Application Development

---

## ✨ สรุปฟังก์ชันที่ครอบคลุม (Week 1 – 11)

| สัปดาห์ | หัวข้อ | สิ่งที่ถูกนำมาประยุกต์ใช้ในแอป |
| :--- | :--- | :--- |
| **Week 1–2** | Components, Props & State | โครงสร้าง TypeScript, หน้า Profile นักศึกษา, Reusable Component `EventCard` |
| **Week 3** | Responsive UI & FlatList | จัดการรายการกิจกรรมด้วย `FlatList`, ออกแบบปุ่มและ Spacing รองรับหลายขนาดหน้าจอ |
| **Week 4** | Expo Router & Navigation | Navigation แบบ File-based (Tabs: กิจกรรม, รายการโปรด, โปรไฟล์) และ Stack Dynamic Route `/events/[id]` |
| **Week 5** | Form & State Management | บริหารจัดการ State บันทึกรายการโปรดด้วย React Context (`FavoritesProvider`) |
| **Week 6–7** | Networking & Storage | ระบบเก็บข้อมูล Favorite และ Session แบบ Local Storage ในเครื่อง |
| **Week 8** | Authentication & Security | ระบบ Session Management, การเข้าสู่ระบบ (Login) และออกจากระบบ (Logout) |
| **Week 9–10** | Device APIs, Location & Maps | การแสดงผลแผนที่ (Interactive Map สำหรับ Mobile และ Fallback สำหรับ Web) |
| **Week 11** | Notifications & Platform APIs | ระบบแจ้งเตือนกิจกรรมล่วงหน้า (Local Event Reminder) |

---

## 🛠️ สถาปัตยกรรมระบบ (Project Architecture)

โครงสร้างโฟลเดอร์ถูกจัดวางตามแนวทาง **Expo Router (File-based Routing)** และแยกชั้นการทำงานตามหลัก Separation of Concerns:

```text
campus-events/
├── app/                            # โครงสร้างเส้นทางและหน้าจอ (File-based Routing)
│   ├── (tabs)/                     # กลุ่มหน้าจอหลักที่มีแถบเมนูด้านล่าง
│   │   ├── _layout.tsx             # กำหนด Tabs Navigation (กิจกรรม, รายการโปรด, โปรไฟล์)
│   │   ├── events.tsx              # หน้ารายการกิจกรรมทั้งหมด (FlatList & Responsive)
│   │   ├── favorites.tsx           # หน้ารายการโปรดที่บันทึกไว้
│   │   └── profile.tsx             # หน้าโปรไฟล์นักศึกษาและออกจากระบบ (Logout)
│   ├── events/                     
│   │   ├── [id].tsx                # หน้ารายละเอียดกิจกรรม + แผนที่ (Dynamic Route)
│   │   └── create.tsx              # หน้าสร้างกิจกรรม (Camera & Location Picker)
│   ├── _layout.tsx                 # Root Stack Navigation & App Providers
│   ├── index.tsx                   # หน้าทางเข้าหลัก (Redirect ตามสถานะ Login)
│   ├── login.tsx                   # หน้าเข้าสู่ระบบ (Authentication)
│   └── register.tsx                # หน้าฟอร์มลงทะเบียนเข้าร่วมกิจกรรม
├── components/                     # Reusable UI Components
│   ├── EventCard.tsx               # การ์ดกิจกรรม (พร้อมปุ่ม Favorite & Accessibility)
│   ├── EmptyState.tsx              # UI แสดงผลเมื่อไม่มีรายการข้อมูล
│   └── OfflineBanner.tsx           # แถบแจ้งเตือนสถานะเมื่อออฟไลน์
├── store/                          # State Management & Context
│   ├── SessionProvider.tsx         # จัดการ Session ผู้ใช้ + SecureStore / LocalStorage
│   └── FavoritesProvider.tsx       # จัดการ State รายการโปรด + Local Storage
├── types/                          # Type Definitions (TypeScript)
│   ├── auth.ts                     # ชนิดข้อมูลเกี่ยวกับ User & Session
│   └── event.ts                    # ชนิดข้อมูลกิจกรรม (CampusEvent Data Model)
├── services/                       # Network Boundary & Native APIs
│   ├── events-api.ts               # เชื่อมต่อ REST API พร้อม Type Guard
│   ├── notifications.ts            # การตั้งเวลาแจ้งเตือนกิจกรรม (Event Reminder)
│   └── storage.ts                  # จัดการฐานข้อมูลและการบันทึกข้อมูลถาวร
├── app.json                        # การตั้งค่าแอป, Permissions และ Native Plugins
└── package.json                    # รายการ Dependencies และ Scripts สำหรับรันโปรเจกต์


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
