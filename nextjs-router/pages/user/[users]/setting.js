import { useRouter } from "next/router"

const Page = () => {

    const {query} = useRouter()

    return (
        <div>
            <h1>This is setting page for {query.users} Page</h1>
        </div>
    )
}

export default Page