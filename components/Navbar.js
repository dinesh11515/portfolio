import React from "react";
import Link from "next/link";
export default function Navbar(){
    return(
        <nav >
            <div class="sm:flex justify-between px-10 py-6">
                <Link href="/"class=""><a>Dinesh Aitham</a></Link>
                <ul class="sm:flex space-x-5">
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Projects</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Contact</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>About</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}