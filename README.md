# 🌟 Horoscope App

A multi-language horoscope application built with **Next.js**, **React**, and **Tailwind CSS**. Users can select their zodiac sign and language (English or German) to receive a daily horoscope.

## 🚀 Features
- Server-side API to fetch horoscope data
- Dynamic routing for zodiac signs
- Language switching (English & German)
- Responsive design with Tailwind CSS
- State management using React Context

## 📂 Project Structure

```
📦 horoscope-app
├── 📂 app
│   ├── 📂 actions
│   │   ├── horoscope.ts       # Fetches horoscope data
│   ├── 📂 api/horoscope
│   │   ├── route.ts           # API route for horoscope data
│   ├── 📂 components
│   │   ├── Horoscope.tsx      # UI component for displaying horoscope
│   ├── 📂 constant
│   │   ├── horoscope.ts       # Horoscope data
│   ├── 📂 horoscope/[locale]/[sign]
│   │   ├── page.tsx           # Dynamic horoscope page
│   ├── 📜 layout.tsx          # Layout and language context
│   ├── 📜 page.tsx            # Homepage with zodiac selection
├── 📜 styles/globals.css      # Global styles
├── 📜 README.md               # Project documentation
```

## 📦 Installation

```bash
git clone https://github.com/your-username/horoscope-app.git
cd horoscope-app
npm install
```

## 🔧 Running the App

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 How It Works
1. **Select a Zodiac Sign** from the homepage.
2. **Choose a Language (English/German)**.
3. **Receive a Random Horoscope** for the day.
4. **Toggle Languages** without losing the selected sign.

## 📜 Key Code Breakdown

### 1️⃣ **Fetching Horoscope Data** (`app/actions/horoscope.ts`)
```ts
const randomHoroscope = horoscopeMessages[Math.floor(Math.random() * horoscopeMessages.length)];
return { horoscope: randomHoroscope, image: horoscopeData.image };
```
✅ Fetches horoscope data from predefined messages.
✅ Returns a **random** daily horoscope.

### 2️⃣ **API Endpoint** (`app/api/horoscope/route.ts`)
```ts
export async function GET(req: Request) {
  const url = new URL(req.url);
  const sign = url.searchParams.get('sign');
  return NextResponse.json({ horoscope: get(horoscope, lang), image: horoscope.image });
}
```
✅ Fetches horoscope based on `sign` and `lang`.
✅ Returns horoscope message & image as JSON.

### 3️⃣ **Rendering Horoscope Component** (`app/components/Horoscope.tsx`)
```ts
const toggleLanguage = () => {
  setLanguage(language === 'en' ? 'de' : 'en');
  window.location.href = `/horoscope/${newLang}/${sign}`;
};
```
✅ **Toggles between English & German**.
✅ **Updates URL dynamically**.

### 4️⃣ **Dynamic Routing for Horoscope Pages** (`app/horoscope/[locale]/[sign]/page.tsx`)
```ts
const sign = get(params, 'sign', 'aries');
const locale = get(params, 'locale', 'en');
const data = await getHoroscope(sign, locale);
```
✅ Retrieves horoscope based on **URL parameters**.
✅ Defaults to Aries & English if not specified.

### 5️⃣ **Language Context & Layout** (`app/layout.tsx`)
```ts
const LanguageContext = createContext({ language: 'en', toggleLanguage: () => {} });
```
✅ Uses **React Context** to manage language state.
✅ **Provides a layout with language toggle**.

## 🎨 Styling
```css
:root {
  --background: #333;
  --foreground: #f5f5f5;
}
```
✅ Uses **CSS variables** for theming.
✅ Fully **responsive** UI with **Tailwind CSS**.

## 📝 License
This project is open-source under the **MIT License**.

## 💡 Contributing
Feel free to submit issues or pull requests to improve the project!

## 📬 Contact
For any questions, reach out at [dharanichuahan17@gmail.com](mailto:dharanichuahan17@gmail.com).

