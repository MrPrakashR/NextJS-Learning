import {useEffect} from "react"
import { useRouter } from "next/router"

const useUser = () => ({ user: {name:"prakash"} , isLoading:false })

const IndexPage = () => {

    const router = useRouter()
    const user = useUser()

    useEffect(() => {
        if (user.user == null) {
            router.replace("/")
        }
    },[router,user.user])

    return (
        <div>
            <h1>This is index page for {router.query.users}</h1>
            <button onClick={e => router.push(`/user/${router.query.users}/setting`)}>Open setting Page</button>
            <button onClick={e => 
                router.push({
                    pathname:"/user/[users]/setting",
                    query: { users:router.query.users }
                })}>Open setting Page 2</button>
            <button onClick={e => router.push("/")}>Go To Home</button>
            <button onClick={e => router.replace("/")}>Go To Home</button> // no history created
            <button onClick={e => router.reload()}>Reload</button>
        </div>
    )
}

export default IndexPage