"use client";
import "./Navbars.css";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FcCollapse } from "react-icons/fc";
import { motion } from "framer-motion";

import { FaBars } from "react-icons/fa";
const navMenus = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Movies",
    path: "/movies",
  },
  {
    title: "Board",
    path: "/board",
  },
];

const Navbars = () => {
  const [open, setOpen] = useState(false);

  const user = false;
  const idAdmin = false;
  // 일반사용자페이지
  // 관리자 페이지
  // 클릭해서 작업하도록 수정해야 함

  const topVariants = {
    closed: { rotate: 0 },
    opened: {
      rotate: 45,
      backgroundColor: "white",
    },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: {
      rotate: -45,
      backgroundColor: "white",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="flex justify-center p-10">
      <div className="hidden sm:block">
        {navMenus.map((menu) => (
          <Link href={menu.path} key={menu.title} className="p-10">
            {menu.title}
          </Link>
        ))}

        {user ? (
          <>
            {idAdmin && <NavLink item={{ title: "Admin", path: "admin" }} />}

            <button>logout</button>
          </>
        ) : (
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <div className="sm:hidden">
        {/* <FaBars  style={{ color : open ? "white" : "black"}}
                    className='absolute z-50'
            /> */}
        <button
          className="w-10 h-8 absolute right-4 top-4 flex flex-col gap-2.5 z-50"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            className="w-10 h-1 bg-black rounded  origin-left"
            variants={topVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded"
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded  origin-left"
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0  left-0 w-full min-h-screen h-full bg-black flex flex-col justify-center items-center text-4xl gap-8
                z-40
                "
          >
            {navMenus.map((menu) => (
              <motion.div
                variants={listItemVariants}
                key={menu.title}
                style={{ color: "white" }}
              >
                <Link href={menu.path}> {menu.title} </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbars;
