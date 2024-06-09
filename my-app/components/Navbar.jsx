import Link from "next/link";

export default function Navbar (){
     return (
        <nav>
            <Link href={'/'}>GTCoding.</Link>
            <Link href={'/addTopic'}>Add Topic</Link>
        </nav>
     )
}