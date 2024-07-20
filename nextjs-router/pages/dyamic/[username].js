import { useRouter } from "next/router"

const DynamicPage = () => {

    const {query} = useRouter()

    return (
        <div>
            <h1>This is {query.username} Page</h1>
        </div>
    )
}

export default DynamicPage