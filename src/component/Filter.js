import { useSearchParams } from "react-router-dom";
function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams,'searcho');
    // console.log(searchParams.get('city'));
    return (
        <h1>Filter Page</h1>
    )
}

export default Filter;