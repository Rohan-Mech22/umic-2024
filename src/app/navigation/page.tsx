"use client";
import Link from 'next/link';
import Image from 'next/image';
import umic_logo from 'src/app/public/aerove logo white-01 (1).png'
export default function Navbar() {
  // const router = useRouter();
  // const handleScrollToAchievements = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   router.push('/').then(() => {
  //     router.push('#achievements');
  //   })
  //    // Assuming you're linking to the achievements section on the homepage
  // };

  return (
  <nav className="bg-[#000000] p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo on the left */}
      <h1 className="text-white font-bold text-xl">
        <Link href="/">
        <Image 
        src={umic_logo}
        width={150}
        height={150}  
        alt='umic image'/>
        </Link>
      </h1>

      {/* Navigation Links on the right */}
      <div className="text-white flex flex-row">
        <Link href="/">
          <p className="hover:text-gray-400 mx-4">Home</p>
        </Link>
        <Link href="/#achievements">
          <p className="hover:text-gray-400 mx-4">Achievements</p>
        </Link>
        <Link href="/team">
          <p className="hover:text-gray-400 mx-4">Team</p>
        </Link>
        <Link href="#contact">
          <p className="hover:text-gray-400 mx-4">Contact Us</p>
        </Link>
      </div>
    </div>
  </nav>
  );
}
