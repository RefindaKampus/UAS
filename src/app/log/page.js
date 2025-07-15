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

export default function LogPage() {
  const router = useRouter();

  const dataAktivitas = [
    { id: 1, user: "Admin", aktivitas: "Login", waktu: "13 Jul 2025, 09:00" },
    { id: 2, user: "Dosen", aktivitas: "Menambah data mahasiswa", waktu: "13 Jul 2025, 09:30" },
    { id: 3, user: "Mahasiswa", aktivitas: "Login", waktu: "13 Jul 2025, 11:00" },
    { id: 4, user: "Mahasiswa", aktivitas: "Login", waktu: "13 Jul 2025, 9:30" },
    { id: 5, user: "Mahasiswa", aktivitas: "Logout", waktu: "13 Jul 2025, 10:00" },
    { id: 6, user: "Mahasiswa", aktivitas: "Logout", waktu: "13 Jul 2025, 23:00" },
  ];

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
            className="bg-black text-white w-[150px] p-2 rounded-lg flex gap-2"
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
            className="text-black bg-white hover:bg-black hover:text-white w-[150px] p-2 rounded-lg flex gap-2"
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
      <div id="content" className="bg-white w-full p-5">
          <Input placeholder="Cari Aktivitas" />
            <table className="mt-5 w-full border text-sm">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-2 text-left">No</th>
                  <th className="p-2 text-left">User</th>
                  <th className="p-2 text-left">Aktivitas</th>
                  <th className="p-2 text-left">Waktu</th>
                </tr>
              </thead>
              <tbody>
              {dataAktivitas.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <th className="p-2 text-left">{index + 1}</th>
                  <th className="p-2 text-left">{item.user}</th>
                  <th className="p-2 text-left">{item.aktivitas}</th>
                  <th className="p-2 text-left">{item.waktu}</th>
                </tr>
              ))}
              </tbody>
            </table>
      </div>
        <button className="fixed bottom-6 right-6 p-3 full bg-gray-300 full hover:bg-black hover:text-white">
          <IconPlus size={25} />
        </button>
    </div>
  );
}