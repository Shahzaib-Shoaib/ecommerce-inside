import { useQuery } from "@tanstack/react-query"
import client from "./RQclient"


const useRQGlobalState = (key:string, initialData:boolean) => [
    useQuery([key],() => initialData,
    {enabled:false,initialData}
    ).data,
    (value:boolean)=> client.setQueriesData([key],value),
]


export default useRQGlobalState