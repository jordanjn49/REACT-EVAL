import Head from "next/head";
import { Layout } from "antd";
import Login from "../components/session/Signup"

export default function LoginPage() {
    return (
        <Layout>
            <Head>
                <title>Inscription</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login/>
        </Layout>
     );
}