import {useMemo} from "react";
import {useLocation} from "react-router-dom";

export const useSearchParams = <K extends string>(...keys: K[]) => {
    const { search } = useLocation();

    return useMemo(() => {
        const params = new URLSearchParams(search);

        return keys.reduce(
            (memo, key) => Object.assign(memo, { [key]: params.get(key) }),
            {} as Record<K, null | string> );
    }, [search, ...keys]);
};