"use client";
import { Input } from "@/components/ui/input";
import {
  IconChartBar,
  IconKey,
  IconLink,
  IconLogout,
  IconNews,
  IconPlus,
  IconPrompt,
  IconPuzzle,
  IconPuzzle2,
  IconSettings,
  IconTimeline,
  IconUser,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function UserPage() {
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
            className="bg-black text-white w-[150px] p-2 rounded-lg flex gap-2"
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
      <div id="content" className="bg-white w-full p-5">
        <Input placeholder="Cari User" />
        <div id="list-user" className="mt-5 flex flex-col gap-2">
          <div
            id="user-card"
            className="border p-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <div>
                <p className="text-lg font-bold">Rahmat Saudi Al Fathir As</p>
                <p className="text-sm">rahmatsaudi@universitasmulia.ac.id</p>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="bg-black text-white px-2 py-1 rounded-lg text-sm">
                  Admin
                </p>
                <p className="bg-black text-white px-2 py-1 rounded-lg text-sm">
                  Dosen
                </p>
              </div>
            </div>
            <p>Aktif</p>
          </div>
          <div
            id="user-card"
            className="border p-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <div>
                <p className="text-lg font-bold">Refinda Cheysar Wulandari</p>
                <p className="text-sm">refindacw@universitasmulia.ac.id</p>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="bg-black text-white px-2 py-1 rounded-lg text-sm">
                  Mahasiswa
                </p>
              </div>
            </div>
            <p>Aktif</p>
          </div>
          <div
            id="user-card"
            className="border p-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <div>
                <p className="text-lg font-bold">Laksamana Andhika</p>
                <p className="text-sm">laksamana@universitasmulia.ac.id</p>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="bg-black text-white px-2 py-1 rounded-lg text-sm">
                  Mahasiswa
                </p>
              </div>
            </div>
            <p>Aktif</p>
          </div>
          <div
            id="user-card"
            className="border p-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <div>
                <p className="text-lg font-bold">Qolby Zakin Sephiana</p>
                <p className="text-sm">qolby@universitasmulia.ac.id</p>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="bg-black text-white px-2 py-1 rounded-lg text-sm">
                  Mahasiswa
                </p>
              </div>
            </div>
            <p className="text-red-500">Nonaktif</p>
          </div>
          <div
            id="user-card"
            className="border p-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <div>
                <p className="text-lg font-bold">Aqilah Aulya Maulidah</p>
                <p className="text-sm">Aqilah@universitasmulia.ac.id</p>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="bg-black text-white px-2 py-1 rounded-lg text-sm">
                  Mahasiswa
                </p>
              </div>
            </div>
            <p className="text-red-500">Nonaktif</p>
          </div>
          <button className="fixed bottom-6 right-6 p-3 full bg-gray-300 full hover:bg-black hover:text-white">
            <IconPlus size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}