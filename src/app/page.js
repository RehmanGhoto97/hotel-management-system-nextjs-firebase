import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";

export default function HomePage() {
return (
    <main style={{padding:"3rem .5rem", background:"white"}}>
    <Hero/>
    </main>
  )
}
