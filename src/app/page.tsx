import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:overflow-x-hidden">
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}