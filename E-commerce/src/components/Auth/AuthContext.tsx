import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
  }
 
interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
  }

  const AuthContext = createContext<AuthContextType | undefined>(undefined);

  export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    // useEffect(() => {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     // Gọi API kiểm tra token hoặc lấy thông tin người dùng
    //     const fetchUser = async () => {
    //       try {
    //         const response = await fetch('https://localhost:7183/api/auth/me', {
    //           headers: { 'Authorization': `Bearer ${token}` },
    //         });
    //         if (response.ok) {
    //           const data = await response.json();
    //           setUser({ id: data.id, name: data.name, email: data.email });
    //         }
    //       } catch (error) {
    //         console.error("Lỗi khi lấy thông tin người dùng:", error);
    //       }
    //     };
    //     fetchUser();
    //   }
    // }, []);

    const login = (userData: User) => setUser(userData);
    const logout = () => setUser(null);
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
