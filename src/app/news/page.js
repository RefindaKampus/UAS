"use client";
import { Input } from "@/components/ui/input";
import {
  IconChartBar,
  IconEdit,
  IconKey,
  IconLogout,
  IconNews,
  IconPlus,
  IconSettings,
  IconTimeline,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function NewPage() {
  const router = useRouter();

  const dataBerita = [
    {
      id: 1,
      judul: "Pemeliharaan Server",
      tanggal: "12 Juli 2025",
      penulis: "Admin",
      ringkasan: "Server akan offline sementara pada pukul 01.00 WIB.",
    },
    {
      id: 2,
      judul: "Update Fitur Login",
      tanggal: "10 Juli 2025",
      penulis: "Dosen",
      ringkasan: "Pengguna sekarang dapat login dengan akun Google.",
    },
    {
      id: 3,
      judul: "Perubahan Jadwal",
      tanggal: "09 Juli 2025",
      penulis: "Mahasiswa",
      ringkasan: "Kelas malam diganti menjadi kelas pagi mulai minggu depan.",
    },
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
            className="text-black bg-white hover:bg-black hover:text-white w-[150px] p-2 rounded-lg flex gap-2"
          >
            <IconTimeline />
            Aktivitas
          </button>
          <button
            onClick={() => router.push("/news")}
            className="text-white w-[150px] bg-black p-2 rounded-lg flex gap-2"
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
      <main className="bg-white w-full p-5">
        <div id="content" className="bg-white w-full p-5">
          <Input placeholder="Cari Berita" />
        </div>
        <div className="flex-1/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {dataBerita.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold">{item.judul}</h2>
                <div className="flex gap-2">
                  <IconEdit size={18} className="cursor-pointer hover:text-blue-600" />
                  <IconTrash size={18} className="corsor-pointer text-red-500 hover:text-red-600" />
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-1">{item.ringkasan}</p>
              <div className="text-xs text-gray-400 mt-2">
                Berita untuk <span className="font-medium">{item.penulis}</span> pada {item.tanggal}
              </div>
            </div>
          ))}
        </div>        
      </main>
        <button className="fixed bottom-6 right-6 p-3 full bg-gray-300 full hover:bg-black hover:text-white">
          <IconPlus size={25} />
        </button>
    </div>
  );
}