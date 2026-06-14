import { useState, useEffect } from "react";

interface FetchStat<T> {
    data: T | null
    loading: boolean;
    error: string | null
}


export function useFetch<T>(url: string): FetchStat<T> {
    const [state, setState] = useState<FetchStat<T>>({
        data: null,
        loading: true,
        error: null
    })

    return state
}