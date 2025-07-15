'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e, ReactFormEvent) => {
    e.preventDefault();

    if (email === 'refindacw@universitasmulia.ac.id' && password === 'mahasiswa') {
      router.push('/users'); 
    } else {
      alert('Email atau password salah.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 space-y-4">
        <h1 className="text-2xl font-bold text-center">Connect With Us</h1>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
          Sign In
        </Button>
      </form>
    </div>
  );
}