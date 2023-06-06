import { useQuery } from "@tanstack/react-query"
import client from "./client"

const useRQGlobalState = (key :string, initialData:boolean) => [
    useQuery([key],() => initialData,
    {enabled:false,initialData}
    ).data,
    (value:boolean = false)=> client.setQueriesData([key],value),
]


export default useRQGlobalState