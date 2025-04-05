import Image from "next/image"
import { appleImg, bagImg, searchImg } from "../../utils/index.js"
import { Key , ReactNode } from "react"

export default function Navbar() {
  return (
    <header>
      <nav>
        <Image 
          src={appleImg}
          alt='logo'
          width={14}
          height={18}
        />
        <div>
          {['phones','macbooks','mac studio'].map((item : string, idx : Key):ReactNode => {
          return(
              <div key={idx}>{item}</div>
          )})}
        </div>
        <div>
          <Image 
            src={searchImg} 
            alt="search" 
            width={18}
            height={18}
          />
          <Image 
            src={bagImg} 
            alt="bag" 
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  )
}

