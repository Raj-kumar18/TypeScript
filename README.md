<div align="center">

# 📘 TypeScript Learning Journey

### Basic se Advance tak — ek step at a time 🚀

![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-ESM-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active%20Learning-brightgreen?style=for-the-badge)

</div>

---

## 🗂️ Project Setup

| Config | Value |
|--------|-------|
| TypeScript Version | `^6.0.3` |
| Module System | `nodenext` (ESM) |
| Target | `esnext` |
| Strict Mode | ✅ Enabled |
| JSX Support | `react-jsx` |
| Source Maps | ✅ Yes |

```bash
# Clone karo
git clone https://github.com/Raj-kumar18/TypeScript.git
cd TypeScript

# Dependencies install karo
npm install

# Compile karo
npx tsc

# Run karo
npm start
```

---

## ✅ Progress Tracker

### 🟢 Phase 1 — Core Basics
- [ ] Primitive Types — `string`, `number`, `boolean`, `null`, `undefined`
- [ ] `any`, `unknown`, `never`, `void`
- [ ] Type Annotations & Type Inference
- [ ] Arrays & Tuples
- [ ] Enums — `const enum` vs `enum`
- [ ] Functions — typed params, return types, optional `?`, default params
- [ ] Rest params & overloads

### 🟡 Phase 2 — Interfaces & Type System *(in progress)*
- [ ] `interface` — basics, optional props, readonly
- [ ] `type` alias
- [ ] `interface` vs `type` — kab kya use karein
- [ ] Extending interfaces (`extends`)
- [ ] Union Types — `A | B`
- [ ] Intersection Types — `A & B`
- [ ] Literal Types & `as const`

### 🔵 Phase 3 — Advanced Types
- [ ] Generics — `<T>`, constraints, default types
- [ ] `Partial<T>` — saare props optional karo
- [ ] `Required<T>` — saare props required karo
- [ ] `Pick<T, K>` — specific keys lo
- [ ] `Omit<T, K>` — keys hatao
- [ ] `Readonly<T>` — immutable banao
- [ ] `Record<K, V>` — key-value map
- [ ] `ReturnType<T>`, `Parameters<T>`
- [ ] Conditional Types — `T extends U ? X : Y`
- [ ] Mapped Types
- [ ] Template Literal Types

### 🔴 Phase 4 — Classes & OOP
- [ ] Classes with TypeScript
- [ ] Access Modifiers — `public`, `private`, `protected`
- [ ] `readonly` properties
- [ ] Abstract classes
- [ ] Implementing interfaces in classes
- [ ] Decorators (basic)

### 🔴 Phase 5 — TypeScript in Real Projects
- [ ] TypeScript + Express — typed `req`, `res`
- [ ] TypeScript + Mongoose
- [ ] TypeScript + Prisma + PostgreSQL
- [ ] Zod for schema validation
- [ ] Type-safe API responses
- [ ] TypeScript + React (already in tsconfig!)

---

## 📁 Folder Structure

```
TypeScript/
├── src/
│   ├── 01-basics/          # Types, functions, arrays
│   ├── 02-interfaces/      # Interface, type alias
│   ├── 03-advanced/        # Generics, utility types
│   ├── 04-classes/         # OOP in TS
│   └── 05-projects/        # Mini projects
├── .gitignore
├── package.json            # axios + typescript ^6
├── tsconfig.json           # Strict config, nodenext, ESM
└── README.md
```

---

## 💡 Key Learnings Log

> Yahan main apne important realizations note karta hoon

- **`interface` vs `type`** — Interface sirf objects ke liye, type alias kuch bhi ho sakta hai
- **`strict: true`** — Bahut important hai, real projects mein always ON rakho
- **`nodenext` module** — ESM support ke liye, `import/export` syntax milta hai
- **`noUncheckedIndexedAccess`** — Array access pe automatically `undefined` add ho jaata hai type mein — safer code

---

## 📚 Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Total TypeScript by Matt Pocock](https://www.totaltypescript.com/)
- [TypeScript Playground](https://www.typescriptlang.org/play/)

---

<div align="center">

**Made with 💙 by [Raj Kumar](https://github.com/Raj-kumar18)**

*MERN Stack Developer 

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/raj-kumar18)

</div>
