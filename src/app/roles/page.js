"use client";
import { Input } from "@/components/ui/input";
import {
  IconChartBar,
  IconEdit,
  IconEraser,
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

export default function RolePage() {
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
            className="bg-black text-white w-[150px] p-2 rounded-lg flex gap-2"
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
        <Input placeholder="Cari Role" />

        <table className="mt-5 w-full border text-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-2 text-left">No</th>
              <th className="p-2 text-left">Hak Akses</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {[{ id: 1, name: "Admin" }, { id: 2, name: "Dosen" }, { id: 3, name: "Mahasiswa" }].map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2 flex gap-2"></td>
                  <IconEdit size={18} className="cursor-pointer" />
                  <IconTrash size={18} className="cursor-pointer text-red-500" />
              </tr>
            ))}
          </tbody>
        </table>
          <button className="fixed bottom-6 right-6 p-3 full bg-gray-300 full hover:bg-black hover:text-white">
            <IconPlus size={25} />
          </button>
        </div>
      </div>
  );
}