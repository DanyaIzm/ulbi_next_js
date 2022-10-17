import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, title, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"привет, как дела, " + keywords}></meta>
                <title>{title}</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text="Главная" />
                <A href={"/users"} text="Пользователи" />
            </div>
            <div>
                {children}
            </div>

            <style jsx>
                {`
                    .navbar {
                        background-color: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer