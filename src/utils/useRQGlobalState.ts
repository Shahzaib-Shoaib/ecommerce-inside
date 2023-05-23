import { useQuery } from "@tanstack/react-query"
import client from "./client"

const UseRQGlobalState = (key:string, initialData:boolean) => [
    useQuery([key],() => initialData,
    {enabled:false,initialData}
    ).data,
    (value:string)=> client.setQueriesData([key],value),
]


export default UseRQGlobalState