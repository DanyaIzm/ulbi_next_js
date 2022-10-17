import MainContainer from "../../components/MainContainer";
import styles from "../../styles/User.module.scss";

export default function User({ user }) {

    return (
        <MainContainer title={user.name} keywords={`${user.name}, ${user.id}`}>
            <div className={styles.user}>
                <h1>Пользователь С id {user.id}</h1>
                <div>
                    Имя пользователя: {user.name}
                </div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: { user },
    }
}
