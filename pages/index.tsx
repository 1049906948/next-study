import type { NextPage } from 'next'
import Link from 'next/link'
import { Button,Rate } from 'antd'

const Home: NextPage = () => {
  return (
    <div>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
        <Button type="primary">这是一个按钮</Button>
        <Rate />
    </div>
  )
}

export default Home
