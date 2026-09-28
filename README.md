# Hireyoo - Philippine Workforce Management Platform

A modern, React Native + Expo-based workforce management platform built specifically for Philippine businesses, with full compliance support for dynamic labor law requirements.

## 🚀 Overview

Hireyoo simplifies workforce management for Philippine companies by automating compliance with complex labor, payroll, tax, and government requirements. The platform features a mobile-first design with native iOS/Android support and a web-based landing page.

**Key Features:**
- Real-time compliance monitoring and automated updates
- Philippine labor law-compliant payroll calculations
- Multi-location and distributed team support
- Full employee lifecycle management (hiring → onboarding → payroll → offboarding)
- Seamless integration with government systems

## 📦 Tech Stack

### Core Framework
- **Expo** (v57) - Managed React Native workflow
- **React Native** - Cross-platform mobile UI
- **React Navigation** - Multi-level navigation (Drawer → Bottom Tabs)

### State Management
- **Redux Toolkit** - Predictable state container
- **react-redux** - React bindings for Redux
- **@hireyooapp/redux** - Custom Redux provider

### UI & Styling
- **packages/ui** - Reusable component library
- **rn-responsive-styles** - Responsive styling solution
- **DM Sans font** - Modern, geometric typography

### Web
- **HTML5/CSS3** - Landing page markup and styling
- **GSAP** - Advanced scroll animations
- **ScrollTrigger** - Scroll-based animation plugin

## 📁 Project Structure

```
HireyooApp/
├── packages/
│   ├── ui/                          # Reusable component library
│   │   └── src/
│   │       ├── components/          # UI primitives (Button, Input, Card, etc.)
│   │       └── index.ts             # Public exports
│   │
│   └── redux/                       # Redux state management
│       └── src/
│           ├── auth/                # Authentication slice
│           ├── transactions/        # Transactions slice
│           └── index.ts
│
├── src/
│   ├── navigation/
│   │   ├── navigators/              # Drawer > Bottom Tabs structure
│   │   ├── routes/                  # Typed route params
│   │   └── linking.ts               # Deep link configuration
│   │
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── landing/
│   │   │   │   ├── LandingScreen.tsx           # Mobile landing
│   │   │   │   ├── LandingScreen.web.tsx      # Web landing (iframe-based)
│   │   │   │   └── LandingPage/
│   │   │   │       ├── index.html              # Landing page markup
│   │   │   │       ├── htmlContent.ts          # Auto-generated HTML export
│   │   │   │       ├── LandingPageReact.tsx   # React Native version
│   │   │   │       ├── images/                 # Product screenshots
│   │   │   │       └── ...
│   │   │   │
│   │   │   ├── login/
│   │   │   │   └── LoginScreen.tsx
│   │   │   │
│   │   │   └── AuthNavigator.tsx               # Auth stack with Landing route
│   │   │
│   │   └── dashboard/                          # Main app screens
│   │       ├── home/
│   │       ├── transactions/
│   │       └── account/
│   │
│   └── App.tsx                      # Root app component
│
├── assets/                          # Images, fonts, static files
├── web/                             # Web version files
│   ├── index.html                   # Web entry point
│   └── landing.html                 # Standalone landing page
│
├── app.json                         # Expo configuration
├── App.tsx                          # Root component
├── index.ts                         # Entry point
└── package.json                     # Dependencies

```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/pnpm
- Expo CLI: `npm install -g expo-cli`
- Xcode (for iOS) or Android Studio (for Android)

### Install Dependencies
```bash
# Install dependencies
npm install

# Install native dependencies with Expo
npx expo install

# If missing: install react-native-webview for web landing page
npx expo install react-native-webview
```

### Configuration
The project uses environment-based configuration:
- Check `configuration/env/uat.env` for environment variables
- Update as needed for your setup

## 🚀 Running the App

### Mobile Development
```bash
# Start Expo dev server
npx expo start

# Options in the Expo menu:
# - Press 'i' for iOS
# - Press 'a' for Android
# - Press 'w' for web
```

### Web Development
```bash
# Web version runs at http://localhost:8081
npx expo start -w

# Navigate to landing page at:
# http://localhost:8081/landing
```

### Running Tests
```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch
```

## 🗺️ Navigation Structure

### Auth Stack (Landing/Login)
- **Landing** - Premium landing page with product info
  - Web version: iframe-based HTML landing
  - Mobile: React Native adaptation
  - Sign In button → navigates to Login
