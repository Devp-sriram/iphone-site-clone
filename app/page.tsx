// Use dynamic imports for heavy components
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./components/Hero'))
const Highlights = dynamic(() => import('./components/Highlights'))


export default function Home() {

    return (
      <>
        <Hero/>
        <Highlights/>
      </>
    );
}
