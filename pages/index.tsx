import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
    </div>
  )
}

export default Home
