import React, { useState } from 'react';
import AdminLogin from './components/AdminLoginForm';
import Admin from './Admin';

export default function AloginPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleLogin = () => {
      
        setIsAdmin(true);
    };

    return (
        <div>
            {isAdmin ? (
                <Admin/>
            ) : (
                <AdminLogin onLogin={handleLogin} />
            )}
        </div>
    );
}
