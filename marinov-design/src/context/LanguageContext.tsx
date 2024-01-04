// // LanguageContext.tsx

// import React, { createContext, useState, useContext } from 'react';

// type Language = 'EN' | 'MK';

// interface LanguageContextProps {
//   language: Language;
//   toggleLanguage: () => void;
// }

// const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// export const LanguageProvider: React.FC = ({ children }) => {
//   const [language, setLanguage] = useState<Language>('EN'); // Using useState for language state

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'MK' : 'EN')); // Trigger re-render using useState
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = (): LanguageContextProps => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };
