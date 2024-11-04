import "@/app/global.css";
import { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`antialiased  bg-[#00003c] text-white`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden font-poppins">
          <div className="w-full flex-none md:w-64">
            <NavBar />
            {/* <SideNav /> */}
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
