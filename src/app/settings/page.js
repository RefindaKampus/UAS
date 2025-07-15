"use client";
import { Input } from "@/components/ui/input";
import {
  IconChartBar,
  IconKey,
  IconLogout,
  IconNews,
  IconPlus,
  IconSettings,
  IconTimeline,
  IconUser,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function SettingPage() {
  const router = useRouter();

  return (
    <div id="container-user" className="flex min-h-screen">
      <div
        id="navigation"
        className="bg-white w-[250px] flex flex-col items-center gap-8 p-5"
      >
        <h1 className="text-3xl text-black font-bold">Connect</h1>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/users")}
            className="text-black bg-white hover:bg-black hover:text-white w-[150px] p-2 rounded-lg flex gap-2"
          >
            <IconUser />
            Pengguna
          </button>
          <button
            onClick={() => router.push("/roles")}
            className="text-black bg-white hover:bg-black hover:text-white w-[150px] p-2 rounded-lg flex gap-2"
          >
            <IconKey />
            Hak Akses
          </button>
          <button
            onClick={() => router.push("/log")}
            className="text-black bg-white hover:bg-black hover:text-white w-[150px] p-2 rounded-lg flex gap-2"
          >
            <IconTimeline />
            Aktivitas
          </button>
          <button
            onClick={() => router.push("/news")}
            className="text-black bg-white hover:bg-black hover:text-white w-[150px] p-2 rounded-lg flex gap-2"
          >
            <IconNews/>
            Berita
          </button>
          <button
            onClick={() => router.push("/settings")}
            className="bg-black text-white w-[150px] p-2 rounded-lg flex gap-2"
          >
            <IconSettings />
            Pengaturan
          </button>
          <button
            onClick={() => router.push("/")}
            className="text-black bg-white hover:bg-black hover:text-white w-[150px] p-2 rounded-lg flex gap-2"
          >
            <IconLogout />
            Keluar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white w-full p-5">
          <Input placeholder="Cari Pengaturan" />
            <h1 className="mt-5 text-2xl font-semibold mb-6">Pengaturan</h1>
              <div className="space-y-6">
               {/* Akun */}
              <section>
                <h2 className="text-lg font-medium mb-2">Profile Pengguna</h2>
                <div className="flex gap-5">
                  <Input placeholder="Nama Lengkap" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Kata Sandi Baru" type="password" />
                  <button className="full bg-black text-white hover:bg-gray-500 hover:text-white p-1">Simpan Perubahan</button>
                </div>
              </section>

              {/* Preferensi */}
              <section>
                <h2 className="text-lg font-medium mb-2">Preferensi Aplikasi</h2>
                <div className="space-y-3">
                  <select className="border rounded px-3 py-2 w-full">
                    <option>Bahasa Indonesia</option>
                    <option>English</option>
                  </select>
                  <select className="border rounded px-3 py-2 w-full">
                    <option>Mode Terang</option>
                    <option>Mode Gelap</option>
                  </select>
                  <button variant="outline">Reset ke Default</button>
                </div>
              </section>
              </div>
      </main>
          <button className="fixed bottom-6 right-6 p-3 full bg-gray-300 full hover:bg-black hover:text-white">
            <IconPlus size={25} />
          </button>
    </div>      
  );
}