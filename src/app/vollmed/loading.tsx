import {CircularProgress} from "@nextui-org/react";


export default function Loading() {
    return (
        <div className="flex gap-4">
            <CircularProgress color="primary" size="lg" aria-label="Loading..."/>
            <p>Loading...</p>
        </div>
    )
}