- **Login** - Email/password authentication
- **AcceptInvite** - Accept invitation via link (deep link support)

### Main App Stack (Dashboard)
- **Drawer Navigation**
  - Dashboard (home)
  - Settings
  - Profile
  
- **Bottom Tabs** (inside Drawer)
  - Home
  - Transactions
  - Account

## 🎨 Landing Page Details

### Web Landing Page
- **File**: `src/screens/auth/landing/LandingPage/index.html`
- **Location**: Web-only component using iframe in React Native
- **Features**:
  - Smooth scroll animations (GSAP + ScrollTrigger)
  - Embedded product screenshots (base64)
  - Animated statistics counters
  - Trust badges
  - Feature showcase with alternating layout
  - CTA section with email signup
  - Fully responsive design

### Mobile Landing Page
- **File**: `src/screens/auth/landing/LandingPage/LandingPageReact.tsx`
- **Features**:
  - React Native implementation of landing design
  - Navigation integration (Sign In → Login screen)
  - Responsive mobile layout
  - Maintains design consistency with web version

### Loading the Landing Page
- **Web**: Loads HTML via `Asset.fromModule()` and fetches it
- **Mobile**: Uses React Native components
- **Desktop Web**: Routes to landing at `/landing`

## 📱 Responsive Design

The app is fully responsive across:
- **Mobile**: 320px+ width (iOS/Android)
- **Tablet**: 768px+ width
- **Desktop**: 1240px+ width (web version)

Styling uses `rn-responsive-styles` for adaptive layouts.

## 🔐 Redux Setup

### State Structure
```typescript
// Authentication state
auth: {
  user: User | null,
  isAuthenticated: boolean,
  loading: boolean,
}

// Transactions
transactions: {
  items: Transaction[],
  loading: boolean,
  error: string | null,
}
```

### Usage in Components
```tsx
import { useAppDispatch, useAppSelector } from '@hireyooapp/redux';

export function MyComponent() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  
  return <Text>{user?.name}</Text>;
}
```

## 🎯 Key Commands

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Test on specific platform
npx expo start -i    # iOS
npx expo start -a    # Android
npx expo start -w    # Web

# Build for production
eas build --platform ios
eas build --platform android

# Deploy web version
npm run deploy:web   # If configured
```

## 📖 Development Guidelines

### Component Organization
- **packages/ui**: Presentational components only, no app logic
- **src/screens**: Compose UI from packages/ui, connect state via Redux
- Keep screen files thin; extract complexity to services/hooks

### Redux Usage
- Always use `@hireyooapp/redux` provider, NOT direct `react-redux`
- Use Redux Toolkit for slices and async thunks
- Dispatch thunks with `.unwrap()` for error handling

### Navigation
- Use typed `useNavigation<NativeStackScreenProps<...>>()` for type safety
- Deep links configured in `src/navigation/linking.ts`
- Auth stack shows Landing → Login → Dashboard flow

### Styling
- Use React Native's `StyleSheet.create()` for performance
- Responsive values via `rn-responsive-styles`
- Use CSS variables in web components (defined in Landing Page)

## 🐛 Troubleshooting

### Landing Page Not Loading
- Check that `Asset.fromModule()` can access `index.html`
- Verify `fetch()` works with the asset URI (web platform)
- Check browser console for errors (web)

### Navigation Not Working
- Verify route is in `AuthStackParamList` type
- Check deep link config in `linking.ts`
- Ensure `navigation.navigate()` target exists

### Redux Not Updating
- Check that you're using `@hireyooapp/redux` provider
- Verify thunk is dispatched with `.unwrap()`
- Use Redux DevTools browser extension (web)

### Styling Issues
- Clear Expo cache: `expo start --clear`
- Hard-reload mobile app
- Check that `rn-responsive-styles` is installed

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/versions/v57.0.0/)
- [React Navigation Docs](https://reactnavigation.org/)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/)
- [React Native Docs](https://reactnative.dev/)
- [GSAP Documentation](https://greensock.com/gsap/)

## 🤝 Contributing

When adding features:
1. Keep `packages/ui` focused on presentational components
2. Put app logic in screens/hooks/services
3. Update Redux slices for new state needs
4. Add deep links to `linking.ts` if creating new screens
5. Test on multiple platforms (iOS, Android, Web)

## 📝 License

Proprietary - Hireyoo Inc. All rights reserved.

---

**Built with ❤️ for Philippine businesses**
