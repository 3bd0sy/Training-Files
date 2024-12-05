<div dir="rtl">

# دليل إدارة المستخدمين باستخدام React 👥

## نظرة عامة 🌐

في هذا المشروع، سنقوم ببناء تطبيق ويب متكامل لإدارة المستخدمين باستخدام React و Tailwind CSS. سيمكن التطبيق المستخدمين من:

- إضافة مستخدمين جدد
- البحث عن مستخدم بمعرّف محدد
- تحديث بيانات المستخدمين
- عرض قائمة المستخدمين

## الأهداف التعليمية 🎯

1. **إدارة الحالة في React**

   - التعامل مع الحالات المعقدة باستخدام `useState`
   - إدارة كائنات متداخلة
   - تحديث مصفوفة المستخدمين بشكل دينامي

2. **تصميم النماذج التفاعلية**

   - إنشاء نماذج إدخال متعددة الحقول
   - التحقق من صحة البيانات
   - معالجة إدخالات المستخدم

3. **تطبيق التصميم المتجاوب**
   - استخدام Tailwind CSS
   - تنسيق العناصر بشكل مرن
   - دعم مختلف أحجام الشاشات

## المكونات الرئيسية 🧩

### 1. حالة التطبيق الأساسية

</div>

```javascript
const [user, setUser] = useState({
  id: "",
  firstName: "",
  lastName: "",
  birthday: "",
  profileSettings: {
    bgColor: "#ffffff",
    borderWidth: "1px",
    borderRadius: "8px",
  },
});
```

<div dir="rtl">

### 2. الدوال الأساسية

#### دالة معالجة التغييرات

</div>

```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  // معالجة التحديثات للحقول العادية وإعدادات الملف الشخصي
};
```

<div dir="rtl">

#### دالة إضافة مستخدم جديد

</div>

```javascript
const saveNewUser = (e) => {
  e.preventDefault();
  // التحقق من صحة البيانات
  // إنشاء معرف فريد
  // إضافة المستخدم للقائمة
};
```

<div dir="rtl">

## تدفق البيانات 🔄

### مخطط تدفق البيانات

</div>

```mermaid
graph TD
    A[نموذج الإدخال] -->|handleChange| B[حالة المستخدم]
    B -->|saveNewUser| C[إضافة مستخدم جديد]
    C -->|updateUser| D[تحديث المستخدم]
    D -->|تحديث الحالة| E[عرض قائمة المستخدمين]
```

<div dir="rtl">

## مخطط حالات إدارة المستخدم

</div>

```mermaid
stateDiagram-v2
    [*] --> EmptyForm: تهيئة التطبيق

    EmptyForm --> UserInputting: إدخال بيانات
    UserInputting --> UserValidation: إرسال النموذج

    UserValidation --> InvalidInput: بيانات غير صالحة
    InvalidInput --> UserInputting: تصحيح الإدخال

    UserValidation --> NewUserCreation: بيانات صالحة
    NewUserCreation --> UsersList: إضافة مستخدم

    UsersList --> UserSearch: البحث عن مستخدم
    UserSearch --> UserFound: العثور على المستخدم
    UserFound --> UserEditing: تعديل المستخدم

    UserEditing --> UserUpdated: تحديث البيانات
    UserUpdated --> UsersList: تحديث القائمة

    UserSearch --> UserNotFound: مستخدم غير موجود
    UserNotFound --> EmptyForm: إعادة المحاولة
```

<div dir="rtl">

## مخطط تدفق تغيير الحالة

</div>

```mermaid
graph TD
    A[حالة المستخدم الأولية] -->|handleChange| B{نوع الحقل}
    B -->|حقول شخصية| C[تحديث الحقول الرئيسية]
    B -->|إعدادات الملف الشخصي| D[تحديث إعدادات الملف]

    C --> E[تحديث الكائن]
    D --> E

    E --> F{عملية التحقق}
    F -->|صالح| G[حفظ/تحديث المستخدم]
    F -->|غير صالح| H[عرض رسالة خطأ]
```

<div dir="rtl">

## مخطط دورة حياة المستخدم

</div>

```mermaid
graph LR
    A[إنشاء مستخدم] -->|generateID| B[معرف فريد]
    B --> C[إضافة للقائمة]
    C --> D{عمليات المستخدم}
    D -->|البحث| E[استرجاع المستخدم]
    D -->|التحديث| F[تعديل البيانات]
    D -->|الحذف| G[إزالة من القائمة]
```

<div dir="rtl">

## مخطط حالة إعدادات الملف الشخصي

</div>

```mermaid
stateDiagram-v2
    [*] --> DefaultSettings: الإعدادات الافتراضية
    DefaultSettings --> BackgroundColor: تغيير لون الخلفية
    DefaultSettings --> BorderWidth: تغيير عرض الحدود
    DefaultSettings --> BorderRadius: تغيير نصف قطر الحدود

    BackgroundColor --> UpdatedSettings: تحديث
    BorderWidth --> UpdatedSettings
    BorderRadius --> UpdatedSettings

    UpdatedSettings --> [*]: حفظ الإعدادات
```

<div dir="rtl">

## الميزات المتقدمة ✨

- إنشاء معرّفات فريدة باستخدام `Date.now()`
- دعم تخصيص الإعدادات الشخصية
- تحديث وإدارة المستخدمين بكفاءة

## نصائح التحسين 🚀

1. إضافة التحقق المتقدم من صحة البيانات
2. التعامل مع حالات الخطأ بشكل أفضل
3. تطبيق تصميم مستجيب بالكامل

## التحديات المحتملة 🧩

- التعامل مع إدخال بيانات غير صالحة
- تحديث المستخدمين بدقة
- إدارة حالة التطبيق بكفاءة

**المؤلف**: عبد الباسط عبد الغني
**روابط التواصل**:

- [LinkedIn](https://www.linkedin.com/in/abdulbasit-abdulgani)
</div>
