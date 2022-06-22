import {Button, Rate} from 'antd';
import React from 'react';
import Link from "next/link";

const Layout: React.FC = () => {
    return (
        <div>
            <p>
                <Link href="/home">
                    <Button type="primary">Back to home</Button>
                </Link>
            </p>
            <p>
                <Link href="/about">
                    <Button type="primary">Back to about</Button>
                </Link>
            </p>
            <p>
                <Link href="/login">
                    <Button type="primary">Back to login</Button>
                </Link>
            </p>
        </div>
    )
};

export default Layout;
