import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-500 text-white shadow-2xl">
        <h1 className="font-bold text-3xl cursor-pointer">Logo</h1>
        <ul className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="product">product</Link>
          <Link href='about'>About</Link>
            <Link href='shop'>Shop</Link>
            <Link href='todo'>To do</Link>
            <Link href='image'>Image</Link>
            <Link href='data'>Static Rendering</Link>
            <Link href='ssr'>SSR</Link>
            <Link href='practical'>practical</Link>

        </ul>
      </div>
    </div>
  );
};

